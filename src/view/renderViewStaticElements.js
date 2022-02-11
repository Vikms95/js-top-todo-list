import renderViewProject from "./renderViewProject";
import renderViewTodo from "./renderViewTodo";
import newButtonEventListener from "../logic/createStaticElements";

function loadStaticElementsView() {
  // Static containers
  const contentReference = document.getElementById("content");
  const navigationBar = document.createElement("div");
  const dynamicContentContainer = document.createElement("div");

  //Static elements on the navigation bar
  const navigationBarHeader1 = document.createElement("h2");
  const navigationBarHeaderLine = document.createElement("hr");
  const navigationBarHeader2 = document.createElement("h2");
  const defaultProjectButton = document.createElement("button");
  const newProjectButton = document.createElement("button");
  const newTodoButton = document.createElement("button");
  const todayTodosButton = document.createElement("button");
  const upcomingTodosButton = document.createElement("button");
  //Static elements on the dynamic content container
  //

  //Appendings
  contentReference.appendChild(navigationBar);
  contentReference.appendChild(dynamicContentContainer);
  navigationBar.appendChild(navigationBarHeader1);
  navigationBar.appendChild(navigationBarHeaderLine);
  navigationBar.appendChild(navigationBarHeader2);
  navigationBar.appendChild(defaultProjectButton);
  navigationBar.appendChild(newProjectButton);
  navigationBar.appendChild(newTodoButton);
  navigationBar.appendChild(todayTodosButton);
  navigationBar.appendChild(upcomingTodosButton);

  //Class assignments
  navigationBar.classList.add("nav-bar");
  navigationBarHeader1.classList.add("header1");
  navigationBarHeaderLine.classList.add("header-line");
  navigationBarHeader2.classList.add("header2");
  dynamicContentContainer.id = "dynamic-content";
  defaultProjectButton.classList.add("nav-button");
  newProjectButton.classList.add("nav-button");
  newTodoButton.classList.add("nav-button");
  todayTodosButton.classList.add("nav-button");
  upcomingTodosButton.classList.add("nav-button");

  //Property changes
  navigationBarHeader1.textContent = "Todo";
  navigationBarHeader2.textContent = "App";
  defaultProjectButton.textContent = "Home";
  newProjectButton.textContent = "New project";
  newTodoButton.textContent = "New task";
  todayTodosButton.textContent = "Today";
  upcomingTodosButton.textContent = "Upcoming";

  //Add event listeners to static elements (imported from createStaticElements)
  newButtonEventListener(newProjectButton, renderViewProject);
  newButtonEventListener(newTodoButton, renderViewTodo);
}

export default loadStaticElementsView;
