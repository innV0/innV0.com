# User Actions Reference

This document provides a comprehensive list of all actions users can perform in kNNowledge, organized by functional area.

---

## 1. Metamodel Management

### 1.1 Create Metamodel
Define the structure and rules for your modeling language.

**Actions:**
- **Create Class** - Define a new entity type in the metamodel
  - Add class name
  - Set Lucide icon (`%% @lucideIcon IconName`)
  - Set emoji fallback (`%% @emoji 🔧`)
  - Set color theme (`%% @color blue`)
  
- **Delete Class** - Remove a class from the metamodel
  - Remove class definition from `## Metamodel` section

- **Modify Class Properties** - Update visual attributes
  - Change Lucide icon
  - Change emoji
  - Change color

### 1.2 Create Relationships in Metamodel
Define how classes can connect to each other.

**Actions:**
- **Create Relationship** - Define a new relationship type
  - Specify source class
  - Specify target class
  - Define relationship label (e.g., `assigned_to`, `depends_on`)
  - Set cardinality (e.g., `"1"`, `"0..*"`, `"1..*"`)
  - Configure widget type
  - Configure widget settings

- **Delete Relationship** - Remove a relationship type from metamodel
  - Remove relationship definition

- **Modify Relationship** - Update relationship properties
  - Change widget type
  - Update widget configuration
  - Modify cardinality

### 1.3 Configure Widgets
Set up how relationships are edited in the Matrix View.

**Widget Types:**
- **Binary Widget** - Yes/No toggle
  - Syntax: `%% {widget:binary}`
  
- **Scale Widget** - Numeric rating
  - Syntax: `%% {widget:scale, config:{min:1, max:5}}`
  - Set minimum value
  - Set maximum value
  
- **Set Widget** - Select from predefined options
  - Syntax: `%% {widget:set, config:{options:[Option1, Option2, Option3]}}`
  - Define options list
  - Set allowEmpty property
  
- **Cycle Widget** - Rotate through status values
  - Syntax: `%% {widget:cycle, config:{values:[Todo, Doing, Done]}}`
  - Define values sequence
  
- **Number Widget** - Numeric input
  - Syntax: `%% {widget:number, config:{min:0, max:100}}`
  - Set minimum value
  - Set maximum value
  
- **Text Widget** - Free text input
  - Syntax: `%% {widget:text}`
  
- **Mermaid Widget** - Diagram relationships
  - Syntax: `%% {widget:mermaid}`

---

## 2. Model Management

### 2.1 Create Model Structure
Build the hierarchical instance model.

**Actions:**
- **Create Root Node** - Add top-level category
  - Syntax: `- [[ClassName]]`
  - Typically matches a metamodel class name

- **Create Instance Node** - Add specific instance
  - Syntax: `- [[Instance Name]]`
  - Add under appropriate class root
  - Node automatically inherits type from parent

- **Create Child Node** - Add nested instance
  - Indent with tab or 4 spaces
  - Syntax: `    - [[Child Name]]`
  - Creates parent-child hierarchy

- **Delete Node** - Remove instance from model
  - Delete line from `## Model` section
  - Click delete button in Item Detail Panel

- **Rename Node** - Change node name
  - Edit text inside `[[brackets]]`
  - Click node name in Item Detail Panel to edit

- **Move Node** - Change node position in hierarchy
  - Cut and paste lines in file
  - Change indentation level

### 2.2 Organize Model
Structure instances for clarity.

**Actions:**
- **Create Grouping Node** - Organize related instances
  - Example: `- [[Q1 Goals]]` as parent for multiple tasks

- **Create Multi-level Hierarchy** - Nest instances deeply
  - Use multiple indentation levels
  - Recommended depth: 3-5 levels

- **Duplicate Node Reference** - Use same node in multiple locations
  - Use same `[[Node Name]]` in different places
  - Creates transclusion (same entity, multiple appearances)

---

## 3. Relationship Management

### 3.1 Create Relationships Between Instances
Connect model instances using defined relationship types.

