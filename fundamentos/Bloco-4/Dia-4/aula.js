function makeGreeting (name) {
    return 'Olá, ' + name + ' tudo certinho?';
}

console.log(makeGreeting('Gustavo'))

let greeting = makeGreeting('Gustavo')
console.log(greeting)


function operation(operacao, num1, num2) {
    if (operacao === 'soma') {    
    return num1 + num2; 
    } else if (operacao === 'sub') {
        return num1 - num2;
    } else if (operacao === 'divisao') {
        return num1/num2;
    } else if (operacao === 'multiplicacao') {
        return num1*num2
    } else {
        return 'Não existe essa operação'
    }

}

console.log(operation('fatoracao', 2, 3))


