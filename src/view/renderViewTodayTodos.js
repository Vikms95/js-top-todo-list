import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'
import isToday from 'date-fns/isToday'
import { isEqual, setMilliseconds } from 'date-fns'
import format from 'date-fns/format'
import parse from 'date-fns/parseISO'

function renderViewTodayTodos(){
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }
   
    todosStorage.forEach(todo =>{
        const today = format(new Date(),'yyyy-M-dd')
        const dateToCompare = format(new Date(todo.dueYear,todo.dueMonth - 1 ,todo.dueDay),'yyyy-M-dd')
        if(today == dateToCompare){
            renderViewTodo(todo)
            
        }
    })
}

export {renderViewTodayTodos}