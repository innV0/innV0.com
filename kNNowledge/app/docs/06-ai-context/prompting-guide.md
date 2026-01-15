# AI Prompting Guide

**Purpose:** Guide for AI assistants on how to effectively interact with kNNowledge and generate high-quality proposals.

## Understanding the AI Assistant Role

The AI assistant in kNNowledge is designed to be:

1. **Proactive** - Make reasonable assumptions rather than asking clarifying questions
2. **Context-Aware** - Understand the existing metamodel and model
3. **Helpful** - Generate complete, actionable proposals
4. **Bold** - Propose concrete structures that users can accept or reject

## AI System Prompt

The AI receives this system context:

```
You are an expert systems architect and data modeler.
Your goal is to be PROACTIVE and HELPFUL.
Do NOT ask clarifying questions unless the request is completely unintelligible.
Instead, make reasonable ASSUMPTIONS based on the context and present a concrete proposal immediately.
```

## Context Provided to AI

### Metamodel Context

```
Classes: Work, Object, Role, Tool
Relationship Types: input, output, executor, uses
```

### Model Context

```
Existing Nodes: Read Email, Draft Response, Incoming Email, Email Content, ...
```

## Response Format

AI must respond with JSON in this structure:

```json
{
  "nodes": [
    {
      "name": "Node Name",
      "type": "ClassName",
      "description": "Brief one-line description",
      "parent": "Parent Node Name or Root",
      "documentation": "Optional detailed Markdown documentation"
    }
  ],
  "relationships": [
    {
      "source": "Source Node Name",
      "target": "Target Node Name",
      "type": "relationship_label",
      "description": "Reason for this relationship"
    }
  ],
  "explanation": "Brief explanation of assumptions made"
}
```

## Effective Prompting Patterns

### Pattern 1: Adding Nodes

**User Prompt:**
```
Add a new task called "Review Code"
```

**AI Response:**
```json
{
  "nodes": [
    {
      "name": "Review Code",
      "type": "Work",
      "description": "Code review task",
      "parent": "Work"
    }
  ],
  "relationships": [],
  "explanation": "Added 'Review Code' as a Work item under the Work class"
}
```

### Pattern 2: Adding Documentation

**User Prompt:**
```
Add documentation to the "Design Homepage" task explaining the requirements
```

**AI Response:**
```json
{
  "nodes": [
    {
      "name": "Design Homepage",
      "type": "Work",
      "description": "Homepage design task",
      "parent": "Work",
      "documentation": "# Homepage Design Requirements\n\n## Objectives\n- Create modern, responsive homepage\n- Align with brand guidelines\n- Optimize for conversion\n\n## Key Elements\n- Hero section with CTA\n- Feature highlights\n- Social proof\n- Footer with links\n\n## Technical Constraints\n- Mobile-first design\n- Load time < 2s\n- WCAG AA compliance"
    }
  ],
  "relationships": [],
  "explanation": "Added comprehensive documentation to Design Homepage task"
}
```

### Pattern 3: Creating Relationships

**User Prompt:**
```
The Design Homepage task should be assigned to Alice with high priority
```

**AI Response:**
```json
{
  "nodes": [],
  "relationships": [
    {
      "source": "Design Homepage",
      "target": "Alice",
      "type": "assigned_to",
      "description": "Alice is responsible for homepage design"
    },
    {
      "source": "Design Homepage",
      "target": "Design Homepage",
      "type": "priority",
      "description": "High priority task"
    }
  ],
  "explanation": "Assigned Design Homepage to Alice and set priority to high (assuming priority is self-referential scale widget)"
}
```

### Pattern 4: Complex Structures

**User Prompt:**
```
Create a workflow for deploying to production with approval steps
```

**AI Response:**
```json
{
  "nodes": [
    {
      "name": "Deploy to Production",
      "type": "Work",
      "description": "Production deployment workflow",
      "parent": "Work"
    },
    {
      "name": "Run Tests",
      "type": "Work",
      "description": "Execute test suite",
      "parent": "Deploy to Production"
    },
    {
      "name": "Code Review",
      "type": "Work",
      "description": "Peer code review",
      "parent": "Deploy to Production"
    },
    {
      "name": "Manager Approval",
      "type": "Work",
      "description": "Get manager sign-off",
      "parent": "Deploy to Production"
    },
    {
      "name": "Deploy",
      "type": "Work",
      "description": "Execute deployment",
      "parent": "Deploy to Production"
    }
  ],
  "relationships": [
    {
      "source": "Run Tests",
      "target": "Code Review",
      "type": "next",
      "description": "Tests must pass before review"
    },
    {
      "source": "Code Review",
      "target": "Manager Approval",
      "type": "next",
      "description": "Review before approval"
    },
    {
      "source": "Manager Approval",
      "target": "Deploy",
      "type": "next",
      "description": "Approval required before deployment"
    }
  ],
  "explanation": "Created a 4-step deployment workflow with sequential dependencies"
}
```

## Best Practices for AI

### 1. Understand Node vs Documentation

- **Node Name:** Short identifier (e.g., "Design Homepage")
- **Description:** One-line summary
- **Documentation:** Detailed Markdown content (multiple paragraphs, lists, code, etc.)

When user says "add documentation" or "document this", populate the `documentation` field with rich content.

### 2. Infer Parent Relationships

If user doesn't specify parent:
- Look for logical parent in existing model
- Use class name as parent if it's a top-level item
- Use "Root" if completely new concept

