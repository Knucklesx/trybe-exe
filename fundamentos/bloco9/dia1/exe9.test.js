// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exe8.js");


describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(')
    
    function callback(error, result) {
        expect(error).toEqual(expectedError);
        done()
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback)
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectedString = `Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Ember`;

    function callback(err, result) {
        expectedString(result).toBe(expectedString);
        done()
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback)
  });
});