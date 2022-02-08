//1. Gerar um número aleatório
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    
    return randomNumber;

}

//2. Gerar um jogo - sortear os números
function generateGame() {
    let megaSenaDraw = [];

    for (let index = 1; index <= 6; index += 1) {
        let randomNumber = generateRandomNumber; //Essa 'randomNumber é diferente da randomNumber lá de cima.
        megaSenaDraw.push(randomNumber);
    }


    return megaSenaDraw;

}


//3. Conferir se a pessoa acertou
function checkMegaSenaResult(result, game) {
    let numberOfHits = 0
     for(let index = 0; index < result.length; index + 1) {
         let drawnNumber = result[index];
        for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
            let gustavoNumbers = game[gameIndex];
            if (drawnNumber === gustavoNumbers) {
                console.log('PARABÉNS')
            }
        }
    }


}

gustavoNumbers = [60, 35, 30, 22, 10, 1];



console.log(megaSenaDraw)
console.log(gustavoNumbers)
console.log(checkMegaSenaResult(megaSenaDraw, gustavoNumbers))



