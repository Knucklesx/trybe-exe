const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, nomeAtual) => 
        acc + nomeAtual.split('').reduce((acumulador, atual) => {
            if (atual === 'a' || atual === 'A') return acumulador + 1;
            return acumulador;
    }, 0), 0)
  }

  console.log(containsA());