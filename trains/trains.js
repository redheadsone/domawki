const BEDLINEN_ERROR = "Error: incorrect amount of bed linen";

//todo: @vm: you can init empty props using null or zero instead of empty strings
//todo: @vm: it would show the supposed property types better
var input = { amountPass: "", typeSeats: "", bedLinen: "", tea: "", meal: "" };

//todo: @vm: you can use amount.passenger.max, amount.tea.max, amount.tea.min structure
//todo: @vm: to split props better
//todo: @vm: as also you can store default values there too, ie tea: { min:1, max:10, default: 4 }
//todo: @vm: and the input messages also!
//todo: @vm: but maybe its redundant...
var amount = {
  maxPass: 25,
  minPass: 1,
  maxBedLinen: 25,
  minBedLinen: 1,
  maxTea: 25,
  minTea: 1,
  maxMeal: 25,
  minMeal: 1
};
var seats = {
  vipSeats: "vip",
  sleepSeats: "sleep",
  platzSeats: "platz",
  seatSeats: "seat"
};

input.amountPass = prompt("Input amount of passengers");

if (input.amountPass <= amount.maxPass && input.amountPass >= amount.minPass) {
  input.typeSeats = prompt("Input type of seats: Vip/Sleep/Platz/Seat");

  if (
    input.typeSeats === seats.vipSeats ||
    input.typeSeats === seats.sleepSeats ||
    input.typeSeats === seats.platzSeats ||
    input.typeSeats === seats.seatSeats
  ) {
    input.bedLinen = +prompt("Input amount of bed linen");

    if (
      input.bedLinen <= amount.maxBedLinen &&
      input.bedLinen >= amount.minBedLinen &&
      input.bedLinen <= input.amountPass
    ) {
      input.tea = prompt("Input amount of tea");

      if (input.tea <= amount.maxTea && input.tea >= amount.minTea) {
        input.meal = prompt("Input amount of meal");
      }
    } else {
      alert(BEDLINEN_ERROR);
    }
  }
}
//todo: @vm: add train ticket price calculations

// commit your changes using console commands
// to add files use this:
// git add yourfilename.extention
// then commit everything using this
// git commit -m "your message here"
// then push your commits to server using this:
// git push

// then check everything is ok, visiting github.com/yournamehere
// then notify me using telegram
