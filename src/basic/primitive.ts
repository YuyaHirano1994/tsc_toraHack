export default function primitiveSample() {
  const name = 'サマンサ'
  // name = 123
  console.log('primitiveSample1', typeof name, name)

  const age = 28
  console.log('primitiveSample1', typeof age, age)

  const isSingle = true
  console.log('primitiveSample1', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitiveSample1', typeof isOver20, isOver20)
}
