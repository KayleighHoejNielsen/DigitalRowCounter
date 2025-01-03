
let counterValue = 0;

const counterDisplay = document.getElementById("counter-display");
const incrementButton = document.getElementById("counter-plus");
const decrementButton = document.getElementById("counter-minus");
const resetButton = document.getElementById("counter-reset");

function updateCounter() {
  counterDisplay.textContent = counterValue;
}

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

resetButton.addEventListener("click", () => {
    counterValue = 0;
    updateCounter();
});
