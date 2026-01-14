# Glossary

This glossary defines the core terminology used throughout NN Modeler. For detailed technical specifications, see [Data Model](./data-model.md) and [File Format](../02-user-guide/file-format.md).

## Core Concepts

### Model
The complete data structure loaded from a `.nn.md` file, including metamodel definitions, node instances, and relationships.

**Example:** `business-metamodel.nn.md`

### Metamodel
The schema that defines the structure and rules of a model. Specified in the `## Metamodel` section using Mermaid classDiagram syntax. The metamodel defines what **Node Types** exist and how they can relate to each other.

**See:** [Metamodel Definition Guide](../02-user-guide/metamodel-definition.md)

### Node
A single instance in the model hierarchy. Nodes are the fundamental building blocks of a model, representing concrete entities like "Design Homepage" or "Alice".

**Format:** `[[Node Name]]`  
**Interface:** `Node` in `@/store/types`

### Node Type
A category or class of nodes defined in the metamodel. Node Types define the template for nodes (e.g., `Task`, `Person`, `Work`).

**Also known as:** Class (in metamodel context)  
**Interface:** `MetamodelClass` in `@/store/types`  
**Examples:** `text`, `weight`, `category`, `steps`, `work`

> **Note:** While the metamodel uses `class` syntax (Mermaid classDiagram), we prefer "Node Type" in documentation and UI to avoid confusion with programming classes.

### Relationship
A directed connection between two nodes with an associated label and value. Relationships represent how nodes interact or relate to each other.

**Format:** `[[Source]] -- "label:value" --> [[Target]]`  
**Interface:** `Relationship` in `@/store/types`

### Matrix
A two-dimensional view displaying relationships between two sets of nodes. Matrices provide an interactive interface for viewing and editing relationships in bulk.

**Example:** A matrix showing which Tasks are assigned to which People.

## Metamodel Elements

### Metamodel Class
The definition of a Node Type in the metamodel, including its visual properties (icon, color) and optional attributes.

**Interface:** `MetamodelClass`  
**Properties:** `name`, `lucideIcon`, `emoji`, `color`, `description`, `attributes`

### Metamodel Relationship
The definition of how two Node Types can be connected, including the widget type and configuration.

**Interface:** `MetamodelRelationship`  
**Properties:** `sourceClass`, `targetClass`, `label`, `definition`, `cardinality`

### Widget
An interactive UI component used to edit relationship values in the Matrix View. Each relationship type in the metamodel specifies which widget to use.

**Types:** `binary`, `scale`, `set`, `cycle`, `number`, `text`, `mermaid`  
**See:** [Widgets Overview](../04-widgets/widgets-overview.md)

### Widget Configuration
Parameters that customize widget behavior, such as min/max values for scales or available options for sets.

**Interfaces:** `BinaryConfig`, `ScaleConfig`, `SetConfig`, `CycleConfig`, `NumberConfig`, `TextConfig`, `MermaidConfig`

## Node Properties

### Node Content
The display name or text of a node, shown in brackets.

**Example:** For `[[Design Homepage]]`, the content is "Design Homepage"  
**Property:** `node.content`

### Node Type (Instance)
The category assigned to a node instance, typically inherited from its parent or explicitly set at the root level.

**Example:** A node `[[Alice]]` might have type "Person"  
**Property:** `node.type`

### Root Node
A top-level node with no parent. Root nodes typically represent Node Type names in the model outline.

**Example:** `[[Task]]`, `[[Person]]`

### Child Node
A node that is nested under another node in the hierarchy.

**Property:** `node.children[]`

### Node Properties (Key-Value)
Optional metadata attached to a node in key-value format (legacy support for Logseq-style properties).

**Format:** `propertyName:: value`  
**Property:** `node.properties`

### Node Documentation
Optional Markdown content providing detailed information about a node. Defined in the `## Documentation` section.

