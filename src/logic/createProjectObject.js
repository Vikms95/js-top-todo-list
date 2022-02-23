import { projectsStorage } from './objectsStorage'
import { saveObjectToLocalStorage } from './insertElements'

function askForProjectInput(){
    let title = prompt('Enter title')
    
    const project = Project(title)
    
    if(!(project.isProjectTitleValid(title))){
        return null
    }  

    projectsStorage.push(project)
    saveObjectToLocalStorage(project)
    return project
}

function Project(title){
    const _id = generateProjectUniqueID()
    const prototypeMadeUp = 'project'
    let isDefault = false 
    let _attachedProjectTodos = [] // Will store ID, then get compared with todosStorage, will be private
    
    const getID = () =>{
        return this._id
    }

    const isProjectTitleValid = (title) =>{
        // Check if user has finished the alert via cancel button
        if(title === null){
            return false

        }else if(title.length < 1 || title.length > 40){
            alert('Title needs a min of 1 character and no more than 40 characters!')
            return false
        }
  
        const projectExist = projectsStorage
            .some(project => project.title === title)
  
        if(projectExist){
            alert('Project already exists! Please pick another title.')
            return false
        }
        return true
    }
  
    return {
        _id,
        prototypeMadeUp,
        title,
        isDefault,
        _attachedProjectTodos,
        isProjectTitleValid
    }
}

export {askForProjectInput}

const generateProjectUniqueID = (function () {
    let id = 1000
    return function () {
        return id++
    }
})()
