# Antigravity Documentation Protocol

**Purpose:** Instructions for Antigravity AI to keep kNNowledge documentation up-to-date and maintain Agent Skills compliance.

## Agent Skills Directive
All Agent Skills development must be compliant with the Anthropic specification (YAML frontmatter).
Use the **EcoBalance** sample model for all systematic examples.
Refer to `.agent/agents.md` for full specification compliance rules.


After any significant change to kNNowledge, Antigravity should **proactively ask the user** if they want to update the relevant documentation.

## When to Prompt

Prompt the user to update documentation after changes to:

### 1. Application Features
- New views added
- New widgets implemented
- UI/UX changes
- New functionality in existing features

### 2. File Format
- New syntax added to `.nn.md` format
- Widget configuration options changed
- Metamodel syntax extended
- Relationship format modified

### 3. Architecture
- New components added
- State management changes
- Data flow modifications
- Integration with new services

### 4. APIs and Interfaces
- TypeScript types changed
- Component props modified
- Store actions added/changed
- Parser methods updated

### 5. User Interface
- Visual design changes
- Navigation updates
- New UI components
- Layout modifications

## How to Prompt

### Prompt Template

```
I notice you've made changes to [feature/component/syntax]. 

Would you like me to update the relevant documentation?

Affected documentation:
- [List specific docs that need updates]

I can:
1. Update the documentation to reflect these changes
2. Capture new screenshots if UI changed
3. Update code examples if syntax changed
```

### Example Prompts

**After adding a new widget:**
```
I notice you've added a new DateWidget. 

Would you like me to update the documentation?

Affected documentation:
- docs/04-widgets/widgets-overview.md (add DateWidget to list)
- docs/04-widgets/date-widget.md (create new doc)
- docs/02-user-guide/file-format.md (add syntax example)
- docs/06-ai-context/syntax-conventions.md (add config rules)

I can create these updates for you.
```

**After UI changes:**
```
I notice you've updated the Matrix View layout.

Would you like me to update the documentation?

Affected documentation:
- docs/02-user-guide/views-guide.md (update Matrix View section)
- docs/assets/screenshots/ (capture new screenshot)

I can capture a new screenshot and update the guide.
```

**After syntax changes:**
```
I notice you've changed the relationship syntax to support inline configs.

Would you like me to update the documentation?

Affected documentation:
- docs/02-user-guide/file-format.md (update syntax section)
- docs/06-ai-context/syntax-conventions.md (update rules)
- docs/01-introduction/getting-started.md (update examples)

I can update all affected sections.
```

## Documentation Structure Reference

### User-Facing Changes

Update these docs for user-visible changes:

| Change Type | Affected Docs |
|-------------|---------------|
| New feature | `01-introduction/key-features.md` |
| UI change | `02-user-guide/views-guide.md` + screenshots |
| New widget | `04-widgets/widgets-overview.md` + individual widget doc |
| Syntax change | `02-user-guide/file-format.md` |
| Workflow change | `01-introduction/getting-started.md` |

### Developer-Facing Changes

Update these docs for internal changes:

| Change Type | Affected Docs |
|-------------|---------------|
| Architecture | `03-technical-reference/architecture.md` |
| New component | `03-technical-reference/components.md` |
| Data model | `03-technical-reference/data-model.md` |
| Parser logic | `03-technical-reference/parser.md` |
| State management | `03-technical-reference/state-management.md` |
| Project structure | `05-development/project-structure.md` |

### AI Context Changes

Update these docs for AI-related changes:

| Change Type | Affected Docs |
|-------------|---------------|
| Syntax rules | `06-ai-context/syntax-conventions.md` |
| Metamodel patterns | `06-ai-context/metamodel-for-ai.md` |
| AI prompting | `06-ai-context/prompting-guide.md` |

## Screenshot Update Protocol

When UI changes occur:

1. **Identify affected views** - Which views changed?
2. **Capture new screenshots** - Use browser subagent
3. **Update references** - Replace old screenshot filenames
4. **Delete old screenshots** - Clean up assets folder

See [Screenshot Update Guide](../SCREENSHOT_UPDATE_GUIDE.md) for details.

## Documentation Update Workflow

### 1. Detect Change

Monitor for:
- New files in `src/components/`
- Changes to `src/core/types.ts`
- Changes to `src/core/parser.ts`
- UI modifications
- New example files

### 2. Identify Affected Docs

Map the change to documentation files using the tables above.

### 3. Prompt User

Use the prompt template to ask if they want updates.

### 4. Execute Updates

If user agrees:
- Update affected markdown files
- Capture new screenshots if needed
- Update code examples
- Verify cross-references
- Update "last_updated" dates

### 5. Verify Completeness

Check:
- All affected docs updated
- Screenshots current
- Examples working
- Links valid
- No broken references

## Proactive Checks

### After Each Significant Change

Ask yourself:
- Did this change user-facing behavior?
- Did this change file format syntax?
- Did this change architecture?
- Did this change APIs?
- Did this change UI?

If yes to any → Prompt user for doc updates.

### Weekly Review (if applicable)

Suggest:
```
It's been a week since the last documentation update. 

Would you like me to review recent changes and update documentation?

I can:
1. Review commits since last doc update
2. Identify undocumented changes
3. Propose documentation updates
```

## Documentation Quality Standards

When updating docs, ensure:

### Accuracy
- Information matches current implementation
- Code examples work
- Screenshots show current UI
- Links are valid

### Completeness
- All features documented
- All syntax covered
- All widgets explained
- All views described

### Clarity
- Concise writing
- Clear examples
- Helpful diagrams
- Logical organization

### Consistency
- Terminology consistent across docs
- Format consistent
- Style consistent
- Structure consistent

## Special Cases

### Breaking Changes

If change breaks existing functionality:
- Update docs immediately
- Add migration guide
- Update changelog
- Highlight in README

### Experimental Features

If feature is experimental:
- Mark as "Experimental" in docs
- Explain stability status
- Provide feedback channel

### Deprecated Features

If feature is deprecated:
- Mark as "Deprecated" in docs
- Provide alternative
- Set removal timeline

## Automation Opportunities

Future enhancements:

- **Auto-detect changes** - Monitor git commits
- **Auto-generate docs** - From TypeScript types
- **Auto-capture screenshots** - On UI changes
- **Auto-update examples** - Keep examples current

## Documentation Metrics

Track:
- Last update date per doc
- Number of outdated screenshots
- Broken links count
- Missing documentation for features

## User Feedback Loop

Encourage users to:
- Report documentation issues
- Suggest improvements
- Contribute examples
- Share use cases

## Continuous Improvement

Regularly:
- Review documentation structure
- Identify gaps
- Improve clarity
- Add examples
- Update screenshots

## Checklist for Antigravity

After any significant change:

- [ ] Identify change type
- [ ] Map to affected documentation
- [ ] Prompt user for updates
- [ ] Execute approved updates
- [ ] Capture new screenshots if needed
- [ ] Verify cross-references
- [ ] Update last_updated dates
- [ ] Check for broken links
- [ ] Ensure examples work
- [ ] Verify consistency

## Remember

**Documentation is a first-class citizen** in kNNowledge. Keeping it current ensures:
- Better user experience
- Easier onboarding
- Fewer support questions
- Higher quality contributions
- Professional project image

**Always ask. Never assume the user doesn't want documentation updated.**
