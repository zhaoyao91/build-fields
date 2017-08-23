# Build Fields

Build object by builders of each fields.

## Installation

```
npm i build-fields
```

## Usage

```
const buildFields = reuqire('build-fields')
const {compose, prop, upperCase} = require('lodash/fp')

const src = {name: 'Bob', age: 20}
const builder = {
  name: compose(upperCase, prop('name')),
  friend: {
    name: 'Alice',
    age: prop('age')
  }
}

const result = buildFields(builder, src)

// result is {name: 'BOB', friend: {name: 'Alice', age: 20}}
```

## Curry

`buildFields` is curried, so it can be used as `buildFields(builder)(src)`.

## License

MIT