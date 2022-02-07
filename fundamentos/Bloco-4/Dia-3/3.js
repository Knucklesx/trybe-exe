let palavras = ['java', 'javascript', 'python', 'html', 'css'];

let contador1 = palavras[0];
let contador2 = palavras[0];


for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > contador1.length) {
        contador1 = palavras[index]
    }
}

for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length < contador2.length) {
        contador2 = palavras[index]
    }
}
console.log(contador1)
console.log(contador2)