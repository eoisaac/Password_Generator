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