const PASSWORD_ERROR = "Error: incorrect Password. Try again";
const LOGIN_ERROR = "Error: incorrect login/name";

var input = { login: "", password: "" };
var trueUser = { name: "vova", password: "123" };

input.login = prompt("input name");

if (input.login === trueUser.name) {
  input.password = prompt("input password");

  if (input.password === trueUser.password) {
  } else {
    input.password = prompt(PASSWORD_ERROR);
  }

  if (input.password === trueUser.password) {
    alert("Hi, " + trueUser.name + "!");
  }
} else {
  alert(LOGIN_ERROR);
}

//todo: move all js to separate file //+
//use objects to store truename/pass //+
// use obj to store inputlogin/pass //+
// useconst to store prompt messages - move them at the beginning//+
// re-read zadanie, and do as i said there. check the logic.//+-