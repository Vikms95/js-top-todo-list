function createStaticElements(){
    // Create new todo button function
    // Create load default project view(home) button function
    // Create filter today todos button function
    // Create filter upcoming todos button function
}



function newTodoButtonEventListener(element,fn){
    element.addEventListener('click', () => {
        const container = document.getElementById('content')
        const element = fn()
        container.appendChild(element)
        
    })
    
}

export default newTodoButtonEventListener