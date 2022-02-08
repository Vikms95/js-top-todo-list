PROJECT GENERAL SCHEMA:
- *TODOS* will be dinamically created objects, so use a factory function inside a module
    - Todo properties: title, description, dueDate, priority, notes, checklist
    - These properties are entered via alert input (for now)

- *PROJECTS* will be dinamically created objects, which will store todos.
    - With an IIFE, execute the project the user has decided to put as default when the app first opens
    - Let the user decide dinamically which todos go to each project

- *UI FUNCTIONALITY* should:
    - Be able to view all projects
    - View all todos in each project (show title, due date and different color for priority)
    - Expand todos to see and edit the details
    - Delete a todo

- Separate *APPLICATION LOGIC* (creating new todos, setting them as complete, changing todo priority) and *DOM-CREATION FUNCTIONALITY* in different modules.

- *MODULES* idea:

    :Aplication-logic
        -createProjectObject (create new project object and store it into an array)
        -createTodoObject (create new todo object and store it into an array)
        -loadGeneralProjects (will get all projects from an array and send them to loadGeneralProjectsView )
        -filterTodayTodos (will filter the list of all todos by current date to due and send to loadTodayTodosView )
        -filterUpcomingTodos (will filter the list of all todos if date is among the following 15 days)
        -deleteTodo (input event attached to a button located at the todos div)
        -objectStorage (2 arrays with references to the objects contained)

    :DOM-creation
        -createProjectDiv (imports createProjectObject)
        -createTodoDiv (imports createTodoObject)
        -createSideBarDiv (imports createSideBarObject.js)
        -loadDefaultProjectView (loads a div for the project object and it's todos objects with default property set to true)
        -loadGeneralProjectsView (loads all projects objects with it's todos objects)
        -loadTodayTodosView (loads all todos with due date for the current day)
        -loadUpcomningTodosView (loads all todos for the following 15 days as due date)
        -deleteTodoFromProjectView (receives input from deleteTodoFromProject.js, whenever triggered, this one removes the current todo from view )


1. Show random todo on screen