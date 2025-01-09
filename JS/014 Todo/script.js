let todos = []


document.getElementById('todoForm').addEventListener("submit",(e) =>{
    e.preventDefault()
    let userTodo = document.getElementById("userInput").value
    todos.push(userTodo)

    console.log(todos)
});
