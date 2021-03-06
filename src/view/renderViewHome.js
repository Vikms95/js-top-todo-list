import {renderViewTodo} from './renderViewTodo'
import { renderViewProject } from './renderViewProject'
import {todosStorage, projectsStorage } from '../logic/objectsStorage'

function renderViewHome () {
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }

    const notAttachedTodosHeader = document.createElement('h3')
    const projectsWithTodosHeader = document.createElement('h3')
    const emptyProjectsHeader = document.createElement('h3')
    const checkmarkedTodosHeader = document.createElement('h3')

    notAttachedTodosHeader.classList.add('home-header')
    projectsWithTodosHeader.classList.add('home-header')
    emptyProjectsHeader.classList.add('home-header')
    checkmarkedTodosHeader.classList.add('home-header')

    notAttachedTodosHeader.textContent = 'Unnattached task'
    projectsWithTodosHeader.textContent = 'Projects'
    emptyProjectsHeader.textContent = 'Empty projects'
    checkmarkedTodosHeader.textContent = 'Archived task'

    dynamicElementsContainer.appendChild(notAttachedTodosHeader)
    
    todosStorage.forEach(todo =>{

        if(todo && (!(todo.projectTitleItBelongs)) && (!(todo.checkmark))){
            renderViewTodo(todo)
        }
    })

    dynamicElementsContainer.appendChild(projectsWithTodosHeader)

    projectsStorage.forEach(project =>{
        // if the project is not an empty string
        if(project && project._attachedProjectTodos){ 
            // if the project todo's list has any index which is not an empty object
            const isProjectWithTodos = project._attachedProjectTodos
                .some(todo => Object.keys(todo).length > 0)

            if((project._attachedProjectTodos.length > 0 && isProjectWithTodos)  ){
                renderViewProject(project)
            }
        }
    })

    dynamicElementsContainer.appendChild(emptyProjectsHeader)

    projectsStorage.forEach(project =>{
        if(project && project._attachedProjectTodos){
            const isProjectWithNoTodos = project._attachedProjectTodos
                .every(todo => Object.keys(todo).length === 0)

            if((isProjectWithNoTodos))
                renderViewProject(project)
        }
    })

    dynamicElementsContainer.appendChild(checkmarkedTodosHeader)

    todosStorage.forEach(todo => {
        if(todo){
            if(todo.checkmark)
                renderViewTodo(todo)
        }
    })
}

export {renderViewHome}