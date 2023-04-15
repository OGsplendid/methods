export default class Character {
  // static health = 100;
  // static level = 1;

  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Inappropriate name length(must contain 2 to 10 symbols');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    switch (value) {
      case 'Bowman':
      case 'Daemon':
      case 'Magician':
      case 'Swordsman':
      case 'Undead':
      case 'Zombie':
        this._type = value;
        break;
      default:
        throw new Error('Inappropriate type (must be Bowman, Daemon, Magician, Swordsman, Undead or Zombie');
    }
  }

  levelUp() {
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if (this.health <= 0) {
      throw new Error('Your hero is dead (can\'t resurrect dead hero)');
    }
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= (points * (1 - this.defence / 100));
    }
  }
}
