// sebuah class atau method untuk memproduksi class yang berbeda-beda

namespace FactorySolution {
  interface Logistic {
    qty: number
    deliver(): void
  }

  class Truck implements Logistic {
    qty: number
    constructor(qty:number){
      this.qty = qty
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} menggunakan truk`)
    }
  }

  class Ship implements Logistic {
    qty: number
    constructor(qty:number){
      this.qty = qty
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} menggunakan kapal`)
    }
  }

  type LogisticType = {
    type: string
    qty: number
  }

  interface Factory {
    create(options: LogisticType): Logistic
  }

  class LogisticFactory implements Factory{
    create(options: LogisticType): Logistic {
      if(options.type === 'delivere_by_land'){
        return new Truck(options.qty)
      }else if(options.type === 'delivere_by_sea'){
        return new Ship(options.qty)
      }

      throw new Error('Class tidak tersedia')
    }
  }

  const logistic = new LogisticFactory()

  const byLand = logistic.create({type: 'deliver_by_land', qty: 20})
  console.log(byLand.deliver())

  const bySea = logistic.create({type: 'deliver_by_sea', qty: 200})
  console.log(bySea.deliver())
}