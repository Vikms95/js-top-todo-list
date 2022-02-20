import { projectsStorage } from './objectsStorage'
import { saveObjectToLocalStorage } from './insertElements'

const askForProjectInput = () => {
    let title = prompt('Enter title')
    if(!isProjectTitleValid(title)){
        return null
    }  

    const project = createProjectObject(title)

    projectsStorage.push(project)
    saveObjectToLocalStorage(project)
    return project
}

const createProjectObject = (title) => {
    const _id = generateProjectUniqueID()
    let isDefault = false 
    let _attachedProjectTodos = [] // Will store ID, then get compared with todosStorage, will be private
    
    return {
        _id,
        title,
        isDefault,
        _attachedProjectTodos,
    }
}

export {askForProjectInput}


const generateProjectUniqueID = (function () {
    let id = 0
    return function () {
        return id++
    }
})()

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


