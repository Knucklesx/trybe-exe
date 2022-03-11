const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const answersCheck = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) return 1;
    if (STUDENT_ANSWERS === 'N.A') return 0;
    if (RIGHT_ANSWERS !== STUDENT_ANSWERS) return -0.5
}

const notaFinal = (RIGHT_ANSWERS, STUDENT_ANSWERS, calculoTotal) => {
    let nota = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index +=1) {
        const notaAluno = calculoTotal(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]) 
        nota += notaAluno;
    }
    return `Sua nota final é: ${nota}`
}

console.log(notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, answersCheck))