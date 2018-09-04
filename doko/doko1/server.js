const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function () {
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

app.get('/createReminder', (req, res) => {
  res.render('createReminder');
})

app.get('/myReminders', (req, res) => {
  res.render('myReminders');
});

app.get('/createUser', (req, res) => {
  res.render('createUser');
});

app.get('/about', (req, res) => {
  res.render('about');
});

const mongo = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017/doko';

app.get('/get-data', function (req, res, next) {
  var resultArray = [];
  mongo.connect(url, function (err, db) {
    assert.equal(null, err);
    var cursor = db.collection('reminders').find();
    cursor.forEach(function (doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function () {
      db.close();
      res.render('myReminders', { items: resultArray });
    })
  })

});

app.post('/insert', (req, res) => {
  var dokoEntry = {
    where1: req.body.where1,
    reminder: req.body.reminder
  };

  mongo.connect(url, function (err, db) {
    assert.equal(null, err);
    db.collection('reminders').insertOne(item, (err, result) => {
      assert.equal(null, err);
      console.log('Reminder inserted');
      db.close();
    })
  })
  res.redirect('/checkLocation');
});

app.post('/update', function (req, res, next) {

});



app.post('/delete', function (req, res, next) {

});