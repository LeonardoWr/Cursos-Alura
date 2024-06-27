let qtdIngressosPista = document.getElementById('qtd-pista').textContent;
let qtdIngressosSuperior = document.getElementById('qtd-superior').textContent;
let qtdIngressosInferior = document.getElementById('qtd-inferior').textContent;

function comprar() {
    let tipoIngressoEscolhido = document.getElementById('tipo-ingresso').value;
    let qtdIngressosComprados = document.getElementById('qtd').value;

    switch (tipoIngressoEscolhido) {
        case 'inferior':
            comprarIngressoInferior(qtdIngressosComprados);
            break;
        case 'superior':
            comprarIngressoSuperior(qtdIngressosComprados);
            break;
        case 'pista':
            comprarIngressoPista(qtdIngressosComprados);
            break;
    }
}

function comprarIngressoInferior(qtdIngressosComprados) {
    if(qtdIngressosComprados > qtdIngressosInferior) {
        alert('Quantidade indisponível para cadeira inferior!')
        return;
    }

    qtdIngressosInferior -= qtdIngressosComprados;
    document.getElementById('qtd-inferior').textContent = qtdIngressosInferior;
}

function comprarIngressoSuperior(qtdIngressosComprados) {
    if(qtdIngressosComprados > qtdIngressosSuperior) {
        alert('Quantidade indisponível para cadeira superior!')
        return;
    }

    qtdIngressosSuperior -= qtdIngressosComprados;
    document.getElementById('qtd-superior').textContent = qtdIngressosSuperior;
}

function comprarIngressoPista(qtdIngressosComprados) {
    if(qtdIngressosComprados > qtdIngressosPista) {
        alert('Quantidade indisponível para pista!')
        return;
    }

    qtdIngressosPista -= qtdIngressosComprados;
    document.getElementById('qtd-pista').textContent = qtdIngressosPista;
}