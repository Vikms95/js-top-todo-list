import { todosStorage } from './objectsStorage'
import { format } from 'date-fns'

const askForTodoInput = () => {
    let title = prompt('Enter title')
    if(title === null){
        return null
    }else if(title.length < 1 || title.length > 40){
        alert('Title needs a min of 1 character and no more than 40 characters!')
        return
    }

    // let dueDate = prompt('Enter due date')

    let priority = prompt('Enter priority (1 = low, 3 = high)')
    if(priority === null) return null

    let description = prompt('Enter description')
    if(description === null){ 
        return null
    }else if(description.length > 80){
        alert('Description can\'t be more than 80 characters!')
        return
    }

    let todo = createTodoObject(title,18,2,2022,priority,description)
    todosStorage.push(todo)
    
    return todo
}

const createTodoObject = (title,dueDay,dueMonth,dueYear,priority,description) => {
    const _id = generateTodoUniqueID() // It will be end up private, public for now
    let dueDate = format(new Date(dueYear,dueMonth, dueDay), 'E d')
    let projectTitleItBelongs = ''
    let checkmark = false
    
    return {
        _id,
        title,
        dueDate,
        priority,
        description,
        projectTitleItBelongs,
        checkmark,
    }
}

//TODO Convert to prototype method?
const generateTodoUniqueID = (function () {
    let id = 0
    return function () {
        return id++
    }
})()

export { askForTodoInput }
