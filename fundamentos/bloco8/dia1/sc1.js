

function createId(nome) {
  let emailName = nome.toLowerCase();
  let emailEnd = emailName.split(' ').join('_')
  return { nome, email: `${emailEnd}@trybe.com`}
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Dumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createId))

// let brandNewEmploye = createId('Pedro Guerra')
// console.log(brandNewEmploye)