//it has option parameter
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signedin! username is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signedin.')
    return false
  }
}

//it has defaul param
export const isUserSignedIn2 = (userId: string, username = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signedin! username is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signedin.')
    return false
  }
}

//rest param
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
