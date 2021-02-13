---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "event-name-camelcase | Solhint"
---

# event-name-camelcase
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Style%20Guide%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Event name must be in CamelCase.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "event-name-camelcase": "warn"
  }
}
```


## Examples
This rule does not have examples.

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/naming/event-name-camelcase.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/naming/event-name-camelcase.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/naming/event-name-camelcase.js)