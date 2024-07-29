const todoList = [{
  name:'make dinner',
  dueDate: '2023-10-20'}, {
  name: 'wash dishes',
  dueDate: '2023-09-11'}, {
  name:'clean house',
  dueDate:'2023-11-11'}, ];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (var i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
    //const name = todoObject.name;
    //const {name} = todoObject;
    //const dueDate =todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
    <p>
      ${name} ${dueDate} 
      <button onclick="
        todoList.splice(${i}, i);
        renderTodoList();
      ">Delete</button>
    </p>
    `;

    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 //console.log(name);

 todoList.push(name);
 console.log(todoList);

 inputElement.value = '';

 renderTodoList();
}