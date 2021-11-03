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
      //return
    });
    expect(deleteitem(0, tasks)).toBe(1);
  });
});