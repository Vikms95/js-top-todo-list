import todosStorage from './objectsStorage'

// This function is called whenever a todo is shown on display
function addEventListenerDeleteButton(element,todoObject){
    // Create variable with reference to element with class checkmark

    // Add event listener when clicked
    element.addEventListener('click', () =>{
    // Call the function that removes todo from display (deleting child element)
    element.parentNode.parentNode.remove()
    // Call the function that removes todo from general todo array 
    deleteTodoFromStorage(todoObject)
    //TODO Call the function that removes todo from the project's array it is attached
    })

}

export default addEventListenerDeleteButton

function deleteTodoFromStorage(todoObject){
    for (let i = 0; i < todosStorage.length; i++) {
        if(todosStorage[i]._id == todoObject._id){
            todosStorage[i] = ''
        }
    }
}