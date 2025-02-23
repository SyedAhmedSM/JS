window.onload = function () {
  document.querySelector(".display").value = "0";
};

function clearDisplay() {
  document.querySelector(".display").value = "0";
}

function append(value) {
  const display = document.querySelector(".display");
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  const display = document.querySelector(".display");
  display.value = eval(display.value);
}
