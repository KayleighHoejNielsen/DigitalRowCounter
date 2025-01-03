let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-minus');
let counterReset = document.querySelector('.counter-select');

let count = 0;

updateDisplay();

function updateDisplay(){
    counterDisplay.innerHTML = count;
}

counterPlus.addEventListener("click", ()=>{
    count++;
    updateDisplay();
})

counterMinus.addEventListener("click", ()=>{
    count--;
    updateDisplay();
})

counterReset.addEventListener("click",()=>{
    count = 0;
})
