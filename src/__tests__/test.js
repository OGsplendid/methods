import Character from '../../main/Character';
import Bowman from '../../main/characters/Bowman';
import Daemon from '../../main/characters/Daemon';
import Magician from '../../main/characters/Magician';
import Swordsman from '../../main/characters/Swordsman';
import Undead from '../../main/characters/Undead';
import Zombie from '../../main/characters/Zombie';

test('should throw error', () => {
  expect(() => {
    const hero = new Character('x');
  }).toThrow('Inappropriate name length(must contain 2 to 10 symbols');
});

test('should throw error', () => {
  expect(() => {
    const hero = new Character('Boo');
    hero.type = 'Dwarf';
  }).toThrow('Inappropriate type (must be Bowman, Daemon, Magician, Swordsman, Undead or Zombie');
});

test('should return hero name', () => {
  const hero = new Character('Boo', 'Magician');
  expect(hero.name).toBe('Boo');
});

test('should return hero type', () => {
  const hero = new Character('Boo', 'Magician');
  expect(hero.type).toBe('Magician');
});

test('should return Bowman\'s attack', () => {
  const hero = new Bowman('Boo', 'Bowman');
  expect(hero.attack).toBe(25);
});

test('should return Daemon\'s attack', () => {
  const hero = new Daemon('Boo');
  expect(hero.attack).toBe(10);
});

test('should return Magician\'s attack', () => {
  const hero = new Magician('Boo');
  expect(hero.attack).toBe(10);
});

test('should return Swordsman\'s attack', () => {
  const hero = new Swordsman('Boo');
  expect(hero.attack).toBe(40);
});

test('should return Undead\'s attack', () => {
  const hero = new Undead('Boo');
  expect(hero.attack).toBe(25);
});

test('should return Zombie\'s attack', () => {
  const hero = new Zombie('Boo');
  expect(hero.attack).toBe(10);
});

test('should improve heroe\'s stats', () => {
  const hero = new Zombie('Boo');
  hero.levelUp();
  expect(hero.attack).toBe(12);
});

test('should throw an error improving dead\'s health', () => {
  expect(() => {
    const hero = new Zombie('Boo');
    hero.health = 0;
    hero.levelUp();
  }).toThrow('Your hero is dead (can\'t resurrect dead hero)');
});

test('should cause damage of 30 points', () => {
  const hero = new Zombie('Boo');
  hero.damage(5);
  expect(hero.health).toBe(97);
});
