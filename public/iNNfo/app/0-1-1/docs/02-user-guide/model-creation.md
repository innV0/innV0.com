# Model Creation

In iNNfo, creating a model is synonymous with organizing a **folder hierarchy**. This guide covers how to grow your model through folder enrollment and hierarchical organization.

## 1. The Distributed Model Concept

Unlike single-file databases, an iNNfo model is a collection of folders on your disk.

- **Entity = Folder:** Every node in your model is a real folder.
- **Marker = .iNNfo.md:** A folder only exists in the model if it contains a `.iNNfo.md` file (Explicit Enrollment).
- **Hierarchy = Directory Tree:** The physical nesting of folders defines the logical parent-child relationships.

## 2. Enrollment Patterns

There are two primary ways to enroll folders into your model:

### A. Implicit Enrollment (Auto-Discovery)
When the **HierarchicalLoader** scans your model directory, it automatically enrolls any folder it find that has a `.iNNfo.md` file.

### B. Explicit Creation (Via UI/AI)

- **Navigator View:** Right-click a folder and choose "Enroll as Model Node". iNNfo creates the `.iNNfo.md` marker for you.
- **AI Assistant:** Ask the AI to "Create a task called Finish-Docs". The AI creates the folder and the marker file.

## 3. Organizing by Class

To keep your model clean, it is best practice to organize instances into "Class Folders".

```text
model/
├── .iNNfo.md (Root)
├── Task/ (Class Folder)
│   ├── Design-UI/
│   │   └── .iNNfo.md
│   └── Implement-API/
│       └── .iNNfo.md
└── Person/ (Class Folder)
    └── Alice/
        └── .iNNfo.md
```

### Automatic Type Resolution

iNNfo determines the **Class** (Type) of a node automatically:

1. **Explicit:** The `class` field in the node's `.iNNfo.md` frontmatter.
2. **Contextual:** If no explicit class is found, it looks at the parent folder's name.
3. **Derived:** If the parent is a "Class Folder" (marked in its own `.iNNfo.md`), the children automatically take that type.

## 4. Flexible File Naming

iNNfo supports two naming conventions for the marker files:

- **Flat Naming:** `folder/.iNNfo.md` (Best for rapid creation).
- **Slug Naming:** `folder/entity-slug.iNNfo.md` (Best for external tool compatibility like Obsidian).

## 5. Adding Content and Metadata

### Properties (Metadata)
Edit the frontmatter of your `.iNNfo.md` file to change properties like priority, status, or custom attributes defined in your metamodel.

### Documentation (Rich Text)
Store your long-form documentation in the same folder:
- **Integrated:** Write directly in the `.iNNfo.md` file body.
- **External:** Point to a `content.md` file in the same folder.
- **Attachments:** Drop images or PDFs into the folder; they will automatically be associated with the node.

## Best Practices

- **Semantic Slugged Folders:** Use names like `Design-Homepage` instead of `design homepage` for better file system compatibility.
- **Keep Metamodel in Root:** Define all classes and relationship rules in your root `model/.iNNfo.md`.
- **Use Hierarchies for Breakdown:** Use nested folders for sub-tasks or sub-components.
- **Leverage AI:** Use the **Architect** agent to maintain the folder structure for you.

## Next Steps

- [Hierarchical Loader](../03-technical-reference/hierarchical-loader.md) - How the loading engine works.
- [AI Assistant](../02-user-guide/ai-assistant.md) - Automating folder creation.
- [File Format](../02-user-guide/file-format.md) - Detailed `.iNNfo.md` structure.
