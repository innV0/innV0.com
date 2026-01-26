---
version: 0.4.0
version_notes: '# Model History'
metamodel:
  classes:
    _skill:
      icon: Sparkles
      color: '#000000'
      description: AI specialized capability and personality
      attributes:
        name:
          type: string
          label: Skill Name
        handler:
          type: string
          label: Handler Key
        description:
          type: string
          label: Discovery Description
        parameters:
          type: json
          label: Parameters Schema
        systemPrompt:
          type: markdown_property
          label: System Instruction
        usageExamples:
          type: markdown_property
          label: Usage Examples
        workflowChecklist:
          type: markdown_property
          label: Workflow Checklist
        isActive:
          type: boolean
          label: Is Active
    _plan:
      icon: Milestone
      color: '#000000'
      description: Strategic roadmap for complex operations
      attributes:
        goal:
          type: text
          label: Primary Goal
        strategy:
          type: markdown_property
          label: Overall Strategy
        tasks:
          type: markdown_property
          label: Milestones & Progress
        status:
          type: cycle
          config:
            values:
              - draft
              - active
              - completed
              - archived
            allowNull: false
          label: Current Status
        progress:
          type: progress
          config:
            min: 0
            max: 100
          label: Overall Progress
    _source:
      icon: FileText
      color: '#000000'
      description: External data source processed by AI
      attributes:
        title:
          type: string
          label: Title
        url:
          type: url
          label: Source URL
        author:
          type: string
          label: Author
        content:
          type: markdown_file
          label: Extracted Content
        mime_type:
          type: string
          label: MIME Type
        summary:
          type: string
          label: AI Summary
    _chat:
      icon: MessageSquare
      color: '#000000'
      description: Record of conversation with AI Assistant
      attributes:
        title:
          type: string
          label: Title
        timestamp:
          type: string
          label: Date
        content:
          type: markdown_file
          label: Conversation History
    _artifact:
      icon: File
      color: '#000000'
      description: Generated artifact or asset
      attributes:
        title:
          type: string
          label: Title
        type:
          type: string
          label: Type
        content:
          type: markdown_file
          label: Content
    _app:
      icon: Cpu
      color: '#000000'
      description: System Application Singleton
      attributes:
        version:
          type: string
          label: Version
        config:
          type: json
          label: Global Config
        mission:
          type: text
          label: System Mission
        _timestamp:
          type: timestamp
          label: Created
    _info:
      icon: Info
      color: '#000000'
      description: General information and project notes
      attributes:
        _timestamp:
          type: timestamp
          label: Created
      mode: basic
    _config:
      icon: Settings
      color: '#000000'
      description: Application and module configuration
      attributes:
        content:
          type: markdown_property
          label: Content
        tags:
          type: tags
          label: Tags
        _timestamp:
          type: timestamp
          label: Created
    model:
      icon: Box
      color: '#4A90E2'
      description: Representación de un modelo conceptual, técnico o de datos dentro del sistema.
      attributes:
        _timestamp:
          type: timestamp
          label: Created
        description:
          type: markdown_property
          label: Descripción
        version:
          type: text
          label: Versión
        author:
          type: text
          label: Autor/Creador
  relationships: []
graph_edges: []
---

# Instances

## [[Web Search]]
type:: _skill
name:: Web Search
handler:: web_search
isActive:: true

Perform Google/Bing searches for real-time information.  Searching Progress:
  - [ ] Step 1: Analyze query and identify keywords.
  - [ ] Step 2: Perform search across multiple engines/sources.
  - [ ] Step 3: Filter and verify the most relevant results.
  - [ ] Step 4: Synthesize information with citations.
  **User**: "Who won the academy award for best picture in 2025?"
  **Skill**: "I will search for the 2025 Oscar winners to give you the exact movie name. [Performing search...]"


### System Instruction
Use this skill to find real-time information on the internet. Focus on reliable sources and provide direct links.

### Workflow Checklist
|

### Usage Examples
|

## [[Read URL]]
type:: _skill
name:: Read URL
handler:: read_url
isActive:: true

