# Binary Widget

**Type:** `binary`

The Binary widget represents a simple boolean relationship (True/False, Yes/No). It is the most fundamental relationship type.

## Configuration

```typescript
interface BinaryConfig {
    trueLabel?: string;  // Default: "Yes"
    falseLabel?: string; // Default: "No"
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: binary
  config:
    trueLabel: Critical
    falseLabel: Optional
```

## UI Behavior

- **State 1 (Null)**: Gray/Empty. No relationship exists.
- **State 2 (True)**: Green checkmark (or custom label).
- **State 3 (False)**: Red cross (or custom label).

Clicking the cell cycles through these states: `Null -> True -> False -> Null`.

## Use Cases
- Dependencies (`depends_on`)
- Flags (`is_critical`, `is_deprecated`)
- Simple Approvals (`approved`)
