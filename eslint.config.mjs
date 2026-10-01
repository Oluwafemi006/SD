import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  { ignores: [".next/**", ".next-webpack/**", "node_modules/**", "build/**", "next-env.d.ts"] },
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
]);
