import {renderViewTodo} from './renderViewTodo'
import { renderViewProject } from './renderViewProject'
import {todosStorage, projectsStorage } from '../logic/objectsStorage'

function renderViewHome () {
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }

    todosStorage.forEach(todo =>{
        if(todo && (!(todo.projectTitleItBelongs))){
            renderViewTodo(todo)
        }
    })

    projectsStorage.forEach(project =>{
        if(project){
            renderViewProject(project)
        }
    })

}

export {renderViewHome}