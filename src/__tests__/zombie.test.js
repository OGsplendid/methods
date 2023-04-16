import Character from '../Character';
import Zombie from '../characters/Zombie';

test('should create a propet Zombie', () => {
  const hero = new Zombie('Boo');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, _name: 'Boo', _type: 'Zombie',
  };
  expect(hero).toEqual(correct);
});
