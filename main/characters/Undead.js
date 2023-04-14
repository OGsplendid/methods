import Character from '../Character';

export default class Undead extends Character {
  constructor(name, level, health, attack = 25, defence = 25, type = 'Undead') {
    super(name, type, attack, defence, health, level);
  }
}
