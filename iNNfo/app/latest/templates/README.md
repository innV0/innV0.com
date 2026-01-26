# iNNfo Templates

This directory contains the hierarchical templates for the iNNfo application.

## 📁 Structure

- `template_root.iNNfo.md`: The definitive master template for new models. Includes the full system metamodel.
- `template_instance.iNNfo.md`: Reference template for creating new instances.
- `Archive/`: Contains legacy `.nn.md` files and outdated `.iNNfo.md` templates.

## 🧬 Metamodel

The master template includes the following system classes:
- `_skill`: AI Specialized capabilities.
- `_plan`: Strategic roadmaps.
- `_source`: Data import sources.
- `_chat`: AI conversation history.
- `_artifact`: Generated assets.
- `_info`: General notes.
- `_app`: System nodes (Log, Home, etc.).
- `_config`: Global configurations.

## 🛠️ Usage

These templates are used by the `initializeFromTemplate` method in the `FileSystemSlice` to create the initial structure of a new model.