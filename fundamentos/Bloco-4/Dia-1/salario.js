let salario = 100000

if (salario <= 1556.94) {
    let INSS = salario * .08;
    let salarioBase = salario - INSS;
    console.log('Salário Final = ', salarioBase)
} else if (1556.95 < salario <= 2594.92) {
    let INSS = salario * .09;
    let salarioBase = salario - INSS;
    console.log(salarioBase)
    if (1903.98 < salarioBase <= 2826.65) {
        let IR = (salarioBase * 0.075) - 142.8;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)
    } else {
        salarioLiquido = salarioBase;
        console.log('Salário Final = ', salarioLiquido)
    }
} else if (2594.92 < salario <= 5186.82) {
    let INSS = salario * 0.11;
    let salarioBase = salario - INSS;
    console.log(salarioBase)
    if (1903.98 < salarioBase <= 2826.65) {
        let IR = (salarioBase * 0.075) - 142.8;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)
    } else if (2826.66 < salarioBase <= 3751.05) {
    let IR = (salarioBase * 0.15) - 354.8;
    let salarioLiquido = salarioBase - IR;
    console.log(salarioLiquido) } else if (3751.06 < salarioBase <= 4664.68) {
        let IR = (salarioBase * 0.225) - 636.13;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)
    } else {
        let IR = (salarioBase * 0.275) - 869.36;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)}
} else {
    let INSS = salario - 570.88
    let salarioBase = INSS
    console.log(salarioBase)
    if (1903.98 < salarioBase <= 2826.65) {
        let IR = (salarioBase * 0.075) - 142.8;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)
    } else if (2826.66 < salarioBase <= 3751.05) {
    let IR = (salarioBase * 0.15) - 354.8;
    let salarioLiquido = salarioBase - IR;
    console.log('Salário Final = ', salarioLiquido)} else if (3751.06 < salarioBase <= 4664.68) {
        let IR = (salarioBase * 0.225) - 636.13;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)
    } else {
        let IR = (salarioBase * 0.275) - 869.36;
        let salarioLiquido = salarioBase - IR;
        console.log('Salário Final = ', salarioLiquido)}

}
