/* eslint-disable linebreak-style */
import addToDo from '../src/add_rem.js';


test('Test the functions', () => {
  const localStorage = '';
  const value = 'Laundry';
  expect(addToDo(value)).not.toBe('Done');
});
