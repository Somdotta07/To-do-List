/* eslint-disable linebreak-style */
import { addTOLocalStorage, getFromLocalStorage } from './storage.js';

export function indexValue() {
  const task = getFromLocalStorage('task');
  task.sort((a, b) => a.index - b.index);
  for (let i = 0; i < task.length; i += 1) {
    task[i].index = i + 1;
  }
  addTOLocalStorage('task', task);
}

// Add to List
export function addToDo(taskInput) {
  if (taskInput === '') {
    return;
  }

  const task = getFromLocalStorage('task');
  const taskElement = {
    description: taskInput,
    completed: false,
    index: task.length + 1,
  };
  task.push(taskElement);
  addTOLocalStorage('task', task);
  indexValue();
}
// Edit the Text
export function editText(taskInput, index) {
  if (taskInput === '') {
    return;
  }
  const task = getFromLocalStorage('task');
  task[index].description = taskInput;
  addTOLocalStorage('task', task);
}
// Clear complete button

export function completeToDo() {
  let task = getFromLocalStorage('task');
  task = task.filter((task) => !task.completed);
  addTOLocalStorage('task', task);
  indexValue();
}

// Delete Item
export function deleteItem(index) {
  let task = getFromLocalStorage('task');
  task = task.filter((task) => task.index !== task[index].index);
  // console.log(task);
  addTOLocalStorage('task', task);
  indexValue();
}

// Remove Line
export function removeLine(e) {
  const text = e.currentTarget.parentNode.querySelector('.list-con p');
  const textInput = e.currentTarget.parentNode.querySelector('.list-con input[type="text"]');
  const textIcon = e.currentTarget.parentNode.querySelector('.fa-ellipsis-v');
  const trashIcon = e.currentTarget.parentNode.querySelector('.fa-trash-alt');

  text.classList.add('none');
  textInput.classList.remove('none');
  textInput.focus();
  textIcon.classList.add('none');
  trashIcon.classList.remove('none');
}
