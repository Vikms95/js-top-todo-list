function newButtonEventListener(element, functionToUse) {
    element.addEventListener('click', () => {
        functionToUse()
    })
}

export default newButtonEventListener

