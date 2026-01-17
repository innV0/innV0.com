# Code Widget

The Code Widget provides a code/JSON editor for storing structured text with syntax highlighting.

## Purpose

Allows users to enter and edit code snippets, JSON, or other structured text content.

## Syntax

```yaml
- from: Task
  to: Object
  label: config_json
  widget: code
  config:
    language: json  # json | javascript | typescript
```

## Configuration

| Property   | Type   | Required | Description                                                           |
| ---------- | ------ | -------- | --------------------------------------------------------------------- |
| `language` | string | No       | Language for syntax highlighting (`json`, `javascript`, `typescript`) |

## Display

When populated, shows a code icon (🔤) with a truncated preview of the content (first 20 characters).

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open modal editor
2. Enter or paste code/JSON in the textarea
3. Click **Save** to confirm or **Cancel** to discard

## Use Cases

- Configuration objects
- JSON data storage
- Code snippets
- Technical specifications

## Example

```yaml
metamodel:
  relationships:
    - from: Component
      to: Settings
      label: configuration
      widget: code
      config:
        language: json
```

**Result:** A relationship cell that opens a monospace code editor for JSON content.
