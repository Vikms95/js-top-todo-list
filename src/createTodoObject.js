import todosStorage from "./objectsStorage";

const createTodoObject = (title, dueDate, priority,description) =>{
    // let description;
    let notes;
    let checkmark;
    return{title,dueDate,priority,description,notes,checkmark}
}

const askForTodoInput = () => {
    // let title = prompt('Enter title')
    // if(title === null) return
    // let dueDate = prompt('Enter due date')
    // if(dueDate === null) return
    // let priority = prompt('Enter priority (1 = low, 3 = high)')
    // if(priority === null) return
    // let description = prompt('Enter description')
    // if(description === null) return

    // let todo = createTodoObject(title,dueDate,priority,description)
    // Real code above, test code below
    let todo = createTodoObject('Title unnecessary long to prove width max','29-04','2','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    todosStorage.push(todo)
    return todo;
}

export default askForTodoInput;