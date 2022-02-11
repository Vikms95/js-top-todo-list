import projectsStorage from './objectsStorage'
import { generateUniqueID } from './createTodoObject'

const askForProjectInput = () => {
        // let title = prompt('Enter title')
    // if(title === null) return
    // let todo = createTodoObject(title,dueDate,priority,description)

    // REAL CODE ^ TEST CODE V

    const project = createProjectObject('Test Project')
    projectsStorage.push(project)
    return project
}

const createProjectObject = (title) =>{
    let _id = generateUniqueID() // Will this be separate from todo increments?
    let _attachedProjectTodos = [] // Will store ID, then get compared with todosStorage, will be private

    return {
        _id,
        title,
        _attachedProjectTodos
    }
}

export default askForProjectInput