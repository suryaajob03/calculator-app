function press(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  try {
    let output = eval(document.getElementById("display").value);
    document.getElementById("display").value = output;
  } catch {
    alert("Invalid Input");
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
function toggleTheme() {
  document.body.classList.toggle("light");

  let btn = document.getElementById("themeBtn");
  if (document.body.classList.contains("light")) {
    btn.innerText = "Dark Mode";
  } else {
    btn.innerText = "Light Mode";
  }
}
document.addEventListener("keydown", function(event) {
  let key = event.key;
  
  if (!isNaN(key) || key === "." ) {
    press(key);
  }

  if (key === "+" || key === "-" || key === "*" || key === "/") {
    press(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }

  if (key === "c" || key === "C") {
    clearDisplay();
  }
});
function toggleTheme() {
  document.body.classList.toggle("light");

  let btn = document.getElementById("themeBtn");
  if (document.body.classList.contains("light")) {
    btn.innerText = "Dark Mode";
  } else {
    btn.innerText = "Light Mode";
  }
}
