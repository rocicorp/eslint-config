import eslintConfig from "./index.js";

export default [
  ...eslintConfig,
  {
    ignores: ["index.js"], // Ignore the config source file when linting this repo
  },
];
