function checkYear(year) {
  if (year <= 2000) {
    return true;
  } else {
    return false;
  }
}

//get user age based on users date of born. Razvernuto
function getAge(year) {
  var age = 2018 - year;
  return age;
}

//get user age based on users date of born. S mezhdu strock
function getAge(year) {
  return 2018 - year;
}
