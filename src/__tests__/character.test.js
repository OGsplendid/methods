import Character from '../Character';

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

test('should improve heroe\'s stats', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  hero.health = 15;
  hero.levelUp();
  const correct = {
    _name: 'Boo', _type: 'Bowman', attack: 12, defence: 12, health: 100, level: 2,
  };
  expect(hero).toEqual(correct);
});

test('should throw an error improving dead\'s health', () => {
  expect(() => {
    const hero = new Character('Boo', 'Bowman');
    hero.health = 0;
    hero.levelUp();
  }).toThrow('Your hero is dead (can\'t resurrect dead hero)');
});

test('should cause damage of 4.5 points', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  hero.damage(5);
  expect(hero.health).toBe(95.5);
});

test('should return', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  hero.health = -1;
  hero.damage(5);
  expect(hero.health).toBe(-1);
});

test('shold return hero\'s name', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  expect(hero.name).toBe('Boo');
});

test('shold return hero\'s type', () => {
  const hero = new Character('Boo', 'Bowman', 10, 10);
  expect(hero.type).toBe('Bowman');
});
