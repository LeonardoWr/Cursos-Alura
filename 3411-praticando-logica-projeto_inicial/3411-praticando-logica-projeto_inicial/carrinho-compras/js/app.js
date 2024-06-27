let valorTotal = 1400;

function adicionar() {
    let produtoEscolhido = document.getElementById('produto').value;
    let nomeProduto = produtoEscolhido.split('-')[0];
    let valorProduto = produtoEscolhido.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let valorCalculadoProduto = valorProduto * quantidade;

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML += criarTextoItemProdutoEscolhido(quantidade, nomeProduto, valorCalculadoProduto);
    
    valorTotal += valorCalculadoProduto;
    atualizarElementoValorTotal();
}

function limpar() {
    valorTotal = 0;

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';
    atualizarElementoValorTotal();
}

function atualizarElementoValorTotal() {
    let elementoValorTotal = document.getElementById('valor-total');
    elementoValorTotal.textContent = `R$${valorTotal}`;
}

function criarTextoItemProdutoEscolhido(quantidade, nomeProduto, valorCalculadoProduto) {
    return `<section class="carrinho__produtos__produto">\n
                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorCalculadoProduto}</span>\n
            </section>`
}