---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "func-name-mixedcase | Solhint"
---

# func-name-mixedcase
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Style%20Guide%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Function name must be in camelCase.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "func-name-mixedcase": "warn"
  }
}
```


## Examples
This rule does not have examples.

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/naming/func-name-mixedcase.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/naming/func-name-mixedcase.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/naming/func-name-mixedcase.js)
