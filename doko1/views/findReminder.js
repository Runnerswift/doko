var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
  if (error) throw error;

  // Use the database "doko"
  var dokoDb = db.db("doko");

  // Describe your query
  var query = { user: "john.smith@email.com" , location: "home" };

  // In the collection "reminders", find all records where "user = john.smith@email.com"
  dokoDb.collection("reminders").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});