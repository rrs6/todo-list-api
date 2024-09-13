# To Do List API
An API to create a todo list.

Resources:
- Create member.
- Delete member.
- Create task.
- Delete task.
- Edit task.
- Find tasks.

Technologies - MySQL with Typeorm and Node (Express).

## How to run this project?
- First, you need to install Docker, if it's not installed [see](https://www.docker.com/).
- Once you have Docker, you need to install NodeJS [see](https://nodejs.org/pt).
- After that, clone this repository to your local folder with the command _git clone https://github.com/rrs6/todo-list-api.git_
- Go to your project folder and run _npm install_
- After this, you run your Docker Compose with command _docker compose up -d_
- Wait and after the container is successfully loaded, run the migrations command _npm run migrations:run_
- Finally, run your application with _npm run dev_

![server-architecture](https://github.com/user-attachments/assets/b4abeaa0-c1d9-40b0-be7d-a67cf5eaa619)
