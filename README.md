# Todo Project



## Getting started
![webpage image](https://raw.githubusercontent.com/SubriaIs/Todo/main/Frontend%20web%20page.png)


## Features
### backend

| End Points      |     Method    |    Description   |
| --------------- | ------------- |  --------------  |
| api/v1/tasks    |    GET        | return all tasks |
| api/v1/tasks    |    POST       |   save new task  |
|api/v1/tasks/:id |    PATCH      | Update task info |
|api/v1/tasks/:id |    DELETE     |    Delect task   |

### frontend
- Show to-do list, data fetched from the backend
- User can add new items to the list by typing in the text box and click "Add" button.
- User can delete items by clicking on "Delete" button at the end of each item.
- User can mark items as compelete by checking the checkbox.

## Instructions for running the application locally
- for backend and frontend Dockerfile was made
- docker-compose.yml file was made in root directory.
- **docker-compose up -d**  start the container.
- for checking docker image use **docker ps**.
- access localhost server for backend and frontend.
- use **npm run start** to run backend.
- move to frontend directory, use **npm start** to run frontend.

## How to test
### backend
- Open the project in **VS code** and open terminal.
- In terminal, use **npm run test** to run all tests.
- Move to frontend directory, use **npm run test** to run test for frontend.



