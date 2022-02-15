import { todosStorage, projectsStorage } from './objectsStorage'

// This function is called whenever a todo is shown on display
function addEventListenerTodoDeleteButton(element, todoObject) {
    element.addEventListener('click', () => {

        deleteTodoFromProjectArray(todoObject)

        // Remove the property that attaches the todo to the project
        todoObject.projectTitleItBelongs = '' 

        // Call the function that removes todo from display (deleting child element)
        element.parentNode.parentNode.remove()
    
        deleteElementFromStorageArray(todoObject, todosStorage)
        
    })
}

function addEventListenerProjectDeleteButton(element, projectObject) {
    element.addEventListener('click', () => {
        
        // Let todos know that they do not belong to any project anymore
        projectObject._attachedProjectTodos = projectObject._attachedProjectTodos
            .map(todo => todo.projectTitleItBelongs = '')

        // Call the function that removes project from display (deleting child element)
        element.parentNode.parentNode.remove()

        // Call the function that removes project from general project array
        deleteElementFromStorageArray(projectObject, projectsStorage)
    })
}

export {
    addEventListenerTodoDeleteButton,
    addEventListenerProjectDeleteButton,
}

const deleteElementFromStorageArray = (object, array) => {
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
            projectToRemoveTodo._attachedProjectTodos[i] = ''
        }
    }

}



