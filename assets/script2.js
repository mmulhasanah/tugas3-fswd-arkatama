// Contoh typedata number
console.log("Arkatama" +1);
console.log("Multi Solusindo" + (2 * 7));
console.log(NaN * 3);


// arti dari "n" pada akhir menandakan bahwa contoh dibawah adalah sebuah `BigInt`
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);


// contoh string
const peserta1 = "UmmulHasanah";
const peserta2 = 'Ummul';
const peserta3 = `ummul`;
console.log(peserta1);
console.log(peserta2);
console.log(peserta3);


// contoh boolean
let isGreater = 27 > 30;
console.log(isGreater);


// contoh null
let boyfriend = null;
console.log(boyfriend);


// contoh undefined
let name;
console.log('name');

// contoh symbol
let employee = Symbol ('Ummul');
console.log(employee);
console.log(employee.description);

// contoh object
let student = {
    name:"Ummul Hasanah",
    age: "21",
    address: "Makassar",
}
console.log("saya adalah mahasiswa yang bernama" + student.name + "berusia "+ student.age + "berasal dari" + student.address);