// hrs diturunkan dulu baru bisa dipakai
abstract class Vehicle {
  abstract wheels: number
  start(): void{
    console.log("Brum")
  }
}


class Car extends Vehicle{
  wheels: number = 4
}
let car = new Car()
car.wheels
car.start()


class MotorCycle extends Vehicle{
  wheels: number = 2
}
let motor = new MotorCycle()
motor.wheels
motor.start()