import { todosStorage, projectsStorage } from "./objectsStorage";

// This function is called whenever a todo is shown on display
function addEventListenerTodoDeleteButton(element, todoObject) {
  element.addEventListener("click", () => {
    // Call the function that removes todo from display (deleting child element)
    element.parentNode.parentNode.remove();
    // Call the function that removes todo from general todo array
    deleteElementFromStorageArray(todoObject, todosStorage);
    console.log(todosStorage);

    //TODO Call the function that removes todo from the project's array it is attached to
  });
}

function addEventListenerProjectDeleteButton(element, projectObject) {
  element.addEventListener("click", () => {
    // Call the function that removes project from display (deleting child element)
    element.parentNode.parentNode.remove();
    // Call the function that removes project from general project array
    deleteElementFromStorageArray(projectObject, projectsStorage);
    console.log(projectsStorage);

    //TODO Call the function that removes array of todos from project
  });
}

export {
  addEventListenerTodoDeleteButton,
  addEventListenerProjectDeleteButton,
};

function deleteElementFromStorageArray(object, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id === object._id) {
      array[i] = "";
    }
  }
}
