# Extensions

## Overview

Extensions are standalone web applications that extend the main app's functionality. They can run independently (by opening the HTML file directly) or be embedded within the main application via iframe.

## Core Principles

1. **Self-contained**: Extensions must work completely independently, without requiring the main app to function
2. **Framework-agnostic**: Use any tech stack during development, as long as the output is bundled HTML
3. **Desktop-only**: No responsive design requirements
4. **Simple data exchange**: Communication happens through URL parameters or file paths
5. **Read-only**: Extensions cannot modify the main app's model directly

## Architecture

### Development Approach

You can use any framework or tooling you prefer (React+Vite, Vue, vanilla JavaScript, etc.). The only requirement is that the final build output must be self-contained:

- Single HTML file, or
- HTML file with bundled assets (JS/CSS) in the same directory

At runtime, extensions should have no external dependencies except for:
- CSS frameworks loaded from CDN (e.g., Pico.css)
- Standard browser APIs

### File Structure (after build)

```
my-extension/
  ├── index.html     # Entry point (required)
  ├── assets/        # (optional) Bundled JS/CSS if not inlined
  └── data.json      # (optional) Sample data for testing
```

### Styling

**Recommended: Pico.css** - A minimal, classless CSS framework

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

Pico.css provides:
- Clean, semantic HTML styling (no classes needed)
- Minimal visual design that stays out of your way
- Consistent typography and spacing
- Form and button styling

Alternative: Use vanilla CSS, Tailwind, or any other CSS approach. The key is to keep the UI clean and simple.

## Data Exchange

### Simple Data (primitives, small lists)

Pass data through URL parameters:

```
index.html?segments=B2B,B2C&year=2024&title=My+Project
```

**In your extension:**

```javascript
const params = new URLSearchParams(window.location.search);
const segments = params.get('segments')?.split(',') || [];
const year = params.get('year');
const title = params.get('title');
```

**Limitations:**
- URLs have a practical limit of ~2000 characters
- Only string data (you need to parse numbers, booleans, etc.)
- Arrays need manual encoding/decoding (comma-separated values)

### Complex Data (models, large datasets)

For larger or more complex data, use file-based exchange:

**Workflow:**

1. Main app exports data to a file (e.g., `/temp/export-{id}.json`)
2. Main app passes file path via URL: `index.html?data=../../temp/export-123.json`
3. Extension fetches the file: `fetch(params.get('data'))`

**Example:**

```javascript
const dataPath = params.get('data');
if (dataPath) {
  fetch(dataPath)
    .then(response => response.json())
    .then(data => {
      // Use the loaded data
      renderCanvas(data);
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
}
```

**Important Note:** When running in standalone mode (file:// protocol), `fetch()` may not work due to browser security restrictions. Provide a fallback using `<input type="file">` for manual file selection.

### Output Data

When an extension generates results:

1. Extension saves data to a file (user download or save to `/output/result-{id}.json`)
2. User manually imports the file into the main app

**Example export:**

```javascript
function exportResult(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'extension-output.json';
  a.click();
  URL.revokeObjectURL(url);
}
```

## Integration with Main App

### Embedding via Iframe

In a React component:

```tsx
function ExtensionView() {
  const dataPath = '/temp/export-123.json';
  
  return (
    <iframe 
      src={`/extensions/business-canvas/index.html?data=${dataPath}`}
      className="w-full h-full border-0"
      title="Business Canvas Extension"
    />
  );
}
```

### Configuration

Extensions can be registered in the main app's configuration (future feature). For now, they can be placed anywhere in the project and referenced by relative path.

## Development Workflow

### Option 1: Quick Start (Vanilla)

1. Copy `/extensions/_template/` to your extension folder
2. Edit `index.html` directly
3. Open in browser to test
4. No build step required

### Option 2: With Build Tools (Vite Example)

```bash
npm create vite@latest my-extension -- --template vanilla
cd my-extension
npm install
```

**Configure Vite for self-contained output** in `vite.config.js`:

```javascript
export default {
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // Single bundle
      }
    }
  }
}
```

**Build and use:**

```bash
npm run build
# Output: dist/index.html (this is your extension)
```

### Testing

1. **Standalone mode**: Open `index.html` (or `dist/index.html`) directly in browser
2. **With parameters**: `index.html?segments=A,B,C&year=2024`
3. **With data file**: `index.html?data=sample-data.json`
4. **In iframe**: Embed in main app and test parameter passing

## AI Agent Instructions

When creating an extension from scratch, follow these guidelines:

### Technical Requirements

1. Use Pico.css for styling (unless you have specific UI needs)
2. Parse URL parameters using `URLSearchParams`
3. Load data from file path if `?data=` parameter is provided
4. Implement `<input type="file">` fallback for standalone mode
5. Keep dependencies minimal

### Code Structure

```javascript
// 1. Parse URL params
const params = new URLSearchParams(window.location.search);
const config = {
  data: params.get('data'),
  title: params.get('title') || 'Default Title',
  items: params.get('items')?.split(',') || []
};

// 2. Load data file if provided
if (config.data) {
  fetch(config.data)
    .then(r => r.json())
    .then(data => render(data))
    .catch(() => showFilePicker());
} else {
  showFilePicker();
}

// 3. Render UI with Pico.css semantic HTML
function render(data) {
  document.getElementById('app').innerHTML = `
    <article>
      <header>${data.title}</header>
      <p>${data.description}</p>
    </article>
  `;
}
```

### Example Prompt for AI Agent

```
Create a Business Model Canvas extension using vanilla HTML/JavaScript with Pico.css.

The extension should:
- Accept a ?data=path.json parameter with this structure:
  {
    "segments": ["B2B", "B2C"],
    "channels": ["Web", "Mobile"],
    "value_propositions": ["Fast delivery", "Low cost"]
  }
- Render a 9-block canvas layout using Pico.css articles
- Allow editing each field (text inputs)
- Provide an "Export" button to download the modified data as JSON

Follow the template structure in /extensions/_template/
```

## Template Structure

The `/extensions/_template/` folder provides:

- **index.html**: Complete working example showing:
  - URL parameter parsing
  - File loading with fetch()
  - Manual file picker fallback
  - Export functionality
  - Pico.css integration
  
- **README.md**: Quick start guide

- **sample-data.json**: Example data structure for testing

Simply copy this folder and modify it for your specific use case.

## Best Practices

### Data Validation

Always validate input data:

```javascript
function validateData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data format');
  }
  if (!Array.isArray(data.items)) {
    throw new Error('Missing required field: items');
  }
  return true;
}
```

### Error Handling

Provide clear error messages:

```javascript
fetch(dataPath)
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  })
  .catch(error => {
    document.getElementById('error').textContent = 
      `Failed to load data: ${error.message}. Please select a file manually.`;
    document.getElementById('filePicker').style.display = 'block';
  });
```

### File Naming

Use descriptive, lowercase names with hyphens:
- ✅ `business-model-canvas`
- ✅ `gantt-timeline`
- ❌ `Extension1`
- ❌ `MyExtension`

### Documentation

Include a README.md in your extension folder with:
- Purpose and features
- Data format requirements
- Usage examples
- Screenshot (optional)

## Future Enhancements

Potential features that may be added later:

- Extension registry/marketplace
- Versioning and compatibility checking
- Advanced two-way communication (postMessage)
- Extension discovery UI in main app
- Shared component library

For now, keep extensions simple and self-contained.
