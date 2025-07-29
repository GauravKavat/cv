import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist"],
  },
  // Base configuration for all TypeScript files
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest", // Use "latest" to support modern JavaScript features
      sourceType: "module", // Use module type for modern JavaScript
      globals: {
        ...globals.browser,
      },
      // Add parser options to support JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Rules for all TypeScript files
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // It's better to have this on to catch unused variables
    },
  },
  // React-specific configuration
  {
    files: ["**/*.{ts,tsx}"], // Target only TypeScript React files
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Use the recommended rules from the plugin
      ...reactHooks.configs.recommended.rules,
      // Rule for react-refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);