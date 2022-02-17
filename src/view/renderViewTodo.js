import { askForTodoInput } from '../logic/createTodoObject'
import { addEventListenerTodoDeleteButton } from '../logic/deleteElements'
import { addEventListenerTodoAddToProject } from '../logic/insertElements'

// Will be called whenever the 'new todo' button is pressed,
// it chain calls createTodoObject > askForTodoInput
const renderViewTodo = () => {
    let dynamicElementsContainer = document.getElementById('dynamic-content')
    // Create container div(row), checkmark div (column), todo div (column)
    const container = document.createElement('div')
    const checkmark = document.createElement('div')
    const checkmarkButton = document.createElement('button')
    const todo = document.createElement('div')
    const buttons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const addTodoToProjectButton = document.createElement('button')

    // Create header div (row) with 2 divs, title h1 and dueDate div
    // Create div for description and notes(?)
    const header = document.createElement('div')
    const title = document.createElement('div')
    const dueDate = document.createElement('div')
    const description = document.createElement('div')

    // Append container to todoElementsContainer, container div > checkmark div, todo div
    container.appendChild(checkmark)
    container.appendChild(todo)
    container.appendChild(buttons)
    checkmark.appendChild(checkmarkButton)


    // Appends buttons to buttons container
    buttons.appendChild(addTodoToProjectButton)
    buttons.appendChild(deleteButton)

    // Append to todo div > header div, description div
    todo.appendChild(title)
    todo.appendChild(dueDate)
    todo.appendChild(description)


    // Change div id/class
    container.classList.add('todo-container')
    container.classList.add('faded-out')

    checkmark.classList.add('buttons')
    checkmark.classList.add('checkmark')
    buttons.classList.add('todo')
    buttons.classList.add('buttons')
    buttons.classList.add('right')
    todo.classList.add('todo')
    todo.classList.add('body')

    title.classList.add('todo')
    title.classList.add('title')
    dueDate.classList.add('due-date')

    description.classList.add('todo')
    description.classList.add('description')

    // Add fading animation on todo creation
    requestAnimationFrame(() => {
        container.classList.remove('faded-out')
    })
  

    // Call for askForTodoInput and store the object returned
    const todoObject = askForTodoInput()
    if(todoObject === null) return null

    // Change text content of divs depending on the property values from the object
    checkmarkButton.innerHTML = '<i class="fa-solid fa-check fa-lg"></i>'
    title.textContent = todoObject.title
    dueDate.textContent = todoObject.dueDate
    description.textContent = todoObject.description
    addTodoToProjectButton.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>'
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can fa-lg">'

    // Change title bg depending on property value 'priority'
    dueDate.style.color = checkTodoPriority(todoObject)

    // Add event listeners to buttons within the todo div
    addEventListenerTodoDeleteButton(deleteButton, todoObject)
    addEventListenerTodoAddToProject(addTodoToProjectButton,todoObject)

    // Append container last to avoid empty container created
    dynamicElementsContainer.appendChild(container)

    // Return container to be appended in index.js
    return dynamicElementsContainer
}

export default renderViewTodo

function checkTodoPriority(todo) {
    const PRIORITY_COLORS = {
        1: 'darkblue',
        2: 'darkorange',
        3: 'crimson',
    }
    return PRIORITY_COLORS[todo.priority]
}
