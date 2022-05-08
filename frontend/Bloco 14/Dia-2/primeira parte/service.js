const randomNumber = () => Math.floor(Math.random() * 100);

const allUpperCase = (string) => {
  return string.toUpperCase();
}

const justFirstLetter = (string) => {
  return string.charAt(0);
}

const concatTwoStrings = (string1, string2) => {
  const stringConcat = string1.concat(string2);
  return stringConcat
}

module.exports = {randomNumber, allUpperCase, justFirstLetter, concatTwoStrings};