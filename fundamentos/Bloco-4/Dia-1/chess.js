let peca = 'rei'
let result = peca.toLowerCase()

switch (result) {
    case 'bispo':
        console.log('Diagonal')
        break;
    case 'peão':
        console.log('Para frente')
        break;
    case 'rei':
        console.log('Para frente')
        break;
    case 'rainha':
        console.log('Em qualquer direção')
        break;
    case 'cavalo':
        console.log('Em L')
        break;
    case 'torre':
        console.log('Para frente ou para trás')
        break;
    case 'dama':
        console.log('Esse é outro jogo, véi')

}