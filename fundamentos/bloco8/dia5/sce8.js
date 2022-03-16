// escreva greet abaixo

const greet = (name, greetingMessage = 'Hi') => {
    return `${greetingMessage} ${name}`
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'