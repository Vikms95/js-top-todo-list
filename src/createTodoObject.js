import todosStorage from "./objectsStorage";

const createTodoObject = (title, dueDate, priority,description) =>{
    // let description;
    let notes;
    let checkmark;
    return{title,dueDate,priority,description,notes,checkmark}
}

const askForTodoInput = () => {
    let title = prompt('Enter title')
    if(title === null) return
    let dueDate = prompt('Enter due date')
    if(dueDate === null) return
    let priority = prompt('Enter priority (1 = low, 3 = high)')
    if(priority === null) return
    let description = prompt('Enter description')
    if(description === null) return

    let todo = createTodoObject(title,dueDate,priority,description)
    todosStorage.push(todo)
    return todo;
}

export default askForTodoInput;