import {askForProjectInput} from '../logic/createProjectObject'
import renderViewTodoFromProject from './renderViewTodoFromProject'
import { addEventListenerProjectDeleteButton } from '../logic/deleteElements'
import { addEventListenerTodoAddToProjectFromProject,addEventListenerCreateTodoFromProject } from '../logic/insertElements'
import { addEventListenerToogleDefaultStateButton } from '../logic/modifyElements'

function renderViewProject(projectAsParameter){
    let dynamicElementsContainer = document.getElementById('dynamic-content')
    
    // Call for askForProjectInput and store the object returned
    const projectObject =  projectAsParameter || askForProjectInput()
    if(projectObject === null || projectObject === undefined) return null

    // Create container div(row), checkmark div (column), project div (column)
    const container = document.createElement('div')
    const buttons = document.createElement('div')
    const createTodoFromProject = document.createElement('button')
    const addTodoToProjectButton = document.createElement('button')
    const toggleDefaultStateButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    const project = document.createElement('div')

    // Create divs within project div
    const header = document.createElement('div')
    const title = document.createElement('div')
    const todoListContainer = document.createElement('div')
    const todoList = document.createElement('ol') // Will try using <ol> and <li>

    // Append container div > checkmark div, todo div
    container.appendChild(project)
    project.appendChild(header)
    header.appendChild(title)
    header.appendChild(buttons)
    project.appendChild(todoListContainer)
    todoListContainer.appendChild(todoList)

    // Appends buttons to buttons container
    buttons.appendChild(createTodoFromProject)
    buttons.appendChild(addTodoToProjectButton)
    buttons.appendChild(toggleDefaultStateButton)
    buttons.appendChild(deleteButton)

    // Appends todos inside the projects ordered list
    if(projectObject._attachedProjectTodos.length > 0){
        projectObject._attachedProjectTodos.forEach(todo => {
            if(!(Object.keys(todo).length === 0)){
                todoList.appendChild(renderViewTodoFromProject(todo))
            }
        })
    }

    // Change div id/class
    container.classList.add('project-container')
    container.classList.add('faded-out')
    buttons.classList.add('buttons')
    buttons.classList.add('right')
    project.classList.add('project')
    header.classList.add('project-header')
    title.classList.add('project')
    title.classList.add('title')
    todoListContainer.classList.add('todo-list-container')
    todoList.classList.add('todo-list')

    // Add fading animation on project creation
    requestAnimationFrame(() => {
        container.classList.remove('faded-out')
    })
  

    // Change text content of divs depending on the property values from the object
    createTodoFromProject.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>'
    addTodoToProjectButton.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>'
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can fa-lg">'
    toggleDefaultStateButton.innerHTML = '<i class="fa-solid fa-font-awesome"></i>'
    title.textContent = projectObject.title

    // Add event listeners to buttons within the todo di
    addEventListenerCreateTodoFromProject(createTodoFromProject,projectObject)
    addEventListenerTodoAddToProjectFromProject(addTodoToProjectButton,projectObject)
    addEventListenerToogleDefaultStateButton(toggleDefaultStateButton,projectObject)  
    addEventListenerProjectDeleteButton(deleteButton, projectObject)

    // Container is appended last to avoid returning an empty container if the object is null..
    dynamicElementsContainer.appendChild(container)

    // Return container to be appended in index.js
    return dynamicElementsContainer
}

export {renderViewProject}
