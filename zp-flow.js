// НАЧАЛО
// решение с помощью цикла
var depo = 6000;
var pr = 10;
var sum = 0;
for (var month = 1; month < 7; month++) {
  sum = depo + sum;
  console.log("@", depo, sum);
  depo = (depo * pr) / 100 + depo;
}

// список всех итераций цикла
zp1 = (zp0 * pr) / 100 + zp0;
zp2 = (zp1 * pr) / 100 + zp1;
zp3 = (zp2 * pr) / 100 + zp2;
zp4 = (zp3 * pr) / 100 + zp3;

// вынесли общий множитель за скобки
zp1 = zp0 * (1 + pr / 100);
zp2 = zp1 * (1 + pr / 100);
zp3 = zp2 * (1 + pr / 100);
zp4 = zp3 * (1 + pr / 100);

// выразили последнюю ЗП через нулевую ЗП
zp4 = zp0 * (1 + pr / 100) * (1 + pr / 100) * (1 + pr / 100) * (1 + pr / 100);

// выразили повторяющийся кусок с процентом через возведение в степень
zp4 = zp0 * (1 + pr / 100) ** 4;
// упростили конец. лучший вариант

// пример функции

function dohod(zp, percent, monthCount) {
  return zp * (1 + percent / 100) ** monthCount;
}
dohod(6000, 10, 6);
