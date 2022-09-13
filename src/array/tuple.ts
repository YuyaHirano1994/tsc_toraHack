export default function tupleSample() {
  //basic
  const response: [number, string] = [200, 'ok']
  //response = [400,"NG","estra"] //NG
  // response = ["String",123] //NG

  console.log('tupleSample: ', response)

  const girlfriends: [string, ...string[]] = ['sabo', 'ace', 'kiss']
  girlfriends.push('chiho')

  console.log('tupleArray:', girlfriends)
}
