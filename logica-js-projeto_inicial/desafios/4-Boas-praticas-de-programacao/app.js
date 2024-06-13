console.log('Bem-vindo!');

let nome = 'Leonardo';
console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}`);

let linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Linguagem Favorita: ${linguagemFavorita}`);

let valor1 = 52;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idadeUsuario = prompt('Digite sua idade');
let palavraSituacaoIdade = idadeUsuario >= 18 ? 'maior' : 'menor';
console.log(`Usuário ${palavraSituacaoIdade} de idade`);

let numero = prompt('Digite um número');
if(numero >= 0) {
    if(numero == 0) {
        console.log('Número zero');
    } else {
        console.log('Número positivo');
    }
} else {
    console.log('Número negativo');
}

let contadorProgressivo = 1;

while(contadorProgressivo <= 10) {
    console.log(`Valor do contador ${contadorProgressivo}`);
    contadorProgressivo++;
}

let nota = 5;
let situacao = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(situacao);

let numeroAleatorio = Math.random();
console.log(`Número aleatório: ${numeroAleatorio}`);

let numeroAleatorio1a10 = parseInt(Math.random() * 10 + 1);
console.log(`Número aleatório 1 a 10: ${numeroAleatorio1a10}`);

let numeroAleatorio1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(`Número aleatório 1 a 1000: ${numeroAleatorio1a1000}`);