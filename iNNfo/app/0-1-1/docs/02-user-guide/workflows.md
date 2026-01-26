# Common Workflows

This guide covers common workflows for working with kNNowledge models. Each workflow shows the **AI-first approach** followed by manual alternatives.

## Adding New Instances

### Via AI Assistant (Recommended)

The easiest way to add instances is through conversation:

**Single Instance:**
```
You: "Add a new Task called 'Fix Bug #123'"
AI: "I've created the task 'Fix Bug #123'. Would you like to set any properties or relationships?"
```

**Multiple Instances:**
```
You: "Add three new people: David, Emma, and Frank"
AI: "I've added David, Emma, and Frank as Person instances. Would you like to assign any tasks to them?"
```

**With Properties:**
```
You: "Create a high-priority task called 'Security Audit' and assign it to Alice"
AI: "I've created 'Security Audit' with high priority and assigned it to Alice."
```

### Via Navigator View

1. Navigate to the parent node in the Navigator
2. Right-click the parent → **Add Child**
3. Enter the name in `[[brackets]]` format
4. Press Enter to confirm

### Via File Edit (Advanced)

1. Open your `.nn.md` file in a text editor
2. Add a new line under the appropriate parent:
   ```markdown
   - [[Parent Node]]
       - [[New Child Node]]
   ```
3. Save and reload in kNNowledge

## Defining Relationships

### Via AI Assistant (Recommended)

**Create Relationships:**
```
You: "Assign the 'Design Homepage' task to Alice"
AI: "Done! I've created the assignment relationship."
```

**Batch Relationships:**
```
You: "Assign all frontend tasks to Bob and all backend tasks to Charlie"
AI: "I've analyzed your tasks and created the assignments based on their descriptions."
```

**Define New Relationship Types:**
```
You: "I want to track which tasks depend on other tasks"
AI: "I'll add a 'depends_on' relationship to your metamodel. How should this work - can a task depend on multiple other tasks?"
```

### Via Matrix View

1. Switch to **Matrix View**
2. Select the relationship type from the dropdown (e.g., "Task → Person (assigned_to)")
3. Click cells to set values
4. Values auto-save immediately

**Tips:**
- Use filters to focus on specific subsets
- Sort columns to organize your view
- Export to CSV for external analysis

### Via File Edit (Advanced)

Add to the `graph_edges` section in the frontmatter:

```yaml
graph_edges:
  - from: Design Homepage
    to: Alice
    label: assigned_to
  - from: Design Homepage
    to: Design Homepage
    label: priority
    value: 5
```

## Documenting Nodes

### Via AI Assistant (Recommended)

**Generate Documentation:**
```
You: "Write documentation for the 'Design Homepage' task explaining the requirements"
AI: "I'll create comprehensive documentation covering objectives, requirements, and deliverables..."
```

**Update Documentation:**
```
You: "Add a section about accessibility requirements to the Design Homepage documentation"
AI: "I've added an accessibility section with WCAG AA compliance guidelines..."
```

**Bulk Documentation:**
```
You: "Generate documentation for all tasks that don't have any"
AI: "I've identified 5 tasks without documentation. I'll create descriptions for each based on their names and relationships..."
```

### Via Detail Panel

1. Click a node in any view to open the detail panel
2. Switch to the **Documentation** tab
3. Write or edit Markdown content
4. Content auto-saves

**Markdown Support:**
- Headings, lists, tables
- Code blocks with syntax highlighting
- Links and images
- Mermaid diagrams

### Via File Edit (Advanced)

Add to the `## Documentation` section:

```markdown
## Documentation

### [[Design Homepage]]
type:: nn-documentation

# Homepage Design Requirements

## Objectives
- Create modern, responsive homepage
- Align with brand guidelines

## Key Elements
1. Hero section with CTA
2. Feature highlights
```

## Organizing Your Model

### Via AI Assistant (Recommended)

**Restructure Hierarchy:**
```
You: "Group all frontend tasks under a 'Frontend Development' parent task"
AI: "I'll create a 'Frontend Development' task and move the relevant tasks under it..."
```

**Create Categories:**
```
You: "Organize my tasks by priority - create High Priority, Medium Priority, and Low Priority groups"
AI: "I've created three organizational nodes and distributed your tasks based on their priority values..."
```

### Via Navigator View

1. **Drag and Drop** (if enabled) - Drag nodes to reorder or reparent
2. **Cut and Paste** - Right-click → Cut, then right-click parent → Paste
3. **Rename** - Click the node name to edit inline

