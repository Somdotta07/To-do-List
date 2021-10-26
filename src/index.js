// import _ from 'lodash';
import './style.css';

const itemContainer = document.querySelector('.item-list');
// const addToDo = document.getElementById('todos');
// const inputTask = document.getElementById('add-item');
// const clearButton = document.querySelector('.clearBtn');
const TASKS = [
  {
    description: 'Eat Breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 3,
  },
  {
    description: 'Set up files for project',
    completed: false,
    index: 1,
  },
  {
    description: 'Add linter files',
    completed: false,
    index: 2,
  },
];

function ascendingOrder(list, parameter = 'index') {
  const sortedArr = [...list];
  return sortedArr.sort((a, b) => (a[parameter] > b[parameter] ? 1 : -1));
}
function newTask(task) {
  const { description, completed, index } = task;
  const LIST = document.createElement('li');
  LIST.id = index;
  LIST.innerHTML = `
  <input 
  data-done="${completed}" 
  data-referTo="${index}" 
  type="checkbox" 
  value="false" 
  name="completeTask" 
  class="check-box">
  <p contenteditable="true" data-referTo="${index}" class="description">${description}</p>
  <span data-referTo="${index}" class="material-icons">
  more_vert
  </span>`;
  return LIST;
}

window.onload = () => {
  ascendingOrder(TASKS).forEach((task) => {
    itemContainer.appendChild(newTask(task));
  });
};
