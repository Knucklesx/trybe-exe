let numerosPrimos = 0

for (let index =0; index <= 50; index += 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < index; currentDivisor += 1) {
        if (index % currentDivisor === 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        numerosPrimos = index
    }
}

console.log(numerosPrimos)