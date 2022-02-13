import { todosStorage, projectsStorage } from "./objectsStorage";

function addEventListenerTodoAddToProject (element,todoObject){
    // Add event listener to add button
    element.addEventListener('click', () =>{      
      //TODO Refactor and use array methods
      // Pop alert where the user will introduce the project title
      const projectTitleToInsert = prompt("Insert the project title where this task should be added to ") 
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
        alert("Project does not exist. Make sure the title is well written or create the project.")
        return
    })
}

function addEventListenerTodoAddToProjectFromProject (element,projectObject){
  // Add event listener to element (insert button)
  element.addEventListener('click', () =>{
    //TODO Refactor and use array methods
    // Alert where user will input the todo title to append to this project
    console.log('works') 
    const todoTitleToInsert = prompt("Insert the todo title that you want to add to this project")
    console.log('clicked!') 
    if(todoTitleToInsert === null){return}
    console.log('not null!') 

    // Iterate todosStorage looking if the todo exists
    for (let i = 0; i < todosStorage.length; i++) {
      console.log('iterating to check if todo exists in todosStorage!')
      // If todo exists,check if the todo title is already in the project's array
      console.log(todosStorage[i].title)
      if(todoTitleToInsert === todosStorage[i].title){
        console.log('title exists in todosStorage ' + todoTitleToInsert)
        for (let j = 0; j < projectObject._attachedProjectTodos.length; j++) {
          console.log('iterating to check if todo already in project!')
          if(todoTitleToInsert === projectObject._attachedProjectTodos[j].title){
          
            // If it exists, send an alert saying it already exists and quit
            alert('Todo with the same title is already assigned to this project!')
            return
          }
        }
        // If not in the array add todo object to the project's array of todos
        projectObject._attachedProjectTodos.push(todosStorage[i])
        // Change the todo's projectTitleItBelongs property to the project name
        todosStorage[i].projectTitleItBelongs = projectObject.title

      }else{
        alert('Task does not exist. Make sure the title is well written or create the task')
        return
      }
    }
    console.log('todos in the project '+projectObject._attachedProjectTodos) 
  })
}
export {addEventListenerTodoAddToProject,addEventListenerTodoAddToProjectFromProject}