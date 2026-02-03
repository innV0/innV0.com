# Syntax and Conventions Reference

**Purpose:** This document provides a complete syntax reference for AI assistants working with iNNfo files and concepts.

**Last Updated:** 2026-01-22

## File Format Overview

iNNfo uses a **distributed hierarchical architecture** with `.iNNfo.md` files organized in folders.

### Architecture

- **Metamodel**: Centralized in root `.iNNfo.md`
- **Relationships**: Centralized in root `.iNNfo.md` (`graph_edges`)
- **Instances**: Distributed in `{Class}/{Instance}/.iNNfo.md`
- **Enrollment**: Explicit - only folders with `.iNNfo.md` (or similar) are part of the model

### Folder Structure

```text
.
├── .iNNfo.md                    # ROOT: type: model_root
├── {Natural Class Name}/
│   └── {Natural Instance Name}/
│       ├── .iNNfo.md           # type: instance
│       └── attachments...      # Additional files (flat)
```

---

## Root File Syntax: `.iNNfo.md`

### Complete Structure

```yaml
---
version: "0.4.0"
type: model_root

metamodel:
  classes:
    "Task Management":
      lucideIcon: CheckSquare
      color: blue
      description: "Description"
      attributes:
        priority:
          type: widgetType
          config: {}
  
  relationships:
    - from: "Task Management"
      to: "Person"
      label: assigned_to
      widget: widgetType
      config: {}

graph_edges:
  - from: "Design Homepage"
    to: "Alice Cooper"
    label: assigned_to
    value: relationshipValue
---

# Model Title

Model description.
```

### Required Fields

- `type`: Must be `model_root`
- `version`: Model version (e.g., "0.4.0")
- `metamodel`: Complete metamodel definition
- `graph_edges`: All instance relationships

---

## Instance File Syntax: `{Class}/{Instance}/.iNNfo.md`

### Structure Definitions

```yaml
---
type: instance
class: "Task Management"
last_updated: "2026-01-22T19:00:00Z"
---

# Design Homepage

Instance description and content.
```

### Required Fields

- `type`: Must be `instance`
- `class`: Class name (must exist in root metamodel)
- `last_updated`: ISO timestamp

---

## Metamodel Syntax

### Class Definition

```yaml
metamodel:
  classes:
    "Critical Tasks":
      lucideIcon: CheckSquare
      color: blue
      description: "Work items to be completed"
      attributes:
        priority:
          type: scale
          config:
            min: 1
            max: 5
```

**Valid Colors:**
`blue`, `green`, `red`, `yellow`, `purple`, `pink`, `indigo`, `gray`, `orange`, `teal`, `cyan`

### Relationship Definition

```yaml
metamodel:
  relationships:
    - from: "Critical Tasks"
      to: "Team Member"
      label: assigned_to
      widget: set
      config:
        options: ["Alice", "Bob", "Charlie"]
```

**Components:**
1. `from`: Source class (must exist)
2. `to`: Target class (must exist)
3. `label`: Relationship identifier (alphanumeric + underscores)
4. `widget`: Widget type (see below)
5. `config`: Widget-specific configuration

---

## Widget Configurations

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
  options: ["High", "Medium", "Low"]
  allowEmpty: true
```

### Cycle

```yaml
widget: cycle
config:
  values: ["Todo", "Doing", "Done"]
  allowNull: true
  nullLabel: "Not Started"
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
  placeholder: "Enter text"
```

### Mermaid

```yaml
widget: mermaid
config:
  diagramType: flowchart
  direction: LR
```

---

## Graph Edges (Relationships)

### Syntax

```yaml
graph_edges:
  - from: "Node Identifier"
    to: "Target Identifier"
    label: relationshipLabel
    value: relationshipValue
```

### Value Formats by Widget

| Widget  | Value Format      | Example           |
| ------- | ----------------- | ----------------- |
| Binary  | `true` or `false` | `true`            |
| Scale   | Number            | `5`               |
| Set     | Option string     | `"High"`          |
| Cycle   | Value string      | `"In Progress"`   |
| Number  | Number            | `50000`           |
| Text    | String            | `"Important"`     |
| Mermaid | Mermaid syntax    | `"A --> B"`       |

---

## Enrollment

### To Enroll a Folder

Create `.iNNfo.md` in the folder:

```yaml
---
type: instance
class: "Task"
last_updated: "2026-01-23T19:00:00Z"
---