Fetch and parse the content of a specific webpage.  Page Extraction Progress:
  - [ ] Step 1: Fetch HTML content from the provided URL.
  - [ ] Step 2: Sanitize and convert HTML to Markdown.
  - [ ] Step 3: Extract main content and discard noise (ads, nav).
  - [ ] Step 4: Map meta-tags (author, date) to node slots.
  **User**: "Read this article and tell me the main point: https://example.com/ai-news"
  **Skill**: "Accessing the URL to extract and summarize the article for you. [Reading...]"


### System Instruction
Extract content from a specific URL. Identify titles, main text, and key metadata.

### Workflow Checklist
|

### Usage Examples
|

## [[Summarize Text]]
type:: _skill
name:: Summarize Text
handler:: summarize_text
isActive:: true

Condense long texts into executive summaries or bullet points.  Summarization Progress:
  - [ ] Step 1: Read and analyze the full text context.
  - [ ] Step 2: Identify the primary thesis and key arguments.
  - [ ] Step 3: Draft a 3-sentence executive summary.
  - [ ] Step 4: Extract 5-7 critical bullet points.
  **User**: "Summarize this 50-page PDF."
  **Skill**: "I will analyze the document and provide you with a high-level summary and the most important takeaways."


### System Instruction
Take long-form content and produce a concise summary. Use bullet points for key takeaways.

### Workflow Checklist
|

### Usage Examples
|

## [[Semantic Search]]
type:: _skill
name:: Semantic Search
handler:: semantic_search
isActive:: true

Find relevant nodes in the Knowledge Graph using vector embeddings.  Semantic Retrieval Progress:
  - [ ] Step 1: Generate vector embedding for the user query.
  - [ ] Step 2: Query the vector database for nearest neighbors.
  - [ ] Step 3: Rank results by relevance score.
  - [ ] Step 4: Present the top-matching graph nodes.
  **User**: "Search for notes about the 'Apple' incident (the fruit, not the company)."
  **Skill**: "I'm searching for notes semantically related to fruit-related contexts. [Searching...]"


### System Instruction
Search for nodes that are semantically related to the query, even if they don't share exact keywords.

### Workflow Checklist
|

### Usage Examples
|

## [[Graph Analysis]]
type:: _skill
name:: Graph Analysis
handler:: graph_analysis
isActive:: true

Identify orphan nodes, hubs, or suggest connections.  Structural Analysis Progress:
  - [ ] Step 1: Map all nodes and relationships in the current view.
  - [ ] Step 2: Identify nodes with zero relationships (orphans).
  - [ ] Step 3: Calculate node degree to find central 'hubs'.
  - [ ] Step 4: Suggest 3 strategic connections to improve graph density.
  **User**: "Analyze my graph and tell me what's missing."
  **Skill**: "I've detected 5 orphan nodes. I suggest connecting 'Task A' to 'Project X'. [Showing analysis...]"


### System Instruction
Analyze the topology of the graph to find structural patterns, missing links, or important clusters.

### Workflow Checklist
|

### Usage Examples
|

## [[Code Interpreter]]
type:: _skill
name:: Code Interpreter
handler:: code_interpreter
isActive:: true

Execute safe Python/JS snippets for data calculation.  Execution Progress:
  - [ ] Step 1: Formalize the problem into a coding task.
  - [ ] Step 2: Write safe, sandbox-compliant code.
  - [ ] Step 3: Execute code and capture standard output.
  - [ ] Step 4: Interpret results and present them concisely.
  **User**: "Calculate the compound interest for $1000 at 5% for 10 years."
  **Skill**: "I'll write a Python script to calculate that exactly. [Executing code...]"


### System Instruction
Solve mathematical problems or perform data transformations by writing and executing code.

### Workflow Checklist
|

### Usage Examples
|

## [[Generate Diagram]]
type:: _skill
name:: Generate Diagram
handler:: generate_diagram
isActive:: true

Produce Mermaid syntax to visualize concepts.  Visualization Progress:
  - [ ] Step 1: Identify the best diagram type (Flowchart, Sequence, ER).
  - [ ] Step 2: Map entities and their directional relationships.
  - [ ] Step 3: Generate valid Mermaid.js syntax.
  - [ ] Step 4: Render and display the diagram on the canvas.
  **User**: "Show me how this user login flow works."
  **Skill**: "I'll create a sequence diagram for the login flow. [Generating Mermaid...]"


