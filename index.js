const keypadTag = document.querySelector(".keypad");
const displayBoxTag = document.querySelector(".display");

const showInDisplay = (v)=>{
    displayBoxTag.innerText += v;
}

const clalculationFunction = () => {
    const calculatedValue = eval(displayBoxTag.innerText);
    console.log(calculatedValue);
    displayBoxTag.innerText = calculatedValue;
}

const clearAllFunction = () => {
    displayBoxTag.innerText = '';
}

const clearLast = () => {
    displayBoxTag.innerText = displayBoxTag.innerText.substring(0,displayBoxTag.innerText.length-1);
}