import { todosStorage, projectsStorage } from "./objectsStorage";

function addEventListenerTodoAddToProject (element,todoObject){
    // Add event listener to add button
    element.addEventListener('click', () =>{      
      // Pop alert where the user will introduce the project title
      const projectTitleToInsert = prompt("Insert the project title where this task should be added to ") 
      if(projectTitleToInsert === null){return}

      // Iterate projectsStorage looking for a project with the title introduced
      // and check if project title exist

      for (let i = 0; i < projectsStorage.length; i++) {
        if(projectsStorage[i].title === projectTitleToInsert){
          // If project title exist, introduce todo object to the project's array of todos
          projectsStorage[i]._attachedProjectTodos.push(todoObject)
          console.log(projectsStorage[i]._attachedProjectTodos)
          return
        }  
      }
        // If loop finished without a found candidate,
        //  prompt that the project does not exist and to check the spelling
        alert("Project does not exist. Make sure the title is well written or create the project.")
    })
}

export {addEventListenerTodoAddToProject}