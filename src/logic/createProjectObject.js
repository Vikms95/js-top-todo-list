import { projectsStorage } from './objectsStorage'

const askForProjectInput = () => {
    let title = prompt('Enter title')
    if(!isProjectTitleValid(title)){
        return null
    }  

    // REAL CODE ^ TEST CODE V

    const project = createProjectObject(title)

    projectsStorage.push(project)
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

export default askForProjectInput

const generateProjectUniqueID = (function () {
    let id = 0
    return function () {
        return id++
    }
})()

const isProjectTitleValid = (title) =>{
    // Check if user has finished the alert via cancel button
    if(title === null) return false

    const projectExist = projectsStorage.some(el => el.title === title)
    if(projectExist){
        alert('Project already exists! Please pick another title.')
        return false
    }
    return true
}
  