import Character from '../Character';

export default class Swordsman extends Character {
  constructor(name, level, health, attack = 40, defence = 10, type = 'Swordsman') {
    super(name, type, attack, defence, health, level);
  }
}
