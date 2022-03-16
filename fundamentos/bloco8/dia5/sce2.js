function sumAll(...args) {
    let somaTudo = args.reduce((acc, atual) => acc+atual, 0)
    return somaTudo
}

const somaGeral = (...args) => args.reduce((a, b) => a + b, 0)

console.log(somaGeral(10,20))



console.log(sumAll(1,2,3,4,5))