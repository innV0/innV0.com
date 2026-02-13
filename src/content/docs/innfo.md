---
version: 0.1.0
title: iNNfo.defiNNition specification
url: https://innv0.com/docs/iNNfo.defiNNition.md
author: iNNfo Team
status: Draft
metamodel: https://innv0.com/defiNNition/defiNNition.md
description: A framework for hierarchical modeling and knowledge management using Markdown files with integrated YAML metamodels.
sidebar:
  order: 6
---

# iNNfo.defiNNition specification

## A framework for hierarchical modeling and knowledge management using Markdown files with integrated YAML metamodels

## Philosophy

iNNfo follows a **local-first** and **AI-native** philosophy. It treats the file system as the primary database, where information is naturally organized into hierarchies. It values human-readable files that are easily parsed by both humans and machines, ensuring that knowledge remains accessible even without specialized tools.

## Objectives

* **Structural Standard**: Define a clear way to represent models, types, and items using standard directory structures.
* **AI Interoperability**: Provide structured context for LLMs to navigate and modify complex knowledge graphs.
* **Recursive Integrity**: Use Markdown and YAML to maintain a self-describing architecture.
* **Zero-Metadata Principles**: Minimize boilerplate by using folder structures and implicit definitions.

## Specification

### 1. Node Discovery and Hierarchy

* **Node Definition**: Every directory containing an `iNNfo.md` file is considered a **Node**.
* **Node Category**: A node MUST belong to one of the following three categories, defined in the `category` field of the YAML frontmatter:
    * **Model**: The root node of a modeling domain.
    * **Type**: A node that defines the schema (fields) and metadata for a category of things.
    * **Item**: A node that represents a specific element or "thing" in the model.
* **Nesting**: Item folders MAY contain subfolders. 
    * If a subfolder contains an `iNNfo.md` file, it is treated as a nested item node.
    * If a subfolder does NOT contain an `iNNfo.md` file, it is considered a regular directory for assets (images, documents, etc.) and is outside the model system.

### 2. YAML Front Matter (Metadata)

All `iNNfo.md` files MUST begin with a YAML block.

#### 2.1. Common Fields

* `iNNfo_version`: MUST specify the version (e.g., "1.1.0").
* `category`: MUST be `Model`, `Type`, or `Item`.
* `last_updated`: SHOULD be an ISO timestamp.

#### 2.2. Model Node (Root)

Defines the global metamodel and relationships:
* `metamodel`:
    * `types`: A map of type definitions (alternative to separate Type nodes).
    * `relationships`: A list of permitted association rules between types.
* `graph_edges`: A global list of relationships between specific node IDs.

#### 2.3. Type Node

Defines a reusable category:
* `fields`: A record of field definitions. Each field MUST have a `type` (e.g., `text`, `scale`, `set`).
* `presentation`: Visual settings:
    * `icon`: Lucide icon name.
    * `color`: Color identifier.
    * `emoji`: Representative emoji.
* `ai`: Instructions for AI assistants (prompts, descriptions, examples).

#### 2.4. Item Node

Represents data:
* `type`: (Mandatory) The name of the `Type` this node belongs to.
* `fields`: A record of values corresponding to the type definition.

### 3. File Names

* The primary metadata file MUST be named `iNNfo.md`.
* For specific naming strategies, files following the pattern `[slug]iNNfo.md` MAY be used as a primary discovery mechanism.

### 4. Content Format

* The content following the YAML block MUST be valid Markdown.
* All narrative documentation, descriptions, and extended notes are stored in the Markdown body.

## Template

### Model Root Template

````markdown
---
iNNfo_version: "0.1.0"
category: Model

metamodel:
  types:
    Task:
      icon: CheckSquare
      color: blue
  relationships:
    - from: Task
      to: Task
      label: depends_on
      widget: text

graph_edges: []
---

# My Modeling Domain
General overview of the model.
````

### Type Node Template

````markdown
---
iNNfo_version: "0.1.0"
category: Type

fields:
  status:
    type: set
    config:
      options: [Todo, Doing, Done]
    label: Status

presentation:
  icon: Box
  color: green

ai:
  description: "Represents a generic item in the system."
---

# Base Type
Documentation for this type definition.
````

### Item Template

````markdown
---
iNNfo_version: "0.1.0"
category: Item
type: Task
fields:
  status: Todo
---

# Specific Task Name
Detailed description of this item.
````

## Examples

### Hierarchical Projects
A root `Model` directory. Inside, a `Type` folder named `Project` with a `iNNfo.md` (category: Type). Then, multiple `Project` item folders, each containing sub-items of `Task`.

### Knowledge Graph
A `Model` root defining `Concept` and `Relationship` types. Separate folders for each `Concept` (category: Item) with cross-references managed in the `graph_edges` of the root or as inline relationships in the body.
