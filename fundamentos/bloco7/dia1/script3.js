const fatorialNumber = number => number > 0 ? number * fatorialNumber(number - 1) : 1

console.log(fatorialNumber(5))

