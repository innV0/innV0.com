# Set Widget

**Type:** `set`

The Set widget allows users to select a single value from a predefined list of options (Picklist/Enum).

## Configuration

```typescript
interface SetConfig {
    options: string[];   // Required. List of valid values.
    allowEmpty?: boolean; // Default: true. Whether the value can be cleared.
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: set
  config:
    options: [High, Medium, Low]
    allowEmpty: false
```

## UI Behavior

- Displays the selected option as a text badge.
- Clicking opens a modal with a list of options to choose from.
- If `allowEmpty` is true, a "Clear" option is available.

## Use Cases
- Status (if not frequently changed)
- Categories
- Role assignments
- T-shirt sizing (S, M, L, XL)