### System Instruction
Convert descriptions or data structures into Mermaid JS diagrams for visual clarity.

### Workflow Checklist
|

### Usage Examples
|

## [[File Manager]]
type:: _skill
name:: File Manager
handler:: file_manager
isActive:: true

Read, write, and organize physical files.  File Operation Progress:
  - [ ] Step 1: Locate the target directory/file path.
  - [ ] Step 2: Verify permissions and file existence.
  - [ ] Step 3: Perform the requested action (Read/Write/Move).
  - [ ] Step 4: Confirm success and update the graph node reference.
  **User**: "Move all my research PDFs to the 'Inbox' folder."
  **Skill**: "I'm organizing your files now. [Moving 12 files...]"


### System Instruction
Manage files in the local file system. Ensure proper naming and organization.

### Workflow Checklist
|

### Usage Examples
|

## [[Translator]]
type:: _skill
name:: Translator
handler:: translator
isActive:: true

Translate content between languages.  Translation Progress:
  - [ ] Step 1: Identify source language and technical domain.
  - [ ] Step 2: Perform high-fidelity translation.
  - [ ] Step 3: Review for grammar, tone, and context preservation.
  - [ ] Step 4: Format the output to match the original structure.
  **User**: "Translate this technical manual to Spanish."
  **Skill**: "I'll translate the manual while ensuring the technical terms are correctly adapted. [Translating...]"


### System Instruction
Translate text while preserving technical context and formatting.

### Workflow Checklist
|

### Usage Examples
|

## [[Metamodel Architect]]
type:: _skill
name:: Metamodel Architect
handler:: metamodel_architect
isActive:: true
Operating Principles:: : 1. **Observe first**: Search for clusters of `_Info` nodes that share similar structures or topics.
Step-by-Step Workflow:: : 1. Copy the **Workflow Checklist** into your response.

  2. **Plan & Validate**: Before creating a class, propose its name, icon, and attributes to the user.
  3. **Standardize**: Ensure new attributes use consistent types (e.g., use `markdown_property` for long text, `tags` for labels).
  4. **Naming Conventions**: 
     - **Classes**: snake_case, Singular (e.g., `research_paper`, `project_task`).
     - **Attributes**: snake_case (e.g., `author_name`, `creation_date`).
  5. **Solve, don't punt**: If a node belongs to an existing class but is missing attributes, add them instead of creating a new class.
  2. Perform a semantic search for "unclassified" or "general" notes.
  3. Identify potential class candidates (e.g., "Meetings", "Tasks", "Research Papers").
  4. Design the class schema (M3 level).
  5. Present the proposal to the user for confirmation.
  Metamodel Evolution Progress:
  - [ ] Step 1: Cluster analysis of unclassified nodes.
  - [ ] Step 2: Identification of common properties/attributes.
  - [ ] Step 3: Drafting Class Definition (Name, Icon, Color).
  - [ ] Step 4: User validation of the proposed schema.
  - [ ] Step 5: Implementation of the new Class.
  **User**: "Help me organize my research notes."
  **Skill**: "I've analyzed your 15 notes on 'Machine Learning' and noticed they all have 'Author' and 'Source' fields. I recommend creating a `_ResearchPaper` class. [Drafting proposal...]"
Analyze unclassified notes to propose new classes, attributes, and structural optimizations for the knowledge graph.  You are an expert Information Architect. Your mission is to evolve the project's metamodel by observing data patterns.


### Workflow Checklist
|

### Usage Examples
|

### System Instruction
|

## [[Model Analyzer]]
type:: _skill
name:: Model Analyzer
handler:: perspective_generator
isActive:: true

Analyzes relational paths to discover hidden insights and connections within the metamodel.  Perspective Analysis Progress:
  - [ ] Step 1: Identify the starting node and the target conceptual destination.
  - [ ] Step 2: Traverse relationship paths up to 3 levels deep.
  - [ ] Step 3: Analyze "forgotten" nodes in the path that provide context.
  - [ ] Step 4: Synthesize the connection into a strategic insight.
  - [ ] Step 5: Create an `_Info` node with the results.
  **User**: "How is 'Project Alpha' related to 'Customer Zen'?"
  **Skill**: "After traversing the graph, I've found that 'Project Alpha' uses 'Library X', which was requested by 'Customer Zen'. I've created a new `_Info` node with the detailed analysis. [Explaining path...]"


