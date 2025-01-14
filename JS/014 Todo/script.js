let todos = []


document.getElementById('todoForm').addEventListener("submit",(e) =>{
    e.preventDefault()
    let userTodo = document.getElementById("userInput").value
    todos.push(userTodo)
    document.getElementById("list").innerHTML = ""
    showTodos(todos)
    console.log(todos)
});


function showTodos(todos) {

    todos.forEach((todo)=>{
        document.getElementById("list").innerHTML += `<li>${todo}</li>`
    })
    
}
