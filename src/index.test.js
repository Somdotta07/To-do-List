decribe('DOM manipulation', () => {
  test('Test for output HTML', () => {
    let task = [];

    const getList = () => {
      if (getFromLocalStorage('task') == null) {
        addTOLocalStorage('task', task);
      }
      task = getFromLocalStorage('task');
      task.sort((a, b) => a.index - b.index);

      const itemContainer = document.querySelector('ul');
      itemContainer.innerHTML = '';

      for (let i = 0; i < task.length; i += 1) {
        // List
        const list = document.createElement('li');
        itemContainer.appendChild(list);

        // Inside List create a div
        const listContainer = document.createElement('div');
        listContainer.classList.add('list-con');
        list.appendChild(listContainer);

        // Input checkBox
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        listContainer.appendChild(checkBox);
        // Text item
        const description = document.createElement('p');
        description.textContent = task[i].description;
        listContainer.appendChild(description);
        // input for paragraph
        const editPara = document.createElement('input');
        editPara.value = task[i].description;
        editPara.classList.add('none');
        editPara.setAttribute('type', 'text');
        listContainer.appendChild(editPara);
        if (task[i].completed) {
          description.classList.add('linethrough');
        }
        // Icon
        const verIcon = document.createElement('i');
        verIcon.classList.add('fas');
        verIcon.classList.add('fa-ellipsis-v');
        // verIcon.addEventListener('click', (e) => {
        //   removeLine(e);
        // });
        list.appendChild(verIcon);

        const trash = document.createElement('i');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');
        trash.classList.add('none');
        // trash.addEventListener('click', () => {
        //   deleteItem(i);
        //   getList();
        // });
        list.appendChild(trash);
      }
    };
  });
});
let task = [];

const getList = () => {
  if (getFromLocalStorage('task') == null) {
    addTOLocalStorage('task', task);
  }
  task = getFromLocalStorage('task');
  task.sort((a, b) => a.index - b.index);

  const itemContainer = document.querySelector('ul');
  itemContainer.innerHTML = '';

  for (let i = 0; i < task.length; i += 1) {
    // List
    const list = document.createElement('li');
    itemContainer.appendChild(list);

    // Inside List create a div
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-con');
    list.appendChild(listContainer);

    // Input checkBox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    // checkBox.checked = task[i].completed;
    // checkBox.addEventListener('change', (event) => {
    //   const text = event.currentTarget.nextElementSibling;
    //   interactive(i, event.target.checked);
    //   if (event.target.checked) {
    //     text.classList.add('linethrough');
    //   } else {
    //     text.classList.remove('linethrough');
    //   }
    // });
    listContainer.appendChild(checkBox);
    // Text item
    const description = document.createElement('p');
    description.textContent = task[i].description;
    listContainer.appendChild(description);
    // input for paragraph
    const editPara = document.createElement('input');
    editPara.value = task[i].description;
    editPara.classList.add('none');
    editPara.setAttribute('type', 'text');
    // editPara.addEventListener('blur', (e) => {
    //   editText(e.currentTarget.value, i);
    // });
    listContainer.appendChild(editPara);
    if (task[i].completed) {
      description.classList.add('linethrough');
    }
    // Icon
    const verIcon = document.createElement('i');
    verIcon.classList.add('fas');
    verIcon.classList.add('fa-ellipsis-v');
    verIcon.addEventListener('click', (e) => {
      removeLine(e);
    });
    list.appendChild(verIcon);

    const trash = document.createElement('i');
    trash.classList.add('fas');
    trash.classList.add('fa-trash-alt');
    trash.classList.add('none');
    trash.addEventListener('click', () => {
      deleteItem(i);
      getList();
    });
    list.appendChild(trash);
  }
};