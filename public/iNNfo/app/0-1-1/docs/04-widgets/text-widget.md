# Text Widget

**Type:** `text`

The Text widget allows for free-form text entry.

## Configuration

```typescript
interface TextConfig {
    multiline?: boolean; // Default: false. Use textarea instead of input.
    maxLength?: number;  // Max character count.
    placeholder?: string;// Placeholder text.
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: text
  config:
    multiline: true
    maxLength: 200
```

## UI Behavior

- Displays a truncated preview of the text.
- Clicking opens a modal with a text input or textarea.
- Shows character count if `maxLength` is set.

## Use Cases
- Comments and notes
- Descriptions
- URLs or external links
- Short identifiers
