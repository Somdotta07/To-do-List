
import './style.css';
import interactive from './interactive.js';

const itemContainer = document.querySelector('ul');
let task = [
  {
    description: 'Eat Breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Set up files for project',
    completed: false,
    index: 1,
  },

  {
    description: 'Complete To Do list project',
    completed: false,
    index: 3,
  },
  {
    description: 'Add linter files',
    completed: false,
    index: 2,
  },
];

const addTOLocalStorage = (taskName, task) => {
  const str = JSON.stringify(task);
  localStorage.setItem(taskName, str);
};

const getFromLocalStorage = (taskName) => {
  if (localStorage.getItem(taskName) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(taskName));
};

const getList = () => {
  if (getFromLocalStorage('task') == null) {
    addTOLocalStorage('task', task);
  }

  task = getFromLocalStorage('task');
  task.sort((a, b) => a.index - b.index);

  for (let i = 0; i < task.length; i += 1) {
    // List
    const list = document.createElement('li');
    itemContainer.appendChild(list);
    // Inside List create a div
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-con');
    list.appendChild(listContainer);
    // Input checkBox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = task[i].completed;
    checkBox.addEventListener('change', interactive);
    listContainer.appendChild(checkBox);
    // Text item
    const description = document.createElement('p');
    description.classList.add('text');
    description.setAttribute('id', task[i].index);
    description.textContent = task[i].description;
    listContainer.appendChild(description);
    // if (checkBox.checked) {
    //   description.classList.add('linethrough');
    // } else {
    //   description.classList.remove('linethrough');
    // }
    // Icon

    const verIcon = document.createElement('i');
    verIcon.classList.add('fas');
    verIcon.classList.add('fa-ellipsis-v');
    list.appendChild(verIcon);
  }
};
getList();
