# File Structure Service

The `FileStructureService` (`src/services/fileStructureService.ts`) is the abstraction layer responsible for all physical folder and file operations. It works in conjunction with the `FileSystemSlice` to provide a high-level API for model persistence.

## Core Responsibilities

- **Folder Scaffolding:** Creating class and instance folder structures.
- **File Management:** Reading and writing `.iNNfo.md` and `content.md` files.
- **Blob Handling:** Reading images and other attachments from the local folder.
- **Slug Management:** Safely converting entity names to file-system-friendly slugs.

## Key API Methods

### 1. `createEntityFolder(parentPath, name, archetype)`
Creates a new directory and initializes it with the appropriate `.iNNfo.md` marker.
- **Workflow:** Slugifies name -> creates directory -> writes template frontmatter.

### 2. `renameEntity(path, newName)`
Renames a directory while maintaining the link integrity.
- **Challenge:** Renaming folders in some browsers requires creating a new folder and moving contents.
- **Solution:** Uses recursive directory move logic when the simple rename API is unavailable.

### 3. `saveFile(path, content)`
Universal method for writing text content to the disk.
- **Safety:** Utilizes atomic write pattern (writing to temp file then swapping) where supported by the browser.

### 4. `getFiles(path)`
Scans a specific folder for attachments (non-`.iNNfo.md` files).
- **Filtering:** Automatically excludes hidden system files (e.g., `.DS_Store`, `Thumbs.db`).

## Interaction with Zustand Store

The service is primarily called from the **DataSlice** during auto-save cycles:

1. **Update Trigger:** User edits a property or documentation.
2. **Serialization:** `Parser` converts the state to a string.
3. **Write:** `FileStructureService` receives the path and the new content string.
4. **Confirmation:** The service returns a success/failure status to trigger UI toasts.

## Error Handling & Permissions

- **Re-authorization:** If the browser session expires, the service triggers a "Request Permission" modal.
- **Conflict Resolution:** If a file was modified externally, the service can detect out-of-sync states using file modified timestamps (lastModified).

## Best Practices

- **Atomic Operations:** Always ensure that directory creation and its marker file creation are treated as a single logical transaction.
- **Slug Stability:** Avoid changing folder names unnecessarily, as this can break external links or Git history.
