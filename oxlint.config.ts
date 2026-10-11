import baseConfig from "@concertypin/config/oxlint";
import { defineConfig } from "oxlint";
export default defineConfig({
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
    extends: [baseConfig()],
});
