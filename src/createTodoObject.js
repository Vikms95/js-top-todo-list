import todosStorage from "./objectsStorage";

const createTodoObject = (title, dueDate, priority) =>{
    let description;
    let notes;
    let checkList;
    return{title,dueDate,priority,description,notes,checkList}
}

const askForTodoInput = () => {
    let title = prompt('Enter title')
    if(title === null) return
    let dueDate = prompt('Enter due date')
    if(dueDate === null) return
    let priority = prompt('Enter priority (1 = low, 3 = high)')
    if(priority === null) return

    let todo = createTodoObject(title,dueDate,priority)
    todosStorage.push(todo)
    return todo;
}

export default askForTodoInput;