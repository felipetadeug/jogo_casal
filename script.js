var perguntaEmApresentação = 1;
var perguntaAtual = 1;
var pontuacaoFelipe = 0;
var pontuacaoNatalia = 0;

var perguntas = [
	'',
	'PESSOAIS - Comida favorita (salgada)?',
	'PESSOAIS - Comida favorita (doce)?',
	'PESSOAIS - Fast food preferido?',
	'PESSOAIS - Chocolate favorito?',
	'PESSOAIS - Que preconceitos você acha que tem?',
	'PESSOAIS - Qual meu maior desejo para esse ano?',
	'PESSOAIS - Cor favorita?',
	'PESSOAIS - O que mais gosta de fazer?',
	'PESSOAIS - Qual é a mudança mais significativa que gostaria de fazer na própria vida?',
	'PESSOAIS - O que te traz mais alegria?',
	'PESSOAIS - O que mais acalma você?',
	'PESSOAIS - Rede social favorita?',
	'PESSOAIS - Algo que detesta?',
	'PESSOAIS - Maior medo?',
	'PESSOAIS - Filme favorito?',
	'PESSOAIS - Maior sonho?',
	'PESSOAIS - Coisa que mais tenho vontade de comprar atualmente?',
	'PESSOAIS - Maior saudade da vida?',
	'PESSOAIS - Data preferida do ano?',
	'PESSOAIS - O local que mais quer conhecer (nacional)?',
	'PESSOAIS - O local que mais quer conhecer (internacional)?',
	'PESSOAIS - Qual foi a coisa mais ilegal que já fez?',
	'PESSOAIS - Sobre qual assunto poderia falar o dia inteiro?',
	'PESSOAIS - Quanto ganha (salário)?',
	'RELACIONAMENTO - Que tipo de roupa mais gosta de ver o parceiro(a) usando?',
	'RELACIONAMENTO - Como se vê com o parceiro(a) daqui 10 anos?',
	'RELACIONAMENTO - O que mais sente falta na relação?',
	'RELACIONAMENTO - O que mais gosta de fazer quando estão juntos?',
	'RELACIONAMENTO - O que acha essencial para um relacionamento bem-sucedido?',
	'RELACIONAMENTO - O que acha que devería mudar em nosso relacionamento?',
	'RELACIONAMENTO - Qual traço da personalidade do parceiro(a) que mais gosta?',
	'RELACIONAMENTO - Lembrança favorita das experiências do casal?',
	'RELACIONAMENTO - Pior lembrança do casal?',
	'RELACIONAMENTO - O que mais gosta no comportamento/atitude do outro?',
	'RELACIONAMENTO - O que mudaria/irrita no comportamento do outro?',
	'RELACIONAMENTO - O que mais gosta no corpo do outro?',
	'RELACIONAMENTO - O que mudaria no corpo do outro?',
	'RELACIONAMENTO - Maior plano da vida para fazer com o outro (além de casamento e viagem)?',
	'RELACIONAMENTO - O que deixa mais inseguro em relação ao namoro?',
	'RELACIONAMENTO - O que só conteu para o parceiro(a)?',
	'RELACIONAMENTO - De quem sente mais ciúme (amigo)?',
	'RELACIONAMENTO - A partir de quando se interessou amorosamente pelo parceiro(a)?',
	'RELACIONAMENTO - Como gostaria de ser chamado (apelido) no relacionamento?',
	'RELACIONAMENTO - Uma vontade pessoal que o parceiro(a) não concordaria?',
	'RELACIONAMENTO - Um presente desejado para a próxima data comemorativa?',
	'RELACIONAMENTO - Local desejado para lua de mel?',
	'RELACIONAMENTO - O que acha extremamente romântico?',
	'RELACIONAMENTO - Qual é a semelhança o casal que adora?',
	'RELACIONAMENTO - Qual é a maior diferença emtre o casal para você?',
	'RELACIONAMENTO - Qual é a pior parte de estar num relacionamento?',
	'RELACIONAMENTO - Do que eu mais gosto em mim mesmo?',
	'RELACIONAMENTO - Como você sabe quando eu estou de mau humor?',
	'RELACIONAMENTO - Como você sabe quando eu estou de bom humor?',
	'RELACIONAMENTO - Ato mais fofo que o parceiro(a) faz para você?',
	'RELACIONAMENTO - Mão onde durante o beijo?',
	'RELACIONAMENTO - Lugar preferido para caricias?',
	'SEXO - Como sabe que estou excitado?',
	'SEXO - O que mais gosta nas preliminares?',
	'SEXO - O que menos gosta nas preliminares?',
	'SEXO - O que te "broxaria" no sexo?',
	'SEXO - Importância do sexo oral de 1 a 3?',
	'SEXO - O que te excita além do toque?',
	'SEXO - Posição preferida no sexo?',
	'SEXO - O que nunca faria no sexo?',
	'SEXO - O que considero como ser bom na cama?',
	'SEXO - Qual é meu maior fetiche (local físico)?',
	'SEXO - Qual é meu maior fetiche (contato/corpo)?',
	'SEXO - Qual é meu maior fetiche (objeto)?',
	'SEXO - Do que você gosta, mas nunca me contou (sexo)?',
	'SEXO - Movimento predileto na masturbação?',
	'SEXO - O que mais gosta no sexo?',
];
function ativarNovaPergunta(){
	if(perguntaAtual==72){
		alert('FIM DO JOGO!');
	} else{
		var labelPergunta = document.getElementById("labelPergunta");
		labelPergunta.innerHTML=perguntaAtual + " - " + perguntas[perguntaAtual];
		perguntaEmApresentação = perguntaAtual;
		perguntaAtual++;
	}
}
function retornarPergunta(){
	perguntaEmApresentação = perguntaEmApresentação-1;
	var labelPergunta = document.getElementById("labelPergunta");
	labelPergunta.innerHTML=(perguntaEmApresentação) + " - " + perguntas[perguntaEmApresentação];
	perguntaAtual--;
	if (perguntaEmApresentação <= 0){
		alert('Não há perguntas anteriores a essa!');
		ativarNovaPergunta();
	}
}
function registrarPontoFelipe(){
	if (window.confirm("Você realmente quer gravar um ponto para Felipe?")) {
		pontuacaoFelipe = pontuacaoFelipe + 1;
		localStorage.setItem("pontosFelipe", pontuacaoFelipe);
	}
}

