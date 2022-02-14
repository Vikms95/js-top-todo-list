import { todosStorage, projectsStorage } from './objectsStorage'

// This function is called whenever a todo is shown on display
function addEventListenerTodoDeleteButton(element, todoObject) {
    element.addEventListener('click', () => {
        //TODO Refactor and use array method
        // Find which project it belong to by checking projectTitleItBelongs, and stores the object info
        const projectToRemoveTodo = projectsStorage
            .find(project => project.title === todoObject.projectTitleItBelongs) 

        //TODO ON WORK
        //Remove todo from project's array
        projectToRemoveTodo._attachedProjectTodos
            .map(todo => {
                if(todo._id === todoObject._id){
                    todo = ''
                }
            })

        console.log(projectToRemoveTodo._attachedProjectTodos)

    
        //TODO Find todo id inside todo's array


        // let todoToDelete = projectItBelongs._attachedProjectTodos
        //     .find(todo => todo._id === todoObject._id)
        
        // Delete todo's projectItBelongsProperty

        

        // for (let j = 0; j < projectsStorage._attachedProjectTodos.length; j++) {
            
        //     if(projectsStorage._attachedProjectTodos[j]._id === todoObject._id){
                
        //         // If found, make that index = ""
        //         projectsStorage._attachedProjectTodos[j] = ''
        //         todoObject.projectTitleItBelongs = ''
        //     }
        // }

        // Call the function that removes todo from display (deleting child element)
        element.parentNode.parentNode.remove()
    
        // Call the function that removes todo from general todo array
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

function deleteElementFromStorageArray(object, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]._id === object._id) {
            array[i] = ''
        }
    }
}

