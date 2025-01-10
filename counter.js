
let counterValue = 0;
let counterNumber = 0;

const counterDisplay = document.getElementById("counter-display");
const plusButton = document.getElementById("counter-plus");
const minusButton = document.getElementById("counter-minus");
const resetButton = document.getElementById("counter-reset");
const counter = document.getElementById("counter");
const newButton = document.getElementById("new-counter")

function updateCounter() {
  counterDisplay.textContent = counterValue;
}

plusButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

minusButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});

newButton.addEventListener("click", () => {
  let newCounterValue = 0;
  let counterId = "counter" + counterNumber;
  let diplayId = "display" + counterNumber;
  let plusId = "counter-plus" + counterNumber;
  let minusId = "counter-minus" + counterNumber;
  let resetId = "counter-reset" + counterNumber;

  function updateNewCounter() {
    newCounterDisplay.textContent = newCounterValue;
  }

  let newCounter = document.createElement("div");
  newCounter.className = "counter";
  newCounter.id = counterId;

  let newCounterDisplay = document.createElement("div");
  newCounterDisplay.className = "counter-display";
  newCounterDisplay.id = diplayId;
  newCounterDisplay.textContent = "0";
  
  let newPlusButton = document.createElement("button");
  newPlusButton.className = "button"; 
  newPlusButton.id = plusId;
  newPlusButton.textContent = "+";

  newPlusButton.addEventListener("click", () => {
    newCounterValue++;
    updateNewCounter();
  });

  let newMinusButton = document.createElement("button");
  newMinusButton.className = "button";
  newMinusButton.id = minusId;
  newMinusButton.textContent = "-";

  newMinusButton.addEventListener("click", () => {
    newCounterValue--;
    updateNewCounter();
  });

  let newResetButton = document.createElement("button");
  newResetButton.className = "button";
  newResetButton.id = resetId;
  newResetButton.textContent = "Reset";

  newResetButton.addEventListener("click", () => {
    newCounterValue = 0;
    updateNewCounter();
  });

  counterNumber++;

})