**Actions:**
- **Create Relationship** - Link two instances
  - In Matrix View: Click cell at intersection
  - Set relationship value using configured widget
  - Syntax in file: `[[Source]] -- "label:value" --> [[Target]]`

- **Delete Relationship** - Remove connection
  - In Matrix View: Click X on relationship
  - Remove line from `## Relationships` section

- **Modify Relationship Value** - Update connection value
  - In Matrix View: Click cell to open widget editor
  - Change value using widget interface

### 3.2 Bulk Relationship Operations
Manage multiple relationships efficiently.

**Actions:**
- **Set Multiple Relationships** - Assign many connections quickly
  - Use Matrix View for visual bulk editing
  - Set values across rows/columns

- **View All Relationships** - See all connections
  - Navigate to Matrix View
  - Select relationship type from Smart Picklist

---

## 4. Documentation Management

### 4.1 Node Documentation
Add detailed Markdown documentation to instances.

**Actions:**
- **Create Documentation** - Write docs for a node
  - Click node in any view
  - Open Item Detail Panel
  - Switch to Documentation tab
  - Write Markdown content
  - Click Save

- **Edit Documentation** - Update existing docs
  - Open node's Documentation tab
  - Modify Markdown content
  - Save changes

- **Delete Documentation** - Remove docs
  - Clear content in Documentation tab
  - Save

- **Preview Documentation** - View rendered Markdown
  - Documentation tab shows live preview
  - Supports full Markdown syntax

---

## 5. File Operations

### 5.1 Import/Export
Manage `.nn.md` files.

**Actions:**
- **Load Model** - Import existing `.nn.md` file
  - Click "Load" button
  - Select `.nn.md` file from file system
  - Model loads with preserved filename

- **Export Model** - Save model to file
  - Click "Export" button
  - Edit filename in dialog
  - Choose to append timestamp (optional)
  - Download `.nn.md` file

- **Create New Model** - Start fresh
  - Clear current model
  - Define new metamodel
  - Build new model structure

### 5.2 Backup and Version Control
Preserve model state.

**Actions:**
- **Create Backup** - Save copy before changes
  - Export model with timestamp
  - Recommended before AI modifications
  - Recommended before metamodel changes

- **Version Control** - Track changes over time
  - Use Git with `.nn.md` files (plain text)
  - Commit after significant changes
  - Use semantic versioning in filenames

---

## 6. View Navigation

### 6.1 Switch Between Views
Access different perspectives on the model.

**Actions:**
- **Open Metamodel View** - Visualize metamodel structure
  - Click "Metamodel" in navigation bar
  - See Mermaid class diagram
  - View classes and relationships

- **Open Navigator View** - Browse instance hierarchy
  - Click "Navigator" (Compass icon) in navigation bar
  - See tree structure of all nodes
  - Expand/collapse branches

- **Open Matrix View** - Manage relationships
  - Click "Matrix" in navigation bar
  - Select relationship type from Smart Picklist
  - Edit relationship values in grid



- **Open AI Assistant** - Access AI chatbot
  - Click "AI" button (bottom right)
  - Chat interface for AI assistance



### 6.2 View Interactions
Interact with content in each view.

**Actions:**
- **Expand/Collapse Node** - Show/hide children
  - Click expand icon in Navigator View
  - Reveals nested instances

- **Click Node** - Open detail panel
  - Click any node in Navigator View
  - Opens Item Detail Panel on right side

- **Zoom Diagram** - Adjust Mermaid diagram size
  - Scroll in Metamodel View
  - Pan by clicking and dragging

- **Select Matrix Relationship** - Choose relationship to view
  - Use Smart Picklist dropdown
  - Shows format: `SourceClass → TargetClass (label) - Widget`

- **Manual Matrix Selection** - Custom matrix configuration
  - Expand "Advanced: Manual Selection"
  - Choose row class, column class, and label manually

---

## 7. Item Detail Panel

### 7.1 Panel Navigation
Access detailed node information.

**Actions:**
- **Open Item Detail Panel** - View node details
  - Click any node in Navigator View
  - Panel slides in from right

