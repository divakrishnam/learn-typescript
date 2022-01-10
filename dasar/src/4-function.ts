// function basic
function getName(): string {
  return "My name is, Diva"
}

function getAge(): number {
  return 35
}

function printName(): void{
  console.log("Print Name")
}
printName()

// arguments types
function multiply(val1: number, val2: number): number{
  return val1 * val2
}
console.log(multiply(3,4))

// function as type
type Tambah = (val1: number, val2: number) => number
const Add: Tambah = (val1: number, val2: number): number => {
  return val1 * val2
}

// default parameter
const fullName = (first: string, last: string = "Krishna"): string => {
  return first+ " "+ last
}
console.log(fullName("Diva"))
console.log(fullName("Diva", "Murti"))

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
  return val1 + " " + val2
}

console.log(getUmur("a", "b"))
console.log(getUmur("a"))