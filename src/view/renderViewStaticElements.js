import {renderViewProject} from './renderViewProject'

import { renderViewDefaultProject } from './renderViewDefaultProject'
import { renderViewHome } from './renderViewHome'
import { renderViewTodayTodos } from './renderViewTodayTodos'
import renderViewTodo from './renderViewTodo'

import newButtonEventListener from '../logic/createStaticElements'
import { askForProjectInput } from '../logic/createProjectObject'
import { askForTodoInput } from '../logic/createTodoObject'
import { renderViewUpcomingTodos } from './renderViewUpcomingTodos'



function renderStaticElementsView() {

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
    
    const todayTodosButton = document.createElement('button')

    const upcomingTodosButton = document.createElement('button')

    const endButtonsLine = document.createElement('hr')

    const newProjectButton = document.createElement('button')

    const newTodoButton = document.createElement('button')



    //Static elements on the dynamic content container
    
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

    navigationBar.appendChild(endButtonsLine)
    
    navigationBar.appendChild(newProjectButton)
    
    navigationBar.appendChild(newTodoButton)
    
    
    //Class assignments
    
    navigationBar.classList.add('nav-bar')
    
    navigationBarHeader1.classList.add('header1')
    
    navigationBarHeaderLine.classList.add('header-line')

    navigationBarHeader2.classList.add('header2')

    dynamicContentContainer.id = 'dynamic-content'

    generalProjectButton.classList.add('nav-button')

    defaultProjectButton.classList.add('nav-button')

    todayTodosButton.classList.add('nav-button')

    upcomingTodosButton.classList.add('nav-button')

    newProjectButton.classList.add('nav-button')
    
    newTodoButton.classList.add('nav-button')

    //Property changes

    navigationBarHeader1.textContent = 'Todo'

    navigationBarHeader2.textContent = 'App'

    generalProjectButton.innerHTML = '<i class="fa fa-home fa-lg"></i>  Home'

    defaultProjectButton.innerHTML = '<i class="fa fa-hourglass fa-lg"></i> Working on...'

    newProjectButton.innerHTML = '<i class="fa-solid fa-list-check fa-lg"></i> New project'

    newTodoButton.innerHTML = '<i class="fa-solid fa-check fa-lg"></i> New task'

    todayTodosButton.innerHTML = '<i class="fa-solid fa-cloud-sun fa-lg"></i> Today'

    upcomingTodosButton.innerHTML = '<i class="fa-solid fa-calendar-days fa-lg"></i> Upcoming'




    //Add event listeners to static elements (imported from createStaticElements)

    newButtonEventListener(generalProjectButton,renderViewHome)

    newButtonEventListener(defaultProjectButton,renderViewDefaultProject)

    newButtonEventListener(todayTodosButton,renderViewTodayTodos)

    newButtonEventListener(upcomingTodosButton,renderViewUpcomingTodos)

    newButtonEventListener(newProjectButton, askForProjectInput)

    newButtonEventListener(newTodoButton, askForTodoInput)

}

export default renderStaticElementsView

