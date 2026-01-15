# Component Reference

This document provides an overview of the key React components in `src/components/`.

## View Components (`src/components/views/`)

These are the top-level components for each main view.

- **`NavigatorView`**: The primary explorer. Renders a graph-aware tree of nodes.
- **`MatrixView`**: Renders the relationship grid using interactive widgets.
- **`MetamodelView`**: Renders the Mermaid class diagram of the model's definition.
- **`SourceImportView`**: Handles document ingestion and AI-assisted entity extraction.
- **`SkillsDashboard`**: Interface for managing AI skills and specialized tools.
- **`DocumentationView`**: Dedicated reader for application and model documentation.
- **`HistoryView`**: Tracks and displays chronological changes to the model.
- **`DebugView`**: Advanced view for inspecting raw state and parser behavior.

## Common Components (`src/components/common/`)

Reusable UI elements used across multiple views.

- **`Layout`**: Main app shell, including top navigation and sidebar logic.
- **`EmptyModelState`**: Beautiful empty state shown when no model is loaded.
- **`FileControlButtons`**: Unified controls for folder loading, saving, and refreshing.
- **`MermaidRenderer`**: Wrapper for safe Mermaid diagram rendering.
- **`MatrixCell`**: Renders matrix intersections and delegates to specific widgets.
- **`InstanceTable`**: Specialized table for viewing and editing class instances.

## Editor Components (`src/components/editors/`)

Granular editing interfaces.

- **`UnifiedEntityContent`**: The unified component for viewing and editing node/class details.
- **`RelationshipEditor`**: Dedicated interface for managing complex entity connections.

## Widget Components (`src/components/widgets/`)

Interactive inputs for specific relationship types (Binary, Scale, Set, etc.).
See [Widgets Overview](../04-widgets/widgets-overview.md) for details.

## Panel Components (`src/components/panels/`)

- **`AIChatPanel`**: Centralized chat interface for interacting with AI and skills.
- **`ActionPlanPanel`**: Displays proposed AI changes for user review.
