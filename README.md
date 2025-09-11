# Shared eslint config for Rocicorp Projects

The package includes all the dependencies to have a working `eslint`
setup that works with the configuration. Adopting projects will only
need to install `@rocicorp/eslint-config`.

## Install

```bash
$ npm install @rocicorp/eslint-config --save-dev
```

## Usage

**Version 1.0.0+ requires ESLint 9 and uses the new flat config format.**

Make sure you have a `tsconfig.json` in your project.

Create an `eslint.config.js` file in your project root:

```javascript
const eslintConfig = require('@rocicorp/eslint-config');

module.exports = [
  ...eslintConfig,
  {
    // Add project-specific configuration here
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      // Add other files/directories to ignore
    ],
  },
];
```

### Migration from v0.x

**Breaking Changes in v1.0.0:**

- **ESLint 9.35.0**: Upgraded from ESLint 8.x to 9.35.0
- **Flat Config**: Uses ESLint 9's new flat config format instead of legacy format
- **Stricter TypeScript Rules**: Updated @typescript-eslint to v8.43.0 with more comprehensive type checking
- **Configuration Format**: Must use `eslint.config.js` instead of `eslintConfig` in `package.json`

**Legacy Usage (v0.x only):**
```json
{
  "eslintConfig": {
    "extends": "@rocicorp/eslint-config"
  }
}
```
