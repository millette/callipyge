'use strict'

const helpers = {
  f1: (a1, a2) => (a1 ? JSON.stringify(a1, null, '  ') : '') + (a2 ? JSON.stringify(a2, null, '  ') : '')
}

module.exports = () => 'Available in helpers.h1: ' + Object.keys(helpers).join(', ')

for (let r in helpers) { module.exports[r] = helpers[r] }
