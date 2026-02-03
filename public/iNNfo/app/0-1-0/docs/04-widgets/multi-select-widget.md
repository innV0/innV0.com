# Multi-Select Widget

The Multi-Select Widget allows selection of multiple values from a predefined list.

## Purpose

Unlike the Set widget (single selection), the Multi-Select widget enables users to choose multiple options simultaneously.

## Syntax

```yaml
- from: Project
  to: Team
  label: members
  widget: multi-select
  config:
    options: [Alice, Bob, Charlie, Diana]
    allowEmpty: true
```

## Configuration

| Property     | Type     | Required | Description                           |
| ------------ | -------- | -------- | ------------------------------------- |
| `options`    | string[] | Yes      | List of available options             |
| `allowEmpty` | boolean  | No       | Allow empty selection (default: true) |

## Display

When populated, shows selected values as badges.

**Example:** `Alice` `Charlie` `Diana`

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the multi-select modal
2. Use the search input to filter options
3. Click any option to toggle its selection (✓ checkmark indicates selected)
4. See the count of selected items at the bottom
5. Click **Save** to confirm or **Cancel** to discard

## Use Cases

- Team member assignments
- Multiple category selection
- Feature flag groupings
- Skill/competency lists

## Example

```yaml
metamodel:
  relationships:
    - from: Task
      to: Team
      label: assignees
      widget: multi-select
      config:
        options: [Frontend, Backend, QA, DevOps, Design]
```

**Result:** A relationship allowing multiple team assignments per task.

## Difference from Set Widget

| Feature         | Set Widget       | Multi-Select Widget |
| --------------- | ---------------- | ------------------- |
| Selection count | Single           | Multiple            |
| Storage         | String           | String array        |
| Use case        | Status, Priority | Teams, Tags         |

## Storage Format

Values are stored as a JSON array (e.g., `["Alice", "Charlie"]`).
