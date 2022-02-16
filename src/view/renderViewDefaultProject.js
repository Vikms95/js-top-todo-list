import { projectsStorage } from '../logic/objectsStorage'
import { renderViewProject } from './renderViewProject'

function renderViewDefaultProject () {
    // Use find method to check if a project with default state exist
    const dynamicElementsContainer = document.getElementById('dynamic-content')
    const projectWithDefaultState = projectsStorage
        .find(project => project.isDefault === true)

    // If it exists (=projectWithDefaultState not undefined) 
    if(projectWithDefaultState){
        while(dynamicElementsContainer.firstChild){
            dynamicElementsContainer.firstChild.remove()
        }

        renderViewProject(projectWithDefaultState)

    }else{
        alert('There is no default project set!')
        return
    }

}

export {renderViewDefaultProject}