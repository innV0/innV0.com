# Scale Widget

**Type:** `scale`

The Scale widget allows users to select a numeric value from a defined range. It visualizes values using a color gradient.

## Configuration

```typescript
interface ScaleConfig {
    min: number;         // Required
    max: number;         // Required
    step?: number;       // Default: 1
    startColor?: string; // Tailwind color class (e.g., "blue-500")
    endColor?: string;   // Tailwind color class (e.g., "red-500")
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: scale
  config:
    min: 1
    max: 5
    startColor: green-400
    endColor: red-600
```

## UI Behavior

- Displays the numeric value.
- Background color is interpolated between `startColor` and `endColor` based on the value's position in the range.
- Clicking opens a modal with a slider input.

## Use Cases
- Priority ratings (1-5)
- Impact analysis (1-10)
- Risk assessment
- Confidence scores
