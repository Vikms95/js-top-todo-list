import { todosStorage, projectsStorage } from './objectsStorage'

function addEventListenerTodoAddToProject (element,todoObject){
    element.addEventListener('click', () =>{      
        if(!(todoObject.projectTitleItBelongs)){
            addTodoToProject(todoObject)
        }else{
            alert('Task already assigned to a project.')
            return
        }
    })
}

function addEventListenerTodoAddToProjectFromProject (element,projectObject){
    element.addEventListener('click', () =>{
        //TODO Refactor and use array methods
        const todoTitleToInsert = prompt('Insert the todo title that you want to add to this project')
        if(todoTitleToInsert === null){return}
 
        for (let i = 0; i < todosStorage.length; i++) {
            if(todoTitleToInsert === todosStorage[i].title){
                if(todosStorage[i].projectTitleItBelongs === ''){
                    projectObject._attachedProjectTodos.push(todosStorage[i])
                    todosStorage[i].projectTitleItBelongs = projectObject.title
                    console.log(todosStorage[i].projectTitleItBelongs)
                    return
                }else{
                    alert('Task already assigned to a project or does not exist.')
                    return
                }
            }
        }
        alert('Task does not exist. Please make sure the name is well written.')
    })
}
export {addEventListenerTodoAddToProject,addEventListenerTodoAddToProjectFromProject}

const addTodoToProject = (todoObject) =>{

    const projectTitleToInsert = prompt('Insert the project title where this task should be added to ') 
    if(projectTitleToInsert === null) return 

    //Find if project exist, if it does, store it
    const projectToAddTodo = projectsStorage
        .find(project => project.title === projectTitleToInsert)

    if(projectToAddTodo){
        projectToAddTodo._attachedProjectTodos.push(todoObject)
        todoObject.projectTitleItBelongs = projectTitleToInsert
    }else{
        alert('Project does not exist. Make sure the title is well written or create the project.')
        return 
    }
}