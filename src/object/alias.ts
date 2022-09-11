export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const Japan: Country = {
    capital: 'tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log(Japan)

  const USA: Country = {
    capital: 'Washington  DC',
    language: 'english',
    name: 'USA',
  }

  console.log(USA)

  //----//

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordskill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard

  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'Katana',
    swordskill: '三千世界',
  }

  const adventurer2: Adventurer = {
    hp: 200,
    mp: 500,
    weapon: 'rods',
    magicSkill: 'fire smash',
  }

  console.log(adventurer1)
  console.log(adventurer2)

  const Paladin1: Paladin = {
    hp: 3000,
    sp: 4500,
    mp: 4500,
    weapon: 'Akuma sword',
    swordskill: '四千世界',
    magicSkill: 'great',
  }

  console.log(Paladin1)
}
