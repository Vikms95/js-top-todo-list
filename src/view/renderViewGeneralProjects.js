import { renderViewProject } from './renderViewProject'
import { projectsStorage } from '../logic/objectsStorage'

function renderViewGeneralProject () {
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    while(dynamicElementsContainer.firstChild){
        dynamicElementsContainer.firstChild.remove()
    }
    projectsStorage.forEach(project =>{
        if(project){
            renderViewProject(project)
        }
    })
}

export {renderViewGeneralProject}