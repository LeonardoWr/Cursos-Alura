let diaSemana = prompt('Digite o dia da semana');

if(diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numeroDigitado = prompt('Digite um número');

if(numeroDigitado < 0) {
    alert('Numero negativo!');
} else {
    alert('Numero positivo!');
}

let pontuacaoJogo = prompt('Digite sua pontuação');

if(pontuacaoJogo >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

saldoConta = 100;

alert(`Seu saldo da conta é ${saldoConta}.`);

let nomeUsuario = prompt('Digite o seu nome');
alert(`Bem-vindo ${nomeUsuario}!`);