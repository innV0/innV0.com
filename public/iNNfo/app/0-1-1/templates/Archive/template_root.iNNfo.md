---
version: "0.3.0"
type: model_root

metamodel:
  classes:
    Item:
      lucideIcon: Box
      color: blue
      description: "Generic item class"
  
  relationships: []

graph_edges: []
---

# New Model

Start building your model here.

## Getting Started

1. Define your classes in the `metamodel.classes` section above
2. Add relationships in `metamodel.relationships`
3. Create instance folders under `model/{ClassName}/{InstanceName}/`
4. Add relationships in `graph_edges`

## Example Structure

```
model/
├── .iNNfo.md (this file)
├── Item/
│   └── Example-Item/
│       └── .iNNfo.md
```
