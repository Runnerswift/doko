const express = require('express');
const sweetalert = require('sweetalert');
const app = express();
const port = 3000;
const router = express.Router();

app.listen(3000, function() {
  console.log(`doko app listening on port ${port}`);
});

app.set('view engine', 'pug');
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render('index');
  });

app.get('/checkLocation', (req, res) => {
  res.render('checkLocation');
});

app.get('/myReminders', (req, res) => {
  res.render('myReminders');
});

app.get('/createUser', (req, res) => {
  res.render('createUser');
});

/*
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function(err, client) {
    const dokoReminders = db.dokoReminders('reminders');
      dokoReminders.find({}).toArray((error, documents) => {
        client.close();
        res.render('index', { documents: documents });
        });
  });
*/