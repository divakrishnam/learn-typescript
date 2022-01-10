// menentukan algoritma yg cocok untuk mengatasi problematika

interface NumericConverter {
  convertNumber(num: number):void
}

class NumberConvertion {
  private strategy: NumericConverter

  constructor(strategy: NumericConverter){
    this.strategy = strategy
  }

  execute(num: number): void{
    this.strategy.convertNumber(num)
  }
}

class NumberToCurrency implements NumericConverter {
  convertNumber(num: number): void {
    console.log(num.toLocaleString('id-ID',{
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'IDR'
    }))
  }
}

class NumberToDecimalSeparator implements NumericConverter{
  convertNumber(num: number): void {
    console.log(num.toLocaleString('id-ID',{
      minimumFractionDigits: 2
    }))
  }
}

class NumberToDate implements NumericConverter{
  convertNumber(num: number): void {
    console.log(new Date(num * 1000).toUTCString())
  }
}


const mataUang = new NumberConvertion(new NumberToCurrency)
mataUang.execute(100000000)

const decimal = new NumberConvertion(new NumberToDecimalSeparator)
decimal.execute(50000000)