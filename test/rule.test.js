// example raw rule 
const ruleId = 'private-vars-leading-underscore'
const meta = {
  type: 'naming',

  docs: {
    description: 'Private and internal names must start with a single underscore.',
    category: 'Style Guide Rules',
    options: [
      {
        description: severityDescription,
        default: DEFAULT_SEVERITY
      },
      {
        description:
          'A JSON object with a single property "strict" specifying if the rule should apply to non state variables. Default: { strict: false }.',
        default: JSON.stringify(DEFAULT_OPTION)
      }
    ]
  }
}