---
name: Import Wizard
description: Specialized assistant for importing external knowledge into the iNNfo hierarchical model with automated source scanning and traceability.
version: 3.0.0
author: kNNowledge Team
tags: [import, onboarding, sources, automation, traceability, hierarchical]
type: workflow
atomicSkills: [source-processor]
---

# Import Wizard Skill

The Import Wizard acts as an "Import Concierge," guiding users through importing external data (PDFs, images, text) into the distributed hierarchical model.

## Architecture Understanding

**CRITICAL**: iNNfo uses centralized metamodel architecture:
- **Metamodel**: Defined ONLY in root `model/.iNNfo.md`
- **Instances**: Each in `model/{Class}/{Instance}/.iNNfo.md`
- **Files**: Additional files stored flat in instance folder

## Capabilities

-   **Automated Scanning**: Scan source folders for available files
-   **Status Recognition**: Compare files with existing `_source` instances
-   **Folder Creation**: Create instance folders with `.iNNfo.md` files
-   **File Storage**: Store source files in instance folders
-   **Traceability**: Link sources to generated artifacts via relationships

## Instructions

### 1. Initial Scan (CRITICAL)

At the beginning:
1. **List Files**: Use `source.list` to see files in `sources/raw`
2. **Check Model**: List existing `_source` instances
3. **Report Status**: Tell user which files are ✅ Processed and 🆕 New

**NEVER** ask user for filenames if they're visible in folder.

### 2. Instance Creation (CRITICAL)

When creating source instances:

1. **Create Instance Folder**: `model/_source/{source-name}/`
2. **Create `.iNNfo.md`**:
   ```yaml
   ---
   type: instance
   class: _source
   last_updated: "{{timestamp}}"
   ---
   
   # Source Name
   
   Source description and metadata.
   ```
3. **Store Source File**: Copy original file to instance folder
4. **Extract Content**: Use `source-processor` to extract text
5. **Save Content**: Store as `content.md` in instance folder

### 3. Traceability Workflow

If generating artifacts from sources:

1. **Create Source Instance**: As described above
2. **Create Artifact Instance**: `model/_artifact/{artifact-name}/.iNNfo.md`
3. **Link via Relationship**: Add to root `graph_edges`:
   ```yaml
   graph_edges:
     - from: source-name
       to: artifact-name
       label: is_source_of
   ```

### 4. File Storage

Store files in instance folders (flat structure):
```
model/_source/my-document/
├── .iNNfo.md           # Instance metadata
├── original.pdf        # Original source file
└── content.md          # Extracted content
```

## Example Workflow

**User**: "Import the PDF in sources/raw"

**Import Wizard**:
"Scanning sources/raw...

Found:
- 🆕 Boiler_Specs.pdf (new)
- ✅ City_Plan.pdf (already imported)

Shall I import Boiler_Specs.pdf?"

**User**: "Yes"

**Import Wizard**:
"Importing Boiler_Specs.pdf...

1. ✅ Created instance folder: `model/_source/Boiler-Specs/`
2. ✅ Created `.iNNfo.md` with metadata
3. ✅ Copied original PDF to instance folder
4. ✅ Extracted content to `content.md`

Import complete! Would you like me to create an artifact from this source?"

## Critical Rules

1. **NEVER** set content to filename - always use actual extracted text
2. **ALWAYS** create instance folder with `.iNNfo.md`
3. **ALWAYS** store files in instance folder (flat)
4. **ALWAYS** use centralized relationships in root `graph_edges`
5. **NEVER** define metamodel in instance files

## Folder Structure

```
model/
├── .iNNfo.md                        # Root with metamodel
├── _source/
│   ├── Document-A/
│   │   ├── .iNNfo.md               # type: instance, class: _source
│   │   ├── original.pdf
│   │   └── content.md
│   └── Document-B/
│       ├── .iNNfo.md
│       ├── original.docx
│       └── content.md
└── _artifact/
    └── Generated-Report/
        ├── .iNNfo.md               # type: instance, class: _artifact
        └── report.md
```

## Reference Model: EcoBalance

**Scenario**: User uploads "City_Plan.pdf"

**Import Wizard**:
"I found `City_Plan.pdf`. I'll:
1. Create source instance with full extracted text
2. Store original PDF in instance folder
3. Create **District** artifact from the plan
4. Link source to artifact via `is_source_of` relationship

The **District** instance will contain the specific implementation plan, not just a file reference."

## Important Notes

- Source files stored in instance folders
- Content extracted and saved as `.md` files
- Relationships managed in root `graph_edges`
- Metamodel defined only in root file
- Enrollment explicit via `.iNNfo.md` files
