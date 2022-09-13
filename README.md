# Shared eslint config for Rocicorp Projects


The package includes all the dependencies to have a working `eslint`
setup that works with the configuration. Adopting projects will only
need to install `@rocicorp/eslint-config`.

## Install

```bash
$ npm install @rocicorp/eslint-config --save-dev
```


## Usage
** Make sure you have a tsconfig.json in your project **

Add this to the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@rocicorp/eslint-config"
  }
}
```
