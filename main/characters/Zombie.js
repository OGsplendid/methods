import Character from '../Character';

export default class Zombie extends Character {
  constructor(name, level, health, attack = 10, defence = 40, type = 'Zombie') {
    super(name, type, attack, defence, health, level);
  }
}
