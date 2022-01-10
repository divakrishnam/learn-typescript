class ProductA {
  private _price: number = 0
  private discount: number = 0.05

  get price(){
    return this._price
  }

  set price(value: number){
    this._price = value - (value * this.discount)
  }
}