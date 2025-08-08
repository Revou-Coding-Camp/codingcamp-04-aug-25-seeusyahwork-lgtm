
// 
let todoList = [];

function validateForm(){
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;

    // cek jika inputan kosong    
    if(todoInput === "" || dateInput === ""){
        alert('harap masukan data.');
    }   
    else{
        // masukan data kedalam list
        addTodo(todoInput, dateInput);
        // hapus semua data masukan
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

function addTodo(todo, date){
    // membuat item list
    const todoItem = {
        task: todo,
        date: date
    };

    // masukan data list ke array list
    todoList.push(todoItem);
    //tampilan update list
    displayTodos();
}_

function displayTodos(){
    // ambil data list element dari Dom
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML='';
    // hapus data yang di tampilkan

    // Pengulangan  list dalam array and create list items
     todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<tr><td>${item.task}</td> <td>(${item.date})</td><td> </td></tr>`;
    });
}




function clearTodos() {
    // Clear the todoList array
    todoList = [];
    // Clear the displayed todo list
    displayTodos();
}