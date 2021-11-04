import { addTOLocalStorage, getFromLocalStorage } from './storage.js';

export default function interactive(index, checked) {
  const task = getFromLocalStorage('task');
  task[index].completed = checked;
  addTOLocalStorage('task', task);
  return task;
}
