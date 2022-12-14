module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-only-tests"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    project: "./**/tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "memberLike",
        modifiers: ["public"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: ["property", "method"],
        format: null,
        modifiers: ["requiresQuotes"],
      },
    ],
    eqeqeq: "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "no-only-tests/no-only-tests": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-else-return": "error",
    "require-await": "error",    
    "no-return-await": "error",
    "arrow-body-style": "error",
  },
};
