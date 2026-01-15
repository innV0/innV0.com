# Screenshot Update Guide

**Purpose:** Instructions for maintaining up-to-date screenshots in the documentation.

## Current Screenshots

Located in: `docs/assets/screenshots/`

### Screenshot Inventory

| Screenshot | File | Used In | Last Updated |
|------------|------|---------|--------------|
| Unified View | `unified_view_*.png` | README.md, key-features.md | 2025-12-03 |
| Metamodel View | `metamodel_view_*.png` | key-features.md | 2025-12-03 |
| Outline View | `outline_view_*.png` | key-features.md | 2025-12-03 |
| Matrix View | `matrix_view_*.png` | key-features.md | 2025-12-03 |
| Advanced View | `advanced_view_*.png` | key-features.md | 2025-12-03 |
| AI Assistant | `ai_assistant_setup_*.png` | key-features.md | 2025-12-03 |

## When to Update Screenshots

Update screenshots when:

- [ ] UI layout changes significantly
- [ ] New views are added
- [ ] Visual styling is updated
- [ ] Widget appearance changes
- [ ] Icons or colors are modified
- [ ] New features are visible in the interface

## How to Capture Screenshots

### Automated Method (Recommended)

Use the browser subagent to capture consistent screenshots:

1. **Ensure app is running:**
   ```bash
   cd app
   npm run dev
   ```

2. **Request screenshot capture:**
   Ask Antigravity to capture screenshots with this prompt:
   ```
   Capture updated screenshots of all views in kNNowledge. 
   Navigate to http://localhost:5173 and capture:
   - Unified View (default)
   - Metamodel View
   - Outline View
   - Matrix View
   - Advanced View
   - AI Assistant panel
   
   Save screenshots to docs/assets/screenshots/
   ```

3. **Verify screenshots:**
   Check that all views are captured correctly and show representative content.

### Manual Method

1. **Open kNNowledge** in browser at `http://localhost:5173`

2. **Load example model:**
   - Click File Actions (folder icon)
   - Load `example-email-response.nn.md` or another representative model

3. **Capture each view:**
   - **Unified View:** Default view, shows model hierarchy
   - **Metamodel View:** Click "Metamodel" button, wait for diagram to render
   - **Outline View:** Click "Outline" button
   - **Matrix View:** Click "Matrix" button, select a relationship from dropdown
   - **Advanced View:** Click "Advanced" button (settings icon)
   - **AI Assistant:** Click "AI" button (bottom right)

4. **Screenshot settings:**
   - **Resolution:** 1920x1080 or higher
   - **Format:** PNG
   - **Crop:** Include relevant UI elements, exclude browser chrome if possible
   - **Naming:** `[view_name]_[timestamp].png`

5. **Save to:** `docs/assets/screenshots/`

## Screenshot Best Practices

### Content

- **Use representative data** - Load a complete example model
- **Show key features** - Ensure important UI elements are visible
- **Avoid empty states** - Screenshots should show the app in use
- **Consistent model** - Use the same example across screenshots for coherence

### Technical

- **High resolution** - At least 1920x1080
- **PNG format** - For crisp UI elements
- **Consistent zoom** - Browser at 100% zoom
- **Clean state** - No dev tools, console errors, or debug overlays

### Composition

- **Full view** - Capture entire view, not just a portion
- **Readable text** - Ensure text is legible at documentation size
- **Highlight features** - If documenting a specific feature, ensure it's prominent

## Updating Documentation References

After capturing new screenshots:

1. **Note new filenames** - Screenshots have timestamps in filenames

2. **Update markdown files:**
   
   Find and replace old screenshot references:
   ```markdown
   <!-- Old -->
   ![Unified View](../assets/screenshots/unified_view_1764749796112.png)
   
   <!-- New -->
   ![Unified View](../assets/screenshots/unified_view_1764800000000.png)
   ```

3. **Files to update:**
   - `docs/README.md`
   - `docs/01-introduction/key-features.md`
   - Any other docs referencing screenshots

4. **Delete old screenshots** (optional):
   ```bash
   cd docs/assets/screenshots
   # Review old files
   ls -la
   # Delete specific old files
   rm unified_view_1764749796112.png
   ```

## Automated Screenshot Workflow

### Future Enhancement

Consider creating a script to automate screenshot capture:

```javascript
// scripts/capture-screenshots.js
import puppeteer from 'puppeteer';

const views = [
  { name: 'unified', selector: '[data-view="unified"]' },
  { name: 'metamodel', selector: '[data-view="metamodel"]' },
  { name: 'outline', selector: '[data-view="outline"]' },
  { name: 'matrix', selector: '[data-view="matrix"]' },
  { name: 'advanced', selector: '[data-view="advanced"]' },
];

async function captureScreenshots() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  await page.goto('http://localhost:5173');
  
  for (const view of views) {
    await page.click(`[data-view-button="${view.name}"]`);
    await page.waitForSelector(view.selector);
    await page.screenshot({
      path: `docs/assets/screenshots/${view.name}_view_${Date.now()}.png`
    });
  }
  
  await browser.close();
}

captureScreenshots();
```

## Screenshot Checklist

Before committing new screenshots:

- [ ] All views captured
- [ ] Representative data loaded
- [ ] High resolution (1920x1080+)
- [ ] PNG format
- [ ] Saved to `docs/assets/screenshots/`
- [ ] Documentation references updated
- [ ] Old screenshots removed (if applicable)
- [ ] Screenshots reviewed for quality
- [ ] No sensitive information visible
- [ ] Consistent with other screenshots

## Troubleshooting

**Screenshot too large:**
- Compress with tools like TinyPNG or ImageOptim
- Target < 500KB per screenshot

**Text not readable:**
- Increase browser zoom to 125% before capturing
- Use higher resolution

**Inconsistent appearance:**
- Clear browser cache
- Use same browser for all screenshots
- Ensure same example model is loaded

**Missing UI elements:**
- Wait for full page load
- Ensure no loading spinners visible
- Check that all components have rendered

## Documentation Updates

Update this guide when:
- Screenshot capture process changes
- New views are added
- Automation scripts are created
- File naming conventions change
