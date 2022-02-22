import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'

function renderViewTodayTodos(){
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    
    todosStorage.forEach(todo =>{
        if(isToday(parseISO(todo.dueDate))){
            renderViewTodo(todo)
        }
    })
}

export {renderViewTodayTodos}