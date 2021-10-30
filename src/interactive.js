/* eslint-disable linebreak-style */
import { addTOLocalStorage, getFromLocalStorage } from './storage.js';

export default function interactive(event) {
  const task = getFromLocalStorage('task');
  const text = event.currentTarget.nextElementSibling;
  const toDos = task.filter((task) => task.description === text.textContent)[0];
  const id = task.indexOf(toDos);

  task[id].completed = event.target.checked;
  if (event.target.checked) {
    text.classList.add('linethrough');
  } else {
    text.classList.remove('linethrough');
  }

  addTOLocalStorage('task', task);
}
