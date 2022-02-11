import { projectsStorage } from "./objectsStorage";

const askForProjectInput = () => {
  // let title = prompt('Enter title')
  // if(title === null) return
  // let todo = createTodoObject(title,dueDate,priority,description)

  // REAL CODE ^ TEST CODE V

  const project = createProjectObject("Test Project");
  projectsStorage.push(project);
  console.log(projectsStorage.length)
  return project;
};

const createProjectObject = (title) => {
  let _id = generateProjectUniqueID(); // Will this be separate from todo increments?
  let _attachedProjectTodos = []; // Will store ID, then get compared with todosStorage, will be private

  return {
    _id,
    title,
    _attachedProjectTodos,
  };
};

export default askForProjectInput;

const generateProjectUniqueID = (function () {
    let id = 0;
    return function () {
      return id++;
    };
  })();
  