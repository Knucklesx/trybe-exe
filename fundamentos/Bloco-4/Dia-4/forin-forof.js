let cars = ['Saab', 'Volvo', 'BMW'];

for (let index of cars) {
  console.log(index);
}


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  