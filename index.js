'use strict'
const { zip, reduce } = require('iter-tools')
const { freeze, assign } = Object

function * generate (current = 0, step = 1) {
  yield current
  yield * generate(current + step, step)
}

function create (names = [], current = 0, step = 1) {
  return freeze(reduce(
    {},
    (prev, [key, val]) => assign(prev, { [key]: val }),
    zip(names, generate(current, step))
  ))
}

module.exports = assign(create, {
  generate,
  create
})
