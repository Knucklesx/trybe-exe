const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "nome" igual a "NOME"', (ok) => {
  uppercase('nome', str => {
    try {
      expect(str).toBe('NOME');
      ok();
    } catch (erro) {
      ok(erro)
    }
  })
})

