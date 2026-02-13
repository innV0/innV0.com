---
version: 0.3.0
url: https://innv0.com/definnition/vidgenn
author: VidGeNN Team
status: Draft
metamodel: https://innv0.com/defiNNition/defiNNition.md
description: A pure, hierarchical Markdown syntax for video scripts, unifying Video, Sections, Scenes, and Layers into Structured Blocks.
---

# VidGeNN Script Specification

## Philosophy: "The Clean Syntax"
This specification abandons legacy constraints (Logseq/YAML) in favor of a pure, hierarchical Markdown structure. It unifies Video, Sections, Scenes, and Layers into a single concept: **Structured Blocks**.

## 1. Core Concepts

### 1.1. Blocks & Tags
Every element in the script is a **Block**. A block is defined by a Markdown Header followed by a **Type Tag**.
- The nesting level (Header `#`) determines hierarchy.
- The tag (`#type`) determines behavior.

**Standard Block Types:**
- `#video`: The root block. Contains global configuration.
- `#section`: A grouping unit. Can be nested. Replaces "Segment".
- `#scene`: The atomic unit of time/video.
- `#layer`: A visual or audio component within a scene.

### 1.2. Block Anatomy
A block consists of three parts, in this order:
1. **Header**: `## Title #tag`
2. **Properties**: List of `- key: value` pairs.
3. **Content**: Free text body (Narration, Dialogue, or Text Overlay).

```markdown
### Block Title #type
- property_a: value
- property_b: value

This is the content of the block.
```

### 1.3. Properties
- Syntax: `- key: value` (Standard Markdown List).
- properties are **scoped**: A property defined in a `#section` is inherited by all `#scene` blocks inside it (unless overridden).

### 1.4. Content
- The text body of a block serves as its primary data source.
- For a `#scene`, Content = **Narration/Dialogue**.
- For a `#layer` (text), Content = **Visible Text**.

---

## 2. Structural Levels

### 2.1. Video (Root)
Defines the output file and global render settings. Replaces File Frontmatter.

```markdown
# Product Launch 2026 #video
- resolution: 1920x1080
- fps: 30
- voice: Sarah_Neural
```

### 2.2. Sections
Logical groupings. Used to organize complex scripts and manage context (e.g., change music for Part 2).

```markdown
## Part 1: Problem Definition #section
- music: ./assets/sad_piano.mp3
- voice_speed: 1.1
```

### 2.3. Scenes
The distinct moments of the video.

```markdown
### Intro Scene #scene
- duration: 5s
- transition: fade_black

Have you ever felt lost in code? You are not alone.
```

### 2.4. Layers
Components composed inside a scene. If no layers are defined, the scene properties (`media`) define the background.

```markdown
#### Overlay Image #layer
- media: ./assets/logo.png
- position: top-right
- opacity: 0.8
```

---

## 3. Advanced Features

### 3.1. Templates
Templates are defined in a special generic section or imported.
To apply a template, use the `template` property or the **Shortcut Syntax**.

```markdown
## Standard Slide #template
- layout: dynamic_grid
- opacity: 1.0
- effect: zoom_in
```

### 3.2. Shortcut Syntax (The "One-Liner")
For rapid scripting, a generic paragraph starting with a `#TemplateTag` is treated as a `#scene` that inherits from that template.

**Syntax**: `#TemplateName Content text...`

**Example**:
```markdown
#Narrator Welcome to the new era of video.
#Aggressive But wait, there is more!
```
*Parses as:*
- Scene 1: matches template `Narrator`, content = "Welcome to..."
- Scene 2: matches template `Aggressive`, content = "But wait..."

---

## 4. Property Reference (Standardized)

### Video / Global
- `resolution`: `1920x1080` (string)
- `fps`: `30` (number)
- `format`: `mp4` (string)

### Scene / Common
- `media`: Path to image/video `asset://...` or `./relative/path`.
- `duration`: Seconds (number) or `auto` (string).
- `voice`: Voice ID for TTS.
- `voice_speed`: Multiplier (0.5 - 2.0).
- `effect`: Visual animation (`zoom_in`, `pan_left`).
- `transition`: Exit transition (`crossfade`, `cut`).

### Layer
- `type`: `image`, `video`, `text`, `audio`.
- `position`: `center`, `top-right`, `x,y`.
- `scale`: Size multiplier.
- `animation`: Layer-specific animation.

---

## 5. Examples

### Full Script Example

```markdown
# Tech Demo 2026 #video
- resolution: 1080x1920
- author: VidGeNN Team
- music: ./audio/bg_loop.mp3

## Intro #section
- voice: Adam_V2

### Scene 1: The Hook #scene
- media: ./stock/server_room.mp4
- effect: ken_burns

In a world where data rules everything...

### Scene 2: The Solution #scene
- template: Tech_Highlight
- media: ./assets/chipset.jpg

We provide the key to unlock it.

#### Text Overlay #layer
- position: center
- style: neon_blue

UNLOCK NOW
```

### Shortcut Example

```markdown
# My Story #video

#Narrator Once upon a time.
#Narrator There was a script engine.
#Angry But it was too complex!
#Hero Until VidGeNN v3 arrived.
```
