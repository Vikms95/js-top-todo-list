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

    notAttachedTodosHeader.classList.add('home-header')
    notAttachedTodosHeader.classList.add('not-attached')
    projectsWithTodosHeader.classList.add('home-header')
    emptyProjectsHeader.classList.add('home-header')
    emptyProjectsHeader.classList.add('empty-projects')

    notAttachedTodosHeader.textContent = 'Unnattached task'
    projectsWithTodosHeader.textContent = 'Projects'
    emptyProjectsHeader.textContent = 'Empty projects'

    dynamicElementsContainer.appendChild(notAttachedTodosHeader)
    
    todosStorage.forEach(todo =>{
        console.log(todo.projectTitleItBelongs)
        if(todo && (!(todo.projectTitleItBelongs))){
            renderViewTodo(todo)
        }
    })

    dynamicElementsContainer.appendChild(projectsWithTodosHeader)

    projectsStorage.forEach(project =>{
        // if the project is not an empty string
        if(project){ 
            // if the project todo's list has any index which is not an empty object
            const isProjectWithTodos = project._attachedProjectTodos
                .some(project => Object.keys(project).length > 0)

            if((project._attachedProjectTodos.length > 0 && isProjectWithTodos)  ){
                renderViewProject(project)
            }
        }
    })

    dynamicElementsContainer.appendChild(emptyProjectsHeader)

    projectsStorage.forEach(project =>{
        if(project){
            const isProjectWithNoTodos = project._attachedProjectTodos
                .every(project => Object.keys(project).length === 0)

            if((isProjectWithNoTodos))
                renderViewProject(project)
        }
    })
}

export {renderViewHome}