function createStaticElements(){
    // Create new todo button function
    // Create load default project view(home) button function
    // Create filter today todos button function
    // Create filter upcoming todos button function
}

export default createStaticElements

function newEventListener(element,fn){
    const newTodo = document.createElement(element)
    newTodo.addEventListener('click', () => {
        fn()
    })
}