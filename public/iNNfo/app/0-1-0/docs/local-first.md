# Local-First Architecture in kNN5

kNN5 is designed with a **Privacy-First** and **Local-First** philosophy. This means that your data, models, and creative work never leave your computer unless you explicitly share them.

## Why Local-First?

In a world of cloud-only services, kNN5 takes a different approach by prioritizing your sovereignty over your data.

### 1. Absolute Privacy
All processing happens in your browser and on your local machine. Your models, instances, and ideas are for your eyes only. We do not store your data on any central server.

### 2. Full Data Ownership
Your models are saved as standard `.nn.md` (Markdown) files on your hard drive. This means you can:
- Open them with any text editor.
- Version them with Git or any other tool.
- Back them up simply by copying a folder.
- Work without an internet connection.

### 3. Native Performance
By accessing files directly on your disk through the modern **File System Access API**, kNN5 can handle complex models with high performance, without the latency of cloud requests.

## How it works

kNN5 uses your browser's capability to request permission to access a specific folder on your computer. 

- **Permission**: When you select a "Workspace Folder", the browser asks for your permission to read and write to that folder.
- **Persistence**: kNN5 remembers which folder you chose. The next time you open the app, it will ask to reconnect so you can pick up exactly where you left off.
- **File Structure**: The application organizes your models, schemas, and media (images/videos) in a clear, human-readable directory structure.

## Your Security

Because kNN5 is a local-only tool:
- There is no account to hack.
- There is no database to leak.
- There is no tracking of your modeling activity.

---

*kNN5: Modeling the world, starting from your own machine.*
