//arrow funcition
export const logMessage = (message: string): void => {
  console.log('Function basic sample1:', message)
}

//named function
export function logMessage2(message: string): void {
  console.log('Function basic sample2:', message)
}

// calm function
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample3:', message)
}

//arrow to easy
export const logMessage4 = (message: string): void => console.log('Function basic sample1:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

//call signature
type LogMassage = (message: string) => void
export const LogMassage6: LogMassage = (message) => {
  console.log('Function basic sample6:', message)
}

// complited call signature
type FullLogMessage = {
  (message: string): void
}

export const FullLogMessage7: FullLogMessage = (message) => {
  console.log('Function basic sample7:', message)
}
