function bigIndex(array) {
    let bigOne = 0
    for (let indice in array) {
        if (array[bigOne] < array[indice]) {
            bigOne = indice
        }
    }


    return bigOne
}


console.log(bigIndex([2, 3, 6, 7, 10, 1]))