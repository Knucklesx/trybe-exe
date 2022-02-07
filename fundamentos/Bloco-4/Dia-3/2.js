let word = 'Gustavo';

let drow = '';


for (let index = 0; index < word.length; index += 1) {
    drow = drow + word[word.length -1 - index]
    console.log(drow)

}

console.log(drow)


drow = word.split('').reverse().join()

console.log(drow)

