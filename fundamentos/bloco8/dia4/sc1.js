const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const ehPar = (number) => number % 2 === 0;
// const somaPar = (valor1, numero) => valor1 + numero;
// const somandoTudo = array => array.filter(ehPar).reduce(somaPar)

const somaPar = (valor1, numero) => ((numero % 2 === 0) ? valor1 + numero : valor1)
const somandoTudo = (array) => array.reduce(somaPar, 0)

console.log(somandoTudo(numbers))