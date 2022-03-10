const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doinThings = (hora) => hora();

console.log(doinThings(cafe));