/* Java Script Loop */

// for
for (let i = 0; i < 5; i++) {
    console.log('literasi ke ${i}');
    alert(i);
}

// do...while
let a = 0;
do {
 console.log('literasi ke{a}');
  alert( a );
  a++;
} while (a < 3);

// while
let c = 0;
while (c < 3) { // menampilkan 0, lalu 1, lalu 2
  console.log('literasi ke ${c}');
    alert( c );
  c++;
}

/* Java Script Loop Control */

// break
for (let k = 0; k < 7; k++) {
    if(k==5){
        break;
    }
    console.log('literasi ke ${k}');
    alert(k);
   k++;
}

// continue
for (let n = 0; n < 7; n++) {
    if(n==5){
        continue;
    }
    console.log('literasi ke ${n}');
    alert(n);
   n++;
}

