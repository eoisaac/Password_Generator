const passwordDisplay = document.querySelector('#password-display');

passwordDisplay.addEventListener('click', () => passwordDisplay.select());

const copyPasswordButton = document.querySelector('#copy-password');

copyPasswordButton.addEventListener('click', () => {
	let password = passwordDisplay.value;
	
	copyPasswordButton.innerHTML = '<i class="fas fa-clipboard-check"></i>';
	setTimeout(() => {
		copyPasswordButton.innerHTML = '<i class="fas fa-clipboard"></i>';
	}, 1500);

	navigator.clipboard.writeText(password);
});

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

	let generatedPassword = [];

	generatedPassword = arrayPassword.map((value) => {
		if(value === 'upper') return getRandomChar.randomUpper();
		if(value === 'lower') return getRandomChar.randomLower();
		if(value === 'number') return getRandomChar.randomNumber();
		if(value === 'symbol') return getRandomChar.randomSymbol();
	});

	passwordDisplay.value = generatedPassword.join('');
}

const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', getPasswordConfig);

getPasswordConfig();