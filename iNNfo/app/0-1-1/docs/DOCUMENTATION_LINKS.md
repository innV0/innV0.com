# Documentation Links Reference

This document provides a complete map of all documentation pages for easy reference by the AI assistant.

**Base URL:** `/docs/index.html#/`

---

## Introduction

- **Overview**: `/docs/index.html#/01-introduction/overview`
  - What is kNNowledge, core concepts, use cases

- **Key Features**: `/docs/index.html#/01-introduction/key-features`
  - Metamodel-driven architecture, multiple views, widgets, AI assistant, file management

- **Getting Started**: `/docs/index.html#/01-introduction/getting-started`
  - Quick start tutorial, first model creation

---

## User Guide

- **File Format**: `/docs/index.html#/02-user-guide/file-format`
  - Complete `.nn.md` specification, syntax reference

- **Metamodel Definition**: `/docs/index.html#/02-user-guide/metamodel-definition`
  - Creating classes, defining relationships, configuring widgets

- **Model Creation**: `/docs/index.html#/02-user-guide/model-creation`
  - Building hierarchies, adding instances, organizing models

- **Views Guide**: `/docs/index.html#/02-user-guide/views-guide`
  - Metamodel View, Outline View, Matrix View, Unified View, Advanced View

- **AI Assistant**: `/docs/index.html#/02-user-guide/ai-assistant`
  - Setup, capabilities, prompting tips, workflows

- **Modeling Best Practices**: `/docs/index.html#/02-user-guide/modeling-best-practices`
  - Hierarchical organization, grouping rules, relationship semantics, metamodel documentation

---

## Technical Reference

- **Architecture**: `/docs/index.html#/03-technical-reference/architecture`
  - System design, component structure, data flow

- **Data Model**: `/docs/index.html#/03-technical-reference/data-model`
  - TypeScript types, interfaces, data structures

- **Parser**: `/docs/index.html#/03-technical-reference/parser`
  - Parsing logic, serialization, file format handling

- **State Management**: `/docs/index.html#/03-technical-reference/state-management`
  - Zustand store, Immer, state updates

- **Components**: `/docs/index.html#/03-technical-reference/components`
  - React components, UI architecture

---

## Widgets

- **Widgets Overview**: `/docs/index.html#/04-widgets/widgets-overview`
  - Widget system introduction, common patterns

- **Binary Widget**: `/docs/index.html#/04-widgets/binary-widget`
  - Yes/No toggles, configuration, use cases

- **Scale Widget**: `/docs/index.html#/04-widgets/scale-widget`
  - Numeric ratings, min/max, colors

- **Set Widget**: `/docs/index.html#/04-widgets/set-widget`
  - Predefined options, selection

- **Cycle Widget**: `/docs/index.html#/04-widgets/cycle-widget`
  - Status values, rotation

- **Number Widget**: `/docs/index.html#/04-widgets/number-widget`
  - Numeric input, formatting, currency

- **Text Widget**: `/docs/index.html#/04-widgets/text-widget`
  - Free text, multiline, placeholders

- **Mermaid Widget**: `/docs/index.html#/04-widgets/mermaid-widget`
  - Diagram relationships, flowcharts

---

## Development

- **Setup**: `/docs/index.html#/05-development/setup`
  - Development environment, installation

- **Project Structure**: `/docs/index.html#/05-development/project-structure`
  - Codebase organization, folder layout

- **Coding Standards**: `/docs/index.html#/05-development/coding-standards`
  - Code style, conventions, best practices

- **Deployment**: `/docs/index.html#/05-development/deployment`
  - Build process, release guide

- **Contributing**: `/docs/index.html#/05-development/contributing`
  - Contribution guidelines

---

## AI Context

- **Syntax Conventions**: `/docs/index.html#/06-ai-context/syntax-conventions`
  - Complete syntax reference for AI

- **Metamodel for AI**: `/docs/index.html#/06-ai-context/metamodel-for-ai`
  - Metamodel patterns and examples

- **Prompting Guide**: `/docs/index.html#/06-ai-context/prompting-guide`
  - AI interaction patterns

---

## Special Documents

- **User Actions**: `/docs/index.html#/USER_ACTIONS`
  - Complete list of all user actions

- **Documentation Summary**: `/docs/index.html#/DOCUMENTATION_SUMMARY`
  - Overview of documentation structure

---

## Topic to Link Mapping

Use this mapping to quickly find relevant documentation:

### Creating/Modifying Metamodel
- `/docs/index.html#/02-user-guide/metamodel-definition`
- `/docs/index.html#/02-user-guide/file-format`

### Creating/Modifying Model
- `/docs/index.html#/02-user-guide/model-creation`
- `/docs/index.html#/02-user-guide/modeling-best-practices`
- `/docs/index.html#/02-user-guide/file-format`

### Using Views
- `/docs/index.html#/02-user-guide/views-guide`

### Working with Widgets
- `/docs/index.html#/04-widgets/widgets-overview`
- Specific widget: `/docs/index.html#/04-widgets/[widget-name]-widget`

### Using AI Assistant
- `/docs/index.html#/02-user-guide/ai-assistant`
- `/docs/index.html#/02-user-guide/modeling-best-practices`
- `/docs/index.html#/06-ai-context/prompting-guide`

### Model Organization and Hierarchy
- `/docs/index.html#/02-user-guide/modeling-best-practices`
- `/docs/index.html#/02-user-guide/model-creation`

### All Available Actions
- `/docs/index.html#/USER_ACTIONS`

---

## Usage Instructions for AI

When responding to user questions:

1. **Identify the topic** of the user's question
2. **Find the relevant documentation link(s)** from this reference
3. **Include the link(s)** in your response using this format:
   ```
   📚 Learn more: [Topic Name](/docs/index.html#/path/to/doc)
   ```
4. **Always use absolute paths** starting with `/docs/index.html#/`
5. **Include multiple links** if the topic spans multiple documents
6. **Prioritize user-facing docs** (User Guide) over technical docs unless specifically asked

---

**Last Updated:** 2025-12-03  
**Version:** 1.0
