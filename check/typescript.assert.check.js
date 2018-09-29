'use strict'
const main = require('./lib/test-spawn')

main({
  description: 'TypeScript: Type Validation',
  defaultExecutable: 'tsc',
  envMiddleName: 'TYPESCRIPT'
})
