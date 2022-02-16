import { projectsStorage } from './objectsStorage'

const addEventListenerToogleDefaultStateButton = (element,projectObject) => {
    element.addEventListener('click', () =>{
        tooggleDefaultState(projectObject)
    })
}

export {addEventListenerToogleDefaultStateButton}

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
