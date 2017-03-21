# babel-plugin-eslint-disable

A plugin to add eslint disable comments to the top of babel transpiled files.

Use case is using `npm link` for local development and not wanting eslint warnings on symlinked imports.

Add to your .babelrc plugins

```
{
  "plugins": [
    "eslint-disable"
  ]
}
```

Or use in the cli

    babel ./src --out-dir ./lib --plugins eslint-disable