---
warning:     "This is a dynamically generated file. Do not edit manually."
layout:      "default"
title:       "not-rely-on-block-hash | Solhint"
---

# not-rely-on-block-hash
![Recommended Badge](https://img.shields.io/badge/-Recommended-brightgreen)
![Category Badge](https://img.shields.io/badge/-Security%20Rules-informational)
![Default Severity Badge warn](https://img.shields.io/badge/Default%20Severity-warn-yellow)
> The {"extends": "solhint:recommended"} property in a configuration file enables this rule.


## Description
Do not rely on "block.blockhash". Miners can influence its value.

## Options
This rule accepts a string option of rule severity. Must be one of "error", "warn", "off". Default to warn.

### Example Config
```json
{
  "rules": {
    "not-rely-on-block-hash": "warn"
  }
}
```


## Examples
This rule does not have examples.

## Version
This rule is introduced in the latest version.

## Resources
- [Rule source](https://github.com/protofire/solhint/tree/master/lib/rules/security/not-rely-on-block-hash.js)
- [Document source](https://github.com/protofire/solhint/tree/master/docs/rules/security/not-rely-on-block-hash.md)
- [Test cases](https://github.com/protofire/solhint/tree/master/test/rules/security/not-rely-on-block-hash.js)
