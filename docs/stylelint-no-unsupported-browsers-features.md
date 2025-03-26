# Stylelint-no-unsupported-browsers-features

Currently we apply this features only for:

```javascript
{
  browsers: [
    "last 2 Edge versions",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Samsung versions",
    "last 2 Opera versions"
  ]
}
```
## Override
You could also override this in your `stylelint.config.js`. Pls follow the above approach to ensure a consistent linting
over all projects.
