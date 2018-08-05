const BEDLINEN_ERROR = "Error: incorrect amount of bed linen";

let passengers = {
  minPass: 1,
  maxPass: 25,
  input: 0,
  message: "Input amount of passengers"
};
let typeSeats = {
  vipSeats: "vip",
  sleepSeats: "sleep",
  platzSeats: "platz",
  seatSeats: "seat",
  input: "",
  message: "Input type of seats: Vip/Sleep/Platz/Seat"
};

let bedLinen = {
  minBedLinen: 1,
  maxBedLinen: 25,
  input: 0,
  message: "Input amount of bed linen"
};
let drinks = {
  minTea: 1,
  maxTea: 25,
  input: 0,
  message: "Input amount of tea"
};
let food = {
  minMeal: 1,
  maxMeal: 25,
  input: 0,
  message: "Input amount of meal"
};

function between(value, min, max) {
  const result = value <= max && value >= min;
  return result;
}

function checkPassengers() {
  var result = between(
    passengers.input,
    passengers.minPass,
    passengers.maxPass
  );

  return result;
}

function checkTypeSeats() {
  var result =
    typeSeats.input === typeSeats.vipSeats ||
    typeSeats.input === typeSeats.sleepSeats ||
    typeSeats.input === typeSeats.platzSeats ||
    typeSeats.input === typeSeats.seatSeats;
  return result;
}

function checkBedLinen() {
  var result =
    bedLinen.input <= bedLinen.maxBedLinen &&
    bedLinen.input >= bedLinen.minBedLinen &&
    bedLinen.input <= passengers.input;
  return result;
}

function checkDrinks() {
  var result = between(drinks.input, drinks.minTea, drinks.maxTea);
  return result;
}

function checkFood() {
  var result = between(food.input, food.minMeal, food.maxMeal);
  return result;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@

passengers.input = prompt(passengers.message);

if (checkPassengers()) {
  typeSeats.input = prompt(typeSeats.message);

  if (checkTypeSeats()) {
    bedLinen.input = prompt(bedLinen.message);

    if (checkBedLinen()) {
      drinks.input = prompt(drinks.message);

      if (checkDrinks()) {
        food.input = prompt(food.message);
        if (checkFood()) {
          ///todo: calc bilki
        }
      }
    } else {
      alert(BEDLINEN_ERROR);
    }
  }
}
