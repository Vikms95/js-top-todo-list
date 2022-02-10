// This function is called whenever a todo is shown on display
function addEventListenerDeleteButton(element){
    // Create variable with reference to element with class checkmark

    // Add event listener when clicked
    element.addEventListener('click', (e) =>{
    // Call the function that removes todo from display (deleting child element)
        element.parentNode.parentNode.remove()
    // Call the function that removes todo from general todo array 
    //TODO Call the function that removes todo from the project's array it is attached
    })

}

export default addEventListenerDeleteButton

function deleteTodoStorage(e){

}