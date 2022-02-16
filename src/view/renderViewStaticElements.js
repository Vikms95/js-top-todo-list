import {renderViewProject} from './renderViewProject'

import { renderViewDefaultProject } from './renderViewDefaultProject'

import { renderViewGeneralProject } from './renderViewGeneralProjects'

import renderViewTodo from './renderViewTodo'

import newButtonEventListener from '../logic/createStaticElements'



function loadStaticElementsView() {

    // Static containers

    const contentReference = document.getElementById('content')

    const navigationBar = document.createElement('div')

    const dynamicContentContainer = document.createElement('div')

    const dynamicContentStaticButtons = document.createElement('div')



    //Static elements on the navigation bar

    const navigationBarHeader1 = document.createElement('h2')

    const navigationBarHeaderLine = document.createElement('hr')

    const navigationBarHeader2 = document.createElement('h2')

    const generalProjectButton = document.createElement('button')
    
    const defaultProjectButton = document.createElement('button')
    
    const newProjectButton = document.createElement('button')

    const newTodoButton = document.createElement('button')

    const todayTodosButton = document.createElement('button')

    const upcomingTodosButton = document.createElement('button')

    //Static elements on the dynamic content container
    dynamicContentStaticButtons.appendChild(newProjectButton)
    
    dynamicContentStaticButtons.appendChild(newTodoButton)

    //Appendings

    contentReference.appendChild(navigationBar)

    contentReference.appendChild(dynamicContentContainer)
    
    contentReference.appendChild(dynamicContentStaticButtons)

    navigationBar.appendChild(navigationBarHeader1)

    navigationBar.appendChild(navigationBarHeaderLine)

    navigationBar.appendChild(navigationBarHeader2)

    navigationBar.appendChild(generalProjectButton)

    navigationBar.appendChild(defaultProjectButton)


    navigationBar.appendChild(todayTodosButton)
    
    navigationBar.appendChild(upcomingTodosButton)
    


    //Class assignments

    navigationBar.classList.add('nav-bar')

    navigationBarHeader1.classList.add('header1')

    navigationBarHeaderLine.classList.add('header-line')

    navigationBarHeader2.classList.add('header2')

    dynamicContentContainer.id = 'dynamic-content'

    dynamicContentStaticButtons.classList.add('dynamic-button')

    generalProjectButton.classList.add('nav-button')

    defaultProjectButton.classList.add('nav-button')

    newProjectButton.classList.add('dynamic-button')

    todayTodosButton.classList.add('nav-button')

    upcomingTodosButton.classList.add('nav-button')

    newTodoButton.classList.add('dynamic-button')

    
    //Property changes

    navigationBarHeader1.textContent = 'Todo'

    navigationBarHeader2.textContent = 'App'

    generalProjectButton.textContent = 'Home'

    defaultProjectButton.textContent = 'Working on...'

    newProjectButton.textContent = 'New project'

    newTodoButton.textContent = 'New task'

    todayTodosButton.textContent = 'Today'

    upcomingTodosButton.textContent = 'Upcoming'




    //Add event listeners to static elements (imported from createStaticElements)

    newButtonEventListener(generalProjectButton,renderViewGeneralProject)

    newButtonEventListener(defaultProjectButton,renderViewDefaultProject)

    newButtonEventListener(newProjectButton, renderViewProject)

    newButtonEventListener(newTodoButton, renderViewTodo)

}

export default loadStaticElementsView

