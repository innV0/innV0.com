---
iNNfo_version: 1.1.0
category: item
created_at: '2026-01-30T18:04:20.462Z'
last_updated: '2026-01-30T18:04:20.462Z'
type: _artifact
fields:
  markdown_file: |-
    # System Architecture Map (Full Traceability)

    ```mermaid
    graph TD
        subgraph Strategic_Layer [Strategic Layer]
            G1[Goal: Constant Publication] -->|realized_by| V1[VP: Accelerate Production]
            G2[Goal: Prepare Materials] -->|realized_by| V2[VP: AI Enrichment]
            V3[VP: Centralize Assets]
        end

        subgraph Operational_Layer [Operational Layer]
            P1[Profile: Content Creator] -->|receives_value| V1
            P1 -->|receives_value| V3
            P2[Profile: Educator] -->|receives_value| V2
            P3[Profile: Researcher] -->|receives_value| V3
            P4[Profile: Developer] -->|receives_value| V3
            
            P1 -->|performs| UC1[UC: Storyboarding]
            P1 -->|performs| UC2[UC: Social Media Reuse]
            P2 -->|performs| UC3[UC: Course Curriculum]
            P3 -->|performs| UC4[UC: Academic Research]
            P4 -->|performs| UC5[UC: Software Project]
        end

        subgraph Technical_Layer [Technical Layer]
            UC3 -->|specifies| R2[Req: Hierarchical Structuring]
            UC4 -->|specifies| R3[Req: AI Synthesis]
            UC5 -->|specifies| R1[Req: Local-First Persistence]
            
            R1 -->|satisfied_by| F1[Feature: Folder Architecture]
            R2 -->|satisfied_by| F2[Feature: Metamodel Modeling]
            R3 -->|satisfied_by| F3[Feature: Resident AI Agents]
        end
    ```
---


