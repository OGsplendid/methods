import Character from '../Character';
import Magician from '../characters/Magician';

test('should create a propet Magician', () => {
  const hero = new Magician('Boo');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, _name: 'Boo', _type: 'Magician',
  };
  expect(hero).toEqual(correct);
});
