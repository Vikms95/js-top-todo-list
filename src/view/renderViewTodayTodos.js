import { todosStorage } from '../logic/objectsStorage'
import { renderViewTodo } from './renderViewTodo'
import noContentImage from '../images/noContentImage.jpg'
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
        const noWorkForTodayHeader = document.createElement('h1')
        const imageDiv = document.createElement('div')
        const image = new Image()
        image.src = noContentImage
        console.log('hi')

        dynamicElementsContainer.appendChild(noWorkForTodayHeader)
        dynamicElementsContainer.appendChild(imageDiv)
        imageDiv.appendChild(image)

        noWorkForTodayHeader.classList.add('no-content-header')
        noWorkForTodayHeader.textContent= 'It seems like you are done for today!'
    }
}

export {renderViewTodayTodos}