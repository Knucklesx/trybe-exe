const numeroApostado = (numero, numeroSorteado) => numero === numeroSorteado;

const sorteio = (numero, callback) => {
   const numeroSorteado = Math.floor((Math.random() * 5) + 1);
    
   return numeroApostado(numero, numeroSorteado) ? `Parabéns, você ganhou` : `Tente novamente`

}


console.log(sorteio(2, numeroApostado))
