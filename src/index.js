import createTodoDiv from "./createTodoDiv";
import todosStorage from "./objectsStorage";

const contentReference = document.getElementById('content')

const todoDiv = createTodoDiv()

contentReference.appendChild(todoDiv)