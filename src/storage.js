/* eslint-disable linebreak-style */
export function addTOLocalStorage(taskName, task) {
  const str = JSON.stringify(task);
  localStorage.setItem(taskName, str);
}

export function getFromLocalStorage(taskName) {
  if (localStorage.getItem(taskName) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(taskName));
}
