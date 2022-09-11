export default function objectSample() {
  const a: object = {
    name: 'Yuya',
    age: 28,
  }
  let country: {
    language: string
    name: string
  } = {
    language: 'English',
    name: 'USA',
  }

  console.log('objectSample0:', country)

  country = {
    language: 'Hindi',
    name: 'India',
  }

  console.log('objectSample1:', country)

  //optional and readonly

  const kimetsu: {
    age: number
    lastNmae: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastNmae: 'kamado',
    firstName: 'tanjiro',
  }

  kimetsu.gender = 'male'
  kimetsu.lastNmae = 'sinobu'

  console.log('Are you Kimetsu?', kimetsu)

  const capitals: {
    [country: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Soul',
  }

  capitals.Canada = 'Ottawa'
  capitals.China = 'Beijing'

  console.log(capitals)
}
