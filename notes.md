PROJECT GENERAL SCHEMA:
- *TODOS* will be dinamically created objects, so use a factory function inside a module
    - Todo properties: title, description, dueDate, priority, notes, checklist
    - These properties are entered via alert input (for now)

- *PROJECTS* will be dinamically created objects, which will store todos.
    - Project it's just an object, with an array of todo's inside and some property and methods to differentiate them
    - Let the user decide dinamically which todos go to each project (button in the todo and project, asking for todo or project title, inserting into the list if name is right)
    - With an IIFE, execute the project the user has decided to put as default when the app first opens

- *UI FUNCTIONALITY* should:
    - Be able to view all projects
    - View all todos in each project (show title, due date and different color for priority)
    - Expand todos to see and edit the details
    - Delete a todo

- Separate *APPLICATION LOGIC* (creating new todos, setting them as complete, changing todo priority) and *DOM-CREATION FUNCTIONALITY* in different modules.

- *MODULES* idea:

    :Aplication-logic
        -createProjectObject (create new project object and store it into an array)
        -createStaticElements(will send created elements to       loadMainPageElementsView)
        -createTodoObject (create new todo object and store it into an array)
        -deleteElements (delete todos from todo div, delete projects from project div)
        -insertElements (insert todos from todo div, insert todos from project div)
        -filterTodayTodos (will filter the list of all todos by current date to due and send to loadTodayTodosView)
        -filterUpcomingTodos (will filter the list of all todos if date is among the following 15 days)
        -objectStorage (2 arrays with references to the objects contained)

    :DOM-creation
        -renderViewDefaultProject (loads a div for the project object and it's todos objects with default property set to true)
        -renderViewGeneralProjects (loads all projects objects with it's todos objects)
        -renderViewProject (imports createProjectObject)
        -renderViewStaticElements
        -renderViewTodayTodos (loads all todos with due date for the current day)
        -renderViewTodo (imports createTodoObject)
        -renderViewTodoFromProject(todos related to project but only title, duedate, color and ability to expand to see it's description)
        -renderViewUpcomningTodos (loads all todos for the following 15 days as due date)

TODO
<!-- - Show random todo on screen -->
<!-- - Add static elements on nar bar upon page load -->
<!-- - Make todos fit properly on dynamic content container:
    - Todo not appending to dynamic content container? Reference is recognized in console.log()
    ! In the createTodoDiv function I was returning the todo container, not the dynamicElementsContainer

<!-- - Make todo fit the whole width of the screen -->
<!-- - Make description and border not overflow when page is shrinked -->
 - Remove a todo:
    <!-- - Add event listener for the checkmark div -->
    <!-- - Delete the todo both from display -->
    <!-- - Delete from todo array: created a function to generate an uniqueID (createtodoObject line 39) and compared to todosStorage index, then change the content to empty (not remove) -->
    - Delete todo from the *project's array it's attached to(to do later)*

<!-- - Create empty project object -->
<!-- - Initial styling project divs -->
<!-- - Make project and todo id independent 
    ! I was using the same function for todo imported within the projects modules

<!-- - Add event listener to project delete button > Projects being pushed, but not deleted: --> ! Was using todo event listener

<!-- - Attach todo to project -->
<!-- - Make the project input to insert todo case insensitive   -->
<!-- - Make projects imposible to have same title, return a value to know the rendering has to be canceled: -->

- Look into date library
https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/
