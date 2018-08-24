const express = require('express');
const jquery = require('jquery');
const app = express();
const port = 3000;
const router = express.Router();
const mongo = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017/doko';

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

app.get('/createReminder', (req, res) => {
  res.render('createReminder');
})

app.get('/myReminders', (req, res) => {
  res.render('myReminders');
});

app.get('/createUser', (req, res) => {
  res.render('createUser');
});



router.get('/get-data', function(req, res, next){
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null,err);
    var cursor = db.collection('reminders').find();
      cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
      }, function(){
        db.close();
        res.render('myReminders', {items: resultArray});
      })
  })

}); 



router.post('/insert', function(req, res, next){
  var geoLocation = {
    title: req.body.location,
    content: req.body.reminder
  };

mongo.connect(url, function(err, db){
  assert.equal(null, err);
  db.collection('reminders').insertOne(item, function(err, result) {
    assert.equal(null, err);
    console.log('Item inserted');
    db.close();
  })
})
  res.redirect('/checkLocation');
});

router.post('/update', function(req, res, next){

});

router.post('/delete', function(req, res, next){

});