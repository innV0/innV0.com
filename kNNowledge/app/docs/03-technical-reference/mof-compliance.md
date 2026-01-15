# MOF Compliance & Architecture

This document explains how the kNNowledge architecture aligns with the **Meta-Object Facility (MOF)** standard, ensuring a clear separation of concerns between structure, data, and implementation.

## The Abstraction Architecture (M0-M4)

We use a 4-layer architecture to map concepts from the code to the real world.

| Layer  | Name          | Concept        | Implementation          | Terminology (Code)                       |
| :----- | :------------ | :------------- | :---------------------- | :--------------------------------------- |
| **M4** | **Substrate** | The Graph      | `Node`, `Edge`          | `GraphNode`, `GraphEdge`                 |
| **M3** | **Grammar**   | Meta-Metamodel | `types.ts` Interfaces   | `ClassDefinition`, `AttributeDefinition` |
| **M2** | **Language**  | Metamodel      | YAML Definition         | `Task` (Type), `priority` (Attribute)    |
| **M1** | **Data**      | Model          | Hydrated Memory Objects | `Token` (Instance), `Slot` (Value)       |
| **M0** | **Reality**   | The World      | Real objects            | Fact                                     |

### Layer Breakdown

1.  **M4 (Substrate)**: The underlying graph database physics. Everything is just a Node or an Edge.
2.  **M3 (Grammar)**: The hardcoded TypeScript interfaces that define *how* users can create their own languages. This is the "Types" of the system.
3.  **M2 (Language)**: The user-defined types (Classes and Relationships) created using the M3 grammar. Defined in the `.nn.md` frontmatter.
4.  **M1 (Data)**: The actual instances of the user-defined types. These are the notes and connections you create.

## Terminology Mapping

To bridge the gap between technical precision and user friendliness, we use specific mapping:

| Concept             | **Code Term** (Strict)  | **UI Term** (Friendly) | **Docs Term** (Bridge) |
| :------------------ | :---------------------- | :--------------------- | :--------------------- |
| **Entity Type**     | `ClassDefinition`       | **Class**              | Class                  |
| **Entity Instance** | `Node` / `Token`        | **Item**               | Item (Instance)        |
| **Data Field**      | `AttributeDefinition`   | **Property** / Field   | Property (Attribute)   |
| **Data Value**      | `Slot`                  | **Value**              | Value (Slot)           |
| **Link Rule**       | `AssociationDefinition` | **Relationship Rule**  | Relationship           |

## The Unified Metamodel

We employ a **"Unified Metamodel"** (or "Fat Class") strategy. Instead of separating "Business Logic" from "Visual Configuration", everything related to a Class is defined in one place.

### Structure

A `ClassDefinition` contains:

1.  **Schema (`attributes`)**: The data fields (e.g., `priority`, `status`).
2.  **Presentation (`presentation`)**: Visuals like icons, colors, and templates.
3.  **AI (`ai`)**: Prompts and agent behaviors specific to this class.
4.  **Metadata (`metadata`)**: System flags like `isActive` or `mode`.

### Benefits

-   **Zero Sync Drift**: Visuals and logic are always in sync.
-   **Single Source of Truth**: All information about a "Task" is in the "Task" definition.
-   **Simplified Parsing**: A single pass parses both structure and style.
