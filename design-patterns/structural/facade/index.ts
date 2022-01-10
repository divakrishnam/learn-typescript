// membungkus sebuah logic kompleks ke dalam satu class tersendiri yg nantinya dipakai oleh class lain ato function

import Operation from './OperationService'

const calculate1 = (): number => {
  let num1: number = 20
  let num2: number = 30

  return Operation(num1, num2)
}

console.log(calculate1())