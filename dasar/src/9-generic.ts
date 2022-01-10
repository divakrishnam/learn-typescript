function myData<T>(value: T){
  return value
}

console.log(myData('Diva').length)
console.log(myData(123))

const arrowFunc = <T>(value: T) => {
  return value
}

// JSX
const arrowFunc2 = <T extends unknown>(value: T) => {
  return value
}

const arrowFunc3 = <T extends {}>(value: T) => {
  return value
}

const arrowFunc4 = <T, >(value: T) => {
  return value
}