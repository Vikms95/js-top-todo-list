import { saveObjectToLocalStorage } from './insertElements'
import { projectsStorage } from './objectsStorage'

function addEventListenerToogleDefaultStateButton (element,projectObject) {
    element.addEventListener('click', () =>{
        tooggleDefaultState(projectObject)
        saveObjectToLocalStorage(projectObject)
    })
}

function addEventListenerExpandTodo(element, todoObject,elementToAppend) {
    element.addEventListener('click', ()=> {
        if(elementToAppend.childNodes.length > 2){
            elementToAppend.removeChild(elementToAppend.lastChild)
        }else{
            const description = document.createElement('div')
            description.classList.add('description')
            elementToAppend.appendChild(description)
            description.textContent = todoObject.description
        }
    })
}

function addEventListenerPriorityButton(element,todoObject,dueDate){
    element.addEventListener('click',() =>{
        console.log(element.firstChild.classList)
        if(element.firstChild.classList.contains('blue')){
            todoObject.priority = 1
            dueDate.style.color = 'blue'
        }else if(element.firstChild.classList.contains('orange')){
            todoObject.priority = 2
            dueDate.style.color = 'orange'
        }else if(element.firstChild.classList.contains('red')){
            todoObject.priority = 3
            dueDate.style.color = 'red'
        }
        console.log(todoObject)
        saveObjectToLocalStorage(todoObject)
    })
}

export {
    addEventListenerToogleDefaultStateButton,
    addEventListenerExpandTodo,
    addEventListenerPriorityButton
}

let tooggleDefaultState = (projectObject) =>{
    if(!(projectObject.isDefault)){
    //   use Array.some to check if any project has it's default set to true
        const isAnyProjectDefault = projectsStorage
            .some(project => project.isDefault === true)

        if (isAnyProjectDefault){
            alert('There is already a project set to default!')
            return
        }else{
            projectObject.isDefault = true
            return
        }
    }else{
        projectObject.isDefault = false
        return
    }
}
