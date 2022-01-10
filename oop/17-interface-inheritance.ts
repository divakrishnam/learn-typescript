interface Vehicle {
  name: string
  wheels: number
}

interface ICar extends Vehicle {
  doors: number
}

class Civic implements ICar {
  doors: number
  name: string
  wheels: number

}