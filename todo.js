const initialTodosList = [
    { id: 1, title: 'Book the ticket for today evening', completed: false },
    { id: 2, title: 'Rent the movie for tomorrow movie night', completed: false },
    { id: 3, title: 'Confirm the slot for the yoga session tomorrow morning', completed: false },
    { id: 4, title: 'Drop the parcel at Bloomingdale', completed: false },
    { id: 5, title: 'Order fruits on Big Basket', completed: false },
    { id: 6, title: 'Fix the production issue', completed: false },
    { id: 7, title: 'Confirm my slot for Saturday Night', completed: false },
    { id: 8, title: 'Get essentials for Sunday car wash', completed: false },
  ];
  
  let todosCardList = [...initialTodosList];
  let newTodo = '';
  
  // Render the todo list
  function render() {
    const listElement = document.getElementById('todo-list');
    listElement.innerHTML = '';
  
    todosCardList.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex flex-row justify-content-between align-items-center';
  
      const textCheckboxContainer = document.createElement('div');
      textCheckboxContainer.className = 'text-checkbox-container d-flex align-items-center';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'input-checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('click', () => {
        toggleComplete(todo.id);
        render();
      });
  
      const todoText = document.createElement('p');
      todoText.className = todo.completed ? 'todo-checked mb-0' : 'todo-heading mb-0';
      todoText.innerText = todo.title;
  
      textCheckboxContainer.appendChild(checkbox);
      textCheckboxContainer.appendChild(todoText);
      li.appendChild(textCheckboxContainer);
  
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container d-flex';
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'button button-delete';
      deleteButton.innerText = 'Delete';
      deleteButton.onclick = () => {
        deleteItem(todo.id);
        render();
      };
  
      const editButton = document.createElement('button');
      editButton.className = 'button button-edit';
      editButton.innerText = 'Edit';
      editButton.onclick = () => {
        const updatedTitle = prompt('Edit todo:', todo.title);
        if (updatedTitle) {
          updateTodo(todo.id, updatedTitle);
          render();
        }
      };
  
      buttonContainer.appendChild(deleteButton);
      buttonContainer.appendChild(editButton);
      li.appendChild(buttonContainer);
  
      listElement.appendChild(li);
    });
  }
  
  // Add new todo
  function onSubmitAddTask() {
    if (newTodo.trim() === '') return;
  
    const newTodoItem = {
      id: todosCardList.length + 1,
      title: newTodo,
      completed: false,
    };
  
    todosCardList.push(newTodoItem);
    newTodo = '';
    render();
  }
  
  // Delete a todo
  function deleteItem(id) {
    todosCardList = todosCardList.filter(todo => todo.id !== id);
  }
  
  // Toggle completion
  function toggleComplete(id) {
    todosCardList = todosCardList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  
  // Update todo
  function updateTodo(id, updatedTitle) {
    todosCardList = todosCardList.map(todo =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
  }
  
  // Initial render and setup
  document.addEventListener('DOMContentLoaded', () => {
    render();
  
    document.getElementById('add-button').addEventListener('click', () => {
      newTodo = document.getElementById('todo-input').value;
      onSubmitAddTask();
      document.getElementById('todo-input').value = '';
    });
  });
  
  
  
  
  
  