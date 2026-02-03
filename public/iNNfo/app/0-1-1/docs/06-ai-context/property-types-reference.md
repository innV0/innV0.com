# Property Types Reference

## Overview

This document clarifies the **correct property types** for content attributes in iNNfo (formerly kNNowledge). This replaces any legacy references to "Rich Text".

## Current Property Types for Content

### 1. `markdown_property` (Markdown Inline)
- **Description**: Rich text content stored **directly in the property** (inline)
- **Use case**: Short to medium-length formatted content
- **Storage**: Content is stored as part of the node's slot data
- **Example**: Descriptions, notes, short documentation

```typescript
{
  type: 'markdown_property',
  label: 'Description',
  description: 'Brief description with formatting'
}
```

### 2. `markdown_file` (Markdown File)
- **Description**: Rich text content stored in a **separate .md file**
- **Use case**: Long-form content, extensive documentation
- **Storage**: Content is saved to a separate `.md` file in the node's folder
- **Example**: Full documentation, articles, detailed specifications

```typescript
{
  type: 'markdown_file',
  label: 'Documentation',
  description: 'Full documentation stored in external file'
}
```

**Important**: When using AI actions or the API, provide the **markdown content as a string**. For `markdown_file` attributes, the system will automatically save it to a `.md` file.

### 3. `text` (Plain Text)
- **Description**: Simple alphanumeric string without formatting
- **Use case**: Short labels, identifiers, simple values
- **Storage**: Stored as plain text in the slot
- **Example**: Names, titles, simple notes

```typescript
{
  type: 'text',
  label: 'Name',
  description: 'Simple text without formatting'
}
```

## Legacy References

### ❌ "Rich Text" (DEPRECATED)
The term "Rich Text" is **no longer used** in the system. It was a legacy reference that has been replaced by:
- `markdown_property` for inline formatted content
- `markdown_file` for file-based formatted content

## AI Assistant Guidelines

When the AI assistant suggests property types:

### ✅ Correct Usage
```json
{
  "type": "markdown_property",
  "label": "Description"
}
```

```json
{
  "type": "markdown_file",
  "label": "Full Documentation"
}
```

### ❌ Incorrect Usage (Legacy)
```json
{
  "type": "rich_text",  // ❌ This does not exist
  "label": "Description"
}
```

## When to Use Each Type

| Type | Best For | Max Length | Formatting | Storage |
|------|----------|------------|------------|---------|
| `text` | Labels, names, IDs | Short | None | Inline |
| `markdown_property` | Descriptions, notes | Medium | Full Markdown | Inline |
| `markdown_file` | Documentation, articles | Long | Full Markdown | External file |

## Migration Notes

If you encounter references to "Rich Text" in:
- **System prompts**: Replace with `markdown_property` or `markdown_file`
- **Documentation**: Update to use correct terminology
- **Code comments**: Clarify the distinction between inline and file-based markdown
- **AI responses**: Correct the AI to use proper type names

## Related Files

- Property type definitions: `app/src/types/index.ts` (line 127)
- Property editor UI: `app/src/components/editors/atoms/EditorProperties.tsx` (lines 32-55)
- Action definitions: `app/src/lib/actions/definitions.ts`

---

**Last Updated**: 2026-01-20  
**Status**: Active  
**Replaces**: Any "Rich Text" references
