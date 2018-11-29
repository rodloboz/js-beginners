const renderTodo = (todo, index) => {
  const todoHTML = `<li id="item-${index}"><span class="label">${todo}</span><span class="actions"><button type="button" aria-label="Delete" title="Delete" class="btn-picto"><i class="fas fa-trash" id="${index}"></i></button></span></li>`;
  const todosList = document.querySelector('#todos ul');

  todosList.insertAdjacentHTML('afterbegin', todoHTML);
};

const deleteTodo = (index) => {
  todos.splice(index);
  const item = document.getElementById(`item-${index}`);
  item.remove();
};

const addDeleteEvent = (element) => {
  const deleteButton = element.querySelector('button');
  deleteButton.addEventListener('click', (event) => deleteTodo(event.target.id));
};

const todos = ['Code a todo app'];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log('App running...')

    // TODO: Render items in todos array

    // TODO: Add new todos with the form

    // TODO: Delete todos
});
