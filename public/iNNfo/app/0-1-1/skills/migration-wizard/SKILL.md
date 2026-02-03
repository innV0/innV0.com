---
name: Migration Wizard
description: Specialized assistant for migrating legacy .nn.md files to the new distributed hierarchical .iNNfo.md format.
version: 1.0.0
author: kNNowledge Team
tags: [migration, conversion, legacy, hierarchical]
type: workflow
---

# Migration Wizard Skill

The Migration Wizard helps users convert legacy `.nn.md` files to the new distributed hierarchical `.iNNfo.md` format with centralized metamodel.

## Capabilities

-   **Legacy File Analysis**: Parse and understand `.nn.md` structure
-   **Folder Structure Creation**: Generate hierarchical folder structure
-   **Metamodel Centralization**: Extract and consolidate metamodel in root file
-   **Instance Distribution**: Create individual instance folders with `.iNNfo.md` files
-   **Relationship Migration**: Move relationships to centralized `graph_edges`

## Migration Process

### Step 1: Analysis

1. Load the legacy `.nn.md` file
2. Parse metamodel (classes and relationships)
3. Parse model hierarchy (instances)
4. Parse relationships (inline and global)
5. Show user a summary of what will be migrated

### Step 2: Confirmation

Present migration plan:
```
Legacy file: my-model.nn.md
- Classes: 5
- Instances: 23
- Relationships: 45

Will create:
- Root file: model/.iNNfo.md (metamodel + relationships)
- Class folders: 5
- Instance folders: 23
```

### Step 3: Execution

1. **Create Root File** (`model/.iNNfo.md`):
   - Extract all class definitions from legacy metamodel
   - Extract all relationship definitions
   - Consolidate all relationships into `graph_edges`
   - Set `type: model_root`

2. **Create Folder Structure**:
   - For each class: create `model/{ClassName}/` folder
   - For each instance: create `model/{ClassName}/{InstanceId}/` folder

3. **Create Instance Files**:
   - For each instance: create `.iNNfo.md` with:
     - `type: instance`
     - `class: {ClassName}`
     - `last_updated: {timestamp}`
     - Instance content from legacy file

4. **Migrate Relationships**:
   - Extract inline relationships (`::`syntax)
   - Extract global relationships (Mermaid graph)
   - Consolidate into root `graph_edges`

### Step 4: Verification

1. Verify all classes migrated
2. Verify all instances created
3. Verify all relationships preserved
4. Show migration summary

## Example Migration

### Legacy File: `task-management.nn.md`

```markdown
---
version: "0.2.0"
metamodel:
  classes:
    Task:
      lucideIcon: CheckSquare
      color: blue
    Person:
      lucideIcon: User
      color: green
  relationships:
    - from: Task
      to: Person
      label: assigned_to
      widget: set
---

# Task Management

## Model

- [[Task]]
    - [[Design Homepage]]
    - [[Implement Login]]
- [[Person]]
    - [[Alice]]
    - [[Bob]]

## Relationships

[[Design Homepage]] :: assigned_to :: [[Alice]]
```

### Migrated Structure

**Root:** `model/.iNNfo.md`
```yaml
---
version: "0.3.0"
type: model_root

metamodel:
  classes:
    Task:
      lucideIcon: CheckSquare
      color: blue
    Person:
      lucideIcon: User
      color: green
  
  relationships:
    - from: Task
      to: Person
      label: assigned_to
      widget: set

graph_edges:
  - from: Design Homepage
    to: Alice
    label: assigned_to
---

# Task Management
```

**Instance:** `model/Task/Design-Homepage/.iNNfo.md`
```yaml
---
type: instance
class: Task
last_updated: "2026-01-22T19:00:00Z"
---

# Design Homepage
```

**Instance:** `model/Person/Alice/.iNNfo.md`
```yaml
---
type: instance
class: Person
last_updated: "2026-01-22T19:00:00Z"
---

# Alice
```

## Critical Rules

1. **Preserve All Data**: No data loss during migration
2. **Centralize Metamodel**: All classes and relationships in root
3. **Distribute Instances**: Each instance in own folder
4. **Consolidate Relationships**: All in root `graph_edges`
5. **Explicit Enrollment**: Create `.iNNfo.md` for all instances

## Workflow

**User**: "Migrate my model to the new format"

**Migration Wizard**:
"I'll analyze your legacy `.nn.md` file and migrate it to the new hierarchical format.

**Analysis:**
- Found 3 classes: Task, Person, Project
- Found 12 instances
- Found 18 relationships

**Migration Plan:**
1. Create root `model/.iNNfo.md` with metamodel
2. Create 3 class folders
3. Create 12 instance folders with `.iNNfo.md` files
4. Migrate all relationships to root `graph_edges`

Proceed with migration?"

**User**: "Yes"

**Migration Wizard**:
"Migrating...

✅ Created root file with metamodel
✅ Created class folders: Task, Person, Project
✅ Created 12 instance folders
✅ Migrated 18 relationships to graph_edges

Migration complete! Your model is now using the new hierarchical format."

## Post-Migration

After migration:
1. Verify model loads correctly
2. Check all instances are visible
3. Verify relationships work
4. Delete legacy `.nn.md` file (after backup)

## Important Notes

- Always backup legacy file before migration
- Migration is one-way (no automatic reverse)
- Test migrated model before deleting legacy file
- Legacy `.nn.md` format is no longer supported
