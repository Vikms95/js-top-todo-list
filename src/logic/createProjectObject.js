import { projectsStorage } from "./objectsStorage";

const askForProjectInput = () => {
  let title = prompt('Enter title')
  console.log(title)
  if(title === null) return null;

  // REAL CODE ^ TEST CODE V

  const project = createProjectObject(title);
  projectsStorage.push(project);
  console.log(projectsStorage)
  return project;
};

const createProjectObject = (title) => {
  let _id = generateProjectUniqueID(); 
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
  