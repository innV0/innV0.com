# State Management

kNNowledge uses **Zustand** for state management, combined with **Immer** for immutable updates. The store is architected using **Slices** to maintain modularity as the application grows.

## Store Structure (`src/store/index.ts`)

The store is a single source of truth composed of several specialized slices:

- **DataSlice**: Core model data (`nodes`, `relationships`, `metamodel`).
- **UISlice**: Navigation and interface state (`activeView`, `expandedNodeIds`, `selectedNodeId`).
- **FileSystemSlice**: Handles local folder handles and persistence using the File System Access API.
- **AISlice**: Manages active skills, chat history, and proposed changes.
- **ReviewSlice**: Handles the staging and validation of AI-proposed modifications.

## Key Actions

### Data Operations
- `updateModel(content)`: Full model replacement (e.g., on load).
- `updateNode(id, content)`: Updates specific node properties or documentation.
- `updateRelationship(source, target, label, value)`: Modifies entity connections.

### File System Operations
- `initializeFileSystem()`: Restores the last used folder handle from IndexedDB.
- `loadFolder(handle)`: Processes a directory and loads the primary `.nn.md` file.
- `saveModel()`: Serializes the current state and writes it back to the local file.

### UI Operations
- `setActiveView(view)`: Switches between Navigator, Matrix, Metamodel, etc.
- `setSidebarLocked(locked)`: Persists UI layout preferences.

## Immutable Updates with Immer

We use the `immer` middleware to write mutation-style code that produces immutable state updates.

**Slice Update Example:**
```typescript
set((state) => {
  const node = state.nodes.find(n => n.id === id);
  if (node) {
    node.name = newName;
  }
}, false, 'updateNodeName')
```

## Selectors and Performance

To prevent unnecessary re-renders, components should use specific selectors:

```typescript
// Optimized: Re-renders only when activeView changes
const activeView = useStore(state => state.activeView);

// Sub-optimal: Re-renders on ANY store change
const { activeView } = useStore();
```