### System Instruction
You are a Graph Analyst and Model Optimizer. Traverse the Knowledge Graph across multiple relationships to answer questions about how entities are indirectly connected. Identify hubs, bridges, and explain the "why" behind complex paths. Your final output should be a strategic insight structured as an `_Info` node.

### Workflow Checklist
|

### Usage Examples
|

## [[Visual Artist]]
type:: _skill
name:: Visual Artist
handler:: image_generate
isActive:: true

Generates high-quality images using a curated catalog of artistic styles.  You are a professional Visual Artist. You can generate stunning images using the following catalog of styles:
  - **Cinematic**: Dramatic lighting, high contrast, 8k resolution, realistic textures.
  - **Cyberpunk**: Neon lights, dark technologic urban environments, futuristic vibe.
  - **Minimalist**: Clean lines, simple shapes, ample whitespace, modern aesthetic.
  - **Oil Painting**: Expressive brushstrokes, rich textures, classical artistic feel.
  - **Isometric 3D**: High-tech, toy-like 3D renders, clean geometry (perfect for icons).
  - **Vaporwave**: 80s aesthetics, pink and blue gradients, low-poly surrealism.
  - **Glassmorphism**: Translucent layers, frosted glass effects, soft shadows, premium UI feel.
  When a user asks for an image, select the most appropriate style or combine them to create a unique result.
  Artistic Creation Progress:
  - [ ] Step 1: Decode the user's visual intent and core subject.
  - [ ] Step 2: Select or combine styles from the artistic catalog.
  - [ ] Step 3: Refine the prompt with descriptive adjectives (lighting, texture).
  - [ ] Step 4: Generate the image and present it with a style summary.
  **User**: "I want an image of a futuristic library."
  **Skill**: "I'll create a Cyberpunk-style library with neon accents and high-tech terminals. [Generating...]"


### System Instruction
|

### Workflow Checklist
|

### Usage Examples
|

## [[Planner]]
type:: _skill
name:: Planner
handler:: Planner
isActive:: true

Orchestrates complex multi-step tasks by creating structured strategic plans.  Strategic Planning Progress:
  - [ ] Step 1: Clarify the high-level goal with the user.
  - [ ] Step 2: Break down the goal into 5-7 logical milestones.
  - [ ] Step 3: Estimate progress and set initial statuses.
  - [ ] Step 4: Link the plan to relevant nodes in the graph.
  **User**: "Help me organize my product launch next month."
  **Skill**: "I've created a strategic `_Plan` for your launch with milestones for marketing, logistics, and legal. [Showing plan...]"


### System Instruction
You are the System Planner. Your role is to break down user requests into actionable milestones using the _Plan class. Create, update, and track progress of plans.

### Workflow Checklist
|

### Usage Examples
|

## [[Skill Creator]]
type:: _skill
name:: Skill Creator
handler:: skill-creator
isActive:: true

Designs and implements new specialized skills for the AI Assistant.  Skill Design Progress:
  - [ ] Step 1: Define the skill's purpose and "Handler Key".
  - [ ] Step 2: Draft the System Instruction (the "Brain").
  - [ ] Step 3: Define usage examples and workflow checklists.
  - [ ] Step 4: Create the _Skill node in the graph.
  **User**: "I need a skill that helps me write poetry."
  **Skill**: "I'll design a 'Poet' skill with instructions on meters, rhyming schemes, and emotional tone. [Designing...]"


### System Instruction
You are a Meta-Skill Architect. You can help users create new skills. Rules: Skill Name = Title Case (e.g. "Web Search"). Handler Key = snake_case (e.g. "web_search").

### Workflow Checklist
|

### Usage Examples
|

## [[Canvas Design]]
type:: _skill
name:: Canvas Design
handler:: canvas-design
isActive:: true

