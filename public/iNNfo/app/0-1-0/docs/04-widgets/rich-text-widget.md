# Rich Text Widget

The Rich Text Widget provides a WYSIWYG editor for formatted HTML content.

## Purpose

Allows users to create and edit rich formatted text with bold, italic, lists, and other formatting options.

## Syntax

```yaml
- from: Document
  to: Content
  label: body
  widget: rich-text
```

## Configuration

No specific configuration options. The widget provides a full rich text editing interface.

## Display

When populated, shows a file icon with a truncated plain text preview of the content.

**Example:** 📄 `This is the beginning of...`

When empty, displays a centered dot (`·`).

## Interaction

1. Click to open the rich text editor modal
2. Use the WYSIWYG toolbar for formatting:
   - Bold, Italic, Underline
   - Lists (ordered/unordered)
   - Links
   - Headings
3. Click **Save** to confirm or **Cancel** to discard

## Use Cases

- Document content
- Rich descriptions
- Formatted notes
- Email templates

## Example

```yaml
metamodel:
  relationships:
    - from: Article
      to: Content
      label: body
      widget: rich-text
```

**Result:** A relationship storing formatted HTML content with a full editing interface.

## Storage Format

Content is stored as HTML string.

## Editor Features

The Rich Text Editor component provides:
- Toolbar with formatting buttons
- Live preview of formatted content
- HTML output for storage
- Full-width modal for comfortable editing
