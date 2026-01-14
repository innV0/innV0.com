# Release Generation and Distribution

This guide explains how to generate portable, standalone releases of kNN5 for distribution.

## Release Architecture

kNN5 uses a **dual-repository architecture**:

- **Repo A (Source)**: Development repository with full source code
- **Repo B (Release)**: Distribution repository with standalone builds and templates

Both repositories share the same version tags for consistency.

## Release Artifacts

The release process generates the following artifacts in `dist-release/`:

| File             | Description                            | Size    |
| ---------------- | -------------------------------------- | ------- |
| `index.html`     | Main modeling application (standalone) | ~6.4 MB |
| `viewer.html`    | Read-only model viewer                 | ~1.3 MB |
| `template.nn.md` | Base model template for new projects   | ~3 KB   |
| `sample.nn.md`   | Example model for demonstration        | ~1 KB   |
| `README.md`      | Distribution documentation             | ~1 KB   |

## Generating Releases

### Prerequisites

- Node.js 20.19+ or 22.12+
- All dependencies installed (`npm ci` in `app/`)

### Build Command

From the project root:

```bash
node scripts/package-release.mjs
```

This script:
1. Cleans the `dist-release/` directory
2. Builds the standalone app (`index.html`)
3. Builds the model viewer (`viewer.html`)
4. Copies template and sample models
5. Generates a distribution README

### Build Output

```
dist-release/
├── index.html          # Standalone modeling app
├── viewer.html         # Model viewer
├── template.nn.md      # New project template
├── sample.nn.md        # Example model
└── README.md           # Usage instructions
```

## Standalone Build Configuration

### App Build (`vite.standalone.config.ts`)

```typescript
export default defineConfig({
    plugins: [react(), viteSingleFile()],
    base: './',
    build: {
        outDir: 'dist-standalone',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                format: 'iife',
                inlineDynamicImports: true,
            }
        }
    }
})
```

Key features:
- **IIFE format**: Enables `file://` protocol execution
- **Single file**: All assets inlined via `vite-plugin-singlefile`
- **Relative paths**: `base: './'` for portability

### Viewer Build (`vite.viewer.config.ts`)

```typescript
export default defineConfig({
    plugins: [react(), viteSingleFile()],
    base: './',
    build: {
        outDir: 'dist-viewer',
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'viewer.html'),
            output: {
                format: 'iife',
                inlineDynamicImports: true,
            }
        }
    }
})
```

## Using the Releases

### Modeling App

Simply open `index.html` in any modern browser:

- **New Project**: Click "New Project" to initialize from `template.nn.md`
- **Connect Folder**: Use File System Access API to work with local files

No server required. Works via `file://` protocol.

### Model Viewer

The viewer displays models in a read-only CMS-like interface.

**Usage:**
```
viewer.html?model=sample.nn.md
```

**Examples:**
```
# View the sample model
viewer.html?model=sample.nn.md

# View a custom model (relative path)
viewer.html?model=../my-models/project.nn.md

# View from same directory
viewer.html?model=mymodel.nn.md
```

The viewer:
- Parses `.nn.md` files
- Displays classes, instances, and relationships
- Provides search and filtering
- Supports all widget types

## Distribution Workflow

### Manual Distribution

1. Generate release artifacts:
   ```bash
   node scripts/package-release.mjs
   ```

2. Verify build:
   ```bash
   # Check files exist
   ls -lh dist-release/
   
   # Test locally
   # Open dist-release/index.html in browser
   ```

3. Distribute:
   - Zip the `dist-release/` folder
   - Upload to GitHub Releases
   - Share via any file hosting service

### Automated CI/CD (Future)

Planned GitHub Actions workflow:

```yaml
name: Release Build

on:
  push:
    tags:
      - 'v*'

jobs:
  build-release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: |
          cd app
          npm ci
      
      - name: Generate Release
        run: node scripts/package-release.mjs
      
      - name: Create Archive
        run: |
          cd dist-release
          zip -r ../kNN5-${{ github.ref_name }}.zip .
      
      - name: Upload to Release
        uses: softprops/action-gh-release@v1
        with:
          files: kNN5-${{ github.ref_name }}.zip
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Versioning

Releases follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes

### Creating a Versioned Release

1. Update version in `app/package.json`:
   ```json
   {
     "version": "0.5.0"
   }
   ```

2. Commit and tag:
   ```bash
   git add app/package.json
   git commit -m "chore: bump version to 0.5.0"
   git tag -a v0.5.0 -m "Release v0.5.0"
   git push origin main --tags
   ```

3. Generate release:
   ```bash
   node scripts/package-release.mjs
   ```

4. Create GitHub Release with artifacts

## Template Model

The `template.nn.md` includes:

- Core metamodel classes (`_Agent`, `_Skill`, `_Source`, `_info`, `_config`, `_users`)
- Resident agents (Researcher, Librarian, Matchmaker, Architect, Exporter)
- Default skills (Source Processor, Canvas Design, Skill Creator)

Users can initialize new projects from this template via the "New Project" button.

## Sample Model

The `sample.nn.md` demonstrates:

- Three simple classes (`EntityA`, `EntityB`, `EntityC`)
- Multiple instances with properties
- Relationships between instances

Perfect for testing the viewer and demonstrating basic functionality.

## Deployment Targets

### Primary: Local Filesystem

Releases are optimized for local use:
- No server required
- Works via `file://` protocol
- Full privacy (no data leaves machine)

### Secondary: Static Hosting

Can also be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static file host

See [Deployment Guide](./deployment.md) for hosting instructions.

## Troubleshooting

**Build fails:**
- Ensure Node.js 20.19+ or 22.12+
- Run `npm ci` in `app/` directory
- Check TypeScript compilation: `npx tsc -b`

**Viewer doesn't load model:**
- Verify model path is correct
- Check browser console for errors
- Ensure `.nn.md` file is valid (test in main app first)

**File too large:**
- Standalone builds are intentionally large (~6-8 MB)
- All dependencies are inlined for portability
- Gzipped size is much smaller (~1.8 MB)

## Next Steps

- [Deployment Guide](./deployment.md) - Deploy to hosting platforms
- [Project Structure](./project-structure.md) - Understand the codebase
- [Contributing](./contributing.md) - Contribute to development
