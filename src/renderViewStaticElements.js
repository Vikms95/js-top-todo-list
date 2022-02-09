import createTodoDiv from "./createTodoDiv"
import newTodoButtonEventListener from "./createStaticElements"

function loadStaticElementsView (){
    // Static containers
    const contentReference = document.getElementById('content')
    const navigationBar = document.createElement('div')
    const dynamicContentContainer = document.createElement('div')
    
    //Static elements on the navigation bar
    const navigationBarHeader = document.createElement('h2')
    const defaultProjectButton = document.createElement('button')
    const newTodoButton = document.createElement('button')
    const todayTodosButton = document.createElement('button')
    const upcomingTodosButton = document.createElement('button')
    //Static elements on the dynamic content container
    //
    
    //Event listeners assignments (imported from createStaticElements)
    newTodoButtonEventListener(newTodoButton,createTodoDiv)

    //Appendings
    contentReference.appendChild(navigationBar)
    contentReference.appendChild(dynamicContentContainer)
    navigationBar.appendChild(navigationBarHeader)
    navigationBar.appendChild(defaultProjectButton)
    navigationBar.appendChild(newTodoButton)
    navigationBar.appendChild(todayTodosButton)
    navigationBar.appendChild(upcomingTodosButton)

    //Class assignments
    navigationBar.classList.add('nav-bar')
    navigationBarHeader.classList.add('header')
    dynamicContentContainer.classList.add('dynamic-content')
    defaultProjectButton.classList.add('nav-button')
    newTodoButton.classList.add('nav-button')
    todayTodosButton.classList.add('nav-button')
    upcomingTodosButton.classList.add('nav-button')

    //Property changes
    navigationBarHeader.textContent = 'Todo App'
    defaultProjectButton.textContent = 'Home'
    newTodoButton.textContent = 'New task'
    todayTodosButton.textContent = 'Today'
    upcomingTodosButton.textContent = 'Upcoming'

}

export default loadStaticElementsView

