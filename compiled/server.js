'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('./lib/utility.js');
var mongoose = require('mongoose');
var cors = require('cors');
var Schema = mongoose.Schema;

var YouTubeID = require('./app/model/video.js').YouTubeID;

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (data) {
  console.log('***** mongoose.connection >server.js', data);
});

app.use(cors());
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var teamsSchema = new Schema({
  user: String,
  // username: {type: String, index: {unique: true} },
  team: String,
  gameWatched: Number
});
var TeamPref = mongoose.model('TeamPref', teamsSchema);
// app.get('/teams',function(req, res) {

// }) 
app.post('/teams', function (req, res) {
  console.log('*****////////////// res -->', req.body);
  TeamPref.create({ user: 'steve', team: req.body.team, gameWatched: 3 }, function (err, success) {
    if (err) console.log('error');
    // res.status(200).send('***** post to /teams successful >server.js --> ' + req.body);
  });
  TeamPref.find(function (err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  });
});

app.get('/teams', function (req, res) {
  console.log(req.body.team);
  YouTubeID.find(function (err, tank) {
    if (err) console.log('error');
    res.send(tank);
  });
});

// YouTubeID.create({
//   team: 'warriors',
//   gameLinks: ['Ho7r5n9Tflk', 'kBQnzLnh2Ac', '9OeHxYpRmAE']
// })
// YouTubeID.create({
//   team: 'celtics', 
//   gameLinks: ['qTbZU0IUrQI', 'gN-TqmHx8E0', 'FIDrNbu0lYs']
// })