- **Close Item Detail Panel** - Hide panel
  - Click X button
  - Click outside panel (optional)

- **Switch Tabs** - View different information
  - Click "Details" tab - See node properties
  - Click "Documentation" tab - Edit Markdown docs
  - Click "Relationships" tab - View relationship graph

### 7.2 Details Tab
View and edit node properties.

**Actions:**
- **View Node Name** - See current name
  - Displayed prominently at top

- **Rename Node** - Change node name
  - Click name to edit inline
  - Changes reflected immediately

- **View Node Type** - See inferred class
  - Shows type badge with icon

- **View Parent Information** - See hierarchy context
  - Shows parent node reference

- **Delete Node** - Remove from model
  - Click delete button
  - Confirms before deletion

### 7.3 Documentation Tab
Manage node documentation.

**Actions:**
- **Write Documentation** - Add Markdown content
  - Type in editor area
  - Use Markdown syntax
  - See live preview

- **Save Documentation** - Persist changes
  - Click "Save" button
  - Updates `## Documentation` section

- **Cancel Editing** - Discard changes
  - Click "Cancel" button
  - Reverts to previous state

### 7.4 Relationships Tab
Visualize node connections.

**Actions:**
- **View Relationship Graph** - See Mermaid diagram
  - Shows all relationships for selected node
  - Displays connected nodes
  - Visual representation of connections

---

## 8. AI Assistant Operations

### 8.1 Setup AI
Configure AI integration.

**Actions:**
- **Enter API Key** - Authenticate with Google Gemini
  - Click AI button
  - Paste API key from Google AI Studio
  - Key stored locally in browser

- **Verify Connection** - Test AI access
  - Send test prompt
  - Confirm AI responds

### 8.2 AI-Assisted Modeling
Use AI to build and modify model.

**Actions:**
- **Generate Model Structure** - Create instance hierarchy
  - Prompt: "Create a breakdown of tasks for [project]"
  - AI generates nested nodes

- **Add Nodes via AI** - Create specific instances
  - Prompt: "Add a new Task called [name]"
  - AI creates node with correct type

- **Create Relationships via AI** - Connect instances
  - Prompt: "Connect [node1] to [node2] with [relationship]"
  - AI creates relationship with appropriate value

- **Generate Documentation via AI** - Write node docs
  - Prompt: "Write documentation for [[NodeName]]"
  - AI populates Documentation tab with Markdown

- **Modify Metamodel via AI** - Update structure (with warnings)
  - Prompt: "Add a new class called [ClassName]"
  - AI shows risk warning
  - User approves metamodel change

- **Remove Metamodel Elements via AI** - Delete classes/relationships
  - Prompt: "Remove the [ClassName] class"
  - AI shows risk warning
  - User approves deletion

### 8.3 AI Best Practices
Optimize AI usage.

**Actions:**
- **Use Specific Prompts** - Reference exact node names
  - Example: "Add child to [[Project Alpha]]"

- **Reference Metamodel Terms** - Use defined class names
  - Example: "Create a new Task" (not "Create a thing")

- **Iterative Refinement** - Build incrementally
  - Start broad, then add details
  - Example: "Create project plan" → "Add QA phase" → "Add testing tasks"

- **Export Backup Before AI Changes** - Protect against errors
  - Export model before major AI operations
  - Recommended by orange warning banner

---

## 9. Advanced Operations

### 9.1 Parser Testing
Validate `.nn.md` syntax.

**Actions:**
- **Test Parser** - Validate file syntax
  - Open Advanced View
  - Paste `.nn.md` content in textarea
  - Click "Parse" button
  - View parsed output

- **Debug Parsing Errors** - Troubleshoot issues
  - Check parser output for errors
  - Verify syntax matches documentation
  - Review raw data structures

### 9.2 Data Inspection
Examine internal state.

**Actions:**
- **View Raw Metamodel Classes** - See JSON structure
  - Open Advanced View
  - Expand "Metamodel Classes" section
  - View JSON representation

