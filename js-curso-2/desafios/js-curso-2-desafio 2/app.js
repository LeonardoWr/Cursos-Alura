let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleOlaMundo() {
    console.log('Olá, mundo!');
}

function consoleOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

function dobrarNumero(numero) {
    return numero * 2;
}

function mediaTresNumeros(numero1, numero2, numero3) {
    return (numero1 * numero2 * numero3) / 3;
}

function maiorNumero(numero1, numero2) {
    return (numero1 > numero2) ? numero1 : numero2;
}

function numeroQuadrado(numero) {
    return numero * numero;
}