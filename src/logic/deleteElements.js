import { todosStorage, projectsStorage } from './objectsStorage'
import { saveObjectToLocalStorage } from './insertElements'

// This function is called whenever a todo is shown on display
function addEventListenerTodoDeleteButton(element, todoObject) {
    element.addEventListener('click', () => {
        if(todoObject.projectTitleItBelongs){
            deleteTodoFromProjectArray(todoObject)

            // Remove the property that attaches the todo to the project
            todoObject.projectTitleItBelongs = '' 
        }
          
        removeObjectFromLocalStorage(todoObject)
        removeObjectFromStorageArray(todoObject, todosStorage)
        // Call the function that removes todo from display (deleting child element)
        element.parentNode.parentNode.remove()

        console.log(todosStorage)
        console.log(projectsStorage)
    })
}

function addEventListenerProjectDeleteButton(element, projectObject) {
    element.addEventListener('click', () => {
        

        // Let all todos inside the project know that they do not belong to any project anymore

        projectObject._attachedProjectTodos.forEach(todo=>{
            todo.projectTitleItBelongs = ''
        })
        

        // Update all todos linked to that project on localStorage
        projectObject._attachedProjectTodos.forEach(todo =>{
            saveObjectToLocalStorage(todo)
        })

        // Call the function that removes project from general project array
        removeObjectFromStorageArray(projectObject, projectsStorage)
        removeObjectFromLocalStorage(projectObject)
            
        // Call the function that removes project from display (deleting child element)
        element.parentNode.parentNode.parentNode.parentNode.remove()
        
        console.log(todosStorage)
        console.log(projectsStorage)
    })
}

function addEventListenerCheckmarkButton(element,todoObject){
    element.addEventListener('click', () => {
        if(todoObject.checkmark === false){
            todoObject.checkmark = true
        }else{
            todoObject.checkmark = false
        }
    })
}

function removeObjectFromLocalStorage (object) {
    console.log(object.title)
    localStorage.removeItem(object.title)
}

export {
    addEventListenerTodoDeleteButton,
    addEventListenerProjectDeleteButton,
    addEventListenerCheckmarkButton
}

const removeObjectFromStorageArray = (object, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]._id === object._id) {
            array[i] = ''
        }
    }
}

const deleteTodoFromProjectArray = (todoObject) =>{
    // Find which project it belong to by checking projectTitleItBelongs, and stores the object info
    const projectToRemoveTodo = projectsStorage
        .find(project => project.title === todoObject.projectTitleItBelongs)
    
    //Look for the todo in the project's array change it's index into an empty string
    for (let i = 0; i < projectToRemoveTodo._attachedProjectTodos.length; i++) {
        if(projectToRemoveTodo._attachedProjectTodos[i]._id === todoObject._id){
            projectToRemoveTodo._attachedProjectTodos[i] = {}
            saveObjectToLocalStorage(projectToRemoveTodo)
        }
    }
}



