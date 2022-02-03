let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
    console.log(soma) //aqui ele o número pelo seu antecessor, e o resultado pelo próximo, tipo uma sequência de fibonacci
}

console.log(soma) //aqui ele diz o resultado da soma de todos os números 