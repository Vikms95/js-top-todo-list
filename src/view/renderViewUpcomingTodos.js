import { isPast, isThisMonth, isThisWeek } from 'date-fns'
import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'

function renderViewUpcomingTodos(){
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }
    
    const pastDueTodos = document.createElement('h3')
    const upcomingTodos = document.createElement('h3')

    pastDueTodos.classList.add('home-header')
    upcomingTodos.classList.add('home-header')

    pastDueTodos.textContent = 'Past due task'
    upcomingTodos.textContent = 'Upcoming task'

    dynamicElementsContainer.appendChild(pastDueTodos)

    todosStorage.forEach(todo =>{
        if(todo){
            if(isPast(new Date(todo.dueYear,todo.dueMonth - 1 ,todo.dueDay + 1)) && todo.checkmark === false)
                renderViewTodo(todo)
        }
    })

    dynamicElementsContainer.appendChild(upcomingTodos)

    todosStorage.forEach(todo =>{
        if(todo){
            let dueDate = new Date(todo.dueYear,todo.dueMonth - 1 ,todo.dueDay)
            if((isThisMonth(dueDate) || isThisWeek(dueDate)) && todo.checkmark === false ){
                renderViewTodo(todo)
            }
        }
    })

}

export {renderViewUpcomingTodos}