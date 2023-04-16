import Character from '../Character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
