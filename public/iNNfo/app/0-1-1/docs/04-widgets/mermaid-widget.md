# Mermaid Widget

**Type:** `mermaid`

The Mermaid widget allows users to define complex relationships using Mermaid diagram syntax. This is useful for visualizing flows, sequences, or state transitions directly within the relationship matrix.

## Configuration

```typescript
interface MermaidConfig {
    diagramType: 'flowchart' | 'sequenceDiagram' | 'stateDiagram' | 'erDiagram' | 'gantt' | 'graph'; // Required
    direction?: 'LR' | 'TD' | 'RL' | 'BT'; // Optional. Default depends on diagram type.
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: flow
  widget: mermaid
  config:
    diagramType: flowchart
    direction: LR
```

## UI Behavior

- **Preview**: Displays a rendered thumbnail of the diagram in the matrix cell.
- **Editor**: Clicking opens a modal with a code editor for Mermaid syntax.
- **Validation**: Real-time syntax checking (renders error message if invalid).

## Use Cases

- **Process Flows**: Defining the steps between two high-level tasks.
- **Sequence Diagrams**: Showing interaction between system components.
- **State Transitions**: Modeling valid state changes.
- **Entity Relationship**: Detailing database schemas.

## Example

**Metamodel:**
```yaml
- from: Service
  to: Service
  label: interaction
  widget: mermaid
  config:
    diagramType: sequenceDiagram
```

**Value (in .nn.md):**

Using YAML global relationships (recommended for multiline values):
```yaml
graph_edges:
  - from: Auth Service
    to: User Service
    label: interaction
    value: |
      Alice->>John: Hello John, how are you?
      John-->>Alice: Great!
```

*Note: Newlines in the value string should be handled carefully in the raw file format, often escaped or managed by the parser.*
