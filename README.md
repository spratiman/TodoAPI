# TodoAPI

Steps to test this application:
- Clone project
- `npm run start` inside the project
- Whitelist IP, need to send me a reques so I can whitelist the public IP on Mongo Atlas

GET all ToDOs:
`curl -i -H "Accept: application/json" "localhost:3000/tasks"`

POST ToDO:
`curl -X POST -H 'content-type:application/json' -d '{"name": "Test TODO POST"}' http://localhost:3000/tasks`

GET a ToDO:
`curl -i -H "Accept: application/json" "localhost:3000/tasks/{id}"`

PATCH a ToDO:
`curl --data '{"name": "new Test TODO PATCH"}' -X PATCH "localhost:3000/tasks/{id}"`

DELETE a ToDO:
`curl -X -DELETE "localhost:3000/tasks/{id}"`


