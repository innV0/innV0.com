# The .iNNfo.md File Format

Complete specification of the iNNfo distributed hierarchical file format.

> [!NOTE]
> **For Most Users:** The [AI Assistant](ai-assistant.md) handles all the complexity of creating and editing `.iNNfo.md` files automatically through natural conversation.
>
> **This guide is for:**
> - Advanced users who want to edit files directly
> - Developers integrating with iNNfo
> - Users troubleshooting file format issues
> - Those curious about how the system works under the hood

## Overview

iNNfo uses a **distributed hierarchical architecture** where model data is organized across a folder structure with `.iNNfo.md` files. The metamodel and relationships are centralized in a root file, while instances are distributed in their own folders.

## Architecture: Centralized Metamodel

- **Metamodel**: Defined ONLY in root `.iNNfo.md`
- **Relationships**: Defined ONLY in root `.iNNfo.md` (`graph_edges`)
- **Instances**: Each instance has its own folder with `.iNNfo.md` file
- **Enrollment**: Explicit - only folders with `.iNNfo.md` (or similar) are part of the model

## Folder Structure

```
.
├── .iNNfo.md                    # ROOT: Metamodel + Relationships
├── Task/                        # Class folder (Natural Name)
│   ├── Design Homepage/         # Instance folder (Natural Name)
│   │   ├── .iNNfo.md           # Instance metadata
│   │   ├── content.md          # Additional files (flat)
│   │   └── screenshot.png
│   └── Implement Login/
│       └── .iNNfo.md
└── Person/
    ├── Alice Smith/
    │   └── .iNNfo.md
    └── Bob Jones/
        └── .iNNfo.md
```

---

## Root File: `model/.iNNfo.md`

The root file contains the **complete metamodel** and **all relationships**.

### Structure

```yaml
---
version: "0.3.0"
type: model_root

metamodel:
  classes:
    ClassName:
      lucideIcon: IconName
      color: colorName
      description: "Description"
      attributes:
        propertyName:
          type: widgetType
          config: {}
  
  relationships:
    - from: SourceClass
      to: TargetClass
      label: relationshipName
      widget: widgetType
      config: {}

graph_edges:
  - from: SourceNodeId
    to: TargetNodeId
    label: relationshipName
    value: relationshipValue
---

# Model Title

Model description and documentation.
```

### Required Fields

- `version`: Model version (e.g., "0.3.0")
- `type`: Must be `model_root`
- `metamodel`: Complete metamodel definition
- `graph_edges`: All instance relationships

### Metamodel Section

#### Class Definition

```yaml
metamodel:
  classes:
    Task:
      lucideIcon: CheckSquare
      color: blue
      description: "Work items to be completed"
      attributes:
        priority:
          type: scale
          config:
            min: 1
            max: 5
        status:
          type: cycle
          config:
            values: [Todo, Doing, Done]
```

**Class Properties:**
- `lucideIcon`: Icon name from Lucide library
- `color`: Tailwind color name (blue, green, red, etc.)
- `description`: Human-readable description
- `attributes`: Property definitions for this class

#### Relationship Definition

```yaml
metamodel:
  relationships:
    - from: Task
      to: Person
      label: assigned_to
      widget: set
      config:
        options: [Alice, Bob, Charlie]
        allowEmpty: true
```

**Relationship Properties:**
- `from`: Source class name
- `to`: Target class name
- `label`: Relationship identifier
- `widget`: Widget type (binary, scale, set, cycle, number, text, mermaid)
- `config`: Widget-specific configuration

### Graph Edges Section

Centralized storage for all instance relationships:

```yaml
graph_edges:
  - from: Design Homepage
    to: Alice
    label: assigned_to
  - from: Design Homepage
    to: Design Homepage
    label: priority
    value: 5
  - from: Implement Login
    to: Bob
    label: assigned_to
```

**Edge Properties:**
- `from`: Source node ID
- `to`: Target node ID
- `label`: Relationship label (must exist in metamodel)
- `value`: Relationship value (optional, depends on widget)

---

## Instance File: `{Class}/{Instance}/.iNNfo.md`

Each instance has its own folder with a `.iNNfo.md` file containing metadata.

### Structure

```yaml
---
type: instance
class: ClassName
last_updated: "2026-01-22T19:00:00Z"
---

# Instance Name

Instance description and content.

Additional markdown content here...
```

### Required Fields

- `type`: Must be `instance`
- `class`: Class name (must exist in metamodel)
- `last_updated`: ISO timestamp of last modification

### Optional Fields

- Custom properties can be added as needed
- Content after frontmatter is free-form Markdown

### Example

**File:** `model/Task/Design-Homepage/.iNNfo.md`

