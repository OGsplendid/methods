import Character from '../Character';
import Undead from '../characters/Undead';

test('should create a propet Undead', () => {
  const hero = new Undead('Boo');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, _name: 'Boo', _type: 'Undead',
  };
  expect(hero).toEqual(correct);
});
