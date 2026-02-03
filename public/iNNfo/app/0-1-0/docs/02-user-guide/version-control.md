# Version Control & Export

uNNimod provides a built-in mechanism to manage versions of your models (Snapshots). This allows you to maintain a history of changes, experiment with new features without losing stability, and follow standard versioning practices.

## Versioning Philosophy

The application encourages **Semantic Versioning (SemVer)** but allows flexibility. Each version is saved as a complete, standalone `.nn.md` file (Snapshot).

### File Naming Convention

When you create a version, the filename is automatically generated following this pattern:

```
[BaseName]_V_[Major]-[Minor]-[Patch]_[Timestamp].nn.md
```

- **BaseName**: The name of your project/model.
- **_V_**: A fixed separator indicating the start of the version segment.
- **Major-Minor-Patch**: The semantic version numbers (e.g., `1-0-0` for `v1.0.0`).
- **Timestamp**: (Optional) `_YYYY-MM-DD_HH-mm` to uniquely identify the exact moment of export.

**Example:** `MyProject_V_1-0-0_2023-10-27_10-30.nn.md`

## Creating a Version

1. Click on the **Export** button in the top navigation bar (or "Crear Versión" in History view).
2. The **Create Version / Export** modal will appear.
3. **Base Filename**: Verify or edit the base name of your model.
4. **Semantic Versioning**:
   - Check "Use Semantic Versioning".
   - Use the **Bump** buttons (+) to increment Major, Minor, or Patch numbers.
5. **Timestamp**:
   - Check "Attach Timestamp" if you want to include the date and time.
6. **Preview**: Check the generated filename at the bottom.
7. Click **Create Version** to download the file.

## Importing Versions

When you import a file with the version suffix (e.g., `Project_V_1-0-0.nn.md`), the application is smart enough to detect it. It will set the internal **Current Filename** to `Project`, removing the version suffix so that your next export doesn't result in nested versions like `Project_V_1.0.0_V_1.1.0`.

## Semantic Versioning Guide

- **MAJOR** version when you make incompatible API changes (or massive structural changes to the model).
- **MINOR** version when you add functionality in a backward compatible manner (e.g., adding new classes or relationships).
- **PATCH** version when you make backward compatible bug fixes (e.g., correcting typos, adjusting properties).
