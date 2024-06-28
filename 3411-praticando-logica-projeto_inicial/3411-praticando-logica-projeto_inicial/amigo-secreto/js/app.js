let amigosAdicionados = [];

function adicionar() {
    let elementoNomeAmigo = document.getElementById('nome-amigo');
    let nomeAmigo = elementoNomeAmigo.value;

    elementoNomeAmigo.value = '';
    amigosAdicionados.push(nomeAmigo);
    alterarAmigosAdicionados();
}

function alterarAmigosAdicionados() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.textContent = amigosAdicionados.join(', ');
}

function sortear() {
    let amigosPresentear = sortearAmigosPresenteados();

    let amigosReceber = [];

    for(let i = 0; i < amigosAdicionados.length - 1; i++) {
        amigosReceber[i] = amigosPresentear[i + 1];
    }

    amigosReceber[amigosAdicionados.length - 1] = amigosPresentear[0];

    let sorteioText = '';

    for(let i = 0; i < amigosPresentear.length; i++) {
        sorteioText += `${amigosPresentear[i]} --> ${amigosReceber[i]}<br/>`;
    }

    document.getElementById('lista-sorteio').innerHTML = sorteioText;
}

function sortearAmigosPresenteados() {
    let amigosPresentear = amigosAdicionados;

    for(let i = amigosAdicionados.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        [amigosPresentear[i], amigosPresentear[randomIndex]] = [amigosPresentear[randomIndex], amigosPresentear[i]];
    }

    return amigosPresentear;
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    amigosAdicionados = [];
    alterarAmigosAdicionados();
}