# State Management

iNNfo uses a **unified Zustand store** with Immer middleware for immutable state updates. The store is composed of multiple specialized slices, each handling a specific domain of the application state.

## Architecture

### Unified Store Pattern

```typescript
// src/store/index.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useStore = create<StoreState>()(
    immer((...a) => ({
        ...createDataSlice(...a),
        ...createUISlice(...a),
        ...createFileSystemSlice(...a),
        ...createAISlice(...a),
        ...createReviewSlice(...a),
        ...createHistorySlice(...a),
        ...createModalSlice(...a),
        ...createActiveContextSlice(...a),
        ...createItemDetailSlice(...a),
        ...createPlanExecutionSlice(...a),
        ...createToastSlice(...a),
        ...createThemeSlice(...a),
    }))
);
```

### Benefits

- **Single Source of Truth** - All application state in one place
- **Type Safety** - Full TypeScript support across all slices
- **Immutability** - Immer ensures safe state updates
- **Modularity** - Each slice is independent and focused
- **Performance** - Selective subscriptions minimize re-renders

## Store Slices

### 1. DataSlice

**Purpose:** Core model data - nodes, relationships, metamodel

**Location:** `src/store/slices/data/`

**State:**

```typescript
{
  // Metamodel
  classDefinitions: ClassDefinition[];
  associationDefinitions: AssociationDefinition[];
  
  // Model Data
  nodes: Node[];
  relationships: Relationship[];
  
  // Derived State
  nodesByType: Map<string, Node[]>;
  relationshipsByLabel: Map<string, Relationship[]>;
}
```

**Key Actions:**

- `addNode(node)` - Add a new node
- `updateNode(id, updates)` - Update node properties
- `deleteNode(id)` - Remove a node
- `addRelationship(rel)` - Create a relationship
- `updateRelationship(id, updates)` - Modify relationship
- `deleteRelationship(id)` - Remove relationship
- `setMetamodel(classes, associations)` - Update metamodel

**Selectors:**

- `getNodeById(id)` - Retrieve specific node
- `getNodesByClass(className)` - Filter by class
- `getRelationshipsForNode(nodeId)` - Get node connections
- `getClassDefinition(className)` - Get class metadata

### 2. UISlice

**Purpose:** UI state - active view, selections, expansions

**Location:** `src/store/slices/createUISlice.ts`

**State:**

```typescript
{
  activeView: 'model' | 'matrix' | 'advanced' | 'documentation' | 'history' | 'settings';
  selectedNodeId: string | null;
  expandedNodes: Set<string>;
  sidebarCollapsed: boolean;
  detailPanelOpen: boolean;
}
```

**Key Actions:**

- `setActiveView(view)` - Switch between views
- `selectNode(id)` - Set selected node
- `toggleNodeExpansion(id)` - Expand/collapse tree nodes
- `toggleSidebar()` - Show/hide sidebar
- `openDetailPanel()` / `closeDetailPanel()` - Control detail panel

### 3. FileSystemSlice

**Purpose:** File system access and hierarchical model loading

**Location:** `src/store/slices/createFileSystemSlice.ts`

**State:**

```typescript
{
  rootHandle: FileSystemDirectoryHandle | null;
  currentPath: string;
  folderHierarchy: FolderHierarchy[];
  isLoading: boolean;
  lastSyncTime: Date | null;
}
```

**Key Actions:**

- `selectFolder()` - Open folder picker
- `loadHierarchicalModel(handle)` - Load distributed model
- `refreshHierarchy()` - Reload file tree
- `createInNNfoFile(path, name)` - Enroll folder
- `removeInNNfoFile(path)` - Disenroll folder
- `saveModel()` - Persist changes to disk

**Integration:**

Uses `HierarchicalLoader` service to recursively load `.iNNfo.md` files.

### 4. AISlice

**Purpose:** AI assistant state and conversation management

**Location:** `src/store/slices/createAISlice.ts`

**State:**

```typescript
{
  apiKey: string | null;
  messages: Message[];
  isProcessing: boolean;
  activeAgent: Agent | null;
  availableSkills: Skill[];
  conversationHistory: Message[];
}
```

**Key Actions:**

