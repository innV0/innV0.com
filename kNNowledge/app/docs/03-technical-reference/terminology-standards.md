# Terminology Standards

This document defines the standardized terminology to use consistently throughout the kNNowledge codebase, documentation, and UI.

## Primary Terms

| **Use This**     | **Not This**                        | **Context**                    | **Definition**                                               |
| ---------------- | ----------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Node**         | item, element, instance             | General reference to instances | A single entity in the model hierarchy                       |
| **Class**        | node type, item type, category      | Metamodel categories           | A category defined in the metamodel (e.g., `Task`, `Person`) |
| **Model**        | graph, document                     | Complete data structure        | The entire loaded `.nn.md` file contents                     |
| **Metamodel**    | schema, definition                  | Structure definition           | The schema defining Node Types and relationship rules        |
| **Relationship** | connection, link, edge, association | Node connections               | A directed connection between two nodes                      |
| **Matrix**       | grid, table                         | Relationship view              | Two-dimensional view of relationships between node sets      |

## Interface Names (Code)

Use these exact interface names from `src/core/types.ts`:

- `Node` - A node instance
- `ClassDefinition` - A Class definition (UI term: "Class")
- `Relationship` - A relationship instance
- `AssociationDefinition` - A relationship type definition
- `AttributeDefinition` - A property definition on a class
- `Slot` - A value container on a Node

## UI Labels (English)

Use these labels consistently in the user interface:

| Component          | Label            |
| ------------------ | ---------------- |
| Node instance      | "Item" or "Node" |
| Class definition   | "Class"          |
| Complete structure | "Model"          |
| Schema definition  | "Metamodel"      |
| Connection         | "Relationship"   |
| Relationship grid  | "Matrix"         |
| Root-level node    | "Root Node"      |
| Nested node        | "Child Node"     |
| AI proposed change | "Staged Change"  |

## Documentation Style

### When writing documentation:

1. **First mention**: Use full term with definition
   - Example: "A **Node Type** (defined in the metamodel) represents a category of nodes..."

2. **Subsequent mentions**: Use short form
   - Example: "Each Node Type can have..."

3. **Code references**: Use exact interface names
   - Example: "The `MetamodelClass` interface defines..."

4. **Avoid mixing**: Don't alternate between "Node Type" and "class" in the same document

## Common Phrases

### ✅ Correct Usage

- "Add a new Node Type to the metamodel"
- "Create a node instance in the model"
- "Define a relationship between Node Types"
- "The node inherits its type from its parent"
- "Edit relationships in the Matrix View"
- "The metamodel defines which Node Types exist"

### ❌ Avoid

- "Add a new class to the metamodel" (use "Node Type")
- "Create an item in the model" (use "node")
- "The item type is..." (use "Node Type")
- "Add a link between nodes" (use "relationship")
- "The schema defines..." (use "metamodel")

## Special Cases

### When "Class" is Acceptable

- In Mermaid syntax: `classDiagram` (part of Mermaid spec)
- In code comments referencing Mermaid: "Mermaid class definition"
- When discussing the `MetamodelClass` interface specifically

### Abbreviations

Avoid abbreviations in user-facing text:
- ❌ "MT" for Metamodel
- ❌ "NT" for Node Type
- ❌ "Rel" for Relationship

Use full terms for clarity.

## Rationale

### Why "Class" over "Node Type"?

1.  **Standardization**: "Class" is the standard MOF/UML term (`M2` layer).
2.  **Brevity**: "Class" is shorter and distinct from "Node" (instance).
3.  **Familiarity**: Users familiar with basic modeling concepts understand "Class/Instance".

### Why "Node" or "Item" for Instances?

1.  **Node**: Technically accurate for the graph structure (`M4` layer).
2.  **Item**: Users often see list items; "Item" is a friendly alias.

## Implementation Checklist

When adding new features or documentation:

- [ ] Use "Node Type" for metamodel classes
- [ ] Use "Node" for model instances
- [ ] Use "Relationship" for connections
- [ ] Use "Metamodel" for schema
- [ ] Use "Model" for complete structure
- [ ] Check UI labels match this guide
- [ ] Check documentation uses consistent terms
- [ ] Update glossary if adding new terms

## Related Documents

- [Glossary](./glossary.md) - Complete terminology reference
- [Data Model](./data-model.md) - TypeScript interfaces
- [Coding Standards](../05-development/coding-standards.md) - Code conventions
