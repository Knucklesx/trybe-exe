let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


info['recorrente'] = 'sim'

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's four color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'

}

for (let key in info, info2) {
    console.log(info[key], 'e', info2[key])
}