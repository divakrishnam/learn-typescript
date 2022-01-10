interface Generics<T>{
  propA: T
}

function genericsFunction<T>(value: T): Generics<T>{
  let data: Generics<T> = {
    propA: value
  }

  return data
}

console.log(genericsFunction<string>('haha'))
console.log(genericsFunction<boolean>(true))