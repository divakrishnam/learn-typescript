// menambahkan beberapa fungsionalitas pada object yg telah ada

namespace DecoratorSolution{
  interface IProduct {
    getProduct(): any
  }
  
  class Product implements IProduct{
    name: string
    price: number
  
    constructor(name: string, price: number){
      this.name = name
      this.price = price
    }
  
    getProduct() {
      return {
        name: this.name,
        price: this.price
      }
    }
  }

  abstract class ProductDecorator implements IProduct{
    protected product: Product

    constructor(product: Product){
      this.product = product
    }

    abstract getProduct(): any
  }

  class ProductImportDecorator extends ProductDecorator{
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.name,
        tax: 10000
      }
    }
  }

  class ProductExportDecorator extends ProductDecorator{
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.price + 40000,
        tax: 20000
      }
    }
  }

  const productA = new Product('product A', 50000)
  console.log(productA.getProduct())

  const productAFromImport = new ProductImportDecorator(productA)
  console.log(productAFromImport.getProduct())

  const productAFromExport = new ProductExportDecorator(productA)
  console.log(productAFromExport.getProduct())
}