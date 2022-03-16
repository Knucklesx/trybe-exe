const getNationality = ({ firstName, nationality = 'brasileiro' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


const { nationality = 'brasileiro' } = person



console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));