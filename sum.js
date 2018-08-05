var chisla = [58, 78, 4, 5, 9, 2, 8, 2, 3, 11];

var jopki = [6, 8, 67];

function summirui(numerochki) {
  var sum = 0;
  for (i = 0; i < numerochki.length; i++) sum = sum + numerochki[i];
  console.log(sum);
}

summirui(jopki);

summirui(chisla);

summirui([6, 8, 67]);

function sayHi(name) {
  alert("hi " + name);
}

var username = "dawwa";

var user2name = "petrik";

sayHi(username);
sayHi("dawwa");

sayHi(user2name);

sayHi("oleg");
sayHi(23 + 5656);

function summirui(numerochki) {
  var sum = 0;
  for (var i = 0; i < numerochki.length; i++) {
    sum = sum + numerochki[i];
  }
  return sum;
}

//калькулятор мое
var zp = 6000;
var pr = 10;

// var month = { m2: 2, m3: 3, m4: 4, m5: 5, m6: 6 }; --- не  нужно

zp = (zp * pr) / 100 + zp;
console.log(zp);
zp = (zp * pr) / 100 + zp;
console.log(zp);
zp = (zp * pr) / 100 + zp;
console.log(zp);
zp = (zp * pr) / 100 + zp;
console.log(zp);
zp = (zp * pr) / 100 + zp;
console.log(zp);
zp = (zp * pr) / 100 + zp;
console.log(zp);

zp = 1 * zp + (pr / 100) * zp; //просто поменяли местами слагаемые и добавили умножение на 1
zp = zp * (1 + pr / 100); // вынесли общий множитель за скобки

//калькулятор переделан с Вовой
function getsalary() {
  var depo = 6000;
  var pr = 10;
  var sum = 0;
  for (var month = 1; month < 7; month++) {
    sum = depo + sum;
    console.log("@", depo, sum);
    depo = (depo * pr) / 100 + depo;
  }
}
getsalary();

//эво калькулатор переделан с Вовой
function getsalary(monthPeriod, depo, percent) {
  var sum = 0;
  for (var month = 1; month <= monthPeriod; month++) {
    sum = depo + sum;
    console.log("@", depo, sum);
    depo = (depo * percent) / 100 + depo;
  }
}

getsalary(7, 6000, 10);
