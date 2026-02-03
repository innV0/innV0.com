# Color Widget

The Color Widget provides a color picker for selecting and storing color values.

## Purpose

Allows users to select colors using a native color picker or by entering hex color codes directly.

## Syntax

```yaml
- from: Task
  to: Object
  label: theme_color
  widget: color
```

## Configuration

No specific configuration options. The widget uses standard hex color format.

## Display

When populated, shows a small colored circle with the hex value next to it.

**Example:** 🔵 `#3B82F6`

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the color editor modal
2. Use the native color picker to select a color visually
3. Or type a hex value directly in the input field (format: `#RRGGBB`)
4. Click **Save** to confirm, **Cancel** to discard, or **Clear** to remove the value

## Use Cases

- Theme colors
- Category indicators
- Visual markers
- Branding elements

## Example

```yaml
metamodel:
  relationships:
    - from: Category
      to: Settings
      label: accent_color
      widget: color
```

**Result:** A relationship cell showing a color swatch that opens a color picker modal.

## Validation

The widget validates hex color format (`#RRGGBB`) before saving.
