# Number Widget

**Type:** `number`

The Number widget handles arbitrary numeric input with formatting options.

## Configuration

```typescript
interface NumberConfig {
    decimals?: number;   // 0, 1, 2, or 3. Default: 0
    format?: 'number' | 'percentage' | 'currency'; // Default: 'number'
    currency?: string;   // ISO currency code (e.g., "USD", "EUR"). Default: "USD"
    min?: number;        // Minimum value constraint
    max?: number;        // Maximum value constraint
}
```

## Metamodel Syntax

```yaml
- from: Source
  to: Target
  label: relationship_label
  widget: number
  config:
    decimals: 2
    format: currency
    currency: EUR
```

## UI Behavior

- Displays the formatted number (e.g., "$1,234.56", "50%").
- Clicking opens a modal with a numeric input field.
- Enforces min/max constraints during input.

## Use Cases
- Budgets and costs
- Time estimates (hours)
- Percentage completion
- Physical measurements
