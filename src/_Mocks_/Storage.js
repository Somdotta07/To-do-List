export const addTOLocalStorage = (taskName, task) => {
  const str = JSON.stringify(task);
  localStorage.setItem(taskName, str);
};

export const getFromLocalStorage = (taskName) => {
  if (localStorage.getItem(taskName) == null) {
    return null;
  } return JSON.parse(localStorage.getItem(taskName));
};

// export  { addTOLocalStorage, getFromLocalStorage };