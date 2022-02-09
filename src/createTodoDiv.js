import askForTodoInput from "./createTodoObject"

// Will be called whenever the 'new todo' button is pressed, 
// it chain calls createTodoObject > askForTodoInput
const createTodoDiv = () =>{

    let dynamicElementsContainer = document.getElementById('dynamic-content')
    // Create container div(row), checkmark div (column), todo div (column) 
    const container = document.createElement('div')
    const checkmark = document.createElement('div')
    const todo = document.createElement('div')

    // Create header div (row) with 2 divs, title h1 and dueDate div
    // Create div for description and notes(?)
    const header = document.createElement('div')
    const title = document.createElement('div')
    const dueDate = document.createElement('div')
    const description = document.createElement('div')

    // Append container to todoElementsContainer, container div > checkmark div, todo div
    dynamicElementsContainer.appendChild(container)
    container.appendChild(checkmark)
    container.appendChild(todo)

    // Append to todo div > header div, description div 
    todo.appendChild(header)
    todo.appendChild(description)

    //Append to header div > title div and dueDate div
    header.appendChild(title)
    header.appendChild(dueDate)

    // Change div id/class 
    container.classList.add('todo-container')
    checkmark.classList.add('todo')
    checkmark.classList.add('checkmark')
    todo.classList.add('todo')
    todo.classList.add('body')
    
    header.classList.add('todo')
    header.classList.add('header')
    title.classList.add('todo')
    title.classList.add('title')
    dueDate.classList.add('due-date')
    
    description.classList.add('todo')
    description.classList.add('description')

    // Call for askForTodoInput and store the object returned
    const todoObject = askForTodoInput()

    // Change text content of divs depending on the property values from the object
    checkmark.textContent = 'X'
    title.textContent = todoObject.title
    dueDate.textContent = todoObject.dueDate
    description.textContent = todoObject.description

    // Change title bg depending on property value 'priority' 
    title.style.backgroundColor = checkTodoPriority(todoObject)

    // Return container to be appended in index.js
    return dynamicElementsContainer
}

export default createTodoDiv

function checkTodoPriority(todo){
    const PRIORITY_COLORS = {
        1: 'aquamarine',
        2: 'yellow',
        3: 'red'
    }
    return PRIORITY_COLORS[todo.priority]
}