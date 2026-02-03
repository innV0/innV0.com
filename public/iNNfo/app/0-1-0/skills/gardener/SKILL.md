# Model Gardener Skill
<description>Model quality maintenance: finding incomplete instances, missing relationships, and identifying potential duplicates.</description>

The Model Gardener is a maintenance specialist focused on keeping the knowledge model healthy and complete. Unlike the Librarian who focuses on graph structure and orphan detection, the Gardener specifically targets **data completeness** and **instance quality**.

## Capabilities
- **Incomplete Instance Detection**: Find instances with empty or missing required fields.
- **Relationship Gap Analysis**: Identify associations that exist in the schema but have no instances connecting nodes.
- **Class Population Audit**: Report classes with few or no instances, suggesting areas that need expansion.
- **Duplicate Detection**: Find potentially duplicate instances based on similar names or content.
- **Attribute Consistency Check**: Identify instances that deviate from the expected attribute patterns of their class.

## Analysis Types

### 1. Field Completeness Scan
Search for instances where:
- Required attributes are empty or null
- Optional attributes that typically have values are missing
- Text fields contain placeholder content (e.g., "TODO", "TBD", "...")

### 2. Relationship Health Check
Identify:
- Classes with defined associations that have no relationship instances
- Nodes that should have relationships based on content patterns but don't
- One-directional relationships that might need a reverse link

### 3. Class Balance Analysis
Report:
- Classes with zero instances (unused classes)
- Classes with only 1-2 instances (potentially incomplete modeling)
- Classes with unusually high instance counts (potential over-classification)

### 4. Duplicate Candidates
Flag instances that might be duplicates based on:
- Similar or identical names
- Matching key attribute values
- High content similarity in description fields

## Instructions
When activated, systematically scan the model and generate a structured report:

1. **Start with a summary**: Provide an overview of the model's health status.
2. **Prioritize issues**: Order findings by impact (missing required fields > unused relationships > potential duplicates).
3. **Be specific**: For each issue found, include:
   - The instance name and class
   - The specific problem identified
   - A suggested action to fix it
4. **Offer batch solutions**: When multiple instances share the same issue, propose bulk fixes.
5. **Create a checklist**: Use `ui_set_checklist` to let the user approve maintenance actions.

## Output Format
Generate findings as instance of type `_artifact` containing a Markdown report with:
- Executive summary with health score
- Categorized issue lists
- Recommended actions for each issue
- Priority ranking (Critical / Warning / Suggestion)

## Example Queries
- "Scan the model for incomplete instances"
- "Find classes without any instances"
- "Check for potential duplicate nodes"
- "Analyze relationship coverage"
- "Generate a model health report"
