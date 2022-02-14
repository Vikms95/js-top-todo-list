import { todosStorage, projectsStorage } from './objectsStorage'

// This function is called whenever a todo is shown on display
function addEventListenerTodoDeleteButton(element, todoObject) {
    element.addEventListener('click', () => {
        // Call the function that removes todo from display (deleting child element)
        element.parentNode.parentNode.remove()
    
        // Call the function that removes todo from general todo array
        deleteElementFromStorageArray(todoObject, todosStorage)

        // Find which project it belong to by checking projectTitleItBelongs
        for (let i = 0; i < projectsStorage.length; i++) {
            //TODO Use array method instead of nested for loop
            if (projectsStorage[i].title === todoObject.projectTitleItBelongs) {
                // Find todo id inside project's array
                for (let j = 0; j < projectsStorage._attachedProjectTodos.length; j++) {
                    if(projectsStorage._attachedProjectTodos[j]._id === todoObject._id){
            
                        // If found, make that index = ""
                        projectsStorage._attachedProjectTodos[j] = ''
                        todoObject.projectTitleItBelongs = ''
                    }
                }
            }
        }
    })
}

function addEventListenerProjectDeleteButton(element, projectObject) {
    element.addEventListener('click', () => {
        for (let i = 0; i < projectObject._attachedProjectTodos.length; i++) {
            projectObject._attachedProjectTodos[i].projectTitleItBelongs = ''
            console.log(projectObject._attachedProjectTodos)
        }
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
