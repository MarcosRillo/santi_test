import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"], // Aplica esta configuración a archivos TS/TSX
    rules: {
      "no-unused-vars": "off", // Desactiva la regla core para TS
      "@typescript-eslint/no-unused-vars": "warn", // Configura la regla de TS en "warn"
    },
  },
];

export default eslintConfig;