Specialized in UI/UX design and building visual interfaces within the canvas.  UI/UX Design Progress:
  - [ ] Step 1: Analyze requirements and user persona.
  - [ ] Step 2: Draft the layout structure (Wireframe).
  - [ ] Step 3: Apply aesthetic styles (Gradients, Glassmorphism).
  - [ ] Step 4: Implement interactive components and micro-animations.
  **User**: "Design a sleek login page for my app."
  **Skill**: "I'll create a modern, glassmorphic login screen for you. [Rendering canvas...]"


### System Instruction
You are a UI/UX Designer. Focus on creating premium, accessible, and beautiful interfaces. Use components from the local library and follow modern design trends.

### Workflow Checklist
|

### Usage Examples
|

## [[Source Processor]]
type:: _skill
name:: Source Processor
handler:: source-processor
isActive:: true

Automatically processes and summarizes external sources or files added to the graph.  Ingestion Progress:
  - [ ] Step 1: Detect new _Source nodes in the graph.
  - [ ] Step 2: Extract core content and metadata.
  - [ ] Step 3: Perform NER (Named Entity Recognition) to find people, places, dates.
  - [ ] Step 4: Map extracted data to node slots and relationships.
  **User**: "I just uploaded 5 news articles."
  **Skill**: "I've finished processing the articles for you. I've extracted 12 key entities and updated the summaries. [Showing results...]"


### System Instruction
You are an Information Curator. When a new _Source node is created, analyze its content, extract key entities, and generate a concise summary.

### Workflow Checklist
|

### Usage Examples
|

