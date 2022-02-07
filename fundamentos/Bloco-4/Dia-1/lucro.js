let valorDoProduto = -0;
let valorVenda = 10000;

if (valorDoProduto > 0 && valorVenda > 0) {
    let valorCustoTotal = valorDoProduto * .2;
    let lucro = valorVenda - (valorCustoTotal + valorDoProduto);
    console.log(lucro)
} else {
    console.log('ERRO')
}

