function createStaticElements() {
  // Create new todo button function
  // Create load default project view(home) button function
  // Create filter today todos button function
  // Create filter upcoming todos button function
}

function newButtonEventListener(element, functionToUse) {
  element.addEventListener("click", () => {
    const container = document.getElementById("content");
    const element = functionToUse();
    if(element === null || element === undefined) return;
    container.appendChild(element);
  });
}

export default newButtonEventListener;