### 3. Match Existing Patterns

Analyze existing model structure:
- Naming conventions
- Hierarchy depth
- Relationship patterns

Mirror these in proposals.

### 4. Validate Against Metamodel

Before proposing:
- Ensure `type` matches a defined class
- Ensure relationship `type` exists in metamodel
- Verify source/target classes match relationship definition

### 5. Be Specific

Instead of:
```json
{"name": "Task", "type": "Work"}
```

Prefer:
```json
{"name": "Implement User Authentication", "type": "Work"}
```

### 6. Provide Context in Explanations

Good explanation:
```
"I assumed you wanted this under the 'Backend Development' parent since it's an API-related task"
```

Poor explanation:
```
"Added the task"
```

## Handling Edge Cases

### Ambiguous Requests

**User:** "Add something for testing"

**AI Strategy:**
1. Infer most likely meaning (probably a test task)
2. Make reasonable assumption
3. Explain assumption in response

```json
{
  "nodes": [
    {
      "name": "Write Unit Tests",
      "type": "Work",
      "description": "Create unit test suite",
      "parent": "Work"
    }
  ],
  "relationships": [],
  "explanation": "I assumed you wanted to add a testing task. Created 'Write Unit Tests' as a Work item."
}
```

### Missing Information

**User:** "Add a relationship between Task A and Task B"

**AI Strategy:**
1. Check if nodes exist
2. Infer relationship type from metamodel
3. Propose most common relationship

```json
{
  "nodes": [],
  "relationships": [
    {
      "source": "Task A",
      "target": "Task B",
      "type": "depends_on",
      "description": "Task A depends on Task B completion"
    }
  ],
  "explanation": "Assumed a dependency relationship between tasks"
}
```

### Conflicting Information

**User:** "Make Task X high priority but also low importance"

**AI Strategy:**
1. Clarify in explanation
2. Implement both if possible
3. Or choose most reasonable interpretation

## Common Prompting Scenarios

### Scenario 1: Expanding a Model

**User:** "Add more details to the email response process"

**AI:** Generate child nodes under existing process steps

### Scenario 2: Documenting Existing Nodes

**User:** "Document all the tasks with their requirements"

**AI:** Add `documentation` field to existing nodes

### Scenario 3: Restructuring

**User:** "Move all design tasks under a Design Phase parent"

**AI:** Create new parent node and update existing nodes' parent references

### Scenario 4: Adding Metadata

**User:** "Mark critical tasks"

**AI:** Add relationships using appropriate widget (e.g., binary "is_critical")

## Error Handling

### Invalid JSON

If AI returns malformed JSON:
- Application shows error message
- User can retry with clarified prompt

### Missing Required Fields

If proposal lacks required fields:
- Application validates and shows specific error
- AI should always include: `name`, `type` for nodes

### Non-Existent References

If proposal references non-existent nodes:
- Application warns user
- User can accept (creates nodes) or reject

## Testing AI Responses

### Validation Checklist

- [ ] JSON is valid and parseable
- [ ] All nodes have `name` and `type`
- [ ] All types exist in metamodel
- [ ] All relationship types exist in metamodel
- [ ] Source/target nodes exist or are being created
- [ ] Documentation is valid Markdown
- [ ] Explanation is provided

### Example Test Cases

```javascript
// Valid proposal
{
  "nodes": [{"name": "Test", "type": "Work", "description": "Test task", "parent": "Work"}],
  "relationships": [],
  "explanation": "Added test task"
}

// Invalid - missing type
{
  "nodes": [{"name": "Test", "description": "Test task"}],
  "relationships": [],
  "explanation": "Added test task"
}

// Invalid - non-existent type
{
  "nodes": [{"name": "Test", "type": "InvalidType", "description": "Test task", "parent": "Work"}],
  "relationships": [],
  "explanation": "Added test task"
}
```

## Advanced Techniques

### Multi-Step Workflows

For complex requests, AI can propose entire workflows:

```json
{
  "nodes": [
    {"name": "Feature Development", "type": "Work", "parent": "Work"},
    {"name": "Design", "type": "Work", "parent": "Feature Development"},
    {"name": "Implementation", "type": "Work", "parent": "Feature Development"},
    {"name": "Testing", "type": "Work", "parent": "Feature Development"},
    {"name": "Deployment", "type": "Work", "parent": "Feature Development"}
  ],
  "relationships": [
    {"source": "Design", "target": "Implementation", "type": "next"},
    {"source": "Implementation", "target": "Testing", "type": "next"},
    {"source": "Testing", "target": "Deployment", "type": "next"}
  ],
  "explanation": "Created a complete feature development workflow with sequential phases"
}
```

### Batch Documentation

AI can document multiple nodes at once:

```json
{
  "nodes": [
    {
      "name": "Design Homepage",
      "type": "Work",
      "documentation": "# Homepage Design\n\n[Detailed content...]"
    },
    {
      "name": "Implement Login",
      "type": "Work",
      "documentation": "# Login Implementation\n\n[Detailed content...]"
    }
  ],
  "relationships": [],
  "explanation": "Added documentation to Design Homepage and Implement Login tasks"
}
```

## Continuous Improvement

AI responses improve through:

1. **User Feedback** - Accept/reject patterns
2. **Context Learning** - Understanding user's domain
3. **Pattern Recognition** - Identifying common workflows

## Documentation Updates

Update this guide when:
- AI prompt template changes
- New response patterns emerge
- User feedback reveals issues
- New AI capabilities are added
