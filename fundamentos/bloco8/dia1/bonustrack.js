const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 0,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
  const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => {
    let finalDmg = Math.floor((Math.random() * dragon.strength)+15)

    return finalDmg
}

const warriorDmg = () => {
    let warriorPancada = warrior.strength * warrior.weaponDmg
    let warriorHit = Math.floor((Math.random()*warrior.strength) + warriorPancada)

    return warriorHit
}

const mageSkillCast = () => {
    const mageSkillBook = ['Bola de fogo', 'Seta de gelo', 'RAIO CÔSMICOOO']
    let skillChoose = Math.floor(Math.random()*3) 
    if (skillChoose === 0) return mageSkillBook[0];
    if (skillChoose === 1) return mageSkillBook[2]
    if (skillChoose !== 1 && skillChoose !== 2) return mageSkillBook[3]
}




const mageTurn = (callback) => {
   let turnAction = {
       gastoDeMana: 0,
       actionTurn: `Sem mana suficiente`
   };
   
   if (mage.mana > 15) {
    let damageTotal = Math.floor((Math.random() * mage.intelligence)+ (mage.intelligence * 2));
    turnAction.gastoDeMana = 15;
    turnAction.actionTurn = damageTotal;
    return turnAction


    }
    return turnAction
}



console.log(mageTurn())