/* eslint-disable linebreak-style */
import {addToDo,deleteItem} from '../src/add_rem.js';
describe('tests',()=>{
  test('add the task', () => {
    // const taskList = [];
    // Arrange
    const taskList = [
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
    // Mock function
    const addToDoMocked = jest.fn((taskList, taskInput) => {
      if (taskInput === '') {
        return;
      }
      const taskElement = {
        description: taskInput,
        completed: false,
        index: taskList.length + 1,
      };
      taskList.push(taskElement);
       return taskList.length;
    });
    // Act
    expect(addToDoMocked(taskList, 'New Task')).toBe(3);
  })
  test('delteitem',() =>{
    const tasks = [
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
    const deleteitem = jest.fn((index,tasks) => {
      let task = tasks;
     tasks.splice(index,1)
      return tasks.length;
    })
    expect(deleteitem(0, tasks)).toBe(1);
   
  })

})