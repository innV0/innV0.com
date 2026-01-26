# Parser System

The Parser (`src/services/parser.ts`) is the bidirectional engine that converts between the `.iNNfo.md` text format and the internal application state. In iNNfo 0.4.0, the parser has transitioned from a single-file processor to a **distributed archetype processor**.

## Frontmatter Archetypes

The parser identifies the role of a file based on the `type` field in its YAML frontmatter:

| Archetype      | File Location                | Purpose                                      |
| -------------- | ---------------------------- | -------------------------------------------- |
| **model_root** | `model/.iNNfo.md`            | Metamodel, rules, and global relationships.  |
| **instance**   | `model/[Class]/[Item]/.i.*`  | Entity metadata, attributes, and links.      |
| **agent**      | `model/Agents/[Name]/.i.*`   | AI assistant configuration and personas.     |
| **skill**      | `public/skills/[Name].i.*`   | AI tool definitions and protocol handlers.   |

## Parsing Logic

The parser utilizes two main operations: `parse` and `serialize`.

### 1. `parse(content: string, path: string)`
- **Metadata Extraction:** Uses `gray-matter` for robust YAML extraction.
- **Type Casting:** Dynamically casts the frontmatter to the correct archetype interface based on the `type` field.
- **Content Splitting:** Separates the YAML metadata from the Markdown body.
- **Relationship Resolution:** Maps internal wikilinks (e.g., `[[Alice]]`) to logical nodes based on the file's location in the hierarchy.

### 2. `serialize(data: any)`
- **YAML Generation:** Converts internal state back to clean, human-readable YAML.
- **Body Preservation:** Preserves manual documentation written in the body of the file.
- **Cross-Folder Persistence:** Ensures that relationships added in the UI are correctly persisted in the `model_root`.

## Distributed Loading Integration

The parser works in tandem with the [Hierarchical Loader](./hierarchical-loader.md). While the Loader handles the recursive scanning of the file system, the Parser is called for every file encountered to build the unified store.

### Handling Relationships
In the new architecture, relationships are decoupled from individual instances:
- **Loading:** Parser reads global `graph_edges` from the `model_root`.
- **Linking:** Matches slugs in the edges to the absolute paths provided by the Loader.
- **Saving:** Updates the `model_root` frontmatter when the Matrix View is edited.

## Technical Implementation Details

- **Regex Engine:** Used for secondary extraction of inline links and specific widget patterns.
- **Bidirectional Mapping:** Ensures that renaming a folder in the file system (outside iNNfo) can be resolved if the inner `.iNNfo.md` remains intact.
- **Error Handling:** Gracefully handles malformed YAML by reverting to generic defaults.

## Key Challenges & Solutions

### slug vs. absolutePath
**Challenge:** How to maintain links when folders are moved?
**Solution:** The parser uses **Slugs** (generated from folder names) as the primary keys for relationships, while the Loader maps these to ephemeral `absolutePaths` during each session.

### Bidirectional Saving

**Challenge:** Writing to multiple files without corruption?

**Solution:** Debounced serializers ensure that changes to node attributes only write to that specific folder, while relationship changes only write to the root.

## Next Steps
- [Hierarchical Loader](./hierarchical-loader.md) - Understanding the loading workflow.
- [State Management](./state-management.md) - How the parsed data is stored.
- [File Structure Service](./file-structure-service.md) - How the parser interacts with the disk.
