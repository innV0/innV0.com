# Date Widget

The Date Widget provides a date picker for storing temporal values.

## Purpose

Allows users to select and store date values using a native date picker interface.

## Syntax

```yaml
- from: Task
  to: Milestone
  label: due_date
  widget: date
  config:
    includeTime: false
    format: iso
```

## Configuration

| Property      | Type    | Required | Description                              |
| ------------- | ------- | -------- | ---------------------------------------- |
| `includeTime` | boolean | No       | Whether to include time (default: false) |
| `format`      | string  | No       | Date format for display                  |

## Display

When populated, shows the date value as a formatted string (e.g., `2025-01-15`).

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the date editor modal
2. Select a date from the native date picker
3. Press **Enter** to save, **Escape** to cancel
4. Click **Save** to confirm, **Cancel** to discard, or **Clear** to remove the value

## Use Cases

- Due dates
- Start/end dates
- Milestones
- Scheduling

## Example

```yaml
metamodel:
  relationships:
    - from: Task
      to: Project
      label: deadline
      widget: date
```

**Result:** A relationship cell displaying a date that opens a native date picker.

## Keyboard Shortcuts

| Key      | Action      |
| -------- | ----------- |
| `Enter`  | Save value  |
| `Escape` | Cancel edit |