# Natural Instance Name
```

### To Disenroll

Delete the `.iNNfo.md` file from the folder.

---

## Validation Rules

### Root File (`.iNNfo.md`)

- ✅ `type` must be `model_root`
- ✅ At least one class in `metamodel.classes`
- ✅ Valid widget types in relationships
- ✅ `graph_edges` references existing nodes and labels

### Instance Files

- ✅ `type` must be `instance`
- ✅ `class` must exist in root metamodel
- ✅ File must be in `{ClassName}/{InstanceName}/` structure

### Relationships

- ✅ Source and target nodes must exist
- ✅ Label must exist in root metamodel
- ✅ Value must match widget type

---

## For AI Assistants

### Critical Rules

1. **Centralized Metamodel**: ALL classes and relationships MUST be defined in root `.iNNfo.md`
2. **No Distributed Metamodel**: Instance files NEVER contain class or relationship definitions
3. **Explicit Enrollment**: Only create `.iNNfo.md` for folders that should be in the model
4. **Flat Attachments**: Additional files go in same folder as `.iNNfo.md`, not in subfolders
5. **Natural Names**: ALWAYS use natural names for classes, instances, and folders. DO NOT normalize or slugify. E.g., Use "Música Romántica" not "musica-romantica".

### When Creating Models

1. **Start with Root**: Always create `.iNNfo.md` first with complete metamodel
2. **Then Instances**: Create instance folders and `.iNNfo.md` files
3. **Add Relationships**: Add to `graph_edges` in root file
4. **Validate**: Ensure all references are correct

### When Modifying Models

1. **Metamodel Changes**: Edit root `.iNNfo.md` only
2. **Instance Changes**: Edit instance `.iNNfo.md` files
3. **Relationship Changes**: Edit `graph_edges` in root file
4. **Never**: Add metamodel to instance files

### Widget Value Validation

When proposing relationships, ensure values match widget constraints:

| Widget Type | Config                      | ✅ Valid Values       | ❌ Invalid Values    |
| ----------- | --------------------------- | -------------------- | ------------------- |
| set         | `{options:[A, B, C]}`       | "A", "B", "C"        | "D", "AB"           |
| cycle       | `{values:[Low, Med, High]}` | "Low", "Med", "High" | "Medium", "L"       |
| scale       | `{min:1, max:10}`           | 1, 5, 10             | 0, 11, "5"          |
| binary      | `{}`                        | true, false          | "Yes", "No", 1, 0   |
| number      | `{min:0, max:100}`          | 0, 50.5, 100         | -1, 101, "50"       |

---

## Examples

### Complete Model

**Root:** `.iNNfo.md`

```yaml
---
version: "0.4.0"
type: model_root

metamodel:
  classes:
    "Project Task":
      lucideIcon: CheckSquare
      color: blue
    "Team Member":
      lucideIcon: User
      color: green
  
  relationships:
    - from: "Project Task"
      to: "Team Member"
      label: assigned_to
      widget: set
      config:
        options: ["Alice Smith", "Bob Jones"]
    - from: "Project Task"
      to: "Project Task"
      label: priority
      widget: scale
      config:
        min: 1
        max: 5

graph_edges:
  - from: "Design Homepage"
    to: "Alice Smith"
    label: assigned_to
  - from: "Design Homepage"
    to: "Design Homepage"
    label: priority
    value: 5
---

# Task Management
```

**Instance:** `Project Task/Design Homepage/.iNNfo.md`

```yaml
---
type: instance
class: "Project Task"
last_updated: "2026-01-23T19:30:00Z"
---

# Design Homepage

Create homepage design.
```

---

## Updates

This syntax reference should be updated when:
- New widget types are added
- Metamodel structure changes
- New archetype types are introduced
- Validation rules change
