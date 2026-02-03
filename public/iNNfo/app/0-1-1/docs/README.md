# iNNfo Documentation

**Version:** 0.4.0

Welcome to **iNNfo**, a visual modeling tool for creating and managing hierarchical models with metamodel-driven relationships.

## Quick Start

🚀 **Try it now:** [https://innv0.com](https://innv0.com)

iNNfo is distributed as a standalone single-page application. No installation required - simply open the link in your browser and start modeling. All your data stays local in your browser.

**Key Features:**

- Works entirely in the browser (no server required)
- Local-first architecture (your data never leaves your machine)
- Distributed hierarchical file structure with `.iNNfo.md` files
- Can be used online or downloaded for offline use
- Direct file system access for seamless folder-based workflows

## Quick Links

- [Getting Started](./01-introduction/getting-started.md) - Start here if you're new

- [File Format Reference](./02-user-guide/file-format.md) - Understanding `.iNNfo.md` files and hierarchical structure

- [Architecture](./03-technical-reference/architecture.md) - System design overview

- [AI Context](./06-ai-context/syntax-conventions.md) - For AI assistants working with iNNfo

## Documentation Structure

### 1. Introduction

- [Overview](./01-introduction/overview.md) - What is iNNfo?
- [Key Features](./01-introduction/key-features.md) - Core capabilities
- [Getting Started](./01-introduction/getting-started.md) - Quick start guide
- [Comparativa con Notion](./01-introduction/notion-comparison.md) - En qué se diferencia de Notion

### 2. User Guide

- [File Format](./02-user-guide/file-format.md) - The `.iNNfo.md` specification and hierarchical structure
- [Metamodel Definition](./02-user-guide/metamodel-definition.md) - Defining your schema
- [Model Creation](./02-user-guide/model-creation.md) - Building models
- [Views Guide](./02-user-guide/views-guide.md) - Understanding the interface
- [AI Assistant](./02-user-guide/ai-assistant.md) - Using AI features
- [AI Skills](./02-user-guide/ai-skills.md) - Extensible AI capabilities

### 3. Technical Reference

- [Architecture](./03-technical-reference/architecture.md) - System architecture
- [Data Model](./03-technical-reference/data-model.md) - Core types and structures
- [Glossary](./03-technical-reference/glossary.md) - Terminology reference
- [Parser System](./03-technical-reference/parser.md) - File parsing engine
- [Hierarchical Loader](./03-technical-reference/hierarchical-loader.md) - Distributed model loading
- [State Management](./03-technical-reference/state-management.md) - Unified Zustand store with slices
- [Components](./03-technical-reference/components.md) - React component library

### 4. Widgets

- [Overview](./04-widgets/widgets-overview.md) - Widget system introduction

- [Binary Widget](./04-widgets/binary-widget.md) - Yes/No relationships

- [Scale Widget](./04-widgets/scale-widget.md) - Numeric scales with gradients

- [Set Widget](./04-widgets/set-widget.md) - Predefined options

- [Cycle Widget](./04-widgets/cycle-widget.md) - Click-to-cycle values

- [Number Widget](./04-widgets/number-widget.md) - Numeric input with formatting

- [Text Widget](./04-widgets/text-widget.md) - Free-form text

- [Mermaid Widget](./04-widgets/mermaid-widget.md) - Diagram relationships

### 5. Development

- [Setup](./05-development/setup.md) - Development environment

- [Project Structure](./05-development/project-structure.md) - Codebase organization

- [Coding Standards](./05-development/coding-standards.md) - Code conventions

- [Deployment](./05-development/deployment.md) - Building and releasing

- [Contributing](./05-development/contributing.md) - How to contribute

### 6. AI Context

Documentation specifically designed for AI assistants to understand iNNfo's syntax and conventions.

- [Syntax & Conventions](./06-ai-context/syntax-conventions.md) - Complete syntax reference
- [Metamodel for AI](./06-ai-context/metamodel-for-ai.md) - Metamodel structure guide
- [Prompting Guide](./06-ai-context/prompting-guide.md) - Effective AI interactions

## Screenshots

![Navigator View](./assets/screenshots/outline_view_1764749820870.png)
*Navigator View - Default interface showing model hierarchy*

## For Developers

This is an open-source project. Contributions are welcome! See [Contributing Guide](./05-development/contributing.md).

**Tech Stack:** React 19, TypeScript, Zustand, Mermaid, Tailwind CSS, Vite

## Keeping Documentation Updated

> **Antigravity Protocol:** This documentation should be updated after significant changes to:
>
> - Application features or UI
>
> - File format syntax
>
> - Widget behavior
>
> - API or component interfaces
>
> You will be prompted to update relevant sections after such changes.

## License

[Add license information here]
