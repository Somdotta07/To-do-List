describe('DOM manipulation', () => {
  test('Test for output HTML', () => {
    const task = [{
      description: 'Task1',
      completed: false,
      index: 1,
    }];
    const shouldreturn = '<ul><li><input type="checkbox"><p>Task1</p></li></ul>';
    const htmlmock = '<ul></ul>';
    const getList = (htmlmock, task) => {
      let storage = [];
      task.sort((a, b) => a.index - b.index);

      for (let i = 0; i < task.length; i += 1) {
        const adderstring = `${'<li><input type="checkbox"><p>'}${task[i].description}</p></li>`;
        storage.push(adderstring);
      }
      storage = `<ul>${storage}</ul>`;
      return storage;
    };
    expect(getList(htmlmock, task)).toBe(shouldreturn);
  });
});
