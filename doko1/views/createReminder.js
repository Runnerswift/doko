var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
  if (error) throw error;

  // Use the database "doko"
  var dokoDb = db.db("doko");

  // Create a reminder 
  var remindersObj = {reminder: "take out the trash", location: "home" , user: "john.smith@email.com"}

  // Insert the reminder into the "reminders" collection
  dokoDb.collection("reminders").insertOne(remindersObj, function(error, res) {
    if (error) throw error;
    console.log("1 document inserted");
    db.close();
  });
});

module.exports = 'createReminder';

// SITE NAVIGATION

onload = (function() {

  
  
  var home = document.getElementById("homeIcon");
    home.onclick = function() {
      window.location.replace("/checkLocation");
    };

  var newIcon = document.getElementById("newIcon");
    newIcon.onclick = function() {
      window.location.replace("/createReminder")
    };

  var reminders = document.getElementById("remindersIcon")
    reminders.onclick = function() {
      window.location.replace("/myReminders");
    };
  
  var logout = document.getElementById("settingsIcon")
    logout.onclick = function() {
      window.location.replace("/");
    };
});