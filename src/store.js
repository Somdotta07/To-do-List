/* eslint-disable linebreak-style */

class localStore {
  static getTask() {
    let todos;
    if (localStorage.getItem('completed task') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('completed task'));
    }
    return todos;
  }

  static updateTask(todos) {
    localStorage.setItem('completed task', JSON.stringify(todos));
  }
}
export default localStore;