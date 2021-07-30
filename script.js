// math and calculator functions
const add = function (a, b) {
  return +a + +b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b == 0) {
    return "Nice try lol";
  } else return a / b;
};

const operate = function (operator, a, b) {
  return operator(a, b);
};

const clear = function () {
  val1 = "";
  val2 = "";
  operator = "";
  display.textContent = 0;
};

function calculate() {
  // run current operation and store new result to val1 for future calcs
  val1 = operate(operator, val1, val2);
  operator = "";
  val2 = "";

  // round to 4 decimals places if not round number and not error
  if (val1 == "Nice try lol") {
    display.textContent = val1;
    return;
  }
  if (Math.abs(val1 - val1.toFixed()) > 0) {
    display.textContent = val1.toFixed(4);
  } else display.textContent = val1;
}

function numberSelect(e) {
  // store val2 if operator not empty
  if (operator != "") {
    if (e.target.value == "." && val2.includes(".")) {
      return;
    }

    val2 += e.target.value;
    display.textContent = val2;
  }

  // store val1 if operator empty
  if (operator == "") {
    if (e.target.value == "." && val1.includes(".")) {
      return;
    }

    val1 += e.target.value;
    display.textContent = val1;
  }
}

function operatorSelect(e) {
  switch (true) {
    case e.target.value == "clear":
      clear();
      break;

    case e.target.value == "divide":
      if (operator != "" && val2 != "") {
        calculate();
      }
      operator = divide;
      break;

    case e.target.value == "multiply":
      if (operator != "" && val2 != "") {
        calculate();
      }
      operator = multiply;
      break;

    case e.target.value == "subtract":
      if (operator != "" && val2 != "") {
        calculate();
      }
      operator = subtract;
      break;

    case e.target.value == "add":
      if (operator != "" && val2 != "") {
        calculate();
      }
      operator = add;
      break;

    case e.target.value == "=":
      if (val2 == "" || operator == "") {
        break;
      } else {
        calculate();
        break;
      }
  }
}

// variables
let val1 = "";
let val2 = "";
let operator = "";

// query selectors
const numButtons = document.querySelectorAll(".numButton");
const opsButtons = document.querySelectorAll(".opsButton");
const equalsButton = document.querySelector("#equalsButton");
const decimalButton = document.querySelector("#decimalButton");
let display = document.querySelector("#display");

// event listeners
numButtons.forEach((button) => button.addEventListener("click", numberSelect));
opsButtons.forEach((button) =>
  button.addEventListener("click", operatorSelect)
);
