/* eslint-disable linebreak-style */
let tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
];

const addTOLocalStorage = (taskName, task) => {
  tasks = [...task];
};

const getFromLocalStorage = (taskName) => tasks;

export default { addTOLocalStorage, getFromLocalStorage };