# Viewer App

The iNNfo Viewer (`src/apps/viewer/`) is a lightweight, read-only version of the application designed for consumption and presentation of models. It functions as a CMS-style viewer for the distributed folder structure.

## Architecture

The Viewer shares the same core logic as the main app but with a restricted feature set:

- **Store:** Uses the same `UnifiedStore` but with editing actions disabled.
- **Loader:** Uses the `HierarchicalLoader` to scan the same local folder.
- **Views:** Focuses on the **Navigator** and **Content** views for smooth reading.

## Key Features

### 1. Read-Only Mode
The Viewer ensures that no changes are written back to the disk. It acts as a secure way to share your models with stakeholders without risk of data modification.

### 2. Direct FS Access
Just like the main app, the Viewer uses the Browser File System Access API. When you select a folder, it renders the hierarchy instantly.

### 3. Navigation-Centric UI
- **Searchable Tree:** Find nodes quickly across recursive folders.
- **Rich Content Rendering:** Full-screen Markdown rendering with support for embedded images and diagrams.
- **Responsive Layout:** Optimized for both desktop review and mobile-like tablet viewing.

## Implementation Details

### `ViewerApp.tsx`
The entry point (`src/apps/viewer/ViewerApp.tsx`) initializes a minimal version of the layout, excluding the Matrix View, Metamodel Editor, and AI configuration panels.

### Synchronization
The Viewer listens for file system change events. If you edit a model in the main iNNfo app while the Viewer is open, it will automatically refresh the content to reflect the latest changes.

## Deployment Strategies

### 1. Static Web Hosting
You can build iNNfo and host the `viewer` directory on any static provider (GitHub Pages, Netlify, Vercel).

### 2. Local-Only Viewer
Users can download the built static files and open `index.html` from their local machine to view any model folder they have access to.

### 3. Embedded Viewer
The Viewer is designed to be easily embeddable into other web platforms via iFrames, allowing you to use iNNfo as a documentation engine for larger projects.

## Next Steps
- [Project Structure](./project-structure.md) - Understanding the `apps/` layout.
- [Hierarchical Loader](./hierarchical-loader.md) - How data is fed to the viewer.
- [Getting Started](../01-introduction/getting-started.md) - Initializing a workspace.
