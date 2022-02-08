import createTodoDiv from "./createTodoDiv";

const contentReference = document.getElementById('content')

const todoDiv = createTodoDiv()

contentReference.appendChild(todoDiv)