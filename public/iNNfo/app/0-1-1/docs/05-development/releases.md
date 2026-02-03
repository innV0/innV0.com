# Release Generation and Distribution

This guide explains how to generate portable, standalone releases of kNN5 for distribution.

## Release Architecture

kNN5 uses a **dual-repository architecture**:

- **Development Repository (kNN5)**: Full source code, development environment, and build tools
- **Distribution Repository (iNNv0.com)**: Standalone builds deployed to GitHub Pages at [https://innv0.com](https://innv0.com)

Both repositories share the same version tags for consistency.

## Release Artifacts

The release process generates the following artifacts in `dist-standalone/`:

| File             | Description                            | Size    |
| ---------------- | -------------------------------------- | ------- |
| `index.html`     | Main modeling application (standalone) | ~6.6 MB |
| `logo.png`       | Application logo                       | ~50 KB  |
| `template.nn.md` | Base model template for new projects   | ~31 KB  |
| `docs/`          | Documentation files                    | Various |
| `skills/`        | AI assistant skills                    | Various |

These artifacts are copied to the iNNv0.com repository and deployed via GitHub Pages.

## Generating Releases

### Prerequisites

- Node.js 20.19+ or 22.12+
- All dependencies installed (`npm ci` in `app/`)

### Build Command

From the `app/` directory:

```bash
cd app
npm run build:standalone
```

This command:
1. Runs TypeScript compilation (`tsc -b`)
2. Builds the standalone app using Vite with `vite.standalone.config.ts`
3. Outputs to `dist-standalone/` directory
4. Inlines all JavaScript, CSS, and assets into a single `index.html` file

### Build Output

```
dist-standalone/
├── index.html          # Standalone modeling app (~6.6 MB)
├── logo.png            # Application logo
├── template.nn.md      # New project template
├── docs/               # Documentation files
└── skills/             # AI assistant skills
```

### Deploying to iNNv0.com

After building, deploy to GitHub Pages:

```bash
# 1. Build the standalone version
cd app
npm run build:standalone

# 2. Copy to iNNv0.com repository
cp -r dist-standalone/* /path/to/innv0.com/

# 3. Commit and push
cd /path/to/innv0.com/
git add .
git commit -m "Update kNN5 application to v[version]"
git push origin main

# 4. GitHub Pages automatically deploys
# Application available at https://innv0.com
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

### Deploying to iNNv0.com (GitHub Pages)

1. **Build the standalone version:**
   ```bash
   cd app
   npm run build:standalone
   ```

2. **Verify build:**
   ```bash
   # Check files exist
   ls -lh dist-standalone/
   
   # Test locally by opening dist-standalone/index.html in browser
   ```

3. **Copy to iNNv0.com repository:**
   ```bash
   # Copy all files from dist-standalone to the iNNv0.com repo
   cp -r dist-standalone/* /path/to/innv0.com/
   ```

4. **Commit and deploy:**
   ```bash
   cd /path/to/innv0.com/
   git add .
   git commit -m "Update kNN5 application to v[version]"
   git push origin main
   ```

5. **Verify deployment:**
   - GitHub Pages automatically builds and deploys
   - Application available at [https://innv0.com](https://innv0.com)
   - Test the deployed version in your browser

### Local Distribution

For distributing the application as a downloadable file:

1. **Build the standalone version:**
   ```bash
   cd app
   npm run build:standalone
   ```

2. **Create a distribution package:**
   ```bash
   # Zip the dist-standalone folder
   cd dist-standalone
   zip -r ../kNN5-standalone.zip .
   ```

3. **Distribute:**
   - Share the `kNN5-standalone.zip` file via any file hosting service
   - Users can extract and open `index.html` in their browser
   - Works completely offline via `file://` protocol

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
