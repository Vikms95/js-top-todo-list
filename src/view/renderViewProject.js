import askForProjectInput from "../logic/createProjectObject";
import { addEventListenerProjectDeleteButton } from "../logic/deleteElements";

const renderViewProject = () => {
  let dynamicElementsContainer = document.getElementById("dynamic-content");
  // Create container div(row), checkmark div (column), project div (column)
  const container = document.createElement("div");
  const buttons = document.createElement("div");
  const deleteButton = document.createElement("button");
  const project = document.createElement("div");

  // Create divs within project div
  const title = document.createElement("div");
  const todoListContainer = document.createElement("div");
  const todoList = document.createElement("ol"); // Will try using <ol> and <li>

  // Append container to todoElementsContainer, container div > checkmark div, todo div
  dynamicElementsContainer.appendChild(container);
  container.appendChild(buttons);
  container.appendChild(project);
  project.appendChild(title);
  project.appendChild(todoListContainer);
  todoListContainer.appendChild(todoList);

  // Appends buttons to buttons container
  buttons.appendChild(deleteButton);

  // Change div id/class
  container.classList.add("project-container");
  container.classList.add("faded-out");
  buttons.classList.add("buttons");
  project.classList.add("project");
  title.classList.add("project");
  title.classList.add("title");
  todoListContainer.classList.add("todo-list-container");
  todoList.classList.add("todo-list");

  // Call for askForProjectInput and store the object returned
  const projectObject = askForProjectInput();
  console.log(projectObject);

  // Change text content of divs depending on the property values from the object
  deleteButton.textContent = "X";
  title.textContent = projectObject.title;

  // Change title bg depending on property value 'priority'
  title.style.backgroundColor = "rgb(241, 214, 181)";

  // Add fading animation on project creation
  requestAnimationFrame(() => {
    container.classList.remove("faded-out");
  });

  // Add event listeners to buttons within the todo di
  addEventListenerProjectDeleteButton(deleteButton, projectObject);
  // Return container to be appended in index.js
  return dynamicElementsContainer;
};

export default renderViewProject;
