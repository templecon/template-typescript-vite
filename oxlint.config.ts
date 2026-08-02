import { defineConfig } from "oxlint";
import oxlintConfig from "@concertypin/config/oxlint";
import oxlintScriptsConfig from "@concertypin/config/oxlint/scripts";
export default defineConfig({
    $schema: "./node_modules/oxlint/configuration_schema.json",
    plugins: ["typescript", "unicorn", "import", "vitest", "promise"],
    env: {
        builtin: true,
    },
    ignorePatterns: [
        "**/node_modules/**",
        "**/dist/**",
        "**/dist-ts/**",
        "**/coverage/**",
        "**/.cache/**",
        "**/.vscode/**",
        "**/.git/**",
    ],
    options: {
        denyWarnings: true,
        reportUnusedDisableDirectives: "error",
        typeAware: true,
        typeCheck: true,
    },
    extends: [oxlintConfig, oxlintScriptsConfig],
    rules: {
        "typescript/no-deprecated": "error",
        "no-console": "warn",
    },
});
