# URL Widget

The URL Widget provides an input for storing and displaying web links.

## Purpose

Allows users to enter, store, and interact with URL values. URLs are displayed as clickable links.

## Syntax

```yaml
- from: Resource
  to: Reference
  label: source_url
  widget: url
  config:
    placeholder: "https://example.com"
```

## Configuration

| Property      | Type   | Required | Description                          |
| ------------- | ------ | -------- | ------------------------------------ |
| `placeholder` | string | No       | Placeholder text for the input field |

## Display

When populated, shows a truncated clickable link with an external link icon (↗).

**Example:** `https://example.com/doc...` ↗

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the URL editor modal
2. Enter or paste a URL
3. Use the test button (↗) to open the link in a new tab
4. Press **Enter** to save, **Escape** to cancel
5. Click **Save** to confirm, **Cancel** to discard, or **Clear** to remove the value

## Use Cases

- External references
- Documentation links
- API endpoints
- Resource locations

## Example

```yaml
metamodel:
  relationships:
    - from: Article
      to: Source
      label: reference
      widget: url
```

**Result:** A relationship cell with a clickable URL that opens an editor for modification.

## Keyboard Shortcuts

| Key      | Action      |
| -------- | ----------- |
| `Enter`  | Save value  |
| `Escape` | Cancel edit |
