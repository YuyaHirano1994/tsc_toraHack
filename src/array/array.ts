export default function arraySample() {
  const colors: string[] = ['red', 'white']
  colors.push('yellow') //OK
  //colors.push(123) //NG
  console.log('Array Sample1: ', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8) //OK
  //even.push("10") //NG
  console.log(even)

  const ids: (string | number)[] = ['abc', 123]
  ids.push('EDF') //OK
  ids.push(123) //OK
  //ids.push(true) //NG
  console.log(ids)

  //

  const generateSomeArray = () => {
    const _someArray = [] //array
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }

  const _someArray = generateSomeArray()

  _someArray.push(456) //OK
  _someArray.push('EDF') //OK
  //_someArray.push(true) //NG

  console.log(_someArray)

  //imutable
  const commands: readonly string[] = ['add', 'commit', 'push']
  //commands.push("fetch") //NG
  //commands[2] = "fetch" //NG

  console.log('imutable Array:', commands)
}
