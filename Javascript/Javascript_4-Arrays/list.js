var todos = [];

var listTodos = function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

var addTodo = function addTodo(){
    var newTodo = prompt("New Todo: ");
    todos.push(newTodo);
}

var deleteTodo = function deleteTodo(){
    var index = prompt("Enter the index of item for deletion: ");
    todos.splice(index,1);
    console.log("Deleted todo.")
}

window.setTimeout(function() {

    var input = prompt("Type your command: ");

    while(input != "quit"){
        if(input === "list"){
            listTodos();
        } else if(input === "new"){
            addTodo();
        } else if(input === "delete"){
            deleteTodo();
        }
        var input = prompt("Type your command: ");
    }

    console.log("You quit.");

}, 500);

