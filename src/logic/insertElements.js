import { todosStorage, projectsStorage } from './objectsStorage'

function addEventListenerTodoAddToProject (element,todoObject){
    // Add event listener to add button
    element.addEventListener('click', () =>{      
        //TODO Refactor and use array methods
        // Pop alert where the user will introduce the project title
        const projectTitleToInsert = prompt('Insert the project title where this task should be added to ') 
        if(projectTitleToInsert === null){return}

        // Iterate projectsStorageand check if project title exist
        for (let i = 0; i < projectsStorage.length; i++) {
            if(projectsStorage[i].title.toLowerCase() === projectTitleToInsert.toLowerCase()){
                // If project title exist, add todo object to the project's array of todos
                projectsStorage[i]._attachedProjectTodos.push(todoObject)
          
                // Change the todo's projectTitleItBelongs property to the project name
                todoObject.projectTitleItBelongs = projectsStorage[i].title
                return
            }  
        }
        // If loop finished without a found candidate,
        //  prompt that the project does not exist and to check the spelling
        alert('Project does not exist. Make sure the title is well written or create the project.')
        return
    })
}

function addEventListenerTodoAddToProjectFromProject (element,projectObject){
    element.addEventListener('click', () =>{
        //TODO Refactor and use array methods
        const todoTitleToInsert = prompt('Insert the todo title that you want to add to this project')
        if(todoTitleToInsert === null){return}
 
        for (let i = 0; i < todosStorage.length; i++) {
            if(todoTitleToInsert === todosStorage[i].title){
                for (let j = 0; j < projectObject._attachedProjectTodos.length; j++) {
                    if(todoTitleToInsert === projectObject._attachedProjectTodos[j].title){
                        alert('Todo with the same title is already assigned to this project!')
                        return
                    }
                }
                projectObject._attachedProjectTodos.push(todosStorage[i])
                todosStorage[i].projectTitleItBelongs = projectObject.title
                return
            
            }else{
                alert('Task does not exist. Make sure the title is well written or create the task')
                return
            }
        }
    })
}
export {addEventListenerTodoAddToProject,addEventListenerTodoAddToProjectFromProject}