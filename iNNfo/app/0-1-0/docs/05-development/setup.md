# Development Setup

Guide for setting up kNNowledge development environment.

## Prerequisites

### Required

- **Node.js:** Version 20.19+ or 22.12+
- **npm:** Version 10+ (comes with Node.js)
- **Git:** For version control

### Recommended

- **VS Code:** With extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/[your-org]/knnowledge.git
cd knnowledge/app
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- React 19
- TypeScript 5.9
- Vite 5.4
- Zustand 5.0
- Tailwind CSS 3.4
- Mermaid 11.12
- And all dev dependencies

### 3. Verify Installation

```bash
npm run dev
```

Open `http://localhost:5173` - you should see kNNowledge running.

## Development Commands

### Start Dev Server

```bash
npm run dev
```

- Starts Vite dev server on port 5173
- Hot Module Replacement (HMR) enabled
- Opens in default browser (optional)

### Build for Production

```bash
npm run build
```

- Compiles TypeScript
- Bundles with Vite
- Outputs to `dist/`
- Minifies and optimizes

### Preview Production Build

```bash
npm run preview
```

- Serves production build locally
- Test before deploying

### Lint Code

```bash
npm run lint
```

- Runs ESLint on all `.ts` and `.tsx` files
- Reports errors and warnings

## Project Structure

```
app/
├── src/              # Source code
├── public/           # Static assets
├── docs/             # Documentation
├── dist/             # Build output (generated)
├── node_modules/     # Dependencies (generated)
└── [config files]
```

See [Project Structure](./project-structure.md) for details.

## Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Set custom port
VITE_PORT=5173

# Optional: API endpoints (if backend is added)
VITE_API_URL=http://localhost:3000
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Vite Configuration

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change for GitHub Pages
  server: {
    port: 5173,
    open: true, // Auto-open browser
  },
})
```

### TypeScript Configuration

Main config: `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

App config: `tsconfig.app.json` - Compiler options for app code  
Node config: `tsconfig.node.json` - Compiler options for config files

### Tailwind Configuration

Edit `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

### ESLint Configuration

Edit `eslint.config.js`:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## IDE Setup

### VS Code

Recommended `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feature/my-feature
```

### 2. Make Changes

Edit files in `src/`

### 3. Test Locally

```bash
npm run dev
```

Verify changes in browser.

### 4. Lint Code

```bash
npm run lint
```

Fix any errors.

### 5. Build

```bash
npm run build
```

Ensure build succeeds.

### 6. Commit

```bash
git add .
git commit -m "feat: add my feature"
```

Use [Conventional Commits](https://www.conventionalcommits.org/).

### 7. Push

```bash
git push origin feature/my-feature
```

### 8. Create Pull Request

On GitHub, create PR from your branch to `main`.

## Debugging

### Browser DevTools

- **Console:** View logs and errors
- **React DevTools:** Inspect component tree
- **Network:** Monitor API calls (if applicable)
- **Sources:** Set breakpoints in source code

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

Set breakpoints in VS Code, press F5 to debug.

### Zustand DevTools

Install Redux DevTools extension, then:

```typescript
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools(
    immer((set) => ({
      // ... store definition
    }))
  )
)
```

## Common Issues

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
VITE_PORT=5174 npm run dev
```

### Node Version Mismatch

```bash
# Check version
node --version

# Install correct version (using nvm)
nvm install 20.19
nvm use 20.19
```

### Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"

# Or rebuild
npm run build
```

## Testing (Future)

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:coverage
```

## Performance Profiling

### React DevTools Profiler

1. Install React DevTools extension
2. Open DevTools → Profiler tab
3. Click record
4. Interact with app
5. Stop recording
6. Analyze flame graph

### Vite Build Analysis

```bash
npm run build -- --mode analyze
```

View bundle size and composition.

## Hot Tips

- **Fast Refresh:** Edit components, see changes instantly
- **Import Aliases:** Use relative imports for now
- **Type Checking:** TypeScript catches errors before runtime
- **Tailwind IntelliSense:** Get autocomplete for CSS classes
- **Mermaid Live Editor:** Test diagrams at https://mermaid.live

## Next Steps

- [Project Structure](./project-structure.md) - Understand the codebase
- [Coding Standards](./coding-standards.md) - Follow conventions
- [Contributing](./contributing.md) - How to contribute
- [Deployment](./deployment.md) - Deploy your changes