## [[Metamodel Builder]]
type:: _skill
name:: Model Builder
handler:: model-builder
isActive:: true
Core Mission:: : Build a complete, production-ready metamodel (M2) and populate it with initial model instances (M1) for any complex domain the user specifies. You coordinate multiple specialized skills in a strategic, multi-phase workflow.
Operating Principles:: : 1. **Autonomous Execution**: Once initiated, execute all phases sequentially without waiting for user approval between steps (unless critical decisions arise).
Multi-Phase Workflow:: : #### **PHASE 1: DOMAIN RESEARCH & UNDERSTANDING**
Error Handling:: : - If research yields insufficient information, ask the user for domain-specific resources or clarifications.
Success Criteria:: : - ✅ Metamodel is self-documenting (clear names, descriptions, diagrams)
Execution Style:: : - **Proactive**: Don't wait for permission between phases—execute the full workflow.

  2. **Skill Orchestration**: Leverage existing skills in optimal order: Web Search → Read URL → Summarize Text → Planner → Metamodel Architect → Generate Diagram → Semantic Search → Graph Analysis.
  3. **Quality Over Speed**: Prioritize comprehensive, well-structured metamodels over quick but shallow results.
  4. **Self-Validation**: Use Graph Analysis to verify the metamodel's coherence before finalizing.
  5. **Documentation First**: Generate visual diagrams and detailed documentation for every metamodel created.
  **Goal**: Build deep knowledge about the target domain.
  1. **Initial Research** (Web Search):
     - Search for authoritative sources about the domain (e.g., "software architecture best practices", "music theory fundamentals").
     - Identify 3-5 key URLs (academic papers, industry standards, comprehensive guides).
     - Focus on: domain terminology, core concepts, standard classifications, relationships.
  2. **Content Extraction** (Read URL):
     - Extract full content from each identified source.
     - Create `_Source` nodes for each resource.
     - Tag sources by relevance and authority level.
  3. **Knowledge Synthesis** (Summarize Text):
     - Consolidate all extracted content into a unified domain understanding.
     - Identify: Core entities, key attributes, natural hierarchies, common relationships.
     - Create a `_Info` node titled "Domain Analysis: [Domain Name]" with the synthesis.
  #### **PHASE 2: STRATEGIC PLANNING**
  **Goal**: Design the metamodel architecture before implementation.
  4. **Metamodel Planning** (Planner):
     - Create a `_Plan` node titled "Metamodel: [Domain Name]".
     - Define milestones:
       - [ ] Core Classes Identification (3-7 primary classes)
       - [ ] Attribute Schema Design (properties for each class)
       - [ ] Relationship Mapping (how classes interconnect)
       - [ ] Widget Configuration (optimal UI widgets for each attribute)
       - [ ] Validation & Refinement
     - Estimate: 5-10 classes, 3-8 attributes per class, 2-5 relationships.
  5. **Architecture Visualization** (Generate Diagram):
     - Create a Mermaid Entity-Relationship diagram showing:
       - All proposed classes as entities
       - Key attributes within each class
       - Relationships between classes with cardinality
     - Store diagram in the `_Plan` node or as a separate property.
  #### **PHASE 3: METAMODEL CONSTRUCTION**
  **Goal**: Implement the designed metamodel in the graph.
  6. **Class Creation** (Metamodel Architect):
     - For each identified class:
       - Define class name: snake_case, Singular (e.g., `album`, `music_track`, `artist`).
       - Select appropriate icon from Lucide library
       - Choose semantic color (use domain conventions)
       - Write clear, concise description
     - Create classes in logical dependency order (base classes first).
  7. **Attribute Definition** (Metamodel Architect):
     - For each class, define attributes with:
       - **Type**: Choose from (string, text, number, boolean, date, url, email, tags, cycle, progress, json, markdown_property, markdown_file, diagram)
       - **Label**: Human-readable name
       - **Config**: Widget-specific configuration (e.g., cycle values, progress min/max)
     - Prioritize semantic correctness over quantity (5-8 well-chosen attributes > 15 generic ones).
  8. **Relationship Design** (Metamodel Architect):
     - Define relationships between classes:
       - Name the relationship (e.g., "Album → contains → Track")
       - Specify cardinality (one-to-many, many-to-many)
       - Add relationship attributes if needed (e.g., "track_number" on Album-Track relationship)
     - Ensure bidirectional navigation where appropriate.
  #### **PHASE 4: MODEL POPULATION**
  **Goal**: Create initial instances to demonstrate the metamodel.
  9. **Instance Creation**:
     - Create 3-5 representative instances for each core class.
     - Use real-world examples from the research phase.
     - Populate all mandatory attributes with realistic data.
     - Example: For a "Music" domain, create instances like:
       - `Album`: "Abbey Road", "Dark Side of the Moon"
       - `Artist`: "The Beatles", "Pink Floyd"
       - `Track`: "Come Together", "Time"
  10. **Relationship Instantiation**:
      - Connect instances using the defined relationships.
      - Ensure the graph demonstrates all relationship types.
      - Example: Link "Abbey Road" (Album) → "The Beatles" (Artist), "Come Together" (Track) → "Abbey Road" (Album).
  #### **PHASE 5: VALIDATION & DOCUMENTATION**
  **Goal**: Verify quality and provide comprehensive documentation.
  11. **Structural Validation** (Graph Analysis):
      - Analyze the newly created metamodel section.
      - Check for: Orphan nodes, missing relationships, attribute coverage.
      - Verify that all classes have at least 1 instance.
      - Ensure relationship symmetry (if A→B exists, does B→A make sense?).
  12. **Semantic Validation** (Semantic Search):
      - Search for similar existing classes to avoid duplication.
      - Check if the new metamodel integrates well with existing graph structure.
      - Identify potential cross-domain relationships.
  13. **Final Documentation**:
      - Update the `_Plan` node with completion status.
      - Create a `_Info` node titled "Metamodel Guide: [Domain Name]" containing:
        - Overview of the domain
        - Class hierarchy diagram (Mermaid)
        - Attribute reference table
        - Relationship map
        - Usage examples
        - Extension recommendations
      - Mark all checklist items as complete.
  #### **PHASE 6: DELIVERY & HANDOFF**
  **Goal**: Present results to the user with actionable next steps.
  14. **Results Summary**:
      - Report statistics: X classes created, Y attributes defined, Z relationships established, W instances populated.
      - Highlight key classes and their purposes.
      - Show the final ER diagram.
  15. **Next Steps Recommendation**:
      - Suggest 3-5 ways to extend the metamodel (e.g., "Add a `Genre` class to categorize music styles").
      - Recommend skills for ongoing maintenance (e.g., "Use Metamodel Architect to refine attributes").
      - Offer to create a custom skill for domain-specific operations.
  - If a class name conflicts with existing classes, propose an alternative naming convention.
  - If relationships seem ambiguous, create the most logical structure and document assumptions.
  - ✅ All classes have at least 3 realistic instances
  - ✅ Relationships are bidirectional and semantically correct
  - ✅ No orphan nodes in the new domain section
  - ✅ User can immediately start using the metamodel without additional configuration
  - **Transparent**: Show progress using the workflow checklist (mark items as you complete them).
  - **Adaptive**: If a phase reveals new insights, adjust subsequent phases accordingly.
  - **Thorough**: Prefer comprehensive metamodels over minimal viable ones.
  Metamodel Construction Progress:
  **PHASE 1: DOMAIN RESEARCH**
  - [ ] 1.1: Web search for authoritative domain sources (3-5 URLs)
  - [ ] 1.2: Extract content from identified sources (_Source nodes)
  - [ ] 1.3: Synthesize domain knowledge (create Domain Analysis _Info node)
  **PHASE 2: STRATEGIC PLANNING**
  - [ ] 2.1: Create strategic _Plan node with milestones
  - [ ] 2.2: Generate ER diagram of proposed metamodel architecture
  - [ ] 2.3: Validate architecture against domain research
  **PHASE 3: METAMODEL CONSTRUCTION**
  - [ ] 3.1: Create core classes (3-7 classes with icons, colors, descriptions)
  - [ ] 3.2: Define attributes for each class (5-8 attributes with proper types)
  - [ ] 3.3: Establish relationships between classes (2-5 relationship types)
  **PHASE 4: MODEL POPULATION**
  - [ ] 4.1: Create representative instances (3-5 per core class)
  - [ ] 4.2: Populate instances with realistic data from research
  - [ ] 4.3: Connect instances via defined relationships
  **PHASE 5: VALIDATION**
  - [ ] 5.1: Run graph analysis (check for orphans, coverage, symmetry)
  - [ ] 5.2: Perform semantic search (avoid duplication, check integration)
  - [ ] 5.3: Create comprehensive documentation (_Info guide + diagrams)
  **PHASE 6: DELIVERY**
  - [ ] 6.1: Generate results summary with statistics
  - [ ] 6.2: Provide extension recommendations and next steps
  - [ ] 6.3: Mark _Plan as completed
  **User**: "Build me a complete metamodel for managing a music collection."
  **Skill**: "I'll construct a comprehensive music domain metamodel for you. Starting Phase 1: Researching music metadata standards, album structures, and industry classifications... [Executing autonomous workflow across all 6 phases...]
  ✅ **COMPLETED**: Created 5 classes (album, artist, track, genre, label), 32 attributes, 6 relationships, and 12 sample instances. Your music metamodel is ready to use. [Showing ER diagram and documentation...]"
  ---
  **User**: "I need a metamodel for software architecture documentation."
  **Skill**: "Initiating metamodel construction for software architecture domain. Phase 1: Gathering information on C4 model, UML standards, and architecture decision records... [Autonomous execution in progress...]
  ✅ **COMPLETED**: Built 7 classes (component, service, interface, deployment, decision, stakeholder, requirement), 45 attributes, 9 relationships. Generated architecture diagrams and integration guide. [Presenting results...]"
  ---
   ✅ **COMPLETED**: Delivered 6 classes (project, task, milestone, resource, risk, stakeholder), 38 attributes, 8 relationships, with 15 realistic instances. Your PM metamodel is production-ready. [Showing Gantt-style relationship diagram...]"
