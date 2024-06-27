function alterarStatus(idJogo) {
    let jogoClicado = document.getElementById(`game-${idJogo}`);
    let imagemJogoClicado = jogoClicado.querySelector('div');
    let botaoAlugarDevolverClicado = jogoClicado.querySelector('a');

    if(imagemJogoClicado.classList.contains('dashboard__item__img--rented')) {
        imagemJogoClicado.classList.remove('dashboard__item__img--rented');
        botaoAlugarDevolverClicado.classList.remove('dashboard__item__button--return');
        botaoAlugarDevolverClicado.textContent = 'Alugar';
    } else {
        imagemJogoClicado.classList.add('dashboard__item__img--rented');
        botaoAlugarDevolverClicado.classList.add('dashboard__item__button--return');
        botaoAlugarDevolverClicado.textContent = 'Devolver';
    }
}