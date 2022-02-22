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
        localStorage.setItem(projectObject.title,projectObject)        
    })
}

function addEventListenerCreateTodoFromProject (element,projectObject){
    element.addEventListener('click', () =>{
        const todo = askForTodoInput()
        projectObject._attachedProjectTodos.push(todo)
        todo.projectTitleItBelongs = projectObject.title
        saveObjectToLocalStorage(projectObject.title,projectObject)
        renderViewTodoFromProject(todo)
    })
}

function saveObjectToLocalStorage(object){
    let isObjectInLocalStorage = localStorage.getItem(object.title)
    localStorage.setItem(object.title, JSON.stringify(object))
}

function fetchObjecsFromLocalStorage(){
    let arrayOfKeys = Object.keys(localStorage)

    arrayOfKeys.forEach(key =>{
        console.log(key)
        let object = JSON.parse(localStorage.getItem(key))
        if(object.prototypeMadeUp === 'todo'){
            todosStorage.push(object)
            console.log(todosStorage)
        }else{
            projectsStorage.push(object)
            console.log(projectsStorage)

        }
    })
    
}

export {
    addEventListenerTodoAddToProject,
    addEventListenerTodoAddToProjectFromProject,
    addEventListenerCreateTodoFromProject,
    saveObjectToLocalStorage,
    fetchObjecsFromLocalStorage
}

const addTodoToProjectFromTodo = (todoObject) =>{

    const projectTitleToInsert = prompt('Insert the project title where this task should be added to ') 
    if(projectTitleToInsert === null) return 

    //Find if project exist, if it does, store it
    const projectToAddTodo = projectsStorage
        .find(project => project.title === projectTitleToInsert)

    if(projectToAddTodo){
        projectToAddTodo._attachedProjectTodos.push(todoObject)
        localStorage.setItem(projectTitleToInsert,projectToAddTodo)        
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

const updatePropertiesProjectOnLocalStorage = () => {

}