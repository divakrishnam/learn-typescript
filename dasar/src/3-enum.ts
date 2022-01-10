// enum = tipe data yg menyimpan data konstan

// numeric enums
enum Month {
  JAN = 1,
  FEB = 100,
  MAR,
  APR
}

// console.log(Month)
// {
//   '0': 'JAN',
//   '1': 'FEB',
//   '2': 'MAR',
//   '3': 'APR',
//   JAN: 0,
//   FEB: 1,
//   MAR: 2,
//   APR: 3
// }
// console.log(Month.JAN)
// 0


// string enum
enum Month {
  MAY = "Mei",
  JUN = "Juni",
  JUL = "Juli",
  AUG = "Agustus"
}

console.log(Month.MAY)
// Mei