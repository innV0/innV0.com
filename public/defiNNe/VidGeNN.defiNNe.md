---
version: 2.2.0
url: https://innv0.com/definne/vidgeNN-script-v2
author: VidGeNN Team
status: stable
sample: https://github.com/innV0/eNNv5/blob/main/apps/VidGeNN/videos/MasterShowroom/script.md
---

# VidGeNN Script Specification (v2)

## A standard for defining AI-powered video scripts compatible with Logseq outliner syntax

## Philosophy

VidGeNN prioritizes structured content and interoperability. By leveraging the Logseq Markdown format, it treats video scripts as atomic blocks of knowledge, allowing creators to manage their video production pipeline within the same tools they use for research and thought organization.

## Objectives

- **Logseq Interoperability**: Scripts MUST be valid Logseq outliner files.
- **Declarative Composition**: Define visuals, audio, and animations through simple block properties.
- **Layered Rendering**: Support a three-layer visual model (Background, Layer A, Layer B) for consistent video structure.
- **Automation Ready**: Enable machine parsing for automated video generation engines.

## Specification

### 1. Document Structure

- The document MUST be a Markdown file (`.md`).
- It MUST begin with Page Properties (YAML-like syntax without dashes) for global configuration.

### 2. Global Configuration (Page Properties)

- `video-config:: true` MUST be present for the engine to recognize the file as a valid script.
- `resolution:: [WIDTH]x[HEIGHT]` SHOULD be specified (default: `1280x720`).
- `fps:: [Number]` MAY be set (default: `30`).
- `default-voice:: [ID]` MAY be used to set the default TTS voice.
- `bg-audio:: [PATH]` MAY be used for background music.
- `bg-volume:: [0.0-1.0]` MAY be used to control music volume (default: `0.2`).
- `lip-sync-model::` MAY be set to `wav2lip`, `kling`, `sync`, or `s2v` (Speech-to-Video).

### 3. Block Syntax

- Every content block MUST start with `- ` to ensure Logseq compatibility.
- Properties MUST use the double colon format: `key:: value`.
- Comments MUST start with `;` on a new line and will be ignored by the engine.

### 4. Templates

- Templates MUST be defined using the `#template` tag: `- #template NAME`.
- Properties defined within a template SHOULD be applied to any scene referencing that template.

### 5. Scenes and Items

- A scene is defined by a Markdown link: `- [Label](URL/Path)`.
- The URL/Path in the link parenthesis MUST point to the background media (image or video).
- **Audio/Speech**:
  - If a scene includes spoken word, it MUST use `dialogue:: [Text]`.
  - If `dialogue` is present, the scene duration is determined by the length of the generated audio.
- **Duration**:
  - If no `dialogue` is provided, a `duration:: [seconds]` property MAY be specified (default for images: 3s; default for video: clip length).
- **Visual Effects**: The `effect::` property MAY be used. Supported values:
  - `ken-burns`: Slow zoom.
  - `handheld`: Organic camera shake.
  - `pulse`: Rhythmic zoom.
  - `dutch`: Subtle rotation.
  - `parallax`: 2.5D depth simulation.
  - `parallax-3d`: AI-generated depth map (requires Replicate).
  - `animate`: Image-to-Video generation (requires Replicate).
  - `vidgenn-dynamic`: "Beat Gen" effect (subtle zoom + floating pan).

### 6. Layer System

- **Layer A (Actor/Avatar)**:
  - `layer-a-path::` Path to the media.
  - `layer-a-chroma::` Color to remove (Chroma Key).
  - `layer-a-scale::` Size (e.g., `800xauto`).
  - `layer-a-position::` Position (`center`, `right-bottom`, etc.).
- **Layer B (Overlay)**:
  - `layer-b-path::` Path to the overlay.
  - `layer-b-blend-mode::` Blend mode (`screen`, `overlay`, etc.).
  - `layer-b-opacity::` Transparency (0.0 to 1.0).

### 7. Post-Production

- `transition::` xfade type (e.g., `fade`, `wipeleft`).
- `transition-duration::` Duration in seconds.
- `subtitle-ass::` Override subtitle text for the scene.

## Template

````markdown
video-config:: true
resolution:: 1920x1080

- #template CHARACTER_NAME
  layer-a-path:: ./assets/character.png
  layer-a-position:: center-bottom

- # Scene Title
  - [Background Description](file:///path/to/media.mp4)
    template:: CHARACTER_NAME
    dialogue:: Hello world!
````

## Examples

### Complex Scene with All Layers

```markdown
- [Sci-Fi Lab](lab.mp4)
  template:: SCIENTIST
  dialogue:: This laboratory uses advanced AI to process data.
  layer-b-path:: ./overlays/data_stream.mp4
  layer-b-blend-mode:: screen
  effect:: handheld
```

### AI Animated Image

```markdown
- [Portrait of an Artist](artist.jpg)
  effect:: animate
  dialogue:: The artist comes to life through generative video.
```