function registrarPontoNatalia(){
	if (window.confirm("Você realmente quer gravar um ponto para Natália?")) {
		pontuacaoNatalia = pontuacaoNatalia + 1;
		localStorage.setItem("pontosNatalia", pontuacaoNatalia);
	}
}
function registrarPontoAmbos(){
	if (window.confirm("Você realmente quer gravar um ponto para ambos?")) {
		pontuacaoFelipe = pontuacaoFelipe + 1;
		pontuacaoNatalia = pontuacaoNatalia + 1;
		localStorage.setItem("pontosFelipe", pontuacaoFelipe);
		localStorage.setItem("pontosNatalia", pontuacaoNatalia);
	}
}	
function retornarTotalPerguntas(){
	alert('Quantidade de perguntas: ' + perguntas.length);
}
function exibirResultado(){
	if (window.confirm("Você realmente quer ver o resultado?")) {
		if (localStorage.getItem("pontosFelipe") > localStorage.getItem("pontosNatalia")){
			alert("FELIPE VENCEU !!! " + "\n \nPONTUAÇÃO: \n \nNATÁLIA = " + localStorage.getItem("pontosNatalia") + "\nFELIPE = " + localStorage.getItem("pontosFelipe"));
		} else if (localStorage.getItem("pontosFelipe") < localStorage.getItem("pontosNatalia")){
			alert("NATÁLIA VENCEU !!!" + "\n \nPONTUAÇÃO: \n \nNATÁLIA = " + localStorage.getItem("pontosNatalia") + "\nFELIPE = " + localStorage.getItem("pontosFelipe"))
		} else if (localStorage.getItem("pontosFelipe") == localStorage.getItem("pontosNatalia")){
			alert("EMPATE !!!" + "\n \nPONTUAÇÃO: \n \nNATÁLIA = " + localStorage.getItem("pontosNatalia") + "\nFELIPE = " + localStorage.getItem("pontosFelipe"))
		}
	}
}
function resetarJogo(){
	if (window.confirm("Você realmente quer resetar?")) {
		localStorage.clear();
		document.location.reload(true);
	}
}