const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();


// pode ser feito dessa maneira também
const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.value)
    } catch(error) {
        console.log(`Algo de errado não está certo :( \n${error}`)
    }
}
  fetchJoke();