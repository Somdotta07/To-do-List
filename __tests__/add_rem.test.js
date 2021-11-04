/* eslint-disable linebreak-style */
describe('tests', () => {
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
      // eslint-disable-next-line
      return taskList.length; 
    });
    // Act
    expect(addToDoMocked(taskList, 'New Task')).toBe(3);
  });
  test('delteitem', () => {
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
    const deleteitem = jest.fn((index, tasks) => {
      tasks.splice(index, 1);
      // eslint-disable-next-line
      return tasks.length; 
    });
    expect(deleteitem(0, tasks)).toBe(1);
  });
  // Edit text
  test('edit text', () => {
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
    const editText = jest.fn((taskInput, indexx, inpp) => {
      if (taskInput === '') {
        return;
      }
      taskInput[indexx].description = inpp;
      // eslint-disable-next-line
      return tasks;
    });
    const indexx = 1;
    const inpp = 'test';
    expect(editText(tasks, indexx, inpp)[1].description).toBe(inpp);
  });
  // Clear completed task
  test('Clear completed task', () => {
    const tasks = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: true,
        index: 2,
      },
      {
        description: 'Task 3',
        completed: true,
        index: 3,
      },
      {
        description: 'Task 4',
        completed: true,
        index: 4,
      },
      {
        description: 'Task 5',
        completed: true,
        index: 5,
      },
    ];
    // const newArr = completeToDo();
    const removers = [0, 2];
    const cleartasks = jest.fn((tasklist, toremove) => {
      toremove.forEach((element) => {
        tasklist = tasklist.filter((item) => item.index !== element);
      });
      return tasklist.length;
    });
    // const filteredArr = tasks.filter((tasks) => !tasks.completed);
    expect(cleartasks(tasks, removers)).toBe(4);
  });
  // Complete true or false
  // test(' Complete task true or false', () => {

  // });
});
