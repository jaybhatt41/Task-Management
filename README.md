# Task Management 

    A nodeJs Backend that allows users to manage their tasks, categorize them, and track their completion status. Built with Node.js, Express.js, and MongoDB, this app provides the functionality to add, update, and delete tasks, as well as organize tasks into various categories.


## Features
    - User can add,update and delete the categories
    - Tasks can be categorized for better organization
    - Mark tasks as completed or pending
    - Tasks can have a due date
    - Ability to update task details and delete tasks
    - Error handling for missing data or invalid operations

## Technologies Used
    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
    - Body-Parser
    - dotenv (for handling environment variables)

##  Setup Project
    
    -Clone the repository:
        git clone https://github.com/jaybhatt41/task-management.git
        cd <folder-name>

    -Install dependencies:
        npm install

## Category CRUD (First Step)

    1. Create a Category
        request - POST
        end-point - http://localhost:3000/category/add
        in body json - 
            {
                "name": "Work"
            }
        this check that name should not be empty 

    2. Get All Categories
        request - GET
        end-point - http://localhost:3000/category/

    3. Update Category
        request - PUT
        end-point - http://localhost:3000/category/update/:id
        in body json - 
            {
                "name": <updated named>
            }
        this check that name should not be empty 

    4. Delete Category
        request - Delete
        end-point - http://localhost:3000/category/delete/:id

## Task CRUD 

    1. Create a Task
        Request: POST
        Endpoint:http://localhost:3000/task/add
        Body (JSON):
        {
            "title": "Complete the report",
            "description": "Finish the report for Q1 deliverables",
            "dueDate": "2025-01-25",
            "category": "<category_id>"
        }

        title is required and should not be empty.
        category is required and must refer to a valid category ID.

    2.Get All Tasks
        Request: GET
        Endpoint: http://localhost:3000/task
        Includes the task details along with populated category information.

    3. Update Task
        Request: PUT
        Endpoint: http://localhost:3000/task/update/:id
        Body (JSON):
        {
                "title": "Complete the presentation",
                "description": "Prepare the presentation for the Q1 report",
                "completed": true,
                "dueDate": "2025-01-30T00:00:00.000Z",
                "category": "<updated_category_id>"
        }
        Ensure the title is not empty when updating.
        A task marked as completed cannot be marked completed again.

    4.Delete Task
        Request: DELETE
        Endpoint: http://localhost:3000/task/delete/:id





