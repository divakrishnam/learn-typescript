abstract class Hewan12{
  name: string

  constructor(name: string){
    this.name = name
  }

  makan(): void {
    console.log('sedang makan')
  }

  abstract bergerak(): void
}

class Kucing12 extends Hewan12{
  constructor(){
    super('kucing')
  }

  bergerak(): void {
    console.log('merangkak')
  }
}