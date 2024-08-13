module.exports = {
  ignorePatterns: [
    ".eslintrc.cjs",
    "commitlint.base.cjs",
    "commitlint.config.cjs",
    "vite.config.ts",
    "src/vite-env.d.ts",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "eslint:recommended",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    include: ["src"],
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
        trailingComma: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
