'use strict'

function * generate (current = 0, step = 1) {
  yield current
  yield * generate(current + step, step)
}

module.exports = {
  generate
}
