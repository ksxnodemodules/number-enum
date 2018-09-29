'use strict'
const main = require('./lib/test-spawn')

main({
  defaultExecutable: 'tsc',
  envMiddleName: 'STANDARDJS'
})
