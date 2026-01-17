# Rating Widget

The Rating Widget provides a star-based rating system with visual feedback.

## Purpose

Allows users to rate items using a visual star interface, commonly used for quality assessments, reviews, or priority rankings.

## Syntax

```yaml
- from: Product
  to: Review
  label: quality_score
  widget: rating
  config:
    max: 5
    icon: star  # Optional, defaults to star
```

## Configuration

| Property | Type   | Required | Description                            |
| -------- | ------ | -------- | -------------------------------------- |
| `max`    | number | No       | Maximum rating value (default: 5)      |
| `icon`   | string | No       | Icon to use for rating (default: star) |

## Display

When populated, shows filled stars (⭐) for the rating value and empty stars for the remainder.

**Example:** ⭐⭐⭐☆☆ (3 out of 5)

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the rating modal
2. Hover over stars to preview selection
3. Click a star to select that rating
4. Click **Save** to confirm, **Cancel** to discard, or **Clear** to remove the value

## Use Cases

- Quality ratings
- Customer reviews
- Priority levels
- Satisfaction scores

## Example

```yaml
metamodel:
  relationships:
    - from: Movie
      to: Critic
      label: rating
      widget: rating
      config:
        max: 10
```

**Result:** A 10-star rating system for movie reviews.

## Visual Design

- **Filled stars:** Yellow/Gold (`fill-yellow-400`)
- **Empty stars:** Gray outline
- **Hover effect:** Stars scale up on mouseover
