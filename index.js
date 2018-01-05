const mapValues = require('lodash.mapvalues')

module.exports = function (builder, source) {
  if (arguments.length > 1) return buildFields(builder, source)
  else return (object) => buildFields(builder, object)
}

function buildFields (builder, source) {
  const type = typeof builder
  if (type === 'function') return builder(source)
  else if (Array.isArray(builder)) return builder.map(subBuilder => buildFields(subBuilder, source))
  else if (type === 'object') return mapValues(builder, subBuilder => buildFields(subBuilder, source))
  else return builder
}
