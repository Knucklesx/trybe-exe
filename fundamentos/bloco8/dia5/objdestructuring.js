// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
};

const { name, age, homeWorld: {name: planetName}, description: { jedi } } = character;

console.log(`Esse é ${name}, ele tem ${age}, mora no planeta ${planetName}, e ${jedi ? 'é um jedi' : 'não é jedi'} `)

