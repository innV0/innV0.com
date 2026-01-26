# Getting Started

This guide will help you create your first model in **iNNfo** using the AI Assistant and the distributed file system.

## Prerequisites

- Modern web browser (Chrome, Edge)
- **Google Account** to obtain a [Gemini API Key](../get-gemini-api-key.md)
- A folder on your computer to store your model (local-first)

## Installation

### Option 1: Deployed Web Version (Recommended)

Visit the application at **[https://innv0.com/iNNfo/](https://innv0.com/iNNfo/)**.

iNNfo is a standalone single-page application. No installation is required - simply open the URL, authorize folder access, and start modeling.

### Option 2: Download & Use

You can download the static files and open `index.html` directly from your local machine. All your data stays local in your folder.

## Your First Model

Let's create a simple task management model across a folder hierarchy.

### Step 1: Initialize Your Workspace

1. Create a new folder on your computer named `My-Project`.
2. Inside it, create a `model` folder.
3. In iNNfo, click the **Folder** icon in the top navigation bar.
4. Click **"Select Root Folder"** and select your `model` folder.
5. Authorize the browser to read and write to this folder.

### Step 2: Understand the Interface

When you open iNNfo, you'll see:

- **Top Navigation** - View switcher (Home, Navigator, Matrices, Metamodel, Skills)
- **Top Bar Controls** - Folder selector, model switcher, and sync buttons
- **Main Area** - View content (Dashboard, Tree, Matrix, or Diagram)
- **Detail Panel** - Integrated editor (right side) for node properties and content
- **AI/Skills Panel** - Access to specialized AI assistants (bottom right)

### Step 3: Explore the Sample

If you're unsure how to start, click **"Load Full Test Model"** on the Welcome screen to see a comprehensive Beatles-themed example demonstrating the hierarchical structure.

### Step 4: Set Up the AI Assistant

The AI Assistant is the recommended way to build models in iNNfo. It understands the folder hierarchy and distributed file format.

1. Click the **AI** button (bottom right corner).
2. Click the **Settings** icon.
3. Enter your **Google Gemini API Key**.
   - Get your key from [Google AI Studio](https://aistudio.google.com/app/apikey).
   - The key is stored locally in your browser.

> [!TIP]
> Use the **Architect** agent for structural design and the **Documenter** for adding content to your folders.

### Step 5: Create Your Model with AI

Build your task management model through conversation:

**Example Conversation:**

> **You:** "I want to create a task management system. Create classes for Task and Person."
>
> **AI:** "I've updated your root metamodel in `.iNNfo.md` with Task and Person classes."
>
> **You:** "Create a task called 'Design Homepage' and a person named 'Alice'."
>
> **AI:** "I've created the folders `model/Task/Design-Homepage/` and `model/Person/Alice/` with their respective `.iNNfo.md` files."

The AI will handle:
- **Metamodel Enrollment:** Updating the root configuration.
- **Folder Creation:** Organizing instances into typed directories.
- **Metadata Generation:** Creating `.iNNfo.md` markers for each entity.

### Step 6: Understanding the Distributed Structure

Unlike traditional tools, iNNfo stores your model as a **folder hierarchy**:

1. **Root Configuration** (`model/.iNNfo.md`): Stores your metamodel and all cross-folder relationships.
2. **Class Folders** (`model/Task/`): Logical groupings of entities.
3. **Instance Folders** (`model/Task/Design-Homepage/`): Individual entities with:
   - `.iNNfo.md`: Entity metadata and links.
   - `content.md`: Detailed documentation (optional).
   - Any other files (images, PDFs) associated with the entity.

> [!NOTE]
> iNNfo uses **Explicit Enrollment**. A folder only becomes an "Entity" in your model if it contains a `.iNNfo.md` file.

See [Hierarchical Loader](../03-technical-reference/hierarchical-loader.md) for details.

### Step 7: Refine and Edit

- **Navigate:** Use the **Navigator** view to browse the folder tree and see your model.
- **Connect:** Use the **Matrix** view to link tasks to people across folders.
- **Document:** Select a folder in the Navigator and use the **Content** tab in the detail panel to write Markdown.

### Step 8: Persistence

Your changes are saved **directly to your local folder** as you work. There is no manual save button; iNNfo uses a debounced auto-save mechanism via the File System Access API.

## Advanced: Manual Model Setup

You can set up a model manually by creating the folder structure yourself:

1. **`model/.iNNfo.md`** (Root Metamodel):
```yaml
---
type: model_root
version: 0.4.0
metamodel:
  classes:
    Task:
      icon: CheckSquare
      color: '#3B82F6'
    Person:
      icon: User
      color: '#10B981'
---
```

2. **`model/Task/Design-Homepage/.iNNfo.md`** (Instance Marker):
```yaml
---
type: instance
class: Task
---
# Design Homepage
Requirement specs go here...
```

## Tips for Success

- **Browser Choice:** Use **Chrome** or **Edge** for full File System Access API support.
- **Root Folder:** Select a dedicated empty folder or your existing `model` directory.
- **Agent Choice:** Start with the **Architect** to establish your classes before adding instances.
- **Sync:** If you modify folders externally, click the **Refresh** button in the top bar.

## Next Steps

- [Key Features](./key-features.md) - Explore iNNfo's capabilities
- [Using the AI Assistant](../02-user-guide/ai-assistant.md) - Master prompting and agents
- [File Format](../02-user-guide/file-format.md) - Specification for `.iNNfo.md` files
- [Hierarchical Loader](../03-technical-reference/hierarchical-loader.md) - Understanding the loading engine
