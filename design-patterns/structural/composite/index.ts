// membuat struktur tree bercabang
/*
Computer
  PC
    Case
    Motherboard
  Laptop
    Asus
    Lenovo
*/

namespace CompositeSolution {
  abstract class Category {
    children: Category[] = []
    parent: Category | null = null
    name: string

    constructor(name: string){
      this.name = name
    }

    setParent(parent: Category | null){
      this.parent = parent
    }

    getParent(): Category | null{
      return this.parent
    }

    isComposite(): boolean{
      return false
    }

    abstract getName(): string
  }

  class Product extends Category{
    getName(): string {
      return this.name
    }
  }

  class CategoryComposite extends Category {
    constructor(name: string){
      super(name)
    }

    add(category: Category): void {
      this.children.push(category)
      category.setParent(category)
    }

    remove(category: Category): void{
      const categoryIndex = this.children.indexOf(category)
      this.children.splice(categoryIndex, 1)
    }

    isComposite(): boolean {
      return true
    }

    getName(): string {
      return this.name
    }
  }


  const category = new CategoryComposite('Category')

  const computer = new CategoryComposite('Computer')
  const fashion = new CategoryComposite('fashion')

  const pc = new CategoryComposite('pc')
  const laptop = new CategoryComposite('laptop')

  category.add(computer)
  category.add(fashion)

  computer.add(pc)
  computer.add(laptop)


  const print = (composite: Category): void => {
    console.log('kategori: '+composite.getName())
    composite.children.forEach(element => {
      if(element.isComposite() && element.children.length){
        print(element)
      }else{
        console.log('product: '+element.getName())
      }
    })
  }
}