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
        // if the project is not an empty string
        if(project){ 
            // if the project todo's list has any index which is not an empty object
            const isProjectWithTodos = project._attachedProjectTodos
                .some(project => Object.keys(project).length > 0)

            if((project._attachedProjectTodos.length > 0 && isProjectWithTodos)  ){
                renderViewProject(project)
            }
        }
    })
}

export {renderViewHome}