
let counterValue = 0;
let counterNumber = 0;

const counterDisplay = document.getElementById("counter-display");
const plusButton = document.getElementById("counter-plus");
const minusButton = document.getElementById("counter-minus");
const resetButton = document.getElementById("counter-reset");
const deleteButton = document.getElementById("counter-delete");
const counter = document.getElementById("counter");
const newButton = document.getElementById("create-new-counter");

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

deleteButton.addEventListener("click", () => {
  deleteButton.remove();
  resetButton.remove();
  minusButton.remove();
  plusButton.remove();
  counterDisplay.remove();
  counter.remove();
});

newButton.addEventListener("click", createNewCounter);

function createNewCounter() {
  let newCounterValue = 0;
  let counterId = "counter" + counterNumber;
  let diplayId = "display" + counterNumber;
  let plusId = "counter-plus" + counterNumber;
  let minusId = "counter-minus" + counterNumber;
  let resetId = "counter-reset" + counterNumber;
  let deleteId = "counter-delete" + counterNumber;

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

  let newDeleteButton = document.createElement("button");
  newDeleteButton.className = "button";
  newDeleteButton.id = deleteId;
  newDeleteButton.textContent = "Delete";

  newDeleteButton.addEventListener("click", () => {
    newDeleteButton.remove();
    newResetButton.remove();
    newMinusButton.remove();
    newPlusButton.remove();
    newCounterDisplay.remove();
    newCounter.remove();
  });

  newCounter.appendChild(newCounterDisplay);
  newCounter.appendChild(newPlusButton);
  newCounter.appendChild(newMinusButton);
  newCounter.appendChild(newResetButton);

  document.getElementById("new-counter").appendChild(newCounter);

  counterNumber++;

};