```yaml
---
type: instance
class: Task
last_updated: "2026-01-22T19:30:00Z"
---

# Design Homepage

Create a modern, responsive homepage design.

## Requirements
- Mobile-first approach
- Brand aligned
- Fast loading (\u003c2s)

## Deliverables
- Figma designs
- HTML/CSS implementation
```

---

## Widget Types and Configs

### Binary

```yaml
widget: binary
config:
  trueLabel: Yes
  falseLabel: No
```

### Scale

```yaml
widget: scale
config:
  min: 1
  max: 10
  step: 1
  startColor: blue-400
  endColor: red-600
```

### Set

```yaml
widget: set
config:
  options: [Option A, Option B, Option C]
  allowEmpty: true
```

### Cycle

```yaml
widget: cycle
config:
  values: [Todo, Doing, Done]
  allowNull: true
  nullLabel: Not Started
```

### Number

```yaml
widget: number
config:
  decimals: 2
  format: currency
  currency: EUR
  min: 0
  max: 1000000
```

### Text

```yaml
widget: text
config:
  multiline: true
  maxLength: 500
  placeholder: Enter description
```

### Mermaid

```yaml
widget: mermaid
config:
  diagramType: flowchart
  direction: LR
```

---

## Enrollment

**Explicit Enrollment:** Only folders with `.iNNfo.md` files are part of the model.

### To Enroll a Folder

1. Create a `.iNNfo.md` file in the folder
2. Set `type: instance` (or `type: class` for class folders)
3. Provide required metadata

### To Disenroll a Folder

1. Delete the `.iNNfo.md` file
2. The folder and its contents are ignored by the model

---

## Complete Example

### Root File: `model/.iNNfo.md`

```yaml
---
version: "0.3.0"
type: model_root

metamodel:
  classes:
    Task:
      lucideIcon: CheckSquare
      color: blue
      description: "Work items"
    Person:
      lucideIcon: User
      color: green
      description: "Team members"
  
  relationships:
    - from: Task
      to: Person
      label: assigned_to
      widget: set
      config:
        options: [Alice, Bob, Charlie]
    - from: Task
      to: Task
      label: priority
      widget: scale
      config:
        min: 1
        max: 5

graph_edges:
  - from: Design Homepage
    to: Alice
    label: assigned_to
  - from: Design Homepage
    to: Design Homepage
    label: priority
    value: 5
  - from: Implement Login
    to: Bob
    label: assigned_to
  - from: Implement Login
    to: Implement Login
    label: priority
    value: 4
---

# Task Management Model

Manage team tasks and assignments.
```

### Instance File: `model/Task/Design-Homepage/.iNNfo.md`

```yaml
---
type: instance
class: Task
last_updated: "2026-01-22T19:30:00Z"
---

# Design Homepage

Create a modern, responsive homepage design.

## Requirements
- Mobile-first
- Brand aligned
- Fast loading
```

### Instance File: `model/Person/Alice/.iNNfo.md`

```yaml
---
type: instance
class: Person
last_updated: "2026-01-22T19:30:00Z"
---

# Alice

Senior designer with 5 years of experience.
```

---

## Validation Rules

### Root File
- ✅ Must have `type: model_root`
- ✅ Must have `metamodel` section
- ✅ At least one class defined
- ✅ Valid widget types in relationships
- ✅ `graph_edges` references existing nodes and labels

### Instance Files
- ✅ Must have `type: instance`
- ✅ Must have `class` field
- ✅ Class must exist in root metamodel
- ✅ File must be in `model/{ClassName}/{InstanceName}/` structure

### Relationships
- ✅ Source and target nodes must exist
- ✅ Label must exist in metamodel
- ✅ Value must match widget type

---

## Best Practices

1. **Centralized Metamodel** - Define all classes and relationships in root file
2. **Natural Naming** - Use natural language names for classes, instances and folders. Do NOT normalize (hyphenate/lowercase).
3. **Explicit Enrollment** - Only create `.iNNfo.md` for folders you want in the model
4. **Flat Attachments** - Keep additional files in same folder as `.iNNfo.md`
5. **Human-Readable** - Maintain plain Markdown with YAML frontmatter
6. **Rich Documentation** - Use Markdown content in instance files for rich documentation

---

## Migration from Legacy `.nn.md`

If you have legacy `.nn.md` files, use the **Migration Wizard** AI skill to convert them to the new format:

1. Load your `.nn.md` file
2. Ask AI: "Migrate this model to the new hierarchical format"
3. AI will create the folder structure and distribute content

---

## Updates

Update this specification when:
- New widget types are added
- Metamodel structure changes
- New archetype types are introduced
- Validation rules change
