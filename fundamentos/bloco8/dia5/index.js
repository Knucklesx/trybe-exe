// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sorvete', 'açaí', 'refrigerante'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
    return `${fruit} é bom, mas já testou ${additional}?`
};

console.log(fruitSalad(specialFruit, additionalItens));


const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const { price, seller } = product

console.log(price, seller)