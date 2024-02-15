let calcScreen = document.querySelector('#calc-screen');
const clearButton = document.querySelector('.clear-button');
const delButton = document.querySelector('.del-button');
const percentButton = document.querySelector('.percent-button');
const sevenButton = document.querySelector('.seven-button');
const eightButton = document.querySelector('.eight-button');
const ninthButton = document.querySelector('.ninth-button');
const multiplyButton = document.querySelector('.multiply-button');
const fourButton = document.querySelector('.four-button');
const fifthButton = document.querySelector('.fifth-button');
const sixthButton = document.querySelector('.sixth-button');
const minusButton = document.querySelector('.minus-button');
const oneButton = document.querySelector('.one-button');
const twoButton = document.querySelector('.two-button');
const threeButton = document.querySelector('.three-button');
const plusButton = document.querySelector('.plus-button');
const zeroButton = document.querySelector('.zero-button');
const pointButton = document.querySelector('.point-button');
const divisionButton = document.querySelector('.division-button');
const equalButton = document.querySelector('.equal-button');

const clear = () => {
	calcScreen.value = ""
}
clearButton.addEventListener("click", clear);

const deleteIt = () => {
	calcScreen.value = calcScreen.value.slice(0,-1)
}
delButton.addEventListener("click", deleteIt)

const seven = () => {
	calcScreen.value = calcScreen.value + "7"
}
sevenButton.addEventListener('click', seven)

const eight = () => {
	calcScreen.value = calcScreen.value + "8"
}
eightButton.addEventListener('click', eight)

const nine = () => {
	calcScreen.value = calcScreen.value + "9"
}
ninthButton.addEventListener('click', nine)

const multiply = () => {
	calcScreen.value = calcScreen.value + "*"
}
multiplyButton.addEventListener('click', multiply)

const four = () => {
	calcScreen.value = calcScreen.value + "4"
}
fourButton.addEventListener('click', four)

const five = () => {
	calcScreen.value = calcScreen.value + "5"
}
fifthButton.addEventListener('click', five)

const six = () => {
	calcScreen.value = calcScreen.value + "6"
}
sixthButton.addEventListener('click', six)

const plus = () => {
	calcScreen.value = calcScreen.value + "+"
}
plusButton.addEventListener('click', plus)

const minus = () => {
	calcScreen.value = calcScreen.value + "-"
}
minusButton.addEventListener('click', minus)

const one = () => {
	calcScreen.value = calcScreen.value + "1"
}
oneButton.addEventListener('click', one)

const two = () => {
	calcScreen.value = calcScreen.value + "2"
}
twoButton.addEventListener('click', two)

const three = () => {
	calcScreen.value = calcScreen.value + "3"
}
threeButton.addEventListener('click', three)

const zero = () => {
	calcScreen.value = calcScreen.value + "0"
}
zeroButton.addEventListener('click', zero)

const point = () => {
	calcScreen.value = calcScreen.value + "."
}
pointButton.addEventListener('click', point)

const divide = () => {
	calcScreen.value = calcScreen.value + "/"
}
divisionButton.addEventListener('click', divide)

const equals = () => {
	try {
		soln = eval(calcScreen.value);
		calcScreen.value = soln
	} catch (soln) {
	  	calcScreen.value = "ERROR";
	}


	// calcScreen.value = soln
}
equalButton.addEventListener('click', equals)

calcScreen.addEventListener('keydown', (event) => {
  // Prevent the default action for all keys
  event.preventDefault();
});