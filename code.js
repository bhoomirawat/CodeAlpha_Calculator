const display = document.getElementById("display");

function appendValue(val) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}