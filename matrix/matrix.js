const matrix = document.querySelector("table.matrix");
const matrix2 = document.querySelector("table.matrix2");

function fill(mtx, color) {
  for (var x = 0; x < mtx.rows.length; x++) {
    mtx.rows[x].cells[x].style.backgroundColor = color;
  }
  //

  //   mtx.rows[0].cells[0].style.backgroundColor = color;
  //   mtx.rows[1].cells[1].style.backgroundColor = color;
  //   mtx.rows[2].cells[2].style.backgroundColor = color;
  //   mtx.rows[3].cells[3].style.backgroundColor = color;
  //   mtx.rows[4].cells[4].style.backgroundColor = color;

  //   mtx.rows[5].cells[5].style.backgroundColor = color;
  //   mtx.rows[6].cells[6].style.backgroundColor = color;
  //   //....
  //   mtx.rows[9].cells[9].style.backgroundColor = color;
}

function fillAlt(mtx, color) {
  for (var x = 0, y = mtx.rows.length - 1; x < mtx.rows.length; x++, y--) {
    mtx.rows[x].cells[y].style.backgroundColor = color;
  }
  //   mtx.rows[0].cells[4].style.backgroundColor = color;
  //   mtx.rows[1].cells[3].style.backgroundColor = color;
  //   mtx.rows[2].cells[2].style.backgroundColor = color;
  //   mtx.rows[3].cells[1].style.backgroundColor = color;
  //   mtx.rows[4].cells[0].style.backgroundColor = color;
}

function fillChess(mtx, color) {
  for (var x = 0; x < mtx.rows.length; x++) {
    for (var y = 0; y < mtx.rows.length; y++) {
      //var cellIsEven = (x + y) % 2 === 0;
      //   var cellIsEven = x === y;
      //var cellIsEven = x <= y;

      //var cellIsEven = x + y === mtx.rows.length - 1;
      var cellIsEven = x + y <= mtx.rows.length - 1;
      var cellIsEven2 = x <= y;
      var cellIsEven3 = x + y >= mtx.rows.length - 1;
      var cellIsEven4 = x >= y;

      if ((cellIsEven && cellIsEven2) || (cellIsEven3 && cellIsEven4)) {
        mtx.rows[x].cells[y].style.backgroundColor = color;
      }
    }
  }
}

// fill(matrix, "red");
// fillAlt(matrix, "cornflowerblue");

// fill(matrix2, "yellowgreen");
// fillAlt(matrix2, "cornflowerblue");
// fillChess(matrix2, "coral");

//universal function for pokraska
function fillByPredicate(mtx, proverkaFn, color) {
  for (var x = 0; x < mtx.rows.length; x++) {
    for (var y = 0; y < mtx.rows.length; y++) {
      const goPaint = proverkaFn(x, y, mtx.rows.length);

      if (goPaint) {
        mtx.rows[x].cells[y].style.backgroundColor = color;
      }
    }
  }
}

//todo: create predicates:

function chess(x, y, length) {
  var cellIsEven = x + y <= length - 1;
  var cellIsEven2 = x <= y;
  var cellIsEven3 = x + y >= length - 1;
  var cellIsEven4 = x >= y;

  return cellIsEven; //false;
}

fillByPredicate(matrix2, chess, "red");

function mainDiagonal(x, y, length) {
  return true; //false;
}
