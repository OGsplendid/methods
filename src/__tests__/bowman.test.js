import Character from '../Character';
import Bowman from '../characters/Bowman';

test('should create a propet Bowman', () => {
  const hero = new Bowman('Boo');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, _name: 'Boo', _type: 'Bowman',
  };
  expect(hero).toEqual(correct);
});
