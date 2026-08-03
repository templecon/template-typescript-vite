> [!NOTE]
> This is template repository for library development using TypeScript and Vite. Check out [website template](https://github.com/templecon/template-typescript-vite-web) for web application development.

# How to use

```bash
git clone https://github.com/templecon/template-typescript-vite
cd template-typescript-vite
pnpm install
```

## Requirements

Node.js 26 or higher is required. The template runs TypeScript configuration and hooks directly with Node's built-in type stripping.

The repository pins its package manager in the `packageManager` field of `package.json` (pnpm 10.17.1). Install that exact version with `corepack enable && corepack prepare pnpm@10.17.1 --activate` (or `npm install -g pnpm@10.17.1`) before running `pnpm install` and `pnpm run check`.

## Conventions and Rules

This project follows specific conventions and rules for code style, data validation, testing, and more. Please refer to the following documentation for detailed guidelines.

- [Typescript](./docs/rules/typescript.md)
- [Typescript Schema Validation](./docs/rules/typescript_schema.md)
- [Testing Guidelines](./docs/rules/tests.md)
