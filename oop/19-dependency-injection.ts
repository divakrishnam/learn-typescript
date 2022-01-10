interface IStore {
  name: string
  profit: number
  getProfit(): number
}

class TokoLama implements IStore{
  name: string = "Toko Lama"
  profit: number = 1000

  getName(): string {
    return this.name
  }

  getProfit(): number {
    return this.profit
  }
}

class TokoBaru implements IStore{
  name: string = "Toko Baru"
  profit: number = 2000

  getName(): string {
    return this.name
  }

  getProfit(): number {
    return this.profit
  }
}

class TechProduct {
  private store: IStore
  private name: string
  private price: number

  constructor(store: IStore, name: string, price: number){
    this.name = name
    this.price = price
    this.store = store
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
  }
}

class FoodProduct {
  private store: IStore
  private name: string
  private price: number

  constructor(store: IStore, name: string, price: number){
    this.name = name
    this.price = price
    this.store = store
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
  }
}

const tokoLama = new TokoLama()
const tokoBaru = new TokoBaru()

const laptopMahal = new TechProduct(tokoLama, 'Laptop Mahal', 12000)
const laptopMahal2 = new TechProduct(tokoBaru, 'Laptop Mahal', 12000)