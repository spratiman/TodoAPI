const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const TASK = require('./api/models/todoListModel')

const CONNECTION_URL = "mongodb://spratiman:shahee1996.@cluster0-shard-00-00-p3qbz.mongodb.net:27017,cluster0-shard-00-01-p3qbz.mongodb.net:27017,cluster0-shard-00-02-p3qbz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
const DATABASE_NAME = "Tododb";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var routes = require('./api/routes/todoListRoutes');
routes(app)

var database, collection;

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

console.log('todo list RESTful API server started on: ' + 3000);
});