let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

function calcularFatorial(numero) {
    let resultado = 1;

    while (numero > 0) {
        resultado *= numero;
        numero--;
    }

    return resultado;
}

function converterDolarEmReal(valorDolar) {
    return valorDolar * 4.8;
}

function mostrarAreaPerimetroRetangulo(altura, largura) {
    let perimetro = (altura + largura) * 2;
    let area = altura * largura;

    alert(`Perimetro: ${perimetro}. Área: ${area}.`);
}

function mostrarAreaPerimetroCirculo(raio) {
    let perimetro = 2 * 3.14 * raio;
    let area = 3.14 * raio * raio;

    alert(`Perimetro: ${perimetro}. Área: ${area}.`);
}

function mostrarTabuadaNumero(numero) {
    let tabuadaTexto = '';
    let contador = 1;

    while (contador <= 10) {
        let multiplicacao = contador * numero;
        tabuadaTexto += `${numero} X ${contador} = ${multiplicacao}\n`;
        contador++;
    }

    alert(tabuadaTexto);
}