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
    // if(dueDate === null) return

    let priority = prompt('Enter priority (1 = low, 3 = high)')
    if(priority === null) return null

    let description = prompt('Enter description')
    if(description === null){ 
        return null
    }else if(description.length > 80){
        alert('Description can\'t be more than 80 characters!')
        return
    }

    let todo = createTodoObject(title,'17/02/2017',priority,description)

    // REAL CODE ^ TEST CODE V

    // const todo = createTodoObject(
    //   "Title unnecessary long to prove width max",
    //   "29",
    //   "11",
    //   "2022",
    //   "1",
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // );

    todosStorage.push(todo)
    console.log(todosStorage)
    return todo
}

const createTodoObject = (
    title,
    dueDate,
    priority,
    description
) => {
    const _id = generateTodoUniqueID() // It will be end up private, public for now
    dueDate = format(new Date(2022, 2, 17), 'E d')
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
