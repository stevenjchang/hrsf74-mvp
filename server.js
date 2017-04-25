var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('./lib/utility.js');
var mongoose = require('mongoose');
var cors = require('cors')
var Schema = mongoose.Schema;

var YouTubeID = require('./app/model/video.js').YouTubeID;

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(data) {
  console.log('***** mongoose.connection >server.js',data);
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function(req,res) {
//   Tank.create({ size: 'small' }, function (err, small) {
//     if (err) console.log('error');
    
//     console.log('********* saved **********  >model/sample.js --->', small);
//   });

//   Tank.find(function(err, tank) {
//     if (err) console.log('error');
//     console.log('****** tank ***** >model/config.js -->', tank);
//     // res.send(tank);
//     res.send('tank');
//   })
// })

app.get('/', util.getTank);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})

var teamsSchema = new Schema({
  user: String,
  // username: {type: String, index: {unique: true} },
  team: String,
  gameWatched: Number
})
var TeamPref = mongoose.model('TeamPref', teamsSchema);
// app.get('/teams',function(req, res) {

// }) 
app.post('/teams', function(req, res) {
  console.log('*****////////////// res -->', req.body);
  TeamPref.create({user: 'steve', team: req.body.team, gameWatched: 3}, function(err, success) {
    if (err)  console.log('error');
    // res.status(200).send('***** post to /teams successful >server.js --> ' + req.body);
  });
  TeamPref.find(function(err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  })
})

app.get('/teams', function(req, res) {
  console.log(req.body.team);
  YouTubeID.find(function(err, tank) {
    if (err) console.log('error');
    res.send(tank);
  })
})

// YouTubeID.create({
//   team: 'warriors',
//   gameLinks: ['Ho7r5n9Tflk', 'kBQnzLnh2Ac', '9OeHxYpRmAE']
// })
// YouTubeID.create({
//   team: 'celtics', 
//   gameLinks: ['qTbZU0IUrQI', 'gN-TqmHx8E0', 'FIDrNbu0lYs']
// })

app.post('/teams1', function(req, res) {
  console.log('***** "req.body.team" >>server.js -->', req.body.team);
  YouTubeID.find(req.body, function(err, result) {
    if (err) console.log('error');
    res.send(result);
  })
  // res.send('tank******');
})


