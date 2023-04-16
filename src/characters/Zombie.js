import Character from '../Character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
