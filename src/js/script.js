const passwordDisplay = document.querySelector('#password-display');

const passwordSizeValue = document.querySelector('#password-size-value');

const upperCheckbox = document.querySelector('#upper-check');
const lowerCheckbox = document.querySelector('#lower-check');
const numbersCheckbox = document.querySelector('#numbers-check');
const symbolsCheckbox = document.querySelector('#symbols-check');

function leftZero(value) {
	return value < 10 ? `0${value}` : value;
}

function getPasswordConfig() {
	let size = Number(passwordSizeInput.value);
	
	passwordSizeValue.innerText = leftZero(size)

	generatePassword(upperCheckbox.checked, lowerCheckbox.checked,
		 numbersCheckbox.checked, symbolsCheckbox.checked, size);
}

const passwordSizeInput = document.querySelector('#password-size-input');
passwordSizeInput.addEventListener('input', getPasswordConfig);

// https://www.w3schools.com/html/html_charset.asp
const getRandomChar = {
	randomUpper() {
		return String.fromCharCode((Math.random() * 26) + 65);
	},
	randomLower() {
		return String.fromCharCode((Math.random() * 26) + 97);
	},
	randomNumber() {
		return Math.floor(Math.random() * 10);
		// return String.fromCharCode((Math.random() * 10) + 48);
	},
	randomSymbol() {
		let symbols = '!@#$%&*/-=+(){}[]';
		return symbols[Math.floor(Math.random() * symbols.length)];
	}
};

const checkboxWrap = document.querySelector('#checkbox-wrap');
checkboxWrap.addEventListener('click', (event) => {

	let element = event.target;
	if(element.classList.contains('main-checkbox')) getPasswordConfig();
});

function generatePassword(upper, lower, number, symbol, size) {

	/* Try/catch para quando estiver sem check marcado -> mostrar no input "marque algm check
		Botao de copiar
		Estilo 
		
		Teste de força da senha???
	*/

	const charTypes = [];
	const arrayPassword = [];
	let randomIndex = 0;

	if(upper) charTypes.push('upper');
	if(lower) charTypes.push('lower');
	if(number) charTypes.push('number');
	if(symbol) charTypes.push('symbol');

	for(let i = 0; i < size; i++) {
		randomIndex = Math.floor(Math.random() * (charTypes.length - 0) + 0);
		arrayPassword.push(charTypes[randomIndex]);
	}

	const generatedPassword = [];

	for(let i = 0; i < arrayPassword.length; i++){
		if(arrayPassword[i] === 'upper') generatedPassword[i] = getRandomChar.randomUpper();
		if(arrayPassword[i] === 'lower') generatedPassword[i] = getRandomChar.randomLower();
		if(arrayPassword[i] === 'number') generatedPassword[i] = getRandomChar.randomNumber();
		if(arrayPassword[i] === 'symbol') generatedPassword[i] = getRandomChar.randomSymbol();
	}

	passwordDisplay.value = generatedPassword.join('');
}

const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', getPasswordConfig);	
