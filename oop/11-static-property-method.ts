class Ayam {
  static kaki: number = 2

  static jalan(){
    console.log('berjalan dengan '+this.kaki) // karena sama-sama static maka bisa memanggil
  }

  getKaki(){
    console.log(Ayam.kaki)
  }
}

console.log(Ayam.jalan())

// ketika mengubah data static maka akan mengubah semua data pada objectnya