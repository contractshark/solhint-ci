---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "state-visibility | Solhint"
---

# state-visibility
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Explicitly mark visibility of state.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "state-visibility": "warn"
  }
}
```


## Examples
This rule does not have examples.

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/state-visibility.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/state-visibility.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/state-visibility.js)
