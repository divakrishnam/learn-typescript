interface Laptop {
  name: string
  on(): void
  off(): void
}

class Asus implements Laptop{
  name: string
  isGaming: boolean

  constructor(name: string, isGaming: boolean){
    this.name = name
    this.isGaming = isGaming
  }

  on(): void{
    console.log('nyala')
  }
  off(): void{
    console.log('mati')
  }
}

class MacBook implements Laptop{
  name: string;
  keyboardLight: boolean

  constructor(name: string, keyboadLight: boolean){
    this.name = name
    this.keyboardLight = keyboadLight
  }

  on(): void {
    console.log('nyala')
  }
  off(): void {
    console.log('mati')
  }
  
}


let asus = new Asus('Asus', true)
asus.on()