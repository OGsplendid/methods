import Character from '../Character';
import Swordsman from '../characters/Swordsman';

test('should create a propet Swordsman', () => {
  const hero = new Swordsman('Boo');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, _name: 'Boo', _type: 'Swordsman',
  };
  expect(hero).toEqual(correct);
});
