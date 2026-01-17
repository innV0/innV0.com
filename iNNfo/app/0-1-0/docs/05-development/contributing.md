# Contributing to kNNowledge

Thank you for your interest in contributing to kNNowledge! This guide will help you get started.

## Code of Conduct

Be respectful, inclusive, and constructive. We're building this together.

## Ways to Contribute

- **Report bugs** - File issues with clear reproduction steps
- **Suggest features** - Propose enhancements with use cases
- **Improve documentation** - Fix typos, add examples, clarify concepts
- **Write code** - Implement features or fix bugs
- **Review PRs** - Provide feedback on pull requests
- **Share examples** - Create example `.nn.md` models

## Getting Started

### 1. Fork the Repository

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/knnowledge.git
cd knnowledge
```

### 2. Set Up Development Environment

```bash
cd app
npm install
npm run dev
```

See [Setup Guide](./setup.md) for detailed instructions.

### 3. Create a Branch

```bash
git checkout -b feature/my-feature
# or
git checkout -b fix/bug-description
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions/changes
- `chore/` - Maintenance tasks

## Development Workflow

### 1. Make Changes

Edit files in `app/src/`

### 2. Test Locally

```bash
npm run dev
```

Verify your changes work as expected.

### 3. Lint Code

```bash
npm run lint
```

Fix any linting errors.

### 4. Build

```bash
npm run build
```

Ensure production build succeeds.

### 5. Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add new widget type"
```

#### Commit Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

#### Examples

```bash
git commit -m "feat: add date picker widget"
git commit -m "fix: resolve matrix cell rendering issue"
git commit -m "docs: update widget configuration examples"
git commit -m "refactor: simplify parser logic"
```

### 6. Push

```bash
git push origin feature/my-feature
```

### 7. Create Pull Request

On GitHub:
1. Navigate to your fork
2. Click "New Pull Request"
3. Select your branch
4. Fill out PR template
5. Submit

## Pull Request Guidelines

### PR Title

Use conventional commit format:

```
feat: add date picker widget
fix: resolve matrix rendering bug
docs: improve setup instructions
```

### PR Description

Include:

- **What** - What does this PR do?
- **Why** - Why is this change needed?
- **How** - How does it work?
- **Testing** - How was it tested?
- **Screenshots** - For UI changes
- **Breaking changes** - If any

### Example PR Description

```markdown
## What
Adds a new date picker widget for date/time relationships.

## Why
Users need to model temporal relationships (deadlines, start dates, etc.)

## How
- Created `DateWidget.tsx` component
- Added `DateConfig` interface to types
- Updated parser to handle date widget config
- Added date formatting utilities

## Testing
- Tested with example model
- Verified date parsing and serialization
- Checked calendar UI in different browsers

## Screenshots
[Attach screenshots]

## Breaking Changes
None
```

### PR Checklist

Before submitting:

- [ ] Code follows project conventions
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Changes tested locally
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow convention
- [ ] PR description is complete

## Code Style

### TypeScript

- Use **TypeScript** for all new code
- Define types for all props and state
- Avoid `any` - use specific types
- Use interfaces for object shapes

### React

- Use **functional components** with hooks
- Use `const` for component definitions
- Destructure props in function signature
- Keep components focused and small

### Naming

- **Components:** PascalCase (`ItemBadge`)
- **Files:** Match component name (`ItemBadge.tsx`)
- **Functions:** camelCase (`parseModel`)
- **Constants:** UPPER_SNAKE_CASE (`DEFAULT_CONFIG`)
- **Types/Interfaces:** PascalCase (`NodeProps`)

### Formatting

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for strings
- **Semicolons:** Use them
- **Line length:** Max 100 characters (soft limit)

### Example

```typescript
interface ItemBadgeProps {
  item: Node;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function ItemBadge({ item, size = 'md', onClick }: ItemBadgeProps) {
  const cleanName = item.content.replace(/^\[\[/, '').replace(/\]\]$/, '');
  
  return (
    <div className="item-badge" onClick={onClick}>
      {cleanName}
    </div>
  );
}
```

## Testing

### Current State

- Manual testing via browser
- Example models for validation

### Future

- Unit tests with Vitest
- Integration tests with Testing Library
- E2E tests with Playwright

### Testing Checklist

When adding features:

- [ ] Test happy path
- [ ] Test edge cases
- [ ] Test error handling
- [ ] Test with different browsers
- [ ] Test with example models

## Documentation

### When to Update Docs

Update documentation when:

- Adding new features
- Changing existing behavior
- Fixing bugs that affect usage
- Adding new file format syntax
- Changing APIs or interfaces

### Which Docs to Update

- **README.md** - If feature is user-facing
- **File Format** - If syntax changes
- **Architecture** - If structure changes
- **API docs** - If interfaces change
- **Screenshots** - If UI changes

See [Screenshot Update Guide](../SCREENSHOT_UPDATE_GUIDE.md).

## Issue Guidelines

### Reporting Bugs

Include:

1. **Description** - What's wrong?
2. **Steps to reproduce** - How to trigger the bug?
3. **Expected behavior** - What should happen?
4. **Actual behavior** - What actually happens?
5. **Environment** - Browser, OS, version
6. **Screenshots** - If applicable
7. **Model file** - If relevant (attach `.nn.md`)

### Feature Requests

Include:

1. **Use case** - What problem does this solve?
2. **Proposed solution** - How should it work?
3. **Alternatives** - Other approaches considered?
4. **Examples** - Similar features in other tools?

## Review Process

### What Reviewers Look For

- **Correctness** - Does it work?
- **Code quality** - Is it maintainable?
- **Performance** - Is it efficient?
- **Documentation** - Is it documented?
- **Tests** - Is it tested?
- **Style** - Does it follow conventions?

### Addressing Feedback

- Be responsive to comments
- Make requested changes
- Push updates to same branch
- Re-request review when ready

### Approval

- At least one approval required
- All checks must pass
- No unresolved conversations

## Merging

### Who Can Merge

- Maintainers only

### Merge Strategy

- **Squash and merge** - For feature branches
- **Rebase and merge** - For small fixes
- **Merge commit** - For release branches

## Release Process

See [Deployment Guide](./deployment.md) for release procedures.

## Community

### Communication

- **GitHub Issues** - Bug reports, feature requests
- **GitHub Discussions** - Questions, ideas, showcase
- **Pull Requests** - Code contributions

### Getting Help

- Check existing issues and discussions
- Read documentation
- Ask in GitHub Discussions
- Tag maintainers if urgent

## Recognition

Contributors are recognized in:

- GitHub contributors list
- Release notes (for significant contributions)
- README (for major features)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Questions?

If you have questions about contributing:

1. Check this guide
2. Search existing issues
3. Ask in GitHub Discussions
4. Contact maintainers

## Thank You!

Every contribution, no matter how small, helps make kNNowledge better. We appreciate your time and effort!

---

**Happy coding! 🚀**
