// type conversion   string
let value = true;
alert(typeof value); // boolean
console.log(value);

value = String(value); // sekarang nilainya string "true"
alert(typeof value); // string
console.log(value);

// conversion numeric

alert( "27" / "3" ); // 9, string dikonversi ke angka
console.log(alert);

let str = "678";
alert(typeof str); // string
let num = Number(str); // menjadi angka 678
alert(typeof num); // angka
console.log(str);

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, konversi gagal
console.log(age);

// conversion Booelean

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
console.log(Boolean);
