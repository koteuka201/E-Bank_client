import globals from "globals";
// import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginUnusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": tseslint,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "no-underscore-dangle": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/restrict-template-expressions": "off",
      "react/no-array-index-key": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "react/forbid-component-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-no-bind": "off",
      "react/jsx-indent": [0],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-max-depth": ["error", { max: 6 }],
      "react/function-component-definition": "off",
      "react/jsx-no-literals": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react/jsx-newline": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-async-promise-executor": "off",
      "react/no-children-prop": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "off",
      "react/destructuring-assignment": "off",
      "react/no-object-type-as-default-prop": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-invalid-void-type": "off",
      "react/prop-types": "off",
      "react/button-has-type": "off",
      "react/jsx-curly-newline": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    // rules: {
    // },
  },
];