**Property:** `node.documentation`  
**See:** [File Format - Documentation Section](../02-user-guide/file-format.md#section-4-documentation-optional)

## Relationship Properties

### Relationship Label
The type or name of a relationship, which must match a label defined in the metamodel.

**Example:** `assigned_to`, `priority`, `depends_on`  
**Property:** `relationship.label`

### Relationship Value
The data stored in a relationship. The format depends on the widget type (boolean, number, string, etc.).

**Examples:**
- Binary: `true` or `false`
- Scale: `7`
- Set: `"Alice"`
- Text: `"Important task"`

**Property:** `relationship.value`

### Source Node
The starting node of a directed relationship.

**Property:** `relationship.sourceId`

### Target Node
The ending node of a directed relationship.

**Property:** `relationship.targetId`

### Self-Relationship
A relationship where the source and target are the same node.

**Example:** `[[Task A]] -- "priority:5" --> [[Task A]]`

## Application States

### Staged Change
A proposed modification (node or relationship) created by the AI assistant that requires user approval before being committed to the model.

**Status:** `status: 'staged'`  
**See:** [AI Assistant Guide](../02-user-guide/ai-assistant.md)

### Active View
The currently selected view in the application interface.

**Values:** `'navigator'`, `'matrix'`, `'metamodel'`, `'history'`, `'documentation'`, `'sources'`, `'agents'`  
**Store:** `activeView` in `@/store/index.ts`

### Expanded State
Tracks which nodes are expanded (showing children) or collapsed in the Navigator View.

**Store:** `expandedNodeIds[]` in `@/store/index.ts`

## Views

### Metamodel View
Displays the metamodel diagram showing Node Types and their relationship definitions.

### Navigator View
The primary hierarchical explorer for the model, allowing navigation, filtering, and editing of nodes.

### Matrix View
Interactive grid for viewing and editing relationships between sets of nodes based on metamodel relationship definitions.

### Skills View
Dashboard for managing AI skills and monitoring specialized tools.

### Source Import View
Interface for importing and processing raw documents into the model.

### History View
Log of recent model changes and operations.

### Documentation View
Read-only view of the model's documentation content.

## File Format Elements

### .nn.md File
The file extension for NN Modeler files. A Markdown file with embedded Mermaid diagrams containing metamodel, model, and relationship definitions.

**Sections:**
1. `## Metamodel` (required)
2. `## Model` (required)
3. `## Relationships` (required)
4. `## Documentation` (optional)

### Wikilink
The double-bracket notation used to reference nodes.

**Format:** `[[Node Name]]`  
**Purpose:** Creates unique identifiers and enables cross-references

### Logseq-Style Outline
The indented list format used in the `## Model` section to define hierarchical node structures.

**Syntax:** Markdown lists with 4-space or 1-tab indentation

## Operations

### Commit (Staged Change)
Accept and apply a staged change to the model, making it permanent.

**Function:** `commitStagedChange()`, `commitAllStagedChanges()`

### Discard (Staged Change)
Reject and remove a staged change without applying it to the model.

**Function:** `discardStagedChange()`, `discardAllStagedChanges()`

### Export
Save the current model to a `.nn.md` file for download or sharing.

**Function:** `downloadModelBackup()`

### Import
Load a model from a `.nn.md` file into the application.

## Visual Properties

### Lucide Icon
A named icon from the Lucide icon library, used to visually represent Node Types.

**Format:** `%% @lucideIcon IconName`  
**Examples:** `CheckSquare`, `User`, `Folder`  
**Priority:** Takes precedence over emoji if both are defined

### Emoji
A Unicode emoji character used as a fallback visual representation for Node Types.

**Format:** `%% @emoji 🎯`  
**Fallback:** Used when no Lucide icon is specified

### Color
A named color theme applied to Node Types for visual distinction.

**Format:** `%% @color blue`  
**Values:** `blue`, `green`, `red`, `yellow`, `purple`, `pink`, `indigo`, `gray`, `orange`, `teal`, `cyan`

## Related Documentation

- **[Data Model Reference](./data-model.md)** - TypeScript interfaces and types
- **[File Format Specification](../02-user-guide/file-format.md)** - Complete `.nn.md` syntax
- **[Architecture Overview](./architecture.md)** - System design and components
- **[Widgets Overview](../04-widgets/widgets-overview.md)** - Interactive relationship editors
