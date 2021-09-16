//Atualizar tamanho da senha:
const inputRange = document.querySelector('#input-range');

const botaoMenos = document.querySelector('#botao-menos');
const botaoMais = document.querySelector('#botao-mais');

inputRange.addEventListener('input', atualizaTamanhoSenha);

function atualizaTamanhoSenha(){
	let textoTamanho = document.querySelector('#tamanho-senha');

	let tamanhoSenha = inputRange.value;

	textoTamanho.innerHTML = tamanhoSenha;

	geraSenha(tamanhoSenha);
}

botaoMais.addEventListener('click', () => {
	inputRange.value = Number(inputRange.value) + 1;
	atualizaTamanhoSenha();
});

botaoMenos.addEventListener('click', () => {
	inputRange.value = Number(inputRange.value) - 1;
	atualizaTamanhoSenha();
});

const displaySenha = document.querySelector('#input-senha');
//Gerar a senha: 
function geraSenha(tamanho = 15){
	
	const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//26
	const minusculas = 'abcdefghijklmnopqrstuvwxyz'; //26
	const numeros = '0123456789'; //10
	const simbolos = '!@#$%&*()_-=+'; //13
	
	let senha = [];

	//https://www.random.org/integers/
	for(let i = 0; i < tamanho; i++){
			let aleatorio = Math.round(Math.random() * ((maiusculas.length - 1) - 0)) ;

			senha.push(maiusculas[aleatorio]);
	}

	displaySenha.value = senha.join('');
}

const botaoGeraSenha = document.querySelector('#botao-gerar');
botaoGeraSenha.addEventListener('click', atualizaTamanhoSenha);


//======= Manipulação de texto =======
//Seleciona texto
displaySenha.addEventListener('click', () => {
	displaySenha.select();
});

//Copiar para área de transferência
const botaoCopiar = document.querySelector('#botao-copiar');

botaoCopiar.addEventListener('click', () => {
	navigator.clipboard.writeText(displaySenha.value);
});

