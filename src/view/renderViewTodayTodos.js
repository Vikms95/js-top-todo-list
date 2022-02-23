import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'
import format from 'date-fns/format'

function renderViewTodayTodos(){
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }
   
    
    todosStorage.forEach(todo =>{
        if(todo){
            const today = format(new Date(),'yyyy-M-dd')
            const dateToCompare = format(new Date(todo.dueYear,todo.dueMonth - 1 ,todo.dueDay),'yyyy-M-dd')
            if(today == dateToCompare){
                renderViewTodo(todo)
            
            }
        }
    })

    if (dynamicElementsContainer.childNodes.length === 0){
        const noWorkForTodayDiv = document.createElement('h1')
        noWorkForTodayDiv.classList.add('home-header')
        noWorkForTodayDiv.textContent= 'It seems like you are done for today!'
        dynamicElementsContainer.appendChild(noWorkForTodayDiv)
    }
}

export {renderViewTodayTodos}