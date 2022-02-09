import createTodoDiv from "./createTodoDiv"
import newTodoEventListener from "./createStaticElements"

function loadStaticElementsView (){
    // Static containers
    const contentReference = document.getElementById('content')
    const navigationBar = document.createElement('div')
    const dynamicContentContainer = document.createElement('div')
    
    //Static elements on the navigation bar
    const defaultProjectButton = document.createElement('button')
    const newTodoButton = document.createElement('button')
    const todayTodosButton = document.createElement('button')
    const upcomingTodosButton = document.createElement('button')
    //Static elements on the dynamic content container
    //
    
    //Appendings
    contentReference.appendChild(navigationBar)
    contentReference.appendChild(dynamicContentContainer)
    navigationBar.appendChild(defaultProjectButton)
    navigationBar.appendChild(newTodoButton)
    navigationBar.appendChild(todayTodosButton)
    navigationBar.appendChild(upcomingTodosButton)

    //Class assignments
    navigationBar.classList.add('nav-bar')
    dynamicContentContainer.classList.add('dynamic-content')
    defaultProjectButton.classList.add('home')
    newTodoButton.classList.add('home')
    todayTodosButton.classList.add('home')
    upcomingTodosButton.classList.add('home')

    //Property changes

    defaultProjectButton.textContent = 'Home'
    newTodoButton.textContent = 'New TODO'
    todayTodosButton.textContent = 'Today'
    upcomingTodosButton.textContent = 'Upcoming'

    //Event listeners assignments (imported from createStaticElements)
    newTodoEventListener(newTodoButton,createTodoDiv)


    // Create filter today todos button function
    // Create filter upcoming todos button function
}

export default loadStaticElementsView

