import Character from '../Character';

export default class Bowman extends Character {
  constructor(name, level, health, attack = 25, defence = 25, type = 'Bowman') {
    super(name, type, attack, defence, health, level);
  }
}
