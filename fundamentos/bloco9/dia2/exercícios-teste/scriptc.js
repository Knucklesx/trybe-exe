// apiScript.js

const fetchCripto = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
}

  await fetch(url, coins)  
   .then(response => response.json())
   .then((data) => data.data)
   .catch((error) => error.tostring())
  return fetch;
}

const setCoins = async () => {
  const coins = await fetchCripto();

  const coinsList = document.getElementById('coins-list');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();