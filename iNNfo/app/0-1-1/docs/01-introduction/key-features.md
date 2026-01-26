# Key Features

iNNfo provides a comprehensive set of features for visual modeling, relationship management, and AI-assisted knowledge engineering.

## 1. Distributed Hierarchical Architecture

Unlike traditional single-file tools, iNNfo treats your **folder structure** as the model.

- **Folder Enrollment:** Any folder containing a `.iNNfo.md` file becomes a first-class entity in your model.
- **Natural Hierarchy:** Nested folders automatically reflect parent-child relationships in the Navigator.
- **Local-First & Private:** Direct access to your local file system via the browser's File System Access API.
- **Flat Metadata:** Metadata is stored alongside your content in `.iNNfo.md` files, keeping your information accessible and human-readable.

## 2. Metamodel-Driven Design

Define your own domain language with a centralized metamodel in `model/.iNNfo.md`.

- **Custom Classes:** Define icons, colors, and semantic descriptions for your entity types.
- **Typed Relationships:** Configure how different entity types connect.
- **Unified Store:** A single Zustand store manages all data slices, ensuring consistency across views.

## 3. Multiple Contextual Views

### Navigator View (Integrated)

A powerful fusion of a **File System Tree** and a **Model Explorer**. Browse your folder hierarchy while managing logical model instances in a single interface.

### Matrix View
An interactive grid for managing relationships between folders using 18+ pre-configured widgets (Scales, Ratings, Tags, etc.).

### Metamodel View

Live-rendered Mermaid diagrams that visualize your model's schema, helping you understand and refine your data structure.

## 4. Resident AI Agents

iNNfo bootstraps 5 specialized AI assistants as resident "nodes" in your model:

- **Architect:** Guides model structure and metamodel design.
- **Analyst:** Provides data insights and logic checks.
- **Documenter:** Automatically generates documentation for your entity folders.
- **Validator:** Ensures model consistency and quality.
- **Assistant:** General help and multi-modal support.

## 5. Extensible AI Skills

Extend your modeling capabilities with a pluggable skills system:
- **Built-in Skills:** Documentation generation, relationship suggestion, and migration wizards.
- **Proactive Execution:** AI can execute complex interaction plans (e.g., "Create 5 tasks and assign them to developers").
- **Context Awareness:** Summarization engines for models with hundreds of nodes.

## 6. Standalone Viewer App

In addition to the main editor, iNNfo includes a **CMS-style viewer**:

- **Read-Only Mode:** Perfect for sharing your model as a website.
- **Static Deployment:** Can be hosted on GitHub Pages or any static server.
- **Direct FS Access:** The viewer reads the same folder structure as the editor.

## 7. Rich Relationship Widgets

Manage attributes and connections with specialized editors:

- **Visual Scales:** 1-10 priority or impact ratings.
- **Cycle Status:** Planned → In Progress → Done workflows.
- **Mermaid Integrations:** Store and render diagrams directly in relationships.
- **Markdown & Code:** Full text and structured data support within attributes.

## 8. Development-Ready Format

- **Git Friendly:** Plain text Markdown and YAML are perfect for version control.
- **Interoperable:** Move folders, rename files, and use external editors like Obsidian or VS Code alongside iNNfo.
- **Open Standards:** Built on standard Markdown and the industry-recognized YAML frontmatter.

## Next Steps

- [Getting Started](./getting-started.md) - Initialize your first workspace
- [Views Guide](../02-user-guide/views-guide.md) - Master the navigation and editors
- [Hierarchical Loader](../03-technical-reference/hierarchical-loader.md) - Technical architecture overview
- [AI Assistant](../02-user-guide/ai-assistant.md) - Leveraging resident agents
