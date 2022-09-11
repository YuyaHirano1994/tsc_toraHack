export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('maybe?', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('isFoo?', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('sum?', typeof sum, sum)
  }
}
