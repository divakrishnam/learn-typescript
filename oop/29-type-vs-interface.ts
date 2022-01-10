// menggunakan type data apa saja
// tidak bisa dimerge
type Phone = number
type UserType = {
  name: string
}

type Name = {
  name: string
}
type Age = {
  age: number
}
type Employee1 = Name & Age
type Employee2 = Name | Age

// hanya menggunakan object type
// bisa dimerge
interface UserInterface {
  name: string
}

interface Dinosaurus {
  name: string
}
interface Dinosaurus {
  weight: number
}


// -------------------------------

class User1 implements UserInterface {
  name: string
}