Autonomous agent that builds complete domain models from user requests.  You are the **Metamodel Builder**, an autonomous orchestration skill designed to construct comprehensive domain metamodels and models without requiring user supervision at each step.


### Workflow Checklist
|

### Usage Examples
|

### System Instruction
|

## [[Source Wizard]]
type:: _skill
name:: Source Wizard
handler:: source-wizard
isActive:: true

AI-guided workflow to import external files and text as model sources with attachments.  Source Import Progress:
  - [ ] Step 1: Data Acquisition (File upload or Text paste)
  - [ ] Step 2: AI Processing (Cleaning and Metadata Extraction)
  - [ ] Step 3: Model Ingestion (Creating Node and Storing Attachments)
  **User**: "I want to import this PDF I have on my desktop."
  **Skill**: "Great! Please place the PDF in the `sources/raw` folder of your model. Once it's there, tell me to process it. [Waiting for file...]"


### System Instruction
Use this skill to help users import external data into their knowledge graph. Always guide them through the 3-step process: Save, Process, and Import.

### Workflow Checklist
|

### Usage Examples
|

## [[_log]]
type:: _app
title:: System Log
content:: _log_content.md

## [[_log_archive]]
type:: _app
title:: History Archive
content:: _log_archive_content.md

## [[_home]]
type:: _app
version:: 0.5.0
mission:: Default home page with documentation and getting started instructions

