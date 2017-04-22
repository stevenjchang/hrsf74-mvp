var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(data) {
  console.log('*******************************************',data);
});

// var bodyParser = require('body-parser');
var schema = new Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

app.get('/', function(req,res) {
  Tank.create({ size: 'small' }, function (err, small) {
    if (err) console.log('error');
    
    console.log('********* saved **********  >model/sample.js --->', small);
  });

  Tank.find(function(err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  })
})
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})

var teamsSchema = new Schema({
  user: String,
  team: String,
  gameWatched: Number
})
var TeamPref = mongoose.model('TeamPref', teamsSchema);
// app.get('/teams',function(req, res) {

// }) 
app.get('/teams', function(req, res) {
  TeamPref.create({user: 'steve', team: 'okc', gameWatched: 3}, function(err, success) {
    if (err)  console.log('error');
    res.send('***** post to /teams successful >server.js -->');
  })
})



