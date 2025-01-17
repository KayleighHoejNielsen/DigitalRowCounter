
let counterValue: number = 0;
let counterNumber: number = 1;

const counterDisplay = document.getElementById("counter-display");
function updateCounter() {
  if(counterDisplay && counterDisplay.textContent) {
    let counterDisplayValue = Number(counterDisplay.textContent.trim());
    counterDisplayValue = counterValue;
  }
}

const plusButton = document.getElementById("counter-plus");
if (plusButton) {
  plusButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
  });
}

const minusButton = document.getElementById("counter-minus");
if (minusButton) {
  minusButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
  });
}

const resetButton = document.getElementById("counter-reset")
if(resetButton) {
  resetButton.addEventListener("click", () => {
    counterValue = 0;
    updateCounter();
  });
}

const deleteButton = document.getElementById("counter-delete");
if(deleteButton) {
  deleteButton.addEventListener("click", () => {
    deleteButton.remove();

    if(resetButton) {
      resetButton.remove();
    }

    if(minusButton) {
      minusButton.remove();
    }

    if(plusButton) {
      plusButton.remove();
    }

    if(counterDisplay) {
      counterDisplay.remove();
    }

    const counter = document.getElementById("counter");
    if (counter) {
      counter.remove();
    }
  });
}

const newButton = document.getElementById("create-new-counter")
if(newButton) {
  newButton.addEventListener("click", () => {
    let counterName = prompt("enter new counter name: ");
    
    let newCounterValue = 0;
    let counterId = "counter" + counterNumber;
    let nameId = "counter-name" + counterNumber;
    let diplayId = "display" + counterNumber;
    let plusId = "counter-plus" + counterNumber;
    let minusId = "counter-minus" + counterNumber;
    let resetId = "counter-reset" + counterNumber;
    let deleteId = "counter-delete" + counterNumber;

    function updateNewCounter() {
      let newCounterDisplayValue = Number(newCounterDisplay);
      newCounterDisplayValue = newCounterValue;
    }

    let newCounter = document.createElement("div");
    newCounter.className = "counter";
    newCounter.id = counterId;

    let newCounterName = document.createElement("div");
    newCounterName.className = "counter-name";
    newCounterName.id = nameId;
    newCounterName.textContent = counterName;

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

    newCounter.appendChild(newCounterName);
    newCounter.appendChild(newCounterDisplay);
    newCounter.appendChild(newPlusButton);
    newCounter.appendChild(newMinusButton);
    newCounter.appendChild(newResetButton);
    newCounter.appendChild(newDeleteButton);

    const newCounterContainer = document.getElementById("new-counter")
    if (newCounterContainer) {
      newCounterContainer.appendChild(newCounter);
    }

    counterNumber++;
  });
}