- `setApiKey(key)` - Configure Gemini API key
- `sendMessage(content)` - Send message to AI
- `selectAgent(agent)` - Choose specialized agent
- `loadSkills()` - Scan and load AI skills
- `clearConversation()` - Reset chat history

**Features:**

- **5 Resident Agents** - Architect, Analyst, Documenter, Validator, Assistant
- **Skills System** - Extensible capabilities from `public/skills/`
- **Context Management** - Automatic summarization for large models

### 5. ReviewSlice

**Purpose:** Staging area for AI-proposed changes

**Location:** `src/store/slices/createReviewSlice.ts`

**State:**

```typescript
{
  proposedChanges: ProposedChange[];
  isReviewMode: boolean;
  currentChangeIndex: number;
}
```

**Key Actions:**

- `addProposedChange(change)` - Stage AI suggestion
- `approveChange(id)` - Accept and apply change
- `rejectChange(id)` - Decline change
- `approveAll()` - Batch approve
- `clearReview()` - Reset staging area

**Workflow:**

1. AI proposes changes → Added to review
2. User reviews each change
3. Approved changes → Applied to DataSlice
4. Rejected changes → Discarded

### 6. HistorySlice

**Purpose:** Model change tracking and undo/redo

**Location:** `src/store/slices/createHistorySlice.ts`

**State:**

```typescript
{
  history: HistoryEntry[];
  currentIndex: number;
  maxHistorySize: number;
}
```

**Key Actions:**

- `recordChange(action, data)` - Log a change
- `undo()` - Revert last change
- `redo()` - Reapply undone change
- `clearHistory()` - Reset history

### 7. ModalSlice

**Purpose:** Modal dialog state management

**Location:** `src/store/slices/createModalSlice.ts`

**State:**

```typescript
{
  activeModal: string | null;
  modalData: any;
}
```

**Key Actions:**

- `openModal(name, data)` - Show modal
- `closeModal()` - Hide modal
- `updateModalData(data)` - Update modal content

### 8. ActiveContextSlice

**Purpose:** Current context for AI and navigation

**Location:** `src/store/slices/createActiveContextSlice.ts`

**State:**

```typescript
{
  activeNodeId: string | null;
  activeClassId: string | null;
  breadcrumbs: Breadcrumb[];
  contextSummary: string;
}
```

**Key Actions:**

- `setActiveContext(nodeId, classId)` - Update context
- `updateBreadcrumbs(path)` - Navigation trail
- `generateContextSummary()` - For AI

### 9. ItemDetailSlice

**Purpose:** Detail panel state

**Location:** `src/store/slices/createItemDetailSlice.ts`

**State:**

```typescript
{
  isOpen: boolean;
  selectedItemId: string | null;
  activeTab: 'properties' | 'content' | 'relationships' | 'files';
}
```

**Key Actions:**

- `openDetail(itemId)` - Show detail panel
- `closeDetail()` - Hide detail panel
- `setActiveTab(tab)` - Switch tabs

### 10. PlanExecutionSlice

**Purpose:** Batch task execution for AI plans

**Location:** `src/store/slices/createPlanExecutionSlice.ts`

**State:**

```typescript
{
  activePlan: Plan | null;
  tasks: Task[];
  currentTaskIndex: number;
  isExecuting: boolean;
  results: TaskResult[];
}
```

**Key Actions:**

- `startPlan(plan)` - Begin execution
- `executeNextTask()` - Process next task
- `pausePlan()` - Pause execution
- `resumePlan()` - Continue execution
- `cancelPlan()` - Abort plan

### 11. ToastSlice

**Purpose:** Toast notification management

**Location:** `src/store/slices/createToastSlice.ts`

**State:**

```typescript
{
  toasts: Toast[];
}
```

**Key Actions:**

- `showToast(message, type)` - Display notification
- `dismissToast(id)` - Remove notification

### 12. ThemeSlice

**Purpose:** Theme and appearance preferences

**Location:** `src/store/slices/createThemeSlice.ts`

**State:**

```typescript
{
  theme: 'light' | 'dark' | 'system';
  accentColor: string;
}
```

**Key Actions:**

- `setTheme(theme)` - Change theme
- `setAccentColor(color)` - Customize accent

## Usage Patterns

### Basic Usage