### Via File Edit (Advanced)

Reorganize the outline structure:

```markdown
## Model

- [[Task]]
    - [[Frontend Development]]
        - [[Design Homepage]]
        - [[Implement Login UI]]
    - [[Backend Development]]
        - [[API Design]]
        - [[Database Schema]]
```

## Exporting and Sharing

### Full Model Export

1. Click **File Actions** (folder icon)
2. Select **Export Model**
3. Choose format:
   - `.nn.md` - Full model with all data (recommended)
   - JSON - For programmatic access
4. Save to your computer

### Selective Export

**Via AI:**
```
You: "Export all tasks assigned to Alice as a separate model"
AI: "I'll create a filtered export containing Alice's tasks and their related nodes..."
```

### Version Control

**Recommended Workflow:**

1. Keep your `.nn.md` files in a Git repository
2. Commit changes regularly with descriptive messages
3. Use branches for experimental changes
4. Share via GitHub/GitLab for collaboration

**Example:**
```bash
git add my-model.nn.md
git commit -m "Added security audit tasks and assigned to team"
git push
```

## Searching and Filtering

### Via AI Assistant (Recommended)

**Semantic Search:**
```
You: "Find all tasks related to user authentication"
AI: "I found 5 tasks related to authentication: Login UI, Password Reset, OAuth Integration..."
```

**Complex Queries:**
```
You: "Show me all high-priority tasks that aren't assigned to anyone"
AI: "I found 3 unassigned high-priority tasks: [list]"
```

### Via Navigator View

1. Use the **Search** box at the top
2. Filter by:
   - Node name (text search)
   - Type/Class
   - Properties
3. Results highlight in the tree

### Via Matrix View

1. Use column filters to narrow down rows/columns
2. Sort by relationship values
3. Export filtered results

## Bulk Operations

### Via AI Assistant (Recommended)

**Batch Creation:**
```
You: "Create 10 sprint planning tasks numbered Sprint 1 through Sprint 10"
AI: "I've created 10 sprint tasks with sequential numbering..."
```

**Batch Updates:**
```
You: "Set all tasks in the 'Backend Development' group to medium priority"
AI: "I've updated the priority for 7 backend tasks to medium..."
```

**Batch Deletion:**
```
You: "Delete all completed tasks from last quarter"
AI: "I found 12 completed tasks from Q4. Should I proceed with deletion?"
```

### Via File Edit (Advanced)

For bulk operations, editing the file directly can be faster:

1. Open `.nn.md` in a text editor with multi-cursor support (VS Code, Sublime)
2. Use find-and-replace or multi-cursor editing
3. Save and reload

## Troubleshooting Common Issues

### Model Won't Load

**Symptoms:** Error message when loading `.nn.md` file

**Solutions:**
1. **Check YAML syntax** - Use a YAML validator
2. **Verify wikilinks** - Ensure all `[[brackets]]` are closed
3. **Class names** - Verify they match metamodel definitions exactly (case-sensitive)

**Ask AI:**
```
You: "My model won't load, can you check for errors?"
AI: "I'll analyze your model file... I found an issue on line 45: unclosed wikilink [[Task Name"
```

### Relationships Not Showing

**Symptoms:** Relationships defined but not visible in Matrix View

**Solutions:**
1. Check that both source and target nodes exist
2. Verify relationship label matches metamodel definition
3. Ensure relationship type is defined in metamodel

**Ask AI:**
```
You: "Why isn't the 'assigned_to' relationship showing up?"
AI: "I checked your metamodel and found that 'assigned_to' isn't defined in the relationships section. Would you like me to add it?"
```

### Performance Issues

**Symptoms:** Slow loading or laggy interface with large models

**Solutions:**
1. **Split large models** - Break into multiple `.nn.md` files
2. **Reduce documentation** - Move large docs to external files
3. **Limit visible nodes** - Use filters to show subsets

**Ask AI:**
```
You: "My model is getting slow. How can I optimize it?"
AI: "Your model has 500+ nodes. I recommend splitting it into domain-specific files. Would you like me to suggest a structure?"
```

## Next Steps

- [AI Assistant Guide](ai-assistant.md) - Master AI-driven workflows
- [Views Guide](views-guide.md) - Learn all view capabilities
- [Metamodel Definition](metamodel-definition.md) - Design complex metamodels
- [File Format](file-format.md) - Understand the technical details
