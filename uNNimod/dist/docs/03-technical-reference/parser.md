# Parser System

The Parser (`src/core/parser.ts`) is the core engine of NN Modeler. It handles the bidirectional conversion between the `.nn.md` text format and the internal object model.

## Parsing Process (`parse`)

The parsing process happens in four stages:

1. **Section Extraction**: The file is split into `Metamodel`, `Model`, `Relationships`, and `Documentation` blocks using regex.
2. **Metamodel Parsing**:
   - Parses the Mermaid `classDiagram`.
   - Extracts classes, icons, colors, and relationship definitions.
   - Uses regex to parse widget configurations from Mermaid comments and edge definitions.
3. **Model Parsing**:
   - Parses the indented outline.
   - Builds a recursive tree of `Node` objects.
   - Infers node types based on the Metamodel classes.
   - **Note**: The parser enforces wikilink wrapping (e.g., `[[content]]`) for the internal `content` property if not present in the source. Use UI helpers to strip these for display.
4. **Relationship Parsing**:
   - Parses the Mermaid `graph`.
   - Extracts connections and values.
   - Maps them to the `Relationship` objects.
5. **Documentation Association**:
   - Maps documentation blocks to their corresponding nodes.

## Serialization Process (`serialize`)

When saving, the internal state is converted back to text:

1. **Metamodel**: Reconstructs the Mermaid class diagram.
2. **Model**: Flattens the node tree into an indented list.
3. **Relationships**: Generates the Mermaid graph lines.
4. **Documentation**: Appends the documentation sections.

## Key Challenges & Solutions

### Widget Config Parsing
Mermaid doesn't natively support complex JSON objects in edge labels.
**Solution**: We use a custom syntax `{widget:type, config:{...}}` inside the label string and parse it manually, stripping it before rendering the diagram visually if needed (though currently we keep it for persistence).

### Type Inference
Nodes in the outline don't explicitly state their type.
**Solution**: The parser maintains a stack during traversal. If a node matches a known Class name, it sets the current context type. Children inherit this type unless they match a different Class name.

### Robustness
The parser is designed to be forgiving.
- Missing sections are ignored.
- Invalid widget configs default to `text`.
- Unknown node types are treated as generic nodes.
