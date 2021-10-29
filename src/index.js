import './style.css';
import interactive from './interactive.js';
import { addTOLocalStorage, getFromLocalStorage } from './storage.js';
import {
  addToDo, editText, completeToDo, deleteItem, removeLine,
} from './add_rem.js';

const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clearbtn');
let task = [];

// UI
const getList = () => {
  if (getFromLocalStorage('task') == null) {
    addTOLocalStorage('task', task);
  }
  task = getFromLocalStorage('task');
  task.sort((a, b) => a.index - b.index);

  const itemContainer = document.querySelector('ul');
  itemContainer.innerHTML = '';

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
    description.textContent = task[i].description;
    listContainer.appendChild(description);
    // input for paragraph
    const editPara = document.createElement('input');
    editPara.value = task[i].description;
    editPara.classList.add('none');
    editPara.setAttribute('type', 'text');
    editPara.addEventListener('blur', (e) => {
      editText(e.currentTarget.value, i);
      // console.log('he');
    });
    listContainer.appendChild(editPara);
    if (task[i].completed) {
      description.classList.add('linethrough');
    }
    // Icon
    const verIcon = document.createElement('i');
    verIcon.classList.add('fas');
    verIcon.classList.add('fa-ellipsis-v');
    verIcon.addEventListener('click', (e) => {
      removeLine(e);
    });
    list.appendChild(verIcon);

    const trash = document.createElement('i');
    trash.classList.add('fas');
    trash.classList.add('fa-trash-alt');
    trash.classList.add('none');
    trash.addEventListener('click', () => {
      deleteItem(i);
      getList();
    });
    list.appendChild(trash);
  }
};
getList();

addBtn.addEventListener('click', () => {
  addToDo(addBtn.previousElementSibling.value);
  getList();
});

clearBtn.addEventListener('click', () => {
  completeToDo();
  getList();
});

const autorenew = document.querySelector('.material-icons');
autorenew.addEventListener('click', () => {
  window.location.reload();
  window.localStorage.remove(task);
});

document.addEventListener('click', (e) => {
  if (e.target == null) {
    return;
  }
  if (e.target !== e.target.parentNode.querySelector('.list-con input[type="text"]') && e.target !== e.target.parentNode.querySelector('.fa-trash-alt') && e.target !== e.target.parentNode.querySelector('.fa-ellipsis-v') && e.target !== e.target.parentNode.querySelector('input[type="checkbox"]')) {
    getList();
  }
});