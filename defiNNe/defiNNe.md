---
version: 1.6.0
author: Lucas Cervera
status: Draft
url: https://github.com/innV0/defiNNe/defiNNe.md
sample: https://github.com/innV0/defiNNe/sample.md
---

# defiNNe: The Definition of Definitions

## defiNNe is a meta-definition framework designed to standardize the way technical conventions, protocols, and behavioral rules are documented.

## Philosophy
**defiNNe** favors individuals and interactions over processes and tools. It is inspired by [The Agile Manifesto](https://agilemanifesto.org/), [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) and [Semantic Versioning (SemVer)](https://semver.org/).
* : .

## Objectives
* **Machine Interoperability:** Use YAML to allow definitions to be parsed by CI/CD pipelines, documentation engines, and custom scripts.
* **Developer Experience:** Prioritize a "Source of Truth" that is easily editable and searchable within text editors and version control systems.
* **Recursive Integrity:** The `defiNNe` specification MUST use YAML Front Matter to define its own metadata.

## Specification
To be considered "defiNNe-compliant," a document MUST exist as a single Markdown file and MUST adhere to the following structural requirements:

### YAML Front Matter (The Metadata)
The document MUST begin with a YAML block fenced by triple dashes (`---`). 
1. This block MUST contain at least two keys: `version` and `url`.
2. The `version` MUST follow Semantic Versioning (SemVer).
3. The `url` MUST point to the canonical public location of the file.

### Header and Summary
1. **H1 Title:** The document MUST have a single Level 1 Heading immediately following the YAML block.
2. **H2 Summary:** The summary MUST be an H2 heading consisting of exactly one descriptive sentence. The H2 Summary MUST follow the H1 Title.

### 3.3. Mandatory Sections
The document MUST include the following sections as Level 2 Headings (H2):

* **Philosophy:** A brief manifesto explaining the values behind the definition.
* **Objectives:** A list of specific goals the definition intends to achieve.
* **Specification:** The core rules. This section MUST use RFC 2119 keywords (**MUST**, **SHOULD**, **MAY**).
* **Template:** A reusable Markdown snippet for implementers.
* **Examples:** Practical applications or samples.

## Template
New definitions MUST use the following structure:

```markdown
---
version: [X.Y.Z]
url: [Public Link]
sample: [Public Link]
---

# [NAME_OF_THE_DEFINITION]

## [Summary]

## Philosophy

## Objectives

## Specification

## Template