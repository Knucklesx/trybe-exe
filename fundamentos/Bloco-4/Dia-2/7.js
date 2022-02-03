let numbers = [5, 9, 3, 19, 70, 2, 8, 100, 35, 27];

let menor = numbers[9];

for (index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}


console.log(menor)