---
version: 0.1.1
author: Lucas Cervera
status: Draft
metamodel: https://innv0.com/defiNNe/defiNNe.md
url: https://innv0.com/defiNNe/defiNNe.md
---

# defiNNe

## defiNNe is a meta-definition framework designed to standardize the documentation of technical conventions, protocols, and behavioral rules.

## Philosophy
defiNNe favors individuals and interactions over processes and tools. It is inspired by The Agile Manifesto, RFC 2119 and Semantic Versioning (SemVer).

## Objectives
* Machine Interoperability: Use YAML to allow definitions to be parsed by CI/CD pipelines, documentation engines, and validation scripts.
* Developer Experience (DX): Prioritize a Source of Truth that is easily editable and searchable within text editors and version control systems.
* Recursive Integrity: The defiNNe specification MUST use YAML Front Matter to define its own metadata.

## Specification
To be considered defiNNe-compliant, a document MUST exist as a single Markdown (.md) file and MUST adhere to the following structural requirements:

### YAML Front Matter (Metadata)
The document MUST begin with a YAML block fenced by triple dashes (---).
* Mandatory fields: version (following SemVer) and url (canonical location).
* Recommended fields: author, status, and sample.
* Extensibility: Additional keys (e.g., license, tags) are ALLOWED as long as they do not conflict with mandatory fields.

### Title and Summary
* H1 Title: The document MUST have a single Level 1 Heading immediately following the YAML block.
* H2 Summary: MUST follow the H1 and consist of exactly one descriptive sentence summarizing the standard purpose.

### Mandatory Sections
The document MUST include the following sections as Level 2 Headings:

* Philosophy: A brief manifesto explaining the values behind the definition.
* Objectives: A list of specific goals the definition intends to achieve.
* Specification: The core rules. This section MUST use RFC 2119 keywords (MUST, SHOULD, MAY). Any change adding a MUST requirement requires a Major version increment.
* Template: A reusable Markdown snippet. To avoid parsing errors, the template code block MUST be fenced with four backticks (````) or equivalent blocks.
* Examples: Practical applications or samples of the standard in use.

## Template

````markdown
---
version: [X.Y.Z]
url: [Canonical Link]
sample: [Sample Link]
---

# [NAME_OF_THE_DEFINITION]

## [One sentence summary]

## Philosophy

## Objectives

## Specification

## Template

## Examples