app.post('/teams1', function (req, res) {
  console.log('***** "req.body.team" >>server.js -->', req.body.team);
  YouTubeID.find(req.body, function (err, result) {
    if (err) console.log('error');
    res.send(result);
  });
  // res.send('tank******');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImJvZHlQYXJzZXIiLCJ1dGlsIiwibW9uZ29vc2UiLCJjb3JzIiwiU2NoZW1hIiwiWW91VHViZUlEIiwiY29ubmVjdCIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJkYXRhIiwibG9nIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldCIsImdldFRhbmsiLCJsaXN0ZW4iLCJ0ZWFtc1NjaGVtYSIsInVzZXIiLCJTdHJpbmciLCJ0ZWFtIiwiZ2FtZVdhdGNoZWQiLCJOdW1iZXIiLCJUZWFtUHJlZiIsIm1vZGVsIiwicG9zdCIsInJlcSIsInJlcyIsImJvZHkiLCJjcmVhdGUiLCJlcnIiLCJzdWNjZXNzIiwiZmluZCIsInRhbmsiLCJzZW5kIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsTUFBTUYsU0FBVjtBQUNBLElBQUlHLGFBQWFGLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUlHLE9BQU9ILFFBQVEsa0JBQVIsQ0FBWDtBQUNBLElBQUlJLFdBQVdKLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBSUssT0FBT0wsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJTSxTQUFTRixTQUFTRSxNQUF0Qjs7QUFFQSxJQUFJQyxZQUFZUCxRQUFRLHNCQUFSLEVBQWdDTyxTQUFoRDs7QUFFQUgsU0FBU0ksT0FBVCxDQUFpQixnQ0FBakI7QUFDQSxJQUFJQyxLQUFLTCxTQUFTTSxVQUFsQjtBQUNBRCxHQUFHRSxFQUFILENBQU0sT0FBTixFQUFlQyxRQUFRQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLEVBQTRCLG1CQUE1QixDQUFmO0FBQ0FILEdBQUdNLElBQUgsQ0FBUSxNQUFSLEVBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QkosVUFBUUssR0FBUixDQUFZLHNDQUFaLEVBQW1ERCxJQUFuRDtBQUNELENBRkQ7O0FBSUFmLElBQUlpQixHQUFKLENBQVFiLE1BQVI7QUFDQUosSUFBSWlCLEdBQUosQ0FBUWhCLFdBQVdpQixJQUFYLEVBQVI7QUFDQWxCLElBQUlpQixHQUFKLENBQVFoQixXQUFXa0IsVUFBWCxDQUFzQixFQUFFQyxVQUFVLElBQVosRUFBdEIsQ0FBUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXBCLElBQUlxQixHQUFKLENBQVEsR0FBUixFQUFhbkIsS0FBS29CLE9BQWxCOztBQUVBdEIsSUFBSXVCLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDMUJaLFVBQVFLLEdBQVIsQ0FBWSxxQ0FBWjtBQUNELENBRkQ7O0FBSUEsSUFBSVEsY0FBYyxJQUFJbkIsTUFBSixDQUFXO0FBQzNCb0IsUUFBTUMsTUFEcUI7QUFFM0I7QUFDQUMsUUFBTUQsTUFIcUI7QUFJM0JFLGVBQWFDO0FBSmMsQ0FBWCxDQUFsQjtBQU1BLElBQUlDLFdBQVczQixTQUFTNEIsS0FBVCxDQUFlLFVBQWYsRUFBMkJQLFdBQTNCLENBQWY7QUFDQTs7QUFFQTtBQUNBeEIsSUFBSWdDLElBQUosQ0FBUyxRQUFULEVBQW1CLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNwQ3ZCLFVBQVFLLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ2lCLElBQUlFLElBQS9DO0FBQ0FMLFdBQVNNLE1BQVQsQ0FBZ0IsRUFBQ1gsTUFBTSxPQUFQLEVBQWdCRSxNQUFNTSxJQUFJRSxJQUFKLENBQVNSLElBQS9CLEVBQXFDQyxhQUFhLENBQWxELEVBQWhCLEVBQXNFLFVBQVNTLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUMzRixRQUFJRCxHQUFKLEVBQVUxQixRQUFRSyxHQUFSLENBQVksT0FBWjtBQUNWO0FBQ0QsR0FIRDtBQUlBYyxXQUFTUyxJQUFULENBQWMsVUFBU0YsR0FBVCxFQUFjRyxJQUFkLEVBQW9CO0FBQ2hDLFFBQUlILEdBQUosRUFBUzFCLFFBQVFLLEdBQVIsQ0FBWSxPQUFaO0FBQ1RMLFlBQVFLLEdBQVIsQ0FBWSx3Q0FBWixFQUFzRHdCLElBQXREO0FBQ0FOLFFBQUlPLElBQUosQ0FBU0QsSUFBVDtBQUNELEdBSkQ7QUFLRCxDQVhEOztBQWFBeEMsSUFBSXFCLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQVNZLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNuQ3ZCLFVBQVFLLEdBQVIsQ0FBWWlCLElBQUlFLElBQUosQ0FBU1IsSUFBckI7QUFDQXJCLFlBQVVpQyxJQUFWLENBQWUsVUFBU0YsR0FBVCxFQUFjRyxJQUFkLEVBQW9CO0FBQ2pDLFFBQUlILEdBQUosRUFBUzFCLFFBQVFLLEdBQVIsQ0FBWSxPQUFaO0FBQ1RrQixRQUFJTyxJQUFKLENBQVNELElBQVQ7QUFDRCxHQUhEO0FBSUQsQ0FORDs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBeEMsSUFBSWdDLElBQUosQ0FBUyxTQUFULEVBQW9CLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNyQ3ZCLFVBQVFLLEdBQVIsQ0FBWSx1Q0FBWixFQUFxRGlCLElBQUlFLElBQUosQ0FBU1IsSUFBOUQ7QUFDQXJCLFlBQVVpQyxJQUFWLENBQWVOLElBQUlFLElBQW5CLEVBQXlCLFVBQVNFLEdBQVQsRUFBY0ssTUFBZCxFQUFzQjtBQUM3QyxRQUFJTCxHQUFKLEVBQVMxQixRQUFRSyxHQUFSLENBQVksT0FBWjtBQUNUa0IsUUFBSU8sSUFBSixDQUFTQyxNQUFUO0FBQ0QsR0FIRDtBQUlBO0FBQ0QsQ0FQRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vbGliL3V0aWxpdHkuanMnKTtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG52YXIgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxudmFyIFlvdVR1YmVJRCA9IHJlcXVpcmUoJy4vYXBwL21vZGVsL3ZpZGVvLmpzJykuWW91VHViZUlEO1xuXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnKTtcbnZhciBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgY29uc29sZS5sb2coJyoqKioqIG1vbmdvb3NlLmNvbm5lY3Rpb24gPnNlcnZlci5qcycsZGF0YSk7XG59KTtcblxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4vLyBhcHAuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLHJlcykge1xuLy8gICBUYW5rLmNyZWF0ZSh7IHNpemU6ICdzbWFsbCcgfSwgZnVuY3Rpb24gKGVyciwgc21hbGwpIHtcbi8vICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICBcbi8vICAgICBjb25zb2xlLmxvZygnKioqKioqKioqIHNhdmVkICoqKioqKioqKiogID5tb2RlbC9zYW1wbGUuanMgLS0tPicsIHNtYWxsKTtcbi8vICAgfSk7XG5cbi8vICAgVGFuay5maW5kKGZ1bmN0aW9uKGVyciwgdGFuaykge1xuLy8gICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuLy8gICAgIGNvbnNvbGUubG9nKCcqKioqKiogdGFuayAqKioqKiA+bW9kZWwvY29uZmlnLmpzIC0tPicsIHRhbmspO1xuLy8gICAgIC8vIHJlcy5zZW5kKHRhbmspO1xuLy8gICAgIHJlcy5zZW5kKCd0YW5rJyk7XG4vLyAgIH0pXG4vLyB9KVxuXG5hcHAuZ2V0KCcvJywgdXRpbC5nZXRUYW5rKTtcblxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAhJyk7XG59KVxuXG52YXIgdGVhbXNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdXNlcjogU3RyaW5nLFxuICAvLyB1c2VybmFtZToge3R5cGU6IFN0cmluZywgaW5kZXg6IHt1bmlxdWU6IHRydWV9IH0sXG4gIHRlYW06IFN0cmluZyxcbiAgZ2FtZVdhdGNoZWQ6IE51bWJlclxufSlcbnZhciBUZWFtUHJlZiA9IG1vbmdvb3NlLm1vZGVsKCdUZWFtUHJlZicsIHRlYW1zU2NoZW1hKTtcbi8vIGFwcC5nZXQoJy90ZWFtcycsZnVuY3Rpb24ocmVxLCByZXMpIHtcblxuLy8gfSkgXG5hcHAucG9zdCgnL3RlYW1zJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coJyoqKioqLy8vLy8vLy8vLy8vLy8gcmVzIC0tPicsIHJlcS5ib2R5KTtcbiAgVGVhbVByZWYuY3JlYXRlKHt1c2VyOiAnc3RldmUnLCB0ZWFtOiByZXEuYm9keS50ZWFtLCBnYW1lV2F0Y2hlZDogM30sIGZ1bmN0aW9uKGVyciwgc3VjY2Vzcykge1xuICAgIGlmIChlcnIpICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAvLyByZXMuc3RhdHVzKDIwMCkuc2VuZCgnKioqKiogcG9zdCB0byAvdGVhbXMgc3VjY2Vzc2Z1bCA+c2VydmVyLmpzIC0tPiAnICsgcmVxLmJvZHkpO1xuICB9KTtcbiAgVGVhbVByZWYuZmluZChmdW5jdGlvbihlcnIsIHRhbmspIHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICBjb25zb2xlLmxvZygnKioqKioqIHRhbmsgKioqKiogPm1vZGVsL2NvbmZpZy5qcyAtLT4nLCB0YW5rKTtcbiAgICByZXMuc2VuZCh0YW5rKTtcbiAgfSlcbn0pXG5cbmFwcC5nZXQoJy90ZWFtcycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LnRlYW0pO1xuICBZb3VUdWJlSUQuZmluZChmdW5jdGlvbihlcnIsIHRhbmspIHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICByZXMuc2VuZCh0YW5rKTtcbiAgfSlcbn0pXG5cbi8vIFlvdVR1YmVJRC5jcmVhdGUoe1xuLy8gICB0ZWFtOiAnd2FycmlvcnMnLFxuLy8gICBnYW1lTGlua3M6IFsnSG83cjVuOVRmbGsnLCAna0JRbnpMbmgyQWMnLCAnOU9lSHhZcFJtQUUnXVxuLy8gfSlcbi8vIFlvdVR1YmVJRC5jcmVhdGUoe1xuLy8gICB0ZWFtOiAnY2VsdGljcycsIFxuLy8gICBnYW1lTGlua3M6IFsncVRiWlUwSVVyUUknLCAnZ04tVHFtSHg4RTAnLCAnRklEck5idTBsWXMnXVxuLy8gfSlcblxuYXBwLnBvc3QoJy90ZWFtczEnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygnKioqKiogXCJyZXEuYm9keS50ZWFtXCIgPj5zZXJ2ZXIuanMgLS0+JywgcmVxLmJvZHkudGVhbSk7XG4gIFlvdVR1YmVJRC5maW5kKHJlcS5ib2R5LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gIH0pXG4gIC8vIHJlcy5zZW5kKCd0YW5rKioqKioqJyk7XG59KVxuXG5cbiJdfQ==