import typescriptEslint from "@typescript-eslint/eslint-plugin";
import robloxTs from "eslint-plugin-roblox-ts";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["out", "types"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
    "plugin:roblox-ts/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "roblox-ts": robloxTs,
        prettier,
        "unused-imports": unusedImports,
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            jsx: true,
            useJSXTextNode: true,
            project: "./tsconfig.json",
        },
    },

    rules: {
        "@typescript-eslint/array-type": ["error", {
            default: "generic",
        }],

        "prettier/prettier": "warn",
        "roblox-ts/no-private-identifier": "off",
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",
        "unused-imports/no-unused-imports": "warn",
    },
}];
