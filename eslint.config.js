// eslint.config.js
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  // Ignorar carpetas que no queremos lint
  {
    ignores: ["node_modules", "dist", "build", "coverage", ".storybook"],
  },

  // Reglas recomendadas de ESLint
  js.configs.recommended,

  // TypeScript
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        browser: true,
        jest: true,
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-undef": "off",
    },
  },

  // React y Hooks
  {
    plugins: { react: reactPlugin, "react-hooks": reactHooksPlugin },
    rules: {
      "react/react-in-jsx-scope": "off", // no hace falta en React 17+
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: { react: { version: "detect" } },
  },

  // Prettier
  {
    plugins: { prettier: prettierPlugin },
    rules: { "prettier/prettier": "error" },
  },

  // Storybook
  {
    plugins: { storybook: storybookPlugin },
    rules: { "no-console": "off" }, // permitir console en stories
  },
];