```typescript
import { useStore } from '@/store';

function MyComponent() {
  // Subscribe to specific state
  const nodes = useStore((state) => state.nodes);
  const addNode = useStore((state) => state.addNode);
  
  // Use in component
  return (
    <button onClick={() => addNode({ id: '1', type: 'Task' })}>
      Add Node
    </button>
  );
}
```

### Selective Subscriptions

```typescript
// Only re-render when selectedNodeId changes
const selectedNodeId = useStore((state) => state.selectedNodeId);

// Derived state with selector
const selectedNode = useStore((state) => 
  state.nodes.find(n => n.id === state.selectedNodeId)
);
```

### Accessing Multiple Slices

```typescript
const { nodes, addNode, selectedNodeId, setActiveView } = useStore((state) => ({
  nodes: state.nodes,
  addNode: state.addNode,
  selectedNodeId: state.selectedNodeId,
  setActiveView: state.setActiveView,
}));
```

### Outside React Components

```typescript
import { useStore } from '@/store';

// Get current state
const currentState = useStore.getState();

// Subscribe to changes
const unsubscribe = useStore.subscribe((state) => {
  console.log('State changed:', state);
});

// Cleanup
unsubscribe();
```

## State Persistence

### LocalStorage Persistence

Certain slices persist to localStorage:

- **AISlice** - API key
- **ThemeSlice** - Theme preference
- **FileSystemSlice** - Last opened folder handle

```typescript
// Automatic persistence
useEffect(() => {
  const apiKey = useStore.getState().apiKey;
  if (apiKey) {
    localStorage.setItem('gemini_api_key', apiKey);
  }
}, []);
```

### IndexedDB Persistence

File system handles are persisted to IndexedDB:

```typescript
// Store folder handle
await idbKeyval.set('lastFolderHandle', rootHandle);

// Retrieve on app start
const handle = await idbKeyval.get('lastFolderHandle');
```

## Performance Optimization

### Memoization

Use selectors to prevent unnecessary re-renders:

```typescript
// Bad - creates new array every render
const taskNodes = useStore((state) => 
  state.nodes.filter(n => n.type === 'Task')
);

// Good - use memoized selector
const taskNodes = useStore(selectTaskNodes);
```

### Batch Updates

Use Immer's batch updates for multiple changes:

```typescript
set((state) => {
  state.nodes.push(newNode1);
  state.nodes.push(newNode2);
  state.relationships.push(newRel);
  // All updates applied atomically
});
```

### Shallow Equality

Zustand uses shallow equality by default:

```typescript
// Only re-renders when nodes array reference changes
const nodes = useStore((state) => state.nodes);

// Custom equality function
const nodes = useStore(
  (state) => state.nodes,
  (a, b) => a.length === b.length
);
```

## Testing

### Mock Store

```typescript
import { create } from 'zustand';

const mockStore = create<StoreState>()(() => ({
  nodes: [],
  addNode: vi.fn(),
  // ... other state
}));

// Use in tests
const { result } = renderHook(() => mockStore());
```

### State Snapshots

```typescript
const initialState = useStore.getState();

// Perform actions
useStore.getState().addNode(newNode);

// Assert state changed
expect(useStore.getState().nodes).toHaveLength(
  initialState.nodes.length + 1
);
```

## Migration from Legacy Stores

The unified store replaced several legacy stores:

- `modelStore.ts` → `DataSlice`
- `uiStore.ts` → `UISlice`
- `fileStore.ts` → `FileSystemSlice`
- `aiStore.ts` → `AISlice`

**Migration Pattern:**

```typescript
// Old
import { useModelStore } from '@/store/modelStore';
const nodes = useModelStore((state) => state.nodes);

// New
import { useStore } from '@/store';
const nodes = useStore((state) => state.nodes);
```

## Best Practices

1. **Use Specific Selectors** - Subscribe only to needed state
2. **Avoid Derived State in Store** - Compute in selectors
3. **Keep Actions Simple** - Complex logic in services
4. **Document State Shape** - Use TypeScript interfaces
5. **Test State Changes** - Unit test slice actions
6. **Batch Related Updates** - Use Immer transactions
7. **Persist Carefully** - Only persist necessary state

## Related Documentation

- [Architecture](./architecture.md) - Overall system design
- [Hierarchical Loader](./hierarchical-loader.md) - File system integration
- [Data Model](./data-model.md) - Type definitions
- [Components](./components.md) - How components use the store
