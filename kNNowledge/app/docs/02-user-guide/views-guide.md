# Views Guide

kNNowledge provides a suite of specialized views to help you manage every aspect of your model, from high-level structure to granular data.

## View Navigation

Access views via the icons in the top navigation bar:

| Icon          | View              | Purpose                                            |
| :------------ | :---------------- | :------------------------------------------------- |
| **Home**      | **Home**          | Dashboard with model stats and class overview.     |
| **Compass**   | **Navigator**     | Main explorer for model instances and hierarchy.   |
| **Grid**      | **Matrices**      | Matrix-based relationship management.              |
| **Waypoints** | **Metamodel**     | Visual class diagram of your model's definition.   |
| **Layers**    | **Source Import** | Bridge raw documents and structured model nodes.   |
| **Zap**       | **Skills**        | AI-powered assistants and specialized model tools. |
| **More...**   |                   | Access additional views (History, Docs, Debug).    |

---

## 1. Home View

### Purpose
The **Home** view is the landing page and dashboard of your model. It shows key statistics and provides quick access to all model classes.

### What You See
- **Model Stats**: Cards showing counts of Classes, Instances, Relationships, and overall Model Health.
- **Model Classes Tab**: Grid of class cards with instance counts and property counts.
- **Model Overview Tab**: Visual representation of your metamodel structure.
- **Metamodel Tab**: Embedded metamodel diagram.

### Key Features
- **Quick Navigation**: Click any class card to navigate directly to that class's instances in Navigator view.
- **Empty State Handling**: If no model is loaded, shows helpful onboarding options.

---

## 2. Navigator View


![Navigator View](../assets/screenshots/navigator_view.png)

### Purpose
The **Navigator** is the primary interface for exploring and managing your model instances. It provides a robust, graph-aware explorer for your data.

### What You See
- **Graph/Tree Hybrid**: Browse nodes in a hierarchy while seeing cross-references.
- **Filtering**: Type-based filtering to focus on specific parts of your model.
- **Details Panel**: Clicking any node opens the side panel for editing properties and documentation.

### Use Cases
- **Daily Management**: The go-to view for browsing and finding content.
- **Structure Verification**: Ensure your model hierarchy makes sense.
- **Content Editing**: Quickly jump to nodes to edit their Markdown content.

---

## 2. Matrix View

![Matrix View](../assets/screenshots/matrix_view.png)

### Purpose
Manage densely interconnected data using interactive matrices. This view is essential for defining relationships between entities (e.g., "Person A _assigned_to_ Task B").

### Key Features
- **Smart Picklist**: Automatically detects valid relationships based on your metamodel.
- **Interactive Cells**: Click any cell to toggle relationships or open widgets (Text, Scale, Set, etc.).
- **Bulk Editing**: Rapidly define connections between multiple source and target nodes.

### Widget types
- **Binary**: Simple Yes/No toggle.
- **Scale**: numeric rating interactions.
- **Text/Mermaid**: Rich content relationships.

---

## 3. Metamodel View

![Metamodel View](../assets/screenshots/metamodel_view.png)

### Purpose
Visualize the "rules" of your model. This view renders your metamodel keys (Classes and Relationships) as a standard Mermaid class diagram.

### Interactions
- **Zoom/Pan**: Navigate large metamodels easily.
- **Verification**: Visually confirm that your class structure and inheritance (if any) are correct.

---

## 4. History View

### Purpose
Track the evolution of your model over time.

### Features
- **Change Log**: See a list of recent operations (creates, updates, deletes).
- **Diffing**: Compare previous states (depending on implementation).

---

## 5. Source Import View

### Purpose
Bridge the gap between raw files and your structured model using AI-assisted extraction.

### Features
- **File Ingestion**: Upload raw text, PDFs, or code files.
- **AI Processing**: Use specialized "Source Processor" skills to extract relevant entities.
- **Staging Area**: Review and edit extracted items before committing them to the model.

---

## 6. Skills Dashboard

### Purpose
The command center for AI operations and specialized modeling functions.

### Features
- **App Skills**: Built-in system capabilities for model management.
- **Model Skills**: Custom skills defined within your specific model folder.
- **Skill Management**: Activate and configure specialized AI "lenses" for your work.

---

## 7. Documentation View (Docs)

### Purpose
A dedicated reader mode for your model's and application's documentation.

---

## 8. Debug View

### Purpose
Advanced troubleshooting and inspection tools for developers and power users.

---

## Item Detail Panel

Accessible from the Navigator and other views, this sliding panel is where granular editing happens.

### Tabs
1.  **Details**: Edit properties, rename nodes, and see parent/child context.
2.  **Documentation**: Full Markdown editor for the node's narrative content.
3.  **Relationships**: Visual graph of the specific node's connections.

---

## Mobile Responsiveness

The application adapts to smaller screens:
- **Navigator**: Becomes the primary mobile navigation list.
- **Detail Panels**: Take up full screen width on mobile devices.
- **Matrices**: Enable horizontal scrolling for complex grids.
