import Character from '../Character';
import Daemon from '../characters/Daemon';

test('should create a propet Daemon', () => {
  const hero = new Daemon('Boo');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, _name: 'Boo', _type: 'Daemon',
  };
  expect(hero).toEqual(correct);
});
