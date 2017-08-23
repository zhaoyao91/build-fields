const cloneDeepWith = require('lodash.clonedeepwith')

module.exports = function (builder, object) {
  if (arguments.length > 1) return buildFields(builder, object)
  else return (object) => buildFields(builder, object)
}

function buildFields (builder, object) {
  return cloneDeepWith(builder, (value) => {
    if (typeof value === 'function') return value(object)
  })
}
