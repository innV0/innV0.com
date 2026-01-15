# Comparison with Notion

kNNowledge shares similarities with Notion regarding information organization but has a radically different focus based on **Structured Information Modeling** and **Data Locality**.

## Concept Equivalence

This table helps you understand how kNNowledge concepts map if you are coming from Notion:

| kNNowledge Concept    | Notion Equivalent        | Description                                                                        |
| :-------------------- | :----------------------- | :--------------------------------------------------------------------------------- |
| **Metamodel**         | Database Schema          | The global structure that defines what types of objects exist and how they relate. |
| **Node Type (Class)** | Database (DB) / Template | The "mold" or category of an object (e.g., Project, Task, Person).                 |
| **Node (Instance)**   | DB Item / Page           | A concrete entity belonging to a type (e.g., "Project A", "John Doe").             |
| **Relationship**      | Relation / Property      | A connection between two nodes or a characteristic with a value.                   |
| **Widget**            | Property Type            | The visual component for editing data (e.g., Scale -> Rating, Set -> Select).      |
| **Indented Outline**  | Sub-pages / Sub-items    | The natural hierarchical organization of nodes in the navigator.                   |
| **.nn.md File**       | Workspace                | The physical container (Markdown) where all model logic and data reside.           |

## Key Differences

### 1. Focus: Structural Rigidity vs. Block Flexibility
*   **Notion**: Based on blocks. It is extremely flexible for mixing text, images, and tables, but this same flexibility can lead to information chaos if not carefully managed.
*   **kNNowledge**: Based on a **Metamodel**. You first define the rules of your "data universe" and then instantiate objects. This ensures that all information is consistent, machine-processable, and easy to audit.

### 2. Data Sovereignty: Local-First vs. Cloud-Only
*   **Notion**: A closed SaaS platform. Your data lives on their servers. If there is no internet or if the service changes its conditions, your access may be compromised.
*   **kNNowledge**: Prioritizes **Local-First**. Models are flat Markdown files you save on your hard drive. They are Git-compatible, can be read with any text editor, and you have full control over storage.

### 3. AI Integration: Extraction vs. Generation
*   **Notion AI**: Primarily oriented toward text generation, summaries, and assistance in page writing.
*   **kNNowledge AI**: Designed for **Assisted Modeling**. The AI understands the metamodel and can extract structured information from external sources, suggest new entities, and detect relationship inconsistencies, proposing "Staged Changes" for the user to validate.

### 4. Relationship Editing: Matrix View vs. Tables
*   **Notion**: Relationships are edited one by one within each page or via relationship columns in tables.
*   **kNNowledge**: Introduces the **Matrix View**, allowing you to view and edit hundreds of relationships between two node types simultaneously in an interactive grid, optimizing work with complex models.

## When to Choose kNNowledge?

You should consider kNNowledge over Notion if:
1. You need a **technical or scientific knowledge base** where data structure is critical.
2. You want to use **Git** for version control of your knowledge.
3. You work with large volumes of data requiring **mass relationship editing**.
4. You prefer your information to be **private by default** and reside on your own systems.
5. You seek AI integration that helps you **structure data** instead of just writing paragraphs.
