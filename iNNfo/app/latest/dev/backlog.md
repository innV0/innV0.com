# iNNfo Product Backlog

This document tracks architectural patterns and features inspired by other Personal Knowledge Management (PKM) and Semantic Data systems.

## Architectural Enhancements

### 1. Dynamic Transclusion (In-context Viewports)
- **Source:** TiddlyWiki
- **Description:** Allow fragments of information or entire node views to be embedded within other nodes without duplication.
- **Goal:** Implement an "Embedded View" widget that allows a node (e.g., "Project") to show a live, interactive view of its related tasks or diagrams directly in its detail panel.

### 2. Strict FileSystem Rules
- **Source:** Dendron
- **Description:** Enforce file path patterns based on the Metamodel and node properties.
- **Goal:** Add rules to the Metamodel defining where nodes of a specific class should be stored (e.g., `/Minutas/{year}/{month}/{slug}.iNNfo.md`). Automate physical organization on disk.

### 3. Relationship Inference Engine
- **Source:** Semantic Web / RDF
- **Description:** Automatic deduction of symmetric and inverse relationships.
- **Goal:** When `belongs_to` is defined as the inverse of `contains`, the system should automatically render and manage both sides of the relationship, even if only one is explicitly stored in the file metadata.

### 4. Virtual/Dynamic Nodes (Query-Folders)
- **Source:** Logseq / Datalog
- **Description:** Create dynamic views in the navigator based on logical queries.
- **Goal:** Allow users to create "Saved Searches" that appear as folders in the Navigation Tree (e.g., "Pending High Priority Tasks"), grouping nodes functionally regardless of their physical location on disk.

### 5. UI Micro-Kernel (Class-based Layouts)
- **Source:** TiddlyWiki
- **Description:** Decouple UI rendering from the core data structure to allow extensible views.
- **Goal:** Allow the Metamodel to define preferred layouts or "skins" for specific classes (e.g., a "Profile" layout for people, a "Code Editor" layout for snippets, or a "Gallery" layout for assets).

### 6. Differential Property Syncing (Block-level Granularity)
- **Source:** CRDTs / Collaborative Tools
- **Description:** Move from full-file rewrites to property-level delta updates.
- **Goal:** Reduce Git merge conflicts by writing changes at a more granular level. Instead of serializing the entire `.iNNfo.md` file on every edit, target specific fields or blocks to maintain a more stable history.

---
*Created on 2026-01-24 based on comparative architectural analysis.*
