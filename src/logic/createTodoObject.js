import { todosStorage } from './objectsStorage'
import { format } from 'date-fns'
import { saveObjectToLocalStorage } from './insertElements'

function askForTodoInput(){
    let title = prompt('Enter title')
  
    if(title === null){
        return null

    }else if(title.length < 1 || title.length > 40){
        alert('Title needs a min of 1 character and no more than 40 characters!')
        return
    }

    let dueYear = prompt('Enter due year')
    let dueMonth = prompt('Enter due month')
    let dueDay = prompt ('Enter due day')

    if(isNaN(dueYear) || isNaN(dueMonth) || isNaN(dueDay)){
        alert('Due date values must be numbers!')
        return    
    }

    let priority = prompt('Enter priority (1 = low, 2 = medium, 3 = high)')
    if(priority === null) return null

    let description = prompt('Enter description')
    if(description === null){ 
        return null

    }else if(description.length > 80){
        alert('Description can\'t be more than 80 characters!')
        return
    }

    let todo = createTodoObject(title,dueDay,dueMonth,dueYear,priority,description)
    todosStorage.push(todo)
    saveObjectToLocalStorage(todo)

    return todo
}

function createTodoObject(title,dueDay,dueMonth,dueYear,priority,description){

    const _id = generateTodoUniqueID() // It will be end up private, public for now
    const prototypeMadeUp = 'todo'
    dueDay = dueDay
    dueMonth = dueMonth
    dueYear = dueYear
    let dueDate = format(new Date(dueYear,dueMonth, dueDay), 'MMMM, E d')
    let projectTitleItBelongs = ''
    let checkmark = false
    
    return {
        _id,
        prototypeMadeUp,
        title,
        dueDate,
        dueDay,
        dueMonth,
        dueYear,
        priority,
        description,
        projectTitleItBelongs,
        checkmark,
    }
}

const generateTodoUniqueID = (function () {
    let id = 0
    return function () {
        return id++
    }
})()

export { askForTodoInput }
