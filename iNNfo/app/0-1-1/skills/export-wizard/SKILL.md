---
name: Export Wizard
description: Master coordinator for model export from distributed hierarchical structure. Guides users through selecting formats and initiating export specialists.
version: 3.0.0
author: kNNowledge Team
tags: [export, documentation, artifacts, workflow, hierarchical]
type: workflow
atomicSkills: [export-doc, export-html, export-markdown]
---

# Export Wizard Skill

The Export Wizard is the master coordinator for exporting the Knowledge Model from the distributed hierarchical structure.

## Architecture Understanding

**CRITICAL**: iNNfo uses distributed hierarchical architecture:
- **Metamodel**: Centralized in root `model/.iNNfo.md`
- **Instances**: Distributed in `model/{Class}/{Instance}/.iNNfo.md`
- **Export**: Consolidates distributed data into chosen format

## Capabilities

-   **Format Configuration**: Guide between Markdown, HTML, or Doc formats
-   **Scope Definition**: Choose Full (Metamodel + Instances), Metamodel only, or Instances only
-   **Hierarchical Collection**: Gather data from distributed folder structure
-   **Artifact Creation**: Save exports as new instances in `model/_artifact/`
-   **Handoff**: Orchestrate specialized export skills

## Instructions

### 1. Configuration First

Ensure these are defined before starting:
- **Format**: Markdown, HTML, or Doc
- **Scope**: Full, Metamodel only, or Instances only
- **Filtering**: Which classes to include (optional)

### 2. Data Collection

For hierarchical models:
1. **Load Root**: Read `model/.iNNfo.md` for metamodel and relationships
2. **Scan Instances**: Recursively scan `model/` for instance `.iNNfo.md` files
3. **Consolidate**: Merge into unified data structure
4. **Filter**: Apply class filters if specified

### 3. Artifact Creation

Every export must be saved as artifact:
1. **Create Folder**: `model/_artifact/{export-name}/`
2. **Create `.iNNfo.md`**:
   ```yaml
   ---
   type: instance
   class: _artifact
   last_updated: "{{timestamp}}"
   export_format: markdown|html|doc
   export_scope: full|metamodel|instances
   ---
   
   # Export Name
   
   Exported on {{date}}
   ```
3. **Save Export**: Store exported file in artifact folder

### 4. Checklist

Always propose execution plan using `ui_set_checklist`:
- [ ] Collect metamodel from root
- [ ] Scan instance folders
- [ ] Generate export file
- [ ] Create artifact instance
- [ ] Save export to artifact folder

## Export Formats

### Markdown Export

Consolidates hierarchical model into single `.md` file:
```markdown
# Model Title

## Metamodel

[Classes and relationships from root]

## Instances

[All instances from folders]

## Relationships

[All relationships from root graph_edges]
```

### HTML Export

Interactive HTML with navigation:
- Metamodel visualization
- Instance browser
- Relationship matrix
- Search functionality

### Doc Export

Word document with:
- Table of contents
- Metamodel diagrams
- Instance listings
- Relationship tables

## Example Workflow

**User**: "Export my model to Markdown"

**Export Wizard**:
"I'll export your model to Markdown format.

**Configuration:**
- Format: Markdown
- Scope: Full (Metamodel + Instances)
- Classes: All

**Plan:**
1. Load metamodel from `model/.iNNfo.md`
2. Scan all instance folders
3. Generate consolidated Markdown
4. Create artifact in `model/_artifact/model-export-2026-01-22/`

Proceed?"

**User**: "Yes"

**Export Wizard**:
"Exporting...

✅ Loaded metamodel (5 classes, 12 relationships)
✅ Scanned 23 instances across 5 classes
✅ Generated Markdown export (15 KB)
✅ Created artifact: `model/_artifact/model-export-2026-01-22/`
✅ Saved export as `export.md`

Export complete! You can find it in the artifacts folder."

## Critical Rules

1. **Collect from Root**: Always read metamodel from `model/.iNNfo.md`
2. **Scan Hierarchically**: Recursively scan instance folders
3. **Create Artifact**: Every export saved as artifact instance
4. **Preserve Structure**: Maintain class hierarchy in export
5. **Include Relationships**: Export centralized `graph_edges`

## Folder Structure

```
model/
├── .iNNfo.md                        # Source: metamodel
├── Task/
│   ├── Design-Homepage/
│   │   └── .iNNfo.md               # Source: instance
│   └── Implement-Login/
│       └── .iNNfo.md
└── _artifact/
    └── model-export-2026-01-22/
        ├── .iNNfo.md               # Export artifact metadata
        └── export.md               # Exported file
```

## Reference Model: EcoBalance

**Scenario**: Exporting sustainability metamodel for presentation

**Export Wizard**:
"I can export the **EcoBalance** metamodel for you. I suggest:

**Format**: HTML
**Scope**: Metamodel only
**Output**: Interactive document showing classes like `District` and `Infrastructure` with their relationships

This will create a clean, interactive document perfect for presentations."

## Important Notes

- Exports consolidate distributed hierarchical data
- Metamodel always from root `model/.iNNfo.md`
- Instances collected from folder scan
- Relationships from root `graph_edges`
- All exports saved as artifacts
