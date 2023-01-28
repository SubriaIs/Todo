# Project Team 2



## Getting started
![webpage image](https://gitlab.tamk.cloud/courses/web-software-production-5g00dm04/3004/project-team-2/-/raw/main/Frontend%20web%20page.png?inline=false)

## Server address and endpoints
http://172.16.5.50


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


## Team members

- Subria Islam
- Yajun Guo (frontend contibutor)

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

## Completed Phases
Phase 1;
Phase 2;
Phase 3;
Phase 4;
Phase 5;

# Expected project grade and the reasoning behind it
- Expected grade 5.
- Phase 1 - 4 is done which needed for the basic application.
- Extra features is added for phase 5.


