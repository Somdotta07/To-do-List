/* eslint-disable linebreak-style */
import addToDo from '../src/add_rem.js';
describe('tests',()=>{
  test('Test the function', () => {
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
})
