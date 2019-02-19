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

app.get("/tasks", (request, response) => {
			collection.find({}).toArray((error, result) => {
				if(error) {
					return response.status(500).send(error);
				}
			response.send(result);
			});
});

app.post("/tasks", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.get("/tasks/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.patch("/tasks/:id", (request, response) => {
    collection.update({ "_id": new ObjectId(request.params.id) }, request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.delete("/tasks/:id", (request, response) => {
    collection.deleteOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

var database, collection;

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Task");
        console.log("Connected to `" + DATABASE_NAME + "`!");
		console.log('todo list RESTful API server started on: ' + 3000);
    });
});