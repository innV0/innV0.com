# Key Features

kNNowledge provides a comprehensive set of features for visual modeling and relationship management.

## 1. Metamodel-Driven Architecture

Define your own modeling language with custom classes and relationships.

```mermaid
classDiagram
    class Work {
        +description: string
    }
    class Role {
        +name: string
    }
    Work "1" --> "0..*" Role : executor {widget:set, config:{options:[Developer, Designer, Manager]}}
```

**Benefits:**
- Domain-specific modeling
- Enforced structure and consistency
- Reusable patterns

## 2. Multiple Views

### Metamodel View
![Metamodel View](../assets/screenshots/metamodel_view_1764749811154.png)

Visualizes your metamodel as a Mermaid class diagram showing classes, attributes, and relationship definitions.

### Navigator View
![Navigator View](../assets/screenshots/outline_view_1764749820870.png)

Hierarchical tree view of all model instances with type indicators and icons.

### Matrix View
![Matrix View](../assets/screenshots/matrix_view_1764749827519.png)

Interactive relationship matrix for managing connections between instances using configured widgets.



## 3. Rich Widget System

Eighteen widget types for different relationship patterns:

| Widget           | Use Case                | Example                              |
| ---------------- | ----------------------- | ------------------------------------ |
| **Binary**       | Yes/No decisions        | Is Critical?                         |
| **Scale**        | Ratings, scores         | Impact: 1-10                         |
| **Set**          | Predefined options      | Priority: High/Medium/Low            |
| **Cycle**        | Status values           | Status: Planned → In Progress → Done |
| **Number**       | Quantities, percentages | Budget: $50,000                      |
| **Text**         | Notes, descriptions     | Comments                             |
| **Mermaid**      | Diagram relationships   | Flowchart connections                |
| **Diagram**      | Full diagram storage    | Architecture diagrams                |
| **Date**         | Temporal values         | Due Date: 2025-03-15                 |
| **Color**        | Visual markers          | Theme: #3B82F6                       |
| **Rating**       | Star ratings            | Quality: ⭐⭐⭐⭐☆                       |
| **URL**          | Web links               | Reference: https://...               |
| **Tags**         | Multiple keywords       | Labels: urgent, review               |
| **Toggle Group** | Button selection        | Severity: Low/Medium/High            |
| **Progress**     | Completion tracking     | Progress: 75%                        |
| **Multi-Select** | Multiple choices        | Assignees: Alice, Bob                |
| **Rich Text**    | Formatted content       | Description with formatting          |
| **Code**         | Code/JSON storage       | Configuration JSON                   |

See [Widgets Overview](../04-widgets/widgets-overview.md) for details.


## 4. AI Assistant

![AI Assistant](../assets/screenshots/ai_assistant_setup_1764749845651.png)

Built-in AI assistant powered by Google Gemini:

- **Natural Language Modeling** - Describe what you want, AI generates the structure
- **Context-Aware** - Understands your metamodel and existing model
- **Proactive** - Makes reasonable assumptions to speed up workflow
- **Documentation Generation** - AI can write detailed node documentation

## 5. File Management

- **Load/Save** - Import and export `.nn.md` files
- **Auto-Serialization** - Changes automatically reflected in file format
- **Version Control Friendly** - Plain text format works with Git

## 6. Node Documentation

Each node can have rich Markdown documentation:

- Detailed descriptions
- Code examples
- Links and references
- Formatted with full Markdown support

## 7. Icon Support

Dual icon system for visual clarity:

- **Lucide Icons** - 1000+ professional icons (priority)
- **Unicode Emojis** - Fallback for quick visual identification

## 8. Responsive Design

- **Dark Mode** - Full dark mode support
- **Adaptive Layout** - Works on different screen sizes
- **Keyboard Navigation** - Efficient keyboard shortcuts

## 9. Type Safety

Built with TypeScript for:

- Compile-time error detection
- Better IDE support
- Self-documenting code

## 10. Extensible Architecture

Clean separation of concerns:

- **Parser** - Independent file format handling
- **Store** - Centralized state management (Zustand)
- **Components** - Reusable React components
- **Widgets** - Pluggable relationship editors

## Performance

- **Fast Rendering** - Optimized React components
- **Efficient State** - Immer-based immutable updates
- **Lazy Loading** - Components load on demand

## Next Steps

- [Getting Started](./getting-started.md) - Create your first model
- [Views Guide](../02-user-guide/views-guide.md) - Master the interface
- [Widgets Overview](../04-widgets/widgets-overview.md) - Learn widget types
