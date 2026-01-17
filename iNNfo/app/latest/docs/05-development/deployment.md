# Deployment and Releases

This guide covers deploying kNN5 to various hosting platforms.

> **Note:** For information on generating standalone release artifacts (single-file distributions), see the [Release Generation Guide](./releases.md).

## Release Architecture Overview

kNN5 uses a **dual-repository architecture**:

- **Repo A (Source)**: Development repository with full source code
- **Repo B (Release)**: Distribution repository with standalone builds (`index.html`, `viewer.html`, templates)

This guide focuses on **deploying the development version** to hosting platforms. For creating portable, standalone releases, see [Release Generation](./releases.md).

## Build Process

### Development Build

```bash
npm run dev
```

Starts Vite dev server at `http://localhost:5173` with:
- Hot Module Replacement (HMR)
- Source maps
- Fast refresh

### Production Build

```bash
npm run build
```

Creates optimized production bundle in `dist/`:
- Minified JavaScript
- Optimized assets
- Tree-shaken dependencies
- Hashed filenames for caching

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Deployment Options

### Option 1: GitHub Pages

#### Setup

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Create workflow file** `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: app/package-lock.json
      
      - name: Install dependencies
        run: |
          cd app
          npm ci
      
      - name: Build
        run: |
          cd app
          npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: app/dist
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Update `vite.config.ts`** for correct base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/knnowledge/', // Replace with your repo name
})
```

4. **Push to GitHub:**

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

Access at: `https://[username].github.io/knnowledge/`

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd app
vercel
```

Follow prompts. Vercel auto-detects Vite configuration.

### Option 3: Netlify

1. **Create `netlify.toml`** in `app/`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy:**
   - Connect GitHub repo in Netlify dashboard
   - Set build directory to `app`
   - Deploy

### Option 4: Static Hosting

Build and upload `dist/` to any static host:
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- DigitalOcean App Platform

## Release Management

### Versioning Strategy

kNNowledge follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes

### Creating a Release

#### 1. Update Version

Edit `app/package.json`:

```json
{
  "version": "0.2.0"
}
```

#### 2. Update Changelog

Create/update `CHANGELOG.md`:

```markdown
# Changelog

## [0.2.0] - 2025-12-10

### Added
- New Mermaid widget for diagram relationships
- AI-powered documentation generation
- Dark mode support

### Changed
- Improved Matrix View performance
- Updated widget configuration syntax

### Fixed
- Parser handling of nested relationships
- Icon rendering in Navigator View
```

#### 3. Commit Changes

```bash
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 0.2.0"
git push origin main
```

#### 4. Create Git Tag

```bash
git tag -a v0.2.0 -m "Release version 0.2.0"
git push origin v0.2.0
```

#### 5. Create GitHub Release

**Via GitHub UI:**

1. Go to repository → Releases → Draft a new release
2. Choose tag: `v0.2.0`
3. Release title: `v0.2.0 - [Feature Name]`
4. Description: Copy from CHANGELOG.md
5. Attach build artifacts (optional):
   ```bash
   cd app
   npm run build
   cd dist
   zip -r ../knnowledge-v0.2.0.zip .
   ```
6. Publish release

**Via GitHub CLI:**

```bash
gh release create v0.2.0 \
  --title "v0.2.0 - Mermaid Widget & AI Enhancements" \
  --notes-file CHANGELOG.md \
  app/dist/knnowledge-v0.2.0.zip
```

### Automated Releases

Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install and Build
        run: |
          cd app
          npm ci
          npm run build
      
      - name: Create Archive
        run: |
          cd app/dist
          zip -r ../../knnowledge-${{ github.ref_name }}.zip .
      
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: knnowledge-${{ github.ref_name }}.zip
          generate_release_notes: true
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Now releases are created automatically when you push a tag.

## CI/CD Pipeline

### Complete Workflow

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: app/package-lock.json
      
      - name: Install dependencies
        run: |
          cd app
          npm ci
      
      - name: Lint
        run: |
          cd app
          npm run lint
      
      - name: Build
        run: |
          cd app
          npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: app/dist
```

## Environment Variables

For production deployments, set:

- **VITE_APP_VERSION**: Injected from package.json
- **VITE_API_URL**: Backend API URL (if applicable)

In `.env.production`:

```env
VITE_APP_VERSION=$npm_package_version
```

Access in code:

```typescript
const version = import.meta.env.VITE_APP_VERSION;
```

## Deployment Checklist

Before deploying:

- [ ] Version bumped in `package.json`
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] Lint errors resolved
- [ ] Production build successful
- [ ] Build tested with `npm run preview`
- [ ] Documentation updated
- [ ] Git tag created
- [ ] GitHub release published

## Rollback Procedure

If a release has issues:

### 1. Revert to Previous Release

```bash
# Find previous tag
git tag -l

# Checkout previous version
git checkout v0.1.0

# Create hotfix branch
git checkout -b hotfix/v0.1.1

# Make fixes, commit, tag
git tag -a v0.1.1 -m "Hotfix release"
git push origin v0.1.1
```

### 2. Redeploy Previous Version

For GitHub Pages:
```bash
git revert <commit-hash>
git push origin main
```

For Vercel/Netlify:
- Use dashboard to rollback to previous deployment

## Monitoring

After deployment:

1. **Check deployment URL** - Verify app loads
2. **Test core features** - Ensure functionality works
3. **Monitor errors** - Check browser console
4. **Performance** - Verify load times
5. **Analytics** - Track usage (if implemented)

## Troubleshooting

**Build fails:**
- Check Node version (requires 20.19+ or 22.12+)
- Clear `node_modules` and reinstall
- Verify all dependencies are compatible

**Deployment fails:**
- Check GitHub Actions logs
- Verify permissions are set correctly
- Ensure secrets are configured

**App doesn't load:**
- Check `base` path in `vite.config.ts`
- Verify assets are being served correctly
- Check browser console for errors

## Next Steps

- [Project Structure](./project-structure.md) - Understand the codebase
- [Contributing](./contributing.md) - How to contribute
- [Coding Standards](./coding-standards.md) - Code conventions
