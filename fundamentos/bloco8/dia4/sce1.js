const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
function flatten(array) {
    return array.reduce((acc, item) => acc.concat(item), [])}

function flatten2(array) {
    return array.flat()
  }

  // ambas as formas retornam o mesmo resultado



  console.log(flatten(arrays));

  console.log(flatten2(arrays));