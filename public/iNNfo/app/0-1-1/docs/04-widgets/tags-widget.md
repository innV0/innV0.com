# Tags Widget

The Tags Widget provides a multi-tag input system with autocomplete and custom tag creation.

## Purpose

Allows users to add multiple tags from predefined options or create custom tags dynamically.

## Syntax

```yaml
- from: Article
  to: Metadata
  label: keywords
  widget: tags
  config:
    options: [urgent, review, approved, draft]
    allowCreate: true
```

## Configuration

| Property      | Type     | Required | Description                             |
| ------------- | -------- | -------- | --------------------------------------- |
| `options`     | string[] | No       | Predefined tag options for autocomplete |
| `allowCreate` | boolean  | No       | Allow creating new tags (default: true) |

## Display

When populated, shows tags as small badges.

**Example:** `urgent` `review` `approved`

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the tags editor modal
2. View current tags with remove (×) buttons
3. Click "Add Tag..." to open the tag selector
4. Search and select from predefined options
5. Or type a new tag name and create it (if `allowCreate: true`)
6. Click **Save** to confirm or **Cancel** to discard

## Use Cases

- Keywords and labels
- Content categorization
- Multi-value metadata
- Flexible tagging systems

## Example

```yaml
metamodel:
  relationships:
    - from: Post
      to: Category
      label: tags
      widget: tags
      config:
        options: [technology, design, business, tutorial]
        allowCreate: true
```

**Result:** A tagging system where users can select predefined categories or create custom ones.

## Storage Format

Tags are stored as a comma-separated string (e.g., `"urgent,review,approved"`).
