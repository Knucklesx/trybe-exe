// function testingScope(escopo) {
//     if (escopo === true) {
//       const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

const testingScope = escopo => (escopo === true ? 'não devo ser utilizada fora do meu escopo (if)' : 'não devo ser utilizada fora do meu escopo (else)')

console.log(testingScope(false))