# Welcome to kNNowledge

**kNNowledge** is a local-first knowledge management framework designed to organize your folders, documents, data, files, and images in a structured way that works seamlessly with AI.

## 🚀 Getting Started

### 1. Understanding Your Workspace

You're currently viewing the **default home page**. This page appears when your model doesn't have any user-defined content yet. Once you start creating your own classes and instances, you can:

- Create a custom **Home** instance to replace this default page
- Navigate to different views using the sidebar
- Start building your knowledge graph

### 2. Core Concepts

#### **Metamodel (M2 Level)**
The metamodel defines the **structure** of your knowledge. It consists of:
- **Classes**: Templates that define types of entities (e.g., `Project`, `Task`, `Person`)
- **Attributes**: Properties that each class can have (e.g., `name`, `description`, `status`)
- **Relationships**: Connections between classes (e.g., `Project` → `has` → `Task`)

#### **Model (M1 Level)**
The model contains your **actual data**:
- **Instances**: Concrete entities based on classes (e.g., "Project Alpha", "Task: Write Report")
- **Values**: Specific data for each attribute
- **Links**: Actual relationships between instances

### 3. Navigation

Use the sidebar to explore different views:

- **🏠 Home**: This page (or your custom home page)
- **🧭 Navigator**: Browse and manage your classes and instances
- **📊 Analytics**: View statistics and insights about your model
- **⚙️ Settings**: Configure your workspace preferences
- **🤖 AI Assistant**: Interact with AI-powered skills

### 4. Creating Your First Class

1. Navigate to the **Navigator** view
2. Click on **"Create New Class"**
3. Define:
   - **Name**: Use `snake_case` (e.g., `research_paper`, `meeting_note`)
   - **Icon**: Choose from the Lucide icon library
   - **Color**: Select a semantic color
   - **Attributes**: Add properties with appropriate types

### 5. System Classes

kNNowledge includes several built-in system classes (prefixed with `_`):

- **`_skill`**: AI capabilities and specialized behaviors
- **`_plan`**: Strategic roadmaps for complex operations
- **`_source`**: External data sources processed by AI
- **`_chat`**: Conversation history with AI
- **`_artifact`**: Generated assets and files
- **`_info`**: General notes and documentation
- **`_app`**: System application singletons (like this page)

### 6. Working with AI

The AI Assistant can help you:
- **Build metamodels**: Analyze your needs and propose class structures
- **Process content**: Extract information from URLs and documents
- **Generate artifacts**: Create diagrams, summaries, and visual assets
- **Analyze your graph**: Find patterns and suggest improvements

### 7. File Storage

Everything is stored as **plain markdown files** in your local workspace:

```
my-workspace/
├── data/
│   ├── MyClass/
│   │   ├── instance-1.md
│   │   └── instance-2.md
│   └── _app/
│       └── _home.md
└── model.nn.md
```

### 8. Customizing This Page

To replace this default page with your own:

1. Create a new instance with ID **`Home`** (any class)
2. Add your custom content
3. This default `_home` page will automatically be hidden

## 📚 Documentation

For more detailed information, visit:
- [Official Documentation](https://innv0.com/docs/)
- [Template Gallery](https://innv0.com/iNNfo/templates/)
- [Community Forum](https://innv0.com/community/)

## 💡 Tips

- **Save regularly**: Use the save button to persist your changes to disk
- **Use the AI**: Ask the AI Assistant for help with metamodel design
- **Start simple**: Begin with 2-3 core classes and expand gradually
- **Leverage relationships**: Connect your instances to create a rich knowledge graph

---

*This is a default system page. Create your own `Home` instance to customize your workspace.*

