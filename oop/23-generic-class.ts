interface Generics3<T> {
  propA: T
  methodA(): T
}

class GenenericsClass<T> implements Generics3<T>{
  propA: T

  constructor(prop: T){
    this.propA = prop
  }

  methodA(): T {
    return this.propA
  }
}

const genericClassA = new GenenericsClass<number>(123)
console.log(genericClassA.methodA())