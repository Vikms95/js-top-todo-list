import { todosStorage, projectsStorage } from './objectsStorage'
import renderViewTodoFromProject from '../view/renderViewTodoFromProject'
import { askForTodoInput } from './createTodoObject'

function addEventListenerTodoAddToProject (element,todoObject){
    element.addEventListener('click', () =>{      
        if(!(todoObject.projectTitleItBelongs)){
            addTodoToProjectFromTodo(todoObject)
        }else{
            alert('Task already assigned to a project.')
            return
        }
    })
}

function addEventListenerTodoAddToProjectFromProject (element,projectObject){
    element.addEventListener('click', () =>{
        const todoTitleToInsert = prompt('Insert the todo title that you want to add to this project')
        if(todoTitleToInsert === null){return}
        addTodoToProjectFromProject(projectObject,todoTitleToInsert)
    })
}

function addEventListenerCreateTodoFromProject (element,projectObject){
    element.addEventListener('click', () =>{
        const todo = askForTodoInput()
        projectObject._attachedProjectTodos.push(todo)
        renderViewTodoFromProject(todo)
    })
}

export {addEventListenerTodoAddToProject,addEventListenerTodoAddToProjectFromProject,addEventListenerCreateTodoFromProject}

const addTodoToProjectFromTodo = (todoObject) =>{

    const projectTitleToInsert = prompt('Insert the project title where this task should be added to ') 
    if(projectTitleToInsert === null) return 

    //Find if project exist, if it does, store it
    const projectToAddTodo = projectsStorage
        .find(project => project.title === projectTitleToInsert)

    if(projectToAddTodo){
        projectToAddTodo._attachedProjectTodos.push(todoObject)
        todoObject.projectTitleItBelongs = projectTitleToInsert
    }else{
        alert('Project does not exist. Make sure the title is well written or create the project.')
        return 
    }
}

const addTodoToProjectFromProject = (projectObject,todoTitleToInsert) =>{
    const todoToAddProject = todosStorage
        .find(todo => todo.title === todoTitleToInsert)

    if(todoToAddProject && (!(todoToAddProject.projectTitleItBelongs))){
        projectObject._attachedProjectTodos.push(todoToAddProject)
        todoToAddProject.projectTitleItBelongs = projectObject.title
    }else{
        alert('Task already assigned to a project or does not exist.')
        return
    }
}