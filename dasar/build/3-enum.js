"use strict";
// enum = tipe data yg menyimpan data konstan
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 100] = "FEB";
    Month[Month["MAR"] = 101] = "MAR";
    Month[Month["APR"] = 102] = "APR";
})(Month || (Month = {}));
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
(function (Month) {
    Month["MAY"] = "Mei";
    Month["JUN"] = "Juni";
    Month["JUL"] = "Juli";
    Month["AUG"] = "Agustus";
})(Month || (Month = {}));
console.log(Month.MAY);
// Mei
