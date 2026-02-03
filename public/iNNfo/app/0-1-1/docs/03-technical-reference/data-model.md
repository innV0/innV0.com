# Data Model Reference

This document outlines the core data structures used in kNNowledge, defined in `src/core/types.ts`.

## Core Entities

### Node
Represents a single instance in the model hierarchy.

```typescript
export interface Node {
    id: string;           // Unique identifier
    content: string;      // Display name
    children: Node[];     // Recursive children
    
    // M1 Data
    slots?: Record<string, Slot>; // The actual data values
    
    // Derived/Cached properties
    type?: string;        // Pointer to ClassDefinition
    
    // Legacy/Migration
    image?: string;
    video?: string;
}

export interface Slot {
    value: any;
    lastUpdated?: number;
}
```

### Relationship
Represents a directed connection between two nodes.

```typescript
export interface Relationship {
    sourceId: string;     // ID of source node
    targetId: string;     // ID of target node
    label: string;        // Relationship type (e.g., "assigned_to")
    value: any;           // The value stored (boolean, number, string, etc.)
}
```

### ClassDefinition
Defines a category of objects (formerly `MetamodelClass`).

```typescript
export interface ClassDefinition {
    name: string;
    description?: string;
    
    // Schema
    attributes: Record<string, AttributeDefinition>;
    
    // Unified Tooling
    presentation?: {
        icon?: string;
        color?: string;
        emoji?: string;
        styles?: Record<string, any>;
        imageTemplate?: string;
    };
    
    ai?: {
        prompts?: Record<string, string>;
        agents?: Record<string, string>;
        example?: string;
    };
    
    metadata?: {
        isActive?: boolean;
        mode?: 'basic' | 'advanced' | 'expert';
        documentationTemplate?: string;
    };
}
```

### AttributeDefinition
Defines a single data field on a Class.

```typescript
export interface AttributeDefinition {
    type: WidgetType;
    config?: any; // WidgetConfig
    label?: string;
    description?: string;
    defaultValue?: any;
}
```

### AssociationDefinition
Defines the rules for connections (formerly `MetamodelRelationship`).

```typescript
export interface AssociationDefinition {
    sourceClass: string;
    targetClass: string;
    label: string;
    definition: RelationshipDefinition; // Widget config
    cardinality?: string;
}
```

## Widget Configuration

### RelationshipDefinition
Defines how a relationship interacts.

```typescript
export interface RelationshipDefinition {
    widget: WidgetType;
    config?: WidgetConfig;
}

export type WidgetType = 
    | 'binary' | 'scale' | 'set' | 'cycle' | 'number' | 'text' | 'mermaid'
    | 'diagram' | 'date' | 'color' | 'rating' | 'url' | 'tags'
    | 'toggle-group' | 'progress' | 'multi-select' | 'rich-text' | 'code'
    | 'template' | 'template_example' | 'markdown_property' | 'markdown_file';

export type WidgetConfig = 
    | BinaryConfig | ScaleConfig | SetConfig | CycleConfig 
    | NumberConfig | TextConfig | MermaidConfig | DiagramConfig 
    | DateConfig | RatingConfig | TagsConfig | ToggleGroupConfig 
    | ProgressConfig | JsonConfig | MultiSelectConfig | SimpleConfig;
```

See individual widget documentation for specific config interfaces.

