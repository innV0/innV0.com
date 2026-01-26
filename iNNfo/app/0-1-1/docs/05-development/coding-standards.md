# Coding Standards

To maintain a high-quality codebase, we follow these coding standards and best practices.

## General Principles

1. **Readability First**: Write code that is easy to read and understand.
2. **Type Safety**: Leverage TypeScript's type system to catch errors early.
3. **Immutability**: Prefer immutable data structures and state updates.
4. **Component Modularity**: Keep components small, focused, and reusable.

## TypeScript

- **Strict Mode**: Always enabled in `tsconfig.json`.
- **No `any`**: Avoid using `any`. Use `unknown` if the type is truly not known, or define a proper interface.
- **Interfaces vs Types**: Use `interface` for object definitions (extensible) and `type` for unions/primitives.
- **Explicit Returns**: Define return types for complex functions.

```typescript
// Good
interface User {
  id: string;
  name: string;
}

function getUser(id: string): User | null { ... }

// Bad
type User = { id: any, name: string };
const getUser = (id) => { ... }
```

## React Components

- **Functional Components**: Use functional components with hooks.
- **PascalCase**: File names and component names should be PascalCase (e.g., `ItemBadge.tsx`).
- **Props Interface**: Define a specific interface for props, usually named `[ComponentName]Props`.
- **Destructuring**: Destructure props in the function signature.

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

## State Management (Zustand)

- **Slices**: For large stores, split logic into slices (though currently we use a single store file for simplicity).
- **Selectors**: Use specific selectors to minimize re-renders.
- **Immer**: Use Immer for nested state updates.

```typescript
// Good
const updateNode = useStore((state) => state.updateNode);

// Bad
const { nodes, updateNode } = useStore(); // Triggers re-render on any node change
```

## CSS / Styling (Tailwind)

- **Utility First**: Use Tailwind utility classes for styling.
- **No Magic Values**: Use theme values (colors, spacing) instead of arbitrary pixels.
- **`clsx` / `tailwind-merge`**: Use these libraries for conditional class names.

```tsx
// Good
<div className={clsx("p-4 rounded", isActive && "bg-blue-500")} />

// Bad
<div style={{ padding: '16px', borderRadius: '4px' }} />
```

## File Organization

- **Colocation**: Keep related files close together.
- **Barrels**: Avoid excessive barrel files (`index.ts`) as they can affect tree-shaking and build performance.
- **Imports**: Use relative imports for internal files.

## Naming Conventions

- **Variables/Functions**: `camelCase`
- **Components/Classes**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: Match the primary export.

## Comments & Documentation

- **Self-Documenting Code**: Code should be clear enough to not need comments for *what* it does.
- **"Why" Comments**: Use comments to explain *why* something is done a certain way, especially for workarounds or complex logic.
- **JSDoc**: Use JSDoc for utility functions and complex interfaces.

```typescript
/**
 * Parses the raw .nn.md content into a structured model.
 * @param content The raw file string
 * @returns The parsed AppState
 */
export function parse(content: string): AppState { ... }
```

## Git Workflow

- **Conventional Commits**: Use semantic commit messages (`feat:`, `fix:`, `docs:`, `chore:`).
- **Small PRs**: Keep pull requests focused on a single task.
