import { isPast, isThisMonth, isThisWeek } from 'date-fns'
import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'
import noContentImage from '../images/noContentImage.jpg'

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

    
    if (dynamicElementsContainer.childNodes.length === 2){
        while(dynamicElementsContainer.firstChild){
            dynamicElementsContainer.firstChild.remove()
        }

        const noWorkUpcomingHeader = document.createElement('h1')
        const imageDiv = document.createElement('div')
        const image = new Image()
        image.src = noContentImage
        console.log('hi')

        dynamicElementsContainer.appendChild(noWorkUpcomingHeader)
        dynamicElementsContainer.appendChild(imageDiv)
        imageDiv.appendChild(image)

        noWorkUpcomingHeader.classList.add('no-content-header')
        noWorkUpcomingHeader.textContent= 'No task are past due or approaching!'
    }

}

export {renderViewUpcomingTodos}