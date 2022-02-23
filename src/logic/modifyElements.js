import { saveObjectToLocalStorage } from './insertElements'
import { projectsStorage } from './objectsStorage'

function addEventListenerToogleDefaultStateButton (element,projectObject) {
    element.addEventListener('click', () =>{
        tooggleDefaultState(projectObject)
        saveObjectToLocalStorage(projectObject)
    })
}

function addEventListenerExpandTodo(element, todoObject,elementToAppend1,elementToAppend2,flags) {
    element.addEventListener('click', ()=> {
        if(elementToAppend1.childNodes.length > 2){
            elementToAppend1.removeChild(elementToAppend1.lastChild)
            elementToAppend2.removeChild(elementToAppend2.lastChild)

        }else{
            const description = document.createElement('div')
            description.classList.add('description')
            elementToAppend1.appendChild(description)
            description.textContent = todoObject.description
            elementToAppend2.appendChild(flags)
        }
    })
}

function addEventListenerPriorityButton(element,todoObject,dueDate){
    element.addEventListener('click',() =>{
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

        saveObjectToLocalStorage(todoObject)

        if(todoObject.projectTitleItBelongs){
            console.log('hi')
            // Search for the projectTitleItBelongs in projectStorage
            const projectToUpdate = projectsStorage
                .find(project => project.title === todoObject.projectTitleItBelongs)
            // get that project and save it to localstorage
            saveObjectToLocalStorage(projectToUpdate)
        }
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
