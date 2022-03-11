const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
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

const mageTurn = () => {
   let mageDmg = {
    damageTotal: Math.floor((Math.random() * mage.intelligence)+ (mage.intelligence * 2))
   }

   return mageDmg

}

console.log(mageTurn())