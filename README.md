# CRUD with Deno
This repository contains a CRUD made with Deno, Typescript, tests and env vars

## start server
To start the server run the command bellow: (in the root folder of the project)
```bash
deno run --allow-net --allow-read --allow-env src/server.ts
```

## run tests
To run the tests execute the command bellow: (in the root folder of the project)
```bash
deno test
```

## allowed routes
Endpoint  | Type of operation | explanation
---------:|:-----------------:|:-----------
/users    | GET               | get all users
/user/:id | GET               | get the user with the id `:id`
/user     | POST              | add a new user; it must receive a JSON body with the proprieties `name` and `email`
/user/:id | PUT               | update the user with the id `:id`; it can receives a JSON body with the proprieties `name` and/or `email`
/user/:id | DELETE            | delete the user with the id `:id`