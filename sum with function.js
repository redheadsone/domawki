//global massive
var numerochki = [3, 5, 7, 3, 8, 4, 9, 5, 7];

function forEach(arr, func) {
  for (var x = 0; x < arr.length; x++) {
    //var sum = arr[x] * mul;
    var sum = func(arr[x]);

    // var sum = arr[x] + mul;
    // var sum = "***" + arr[x] + "***";

    console.log(func.name, sum);
    // func.name это название функций
  }
}

function mult(element) {
  var result = element * 10;
  return result;
}

function sum(element) {
  var result = element + 10;
  return result;
}

function zirochka(element) {
  var result = "***" + element + "***";
  return result;
}

forEach(numerochki, mult);
forEach(numerochki, sum);
forEach(numerochki, zirochka);
//function forEach(arr, func) в arr попадает массив numerochki, а в func попадает mult.
//forEach(numerochki, 2, "-");
