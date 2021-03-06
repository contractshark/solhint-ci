---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "use-forbidden-name | Solhint"
---

# use-forbidden-name
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Style%20Guide%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Avoid to use letters 'I', 'l', 'O' as identifiers.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "use-forbidden-name": "warn"
  }
}
```


## Examples
This rule does not have examples.

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/naming/use-forbidden-name.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/naming/use-forbidden-name.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/naming/use-forbidden-name.js)
