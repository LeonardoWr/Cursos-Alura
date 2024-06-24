let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsoleClicado() {
    console.log('O botão foi clicado');
}

function botaoAlertClicado() {
    alert('Eu amo JS');
}

function botaoPromptClicado() {
    let cidade = prompt('Digite o nome de uma cidade brasileira');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSomaClicado() {
    let numInteiro1 = parseInt(prompt('Digite o primeiro número inteiro'));
    let numInteiro2 = parseInt(prompt('Digite o segundo número inteiro'));

    let soma = numInteiro1 + numInteiro2;

    alert(`A soma dos valores é igual a: ${soma}`);
}