- **View Raw Metamodel Relationships** - See relationship definitions
  - Expand "Metamodel Relationships" section
  - View JSON with widget configs

- **View Raw Nodes** - See instance data
  - Expand "Nodes" section
  - View hierarchical JSON structure

- **View Raw Relationships** - See connection data
  - Expand "Relationships" section
  - View source/target/label/value tuples

---

## 10. UI Customization

### 10.1 Theme
Adjust visual appearance.

**Actions:**
- **Toggle Dark Mode** - Switch color scheme
  - System respects OS dark mode preference
  - Dark mode fully supported

### 10.2 Layout
Adjust interface layout.

**Actions:**
- **Resize Panels** - Adjust panel widths
  - Drag panel borders (if implemented)

- **Close Sidebar** - Hide Item Detail Panel
  - Click X or outside panel

---

## 11. Notifications and Feedback

### 11.1 Toast Notifications
Receive system feedback.

**Actions:**
- **View Change Notifications** - See model updates
  - Toast appears on node/relationship changes
  - Shows what changed

- **Download Backup from Toast** - Quick backup
  - Click "Download Backup" button in toast
  - Exports current model state

- **Dismiss Toast** - Clear notification
  - Toast auto-dismisses after timeout
  - Click X to dismiss manually

---

## 12. Keyboard and Accessibility

### 12.1 Keyboard Navigation (Planned)
Navigate using keyboard.

**Planned Actions:**
- Press `1` - Open Metamodel View
- Press `2` - Open Navigator View
- Press `Esc` - Close Item Detail Panel
- Press `Ctrl+S` - Save/Export model

### 12.2 Accessibility Features
Support for assistive technologies.

**Actions:**
- **Tab Navigation** - Navigate with Tab key
  - Tab through interactive elements

- **Screen Reader Support** - Use ARIA labels
  - All elements have descriptive labels

- **High Contrast Mode** - Dark mode for visibility
  - Automatic dark mode support

---

## Summary of Key Action Categories

1. **Metamodel**: Create/modify classes, relationships, and widgets
2. **Model**: Create/organize/delete nodes and hierarchies
3. **Relationships**: Create/modify/delete connections between instances
4. **Documentation**: Write/edit Markdown docs for nodes
5. **Files**: Load/export/backup `.nn.md` files
6. **Views**: Navigate between Metamodel, Navigator, Matrix, History, Sources, Agents, and Docs views
7. **Detail Panel**: View/edit node properties, docs, and relationships
8. **AI**: Generate structure, relationships, and documentation
9. **Advanced**: Test parser, inspect raw data
10. **UI**: Customize theme and layout
11. **Notifications**: View change alerts and quick backups

---

## Quick Reference: Common Workflows

### Workflow 1: Create New Model from Scratch
1. Define metamodel classes
2. Define metamodel relationships with widgets
3. Create root nodes (class categories)
4. Add instance nodes under classes
5. Create relationships in Matrix View
6. Add documentation to key nodes
7. Export model

### Workflow 2: Edit Existing Model
1. Load `.nn.md` file
2. Navigate to Navigator View
3. Click nodes to view/edit details
4. Switch to Matrix View for relationships
5. Update values using widgets
6. Export updated model

### Workflow 3: AI-Assisted Modeling
1. Export backup (recommended)
2. Open AI Assistant
3. Enter API key (first time)
4. Prompt AI to generate structure
5. Review AI proposals
6. Approve changes
7. Refine with additional prompts
8. Export final model

### Workflow 4: Document Model
1. Navigate to Navigator View
2. Click node to open Detail Panel
3. Switch to Documentation tab
4. Write Markdown content
5. Save documentation
6. Repeat for other nodes
7. Export model with docs

### Workflow 5: Visualize and Validate
1. Open Metamodel View - Verify structure
2. Open Navigator View - Check instance hierarchy
3. Open Matrix View - Validate relationships
4. Click nodes - Review documentation

---

**Last Updated:** 2025-12-03  
**Version:** 1.0
