/* eslint-disable linebreak-style */

export default function interactive(event) {
  const task = JSON.parse(localStorage.getItem('task'));
  const text = event.currentTarget.nextElementSibling.textContent;
  const toDos = task.filter((task) => task.description === text)[0];
  const id = task.indexOf(toDos);

  task[id].completed = event.target.checked;

  localStorage.setItem('task', JSON.stringify(task));
}
