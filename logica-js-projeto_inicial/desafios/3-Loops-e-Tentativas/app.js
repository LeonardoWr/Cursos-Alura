let contadorIncremental = 1;

while(contadorIncremental <= 10) {
    alert(`Contando de 1 até 10: ${contadorIncremental}`);
    contadorIncremental++;
}

let contadorDecremental = 10;

while(contadorDecremental >= 0) {
    alert(`Contando de 10 até 0: ${contadorDecremental}`);
    contadorDecremental--;
}

let contadorRegressivo = prompt('Digite um número');

while(contadorRegressivo >= 0) {
    console.log(`Valor do contador regressivo: ${contadorRegressivo}`);
    contadorRegressivo--;
}

let limiteContadorProgressivo = prompt('Digite um número');
let contadorProgressivo = 0;

while(contadorProgressivo <= limiteContadorProgressivo) {
    console.log(`Valor do contador progressivo: ${contadorProgressivo}`);
    contadorProgressivo++;
}