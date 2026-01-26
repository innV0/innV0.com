# Migrating from legacy .nn.md

iNNfo 0.4.0 introduces a distributed hierarchical architecture. If you have older models in the single-file `.nn.md` format, this guide will help you migrate them using the built-in **Migration Wizard**.

## Why Migrate?

- **Local-First Performance:** Distributed files load significantly faster for large models.
- **Improved AI Context:** Smaller files allow AI agents to understand your model more accurately.
- **Rich Documentation:** Store images, PDFs, and long-form Markdown directly alongside your nodes.
- **Better Organization:** Use folders to categorize your knowledge physically.

## Using the Migration Wizard

The Migration Wizard is available in the **Skills Dashboard**.

### Step 1: Initialize Your Workspace
1. Create a new, empty folder on your computer (e.g., `My-New-Project`).
2. Inside it, create a `model` folder.
3. Open iNNfo and select this `model` folder as your root.

### Step 2: Run the Wizard
1. Navigate to the **Skills** view.
2. Find the **Migration Wizard** skill and click **Run**.
3. Select your legacy `.nn.md` file when prompted.

### Step 3: Deployment
The Wizard will:
1. **Extract the Metamodel:** Create the root `model/.iNNfo.md` file.
2. **Create the Hierarchy:** Build class and instance folders for every node in your legacy model.
3. **Populate Metadata:** Create the individual `.iNNfo.md` files for each entity.
4. **Migrate Relationships:** Port all your existing connections to the new root configuration.

## Manual Migration (Advanced)

If you prefer to migrate manually, follow these steps:

1. **Copy the Metamodel:** Take the YAML from your legacy file and place it in `model/.iNNfo.md` with `type: model_root`.
2. **Recreate Folders:** Create a folder for each `[[Node]]`.
3. **Add Markers:** Place a `.iNNfo.md` file in each folder with `type: instance` and the correct `class`.
4. **Link Content:** Move any long-form text from your legacy file to the respective folder's `.iNNfo.md` body or a `content.md` file.

## Troubleshooting

### "Duplicate Nodes during migration"
If your legacy model had transcluded nodes (same name in multiple places), the Wizard will attempt to create unique folders or use the first occurrence as the primary one. Check the Navigator after migration to ensure the structure is correct.

### "Relationships missing"
Ensure that the `graph_edges` list was successfully copied into your root `.iNNfo.md`. All cross-folder relationships now live at the root level.
