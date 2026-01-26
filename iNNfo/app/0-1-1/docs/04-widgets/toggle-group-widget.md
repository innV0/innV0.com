# Toggle Group Widget

The Toggle Group Widget provides a button-group style selection from predefined options.

## Purpose

Allows users to select one value from a set of toggle buttons displayed inline.

## Syntax

```yaml
- from: Task
  to: Priority
  label: level
  widget: toggle-group
  config:
    options:
      - value: low
        label: Low
      - value: medium
        label: Medium  
      - value: high
        label: High
```

## Configuration

| Property  | Type     | Required | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| `options` | Option[] | Yes      | Array of option objects with value/label |

### Option Object

| Property | Type   | Required | Description             |
| -------- | ------ | -------- | ----------------------- |
| `value`  | string | Yes      | Internal value to store |
| `label`  | string | Yes      | Display text for button |
| `icon`   | string | No       | Optional icon name      |

## Display

When populated, shows the selected option's label in a styled badge.

**Example:** `Medium`

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the toggle group modal
2. Click any toggle button to select that option
3. Click **Save** to confirm, **Cancel** to discard, or **Clear** to remove the value

## Use Cases

- Priority levels
- Status indicators
- Quick categorical selections
- Mutually exclusive options

## Example

```yaml
metamodel:
  relationships:
    - from: Issue
      to: Settings
      label: severity
      widget: toggle-group
      config:
        options:
          - value: critical
            label: Critical
          - value: major
            label: Major
          - value: minor
            label: Minor
          - value: trivial
            label: Trivial
```

**Result:** A four-button toggle group for selecting issue severity.

## Default Options

If no options are configured, the widget defaults to: `Low`, `Medium`, `High`.
