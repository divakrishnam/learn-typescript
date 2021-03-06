class List<T> {
  private data: T[]
  constructor(...elements: T[]){
    this.data = elements
  }

  add(element: T): void{
    this.data.push(element)
  }

  addMultiple(...elements: T[]): void{
    this.data.push(...elements)
  }

  getAll(): T[]{
    return this.data
  }
}

let numbers = new List<number>(1,2 ,3 )
numbers.add(5)
numbers.addMultiple(6,7,8)
console.log(numbers.getAll())

let randoms = new List<number | string>(1, "b", "c")
randoms.add(4)
randoms.addMultiple(5, "f")
console.log(randoms.getAll())