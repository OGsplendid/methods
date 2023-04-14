import Character from '../Character';

export default class Magician extends Character {
  constructor(name, level, health, attack = 10, defence = 40, type = 'Magician') {
    super(name, type, attack, defence, health, level);
  }
}
