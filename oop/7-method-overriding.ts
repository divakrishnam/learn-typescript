class Hewan6 {
  bernafas(){
    console.log('Sedang bernafas')
  }
}

class Katak6 extends Hewan6{
  bernafas(): void {
    console.log('malas bernafas')
  }
  // bernafas(): void {
  //     super.bernafas()
  // }
}

let katak6 = new Katak6()
katak6.bernafas()