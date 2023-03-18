/* Conditional Branching */

// if
let responce = prompt("7 + 7 =");
if (response = 14) {
    alert("correct!");
}
console.log(response);

// if-else
let answer = prompt("1 + 1 =");
if (answer == 2) {
    alert("corret!");
} else {
    alert("wrong!");
}
console.log(answer);

// Else If
let tahun = prompt('Diusia berapa wanita menikah?', '');

if (tahun < 19) {
  alert( 'Terlalu dini...' );
} else if (tahun > 27) {
  alert( 'Terlalu akhir' );
} else {
  alert( 'Tepat sekali!' );
}
console.log(tahun);

// Switch
let color = "darkblue";

switch (color) {
    case "darkblue" :
        alert("i love darkblue");
        break;
    case "yellow" :
        alert("i love yellow");
        break;
    default:
        alert("i dont know what color it is!");
        break;
}
console.log(color);


