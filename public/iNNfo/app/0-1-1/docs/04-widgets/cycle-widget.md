# Cycle Widget

**Type:** `cycle`

The Cycle widget is similar to the Set widget but optimized for rapid interaction. Instead of opening a menu, clicking the widget cycles through the available options.

## Configuration

```typescript
interface CycleConfig {
    values: string[];    // Required. List of values to cycle through.
    allowNull?: boolean; // Default: true. Whether to include a null state.
    nullLabel?: string;  // Default: "·". Label for the null state.
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: cycle
  config:
    values: [Todo, Doing, Done]
```

## UI Behavior

- Displays the current value.
- Clicking immediately changes to the next value in the list.
- Colors are automatically assigned to values for distinction.

## Use Cases
- Workflow status (Todo -> Doing -> Done)
- RAG Status (Red, Amber, Green)
- Simple phases

## Comparison: Set vs. Cycle
- Use **Set** when there are many options or choices are not sequential.
- Use **Cycle** when there are few options (< 5) and rapid switching is desired.
