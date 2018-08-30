var chisla = [1, 2, 3, 87, 54, 98];
var str = chisla.join(",");
console.log(str);

var chisla = [1, 2, 3, 87, 54, 98];
var str = chisla.join("-");
console.log(str);

var chisla = [1, 2, 3, 87, 54, 98];
var str = chisla.join(" ");
console.log(str);

var chisla = [1, 2, 3, 87, 54, 98];
var str = chisla.join("x");
console.log(str);

var chisla = [1, 2, 3, 87, 54, 98, 47, 20];
var max = 0;
for (var a = 0; a < chisla.length; a++) {
  if (chisla[a] > max) {
    max = chisla[a];
  }
}
