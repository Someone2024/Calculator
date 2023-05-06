const display = document.createElement("input");
display.type = "text";
display.classList.add("display");

const addBtn = document.createElement("button");
const subtractBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");
const divideBtn = document.createElement("button");

addBtn.textContent = "+";
subtractBtn.textContent = "-";
multiplyBtn.textContent = "x";
divideBtn.textContent = "/";

const equalsBtn = document.createElement("button");
equalsBtn.textContent = "=";

const operationDisplay = document.createElement("div");

//Display the operation display only when the first btn has been pressed
// operationDisplay.innerHTML = `<p>${firstNumber} <em>${operator}</em> ${lastNumber}</p>`;

const clearBtn = document.createElement("button");
clearBtn.textContent = "C";
clearBtn.addEventListener("click", () => {
  clearOnLoad();
});

const updateDisplay = () => {
  if (operator === "") {
    display.value = firstNumber;
  } else {
    display.value = lastNumber;
  }
  operationDisplay.innerHTML = `<p>${firstNumber} <em>${operator}</em> ${lastNumber}</p>`;
};

const clearOnLoad = () =>{
  firstNumber = "";
  operator = "";
  lastNumber = "";
  updateDisplay();
}

clearOnLoad()

const createNumberButton = (displayNumber) => {
  const number = document.createElement("button");
  number.textContent = displayNumber;
  number.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += displayNumber;
    } else {
      lastNumber += displayNumber;
    }
    updateDisplay();
  });
  return number;
};

addBtn.addEventListener("click", () => {
  if(firstNumber === "") return;
  else operator = "+";
  updateDisplay();
});

subtractBtn.addEventListener("click", () => {
  if(firstNumber === "") return;
  else operator = "-";
  updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
  if(firstNumber === "") return;
  else operator = "*";
  updateDisplay();
});

divideBtn.addEventListener("click", () => {
  if(firstNumber === "") return;
  else operator = "/";
  updateDisplay();
});


//here is where i call the operate function 
equalsBtn.addEventListener("click", () => {
  let result;
  switch (operator) {
    case "+":
      result = Operate(operator, Number(firstNumber), Number(lastNumber));
      break;
    case "-":
      result = Operate(operator, Number(firstNumber), Number(lastNumber));
      break;
    case "*":
      result = Operate(operator, Number(firstNumber), Number(lastNumber));
      break;
    case "/":
      result = Operate(operator, Number(firstNumber), Number(lastNumber));
      if(result === Infinity) {
        result = "Cannot divide by zero!"
        setTimeout(() => {
          clearOnLoad()
        }, 1000);
      }
      break;
    default:
      break;
  }
  if(firstNumber === "") return 
  else {
    firstNumber = result.toString();
    operator = "";
    lastNumber = "";
    updateDisplay();
  }
});

Calculator.append(
  operationDisplay,
  display,
  createNumberButton("1"),
  createNumberButton("2"),
  createNumberButton("3"),
  addBtn,
  createNumberButton("4"),
  createNumberButton("5"),
  createNumberButton("6"),
  subtractBtn,
  createNumberButton("7"),
  createNumberButton("8"),
  createNumberButton("9"),
  multiplyBtn,
  clearBtn,
  createNumberButton("0"),
  equalsBtn,
  divideBtn
);