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

function geraNumeroAleatorio(max, min){

	let valorAleatorio = Math.round(Math.random() * (max - min) + min);

	return valorAleatorio;
}

function geraSenha(tamanho = 15){
	
	const caracteres = [
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // 26
		'abcdefghijklmnopqrstuvwxyz', // 26
		'0123456789', // 10
		'!@#$%&*()_-=+' // 13
	];

	const senha = [];

	for(let tipo = 0; tipo < tamanho; tipo++){

		let tipoDecaractere = geraNumeroAleatorio(3, 0);

		if(tipoDecaractere == 0){
			let maiusculas = geraNumeroAleatorio(caracteres[0].length, 0);
			senha.push(caracteres[0][maiusculas]);
		}

		if(tipoDecaractere == 1){
			let minusculas = geraNumeroAleatorio(caracteres[1].length, 0);
			senha.push(caracteres[1][minusculas]);
		}

		if(tipoDecaractere == 2){
			let numeros = geraNumeroAleatorio(caracteres[2].length, 0);
			senha.push(caracteres[2][numeros]);
		}

		if(tipoDecaractere == 3){
			let simbolos = geraNumeroAleatorio(caracteres[3].length, 0);
			senha.push(caracteres[3][simbolos]);
		}
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

