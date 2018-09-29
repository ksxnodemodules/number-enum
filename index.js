'use strict'
const ParallelIterable = require('parallel-iterable')
const { freeze, assign } = Object

function * generate (current = 0, step = 1) {
  yield current
  yield * generate(current + step, step)
}

function create (names = [], current = 0, step = 1) {
  return freeze(
    new ParallelIterable(ParallelIterable.END_OF_FIRST, names, generate(current, step))
      .reduce((prev, [key, val]) => assign(prev, { [key]: val }), {})
  )
}

module.exports = assign(create, {
  generate,
  create
})
