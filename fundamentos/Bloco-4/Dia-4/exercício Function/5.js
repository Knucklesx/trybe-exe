function maisRepete(array) {
    let repeteMais = 0
    for (let indice in array) {
        if (array[indice] < repeteMais[indice]) {
            array[indice] = repeteMais[indice]
            console.log(repeteMais[indice])
        };
        
        //console.log(array[indice])
        
    }
    return repeteMais
}


console.log(maisRepete([0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))