/* eslint-disable linebreak-style */
import './style.css';
import localStore from './store.js';

const itemContainer = document.querySelector('.item-list');

class taskToDo {
  constructor(item) {
    this.item = item;
  }

 taskList = [];

 static addTask() {
   this.taskList = [
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

   if (localStore.getTask() === []) {
     localStore.updateTask(this.taskList);
   }
 }

 static addToList(obj) {
   if (obj.completed === true) {
     itemContainer.innerHTML += `
    <li class=to-do-list>
    <input type="checkbox" id="${obj.index}"  class="check-box">
    <p contenteditable="true"  class="description checked">${obj.description}</p>
    <span class="material-icons">
    more_vert
    </span>
    </li>`;
   } else {
     itemContainer.innerHTML += `
    <li class=to-do-list>
    <input type="checkbox" id="${obj.index}"  class="check-box">
    <p contenteditable="true"  class="description">${obj.description}</p>
    <span class="material-icons">
    more_vert
    </span>
    </li>`;
   }
 }

 static displayItems() {
   this.taskList.sort((obj1, obj2) => (obj1.index > obj2.index ? 1 : -1));

   const todo = localStore.getTask();
   todo.forEach((obj) => taskToDo.addToList(obj));
 }

 static completeTask(index) {
   const done = localStore.getTask();
   done.forEach((task) => {
     if (task.index === index) {
       task.completed = true;
     }
   });
   localStore.updateTask(done);
 }

 static markPara(element) {
   let todos;
   if (element.checked === true) {
     element.nextElementSibling.classList.add('checked');
     taskToDo.completeTask(element.index);
   } else {
     element.nextElementSibling.classList.remove('checked');
     const store = localStore.getTask();
     store.forEach((task) => {
       if (task.index === element.index) {
         task.completed = false;
       }
     });
     localStore.updateTask(todos);
   }
 }
}

document.addEventListener('DOMContentLoaded', () => {
  taskToDo.addTask();
  taskToDo.displayItems();
});

itemContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('check-box')) {
    taskToDo.markPara(event.target);
  }
});
