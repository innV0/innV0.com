# Progress Widget

The Progress Widget provides a visual progress bar with percentage value.

## Purpose

Allows users to set and display completion progress as a percentage with a visual bar indicator.

## Syntax

```yaml
- from: Task
  to: Milestone
  label: completion
  widget: progress
  config:
    min: 0
    max: 100
    showValue: true
```

## Configuration

| Property    | Type    | Required | Description                       |
| ----------- | ------- | -------- | --------------------------------- |
| `min`       | number  | No       | Minimum value (default: 0)        |
| `max`       | number  | No       | Maximum value (default: 100)      |
| `showValue` | boolean | No       | Display numeric value next to bar |

## Display

When populated, shows a progress bar with percentage value.

**Example:** `████████░░ 80%`

When empty or zero, shows an empty progress bar.

## Interaction

1. Click to open the progress editor modal
2. Use the slider to set the progress value (0-100)
3. Click **Save** to confirm or **Clear** to remove the value

## Use Cases

- Task completion tracking
- Project milestones
- Workflow progress
- Goal achievement

## Example

```yaml
metamodel:
  relationships:
    - from: Sprint
      to: Epic
      label: progress
      widget: progress
      config:
        min: 0
        max: 100
```

**Result:** A visual progress bar for tracking sprint completion.

## Visual Design

- Progress bar fills from left to right
- Uses theme accent color for the filled portion
- Displays percentage in monospace font
