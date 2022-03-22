const resultadoFinal = (resultado) => {
    console.log(resultado)
}

const funcSoma = (num1, num2, balela) => {
    let soma = num1 + num2
    balela(soma)
}

funcSoma(10,8,resultadoFinal)