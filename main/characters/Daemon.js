import Character from '../Character';

export default class Daemon extends Character {
  constructor(name, level, health, attack = 10, defence = 40, type = 'Daemon') {
    super(name, type, attack, defence, health, level);
  }
  // constructor(name, health, level) {
  //   super(health, level);
  //   this.name = name;
  //   this.type = 'Daemon';
  //   this.attack = 10;
  //   this.defence = 40;
  // }
}
