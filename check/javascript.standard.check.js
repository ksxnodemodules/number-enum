'use strict'
const main = require('./lib/test-spawn')

main({
  description: 'JavaScript Code Style: StandardJS',
  defaultExecutable: 'standard',
  envMiddleName: 'STANDARDJS'
})
