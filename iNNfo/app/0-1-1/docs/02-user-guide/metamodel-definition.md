# Defining Metamodels

The metamodel is the foundation of your **iNNfo** project. It defines the "language" you will use to describe your domain and the rules governing how your distributed folders interact.

## The Centralized Metamodel

In iNNfo 0.4.0, the metamodel is **centralized** in a single file located at the root of your model folder:

- **Primary Location:** `model/.iNNfo.md`
- **File Type:** `model_root`

This file acts as the configuration hub for all instances distributed across subdirectories.

---

## 1. Root Configuration

The `model/.iNNfo.md` file must contain a `type: model_root` identifier in its frontmatter.

```yaml
---
type: model_root
version: 0.4.0
metamodel:
  classes:
    # Class definitions go here
  relationships:
    # Relationship rules go here
---
```

## 2. Defining Classes

Classes represent the types of entities in your domain. They are defined in the `metamodel.classes` section.

### Syntax

```yaml
metamodel:
  classes:
    Task:
      icon: CheckSquare      # Lucide icon name
      color: "#3B82F6"       # HEX color or standard CSS color
      description: "A work item that needs completion"
      attributes:
        priority:
          type: scale
          config: { min: 1, max: 5 }
```

### Components
1. **Name (Key):** The unique name of the class (e.g., `Task`).
2. **Icon:** A [Lucide](https://lucide.dev/icons) icon name for visual representation in the Navigator and Diagrams.
3. **Color:** The accent color used for badges, connectors, and diagrams.
4. **Description:** Provides context to the AI Assistant about what this class represents.
5. **Attributes:** Metadata schema for instances of this class (optional).

---

## 3. Relationship Definitions

Relationships define the allowed connections between classes. They are stored in the `metamodel.relationships` list in the root file.

### Syntax

```yaml
metamodel:
  relationships:
    - from: Task
      to: Person
      label: assigned_to
      widget: set           # The UI component used in Matrix View
      config:
        options: [Alice, Bob, Charlie]
```

### Key Fields

- **from/to:** The source and target classes for the relationship.
- **label:** The semantic name of the connection (used by AI and diagrams).
- **widget:** The integrated editor used in the Matrix View (see [Widgets Overview](../04-widgets/widgets-overview.md)).
- **config:** Widget-specific parameters (e.g., options for a set, min/max for a scale).

---

## 4. Visualizing the Metamodel

iNNfo automatically generates a visual representation of your metamodel in the **Metamodel View**. This uses **Mermaid.js** to render a live class diagram showing:

- All defined classes with their icons and colors.
- All possible relationship types as directed edges.
- Multiplicity and labels.

> [!TIP]
> The **Architect Agent** can help you design this structure. Ask it: "Suggest a metamodel for a software development project including sprints, features, and developers."

---

## Example: Creative Media Metamodel

Here is a complete `model/.iNNfo.md` example:

```yaml
---
type: model_root
version: 0.4.0
metamodel:
  classes:
    Album:
      icon: Disc
      color: "#EC4899"
    Artist:
      icon: User
      color: "#8B5CF6"
    Review:
      icon: MessageSquare
      color: "#F59E0B"
  relationships:
    - from: Album
      to: Artist
      label: created_by
      widget: toggle_group
      config: { options: [Main, Guest, Producer] }
    - from: Review
      to: Album
      label: ratings
      widget: rating
      config: { max: 5 }
---
```

## Best Practices

1. **Keep it Small:** Start with 3-5 core classes and expand as your model grows.
2. **Semantic Labels:** Use verbs for relationship labels (`executes`, `contains`, `depends_on`).
3. **Icon Clarity:** Choose icons that are distinguishable at small sizes in the Tree view.
4. **AI Context:** Provide detailed descriptions for classes so the AI agents can make better modeling decisions.

## Next Steps

- [Model Creation](./model-creation.md) - Learn how to build instances based on this metamodel.
- [Widgets Overview](../04-widgets/widgets-overview.md) - Explore all available relationship widgets.
- [Hierarchical Loader](../03-technical-reference/hierarchical-loader.md) - How the metamodel is loaded and applied.
```
