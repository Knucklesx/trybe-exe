let a = 85

if (a >= 90) {
    console.log('A')
} else if (a >= 80 && a < 90) {
    console.log('B')
} else if (a >= 70 && a < 80) {
    console.log('C')
} else if (a >= 60 && a < 70) {
    console.log('D')
} else if (a >= 50 && a < 60) {
    console.log('E')
} else if (a <= 50) {
    console.log('F')
} else {
    console.log('Essa nota não é suportada. ERRO')
}