'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('./lib/utility.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (data) {
  console.log('***** mongoose.connection >server.js', data);
});
var cors = require('cors');
app.use(cors());

// var schema = new Schema({ name: 'string', size: 'string' });
// var Tank = mongoose.model('Tank', schema);
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
  TeamPref.find(function (err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImJvZHlQYXJzZXIiLCJ1dGlsIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJjb25uZWN0IiwiZGIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImRhdGEiLCJsb2ciLCJjb3JzIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldCIsImdldFRhbmsiLCJsaXN0ZW4iLCJ0ZWFtc1NjaGVtYSIsInVzZXIiLCJTdHJpbmciLCJ0ZWFtIiwiZ2FtZVdhdGNoZWQiLCJOdW1iZXIiLCJUZWFtUHJlZiIsIm1vZGVsIiwicG9zdCIsInJlcSIsInJlcyIsImJvZHkiLCJjcmVhdGUiLCJlcnIiLCJzdWNjZXNzIiwiZmluZCIsInRhbmsiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsTUFBTUYsU0FBVjtBQUNBLElBQUlHLGFBQWFGLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUlHLE9BQU9ILFFBQVEsa0JBQVIsQ0FBWDtBQUNBLElBQUlJLFdBQVdKLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBSUssU0FBU0QsU0FBU0MsTUFBdEI7QUFDQUQsU0FBU0UsT0FBVCxDQUFpQixnQ0FBakI7QUFDQSxJQUFJQyxLQUFLSCxTQUFTSSxVQUFsQjtBQUNBRCxHQUFHRSxFQUFILENBQU0sT0FBTixFQUFlQyxRQUFRQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLEVBQTRCLG1CQUE1QixDQUFmO0FBQ0FILEdBQUdNLElBQUgsQ0FBUSxNQUFSLEVBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QkosVUFBUUssR0FBUixDQUFZLHNDQUFaLEVBQW1ERCxJQUFuRDtBQUNELENBRkQ7QUFHQSxJQUFJRSxPQUFPaEIsUUFBUSxNQUFSLENBQVg7QUFDQUMsSUFBSWdCLEdBQUosQ0FBUUQsTUFBUjs7QUFFQTtBQUNBO0FBQ0FmLElBQUlnQixHQUFKLENBQVFmLFdBQVdnQixJQUFYLEVBQVI7QUFDQWpCLElBQUlnQixHQUFKLENBQVFmLFdBQVdpQixVQUFYLENBQXNCLEVBQUVDLFVBQVUsSUFBWixFQUF0QixDQUFSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbkIsSUFBSW9CLEdBQUosQ0FBUSxHQUFSLEVBQWFsQixLQUFLbUIsT0FBbEI7O0FBRUFyQixJQUFJc0IsTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQmIsVUFBUUssR0FBUixDQUFZLHFDQUFaO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJUyxjQUFjLElBQUluQixNQUFKLENBQVc7QUFDM0JvQixRQUFNQyxNQURxQjtBQUUzQjtBQUNBQyxRQUFNRCxNQUhxQjtBQUkzQkUsZUFBYUM7QUFKYyxDQUFYLENBQWxCO0FBTUEsSUFBSUMsV0FBVzFCLFNBQVMyQixLQUFULENBQWUsVUFBZixFQUEyQlAsV0FBM0IsQ0FBZjtBQUNBOztBQUVBO0FBQ0F2QixJQUFJK0IsSUFBSixDQUFTLFFBQVQsRUFBbUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ3BDeEIsVUFBUUssR0FBUixDQUFZLDZCQUFaLEVBQTJDa0IsSUFBSUUsSUFBL0M7QUFDQUwsV0FBU00sTUFBVCxDQUFnQixFQUFDWCxNQUFNLE9BQVAsRUFBZ0JFLE1BQU1NLElBQUlFLElBQUosQ0FBU1IsSUFBL0IsRUFBcUNDLGFBQWEsQ0FBbEQsRUFBaEIsRUFBc0UsVUFBU1MsR0FBVCxFQUFjQyxPQUFkLEVBQXVCO0FBQzNGLFFBQUlELEdBQUosRUFBVTNCLFFBQVFLLEdBQVIsQ0FBWSxPQUFaO0FBQ1Y7QUFDRCxHQUhEO0FBSUFlLFdBQVNTLElBQVQsQ0FBYyxVQUFTRixHQUFULEVBQWNHLElBQWQsRUFBb0I7QUFDaEMsUUFBSUgsR0FBSixFQUFTM0IsUUFBUUssR0FBUixDQUFZLE9BQVo7QUFDVEwsWUFBUUssR0FBUixDQUFZLHdDQUFaLEVBQXNEeUIsSUFBdEQ7QUFDQU4sUUFBSU8sSUFBSixDQUFTRCxJQUFUO0FBQ0QsR0FKRDtBQUtELENBWEQ7O0FBYUF2QyxJQUFJb0IsR0FBSixDQUFRLFFBQVIsRUFBa0IsVUFBU1ksR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ25DSixXQUFTUyxJQUFULENBQWMsVUFBU0YsR0FBVCxFQUFjRyxJQUFkLEVBQW9CO0FBQ2hDLFFBQUlILEdBQUosRUFBUzNCLFFBQVFLLEdBQVIsQ0FBWSxPQUFaO0FBQ1RMLFlBQVFLLEdBQVIsQ0FBWSx3Q0FBWixFQUFzRHlCLElBQXREO0FBQ0FOLFFBQUlPLElBQUosQ0FBU0QsSUFBVDtBQUNELEdBSkQ7QUFLRCxDQU5EIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi9saWIvdXRpbGl0eS5qcycpO1xudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnKTtcbnZhciBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgY29uc29sZS5sb2coJyoqKioqIG1vbmdvb3NlLmNvbm5lY3Rpb24gPnNlcnZlci5qcycsZGF0YSk7XG59KTtcbnZhciBjb3JzID0gcmVxdWlyZSgnY29ycycpXG5hcHAudXNlKGNvcnMoKSlcblxuLy8gdmFyIHNjaGVtYSA9IG5ldyBTY2hlbWEoeyBuYW1lOiAnc3RyaW5nJywgc2l6ZTogJ3N0cmluZycgfSk7XG4vLyB2YXIgVGFuayA9IG1vbmdvb3NlLm1vZGVsKCdUYW5rJywgc2NoZW1hKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vIGFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEscmVzKSB7XG4vLyAgIFRhbmsuY3JlYXRlKHsgc2l6ZTogJ3NtYWxsJyB9LCBmdW5jdGlvbiAoZXJyLCBzbWFsbCkge1xuLy8gICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIFxuLy8gICAgIGNvbnNvbGUubG9nKCcqKioqKioqKiogc2F2ZWQgKioqKioqKioqKiAgPm1vZGVsL3NhbXBsZS5qcyAtLS0+Jywgc21hbGwpO1xuLy8gICB9KTtcblxuLy8gICBUYW5rLmZpbmQoZnVuY3Rpb24oZXJyLCB0YW5rKSB7XG4vLyAgICAgaWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4vLyAgICAgY29uc29sZS5sb2coJyoqKioqKiB0YW5rICoqKioqID5tb2RlbC9jb25maWcuanMgLS0+JywgdGFuayk7XG4vLyAgICAgLy8gcmVzLnNlbmQodGFuayk7XG4vLyAgICAgcmVzLnNlbmQoJ3RhbmsnKTtcbi8vICAgfSlcbi8vIH0pXG5cbmFwcC5nZXQoJy8nLCB1dGlsLmdldFRhbmspO1xuXG5hcHAubGlzdGVuKDMwMDAsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgMzAwMCEnKTtcbn0pXG5cbnZhciB0ZWFtc1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VyOiBTdHJpbmcsXG4gIC8vIHVzZXJuYW1lOiB7dHlwZTogU3RyaW5nLCBpbmRleDoge3VuaXF1ZTogdHJ1ZX0gfSxcbiAgdGVhbTogU3RyaW5nLFxuICBnYW1lV2F0Y2hlZDogTnVtYmVyXG59KVxudmFyIFRlYW1QcmVmID0gbW9uZ29vc2UubW9kZWwoJ1RlYW1QcmVmJywgdGVhbXNTY2hlbWEpO1xuLy8gYXBwLmdldCgnL3RlYW1zJyxmdW5jdGlvbihyZXEsIHJlcykge1xuXG4vLyB9KSBcbmFwcC5wb3N0KCcvdGVhbXMnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygnKioqKiovLy8vLy8vLy8vLy8vLyByZXMgLS0+JywgcmVxLmJvZHkpO1xuICBUZWFtUHJlZi5jcmVhdGUoe3VzZXI6ICdzdGV2ZScsIHRlYW06IHJlcS5ib2R5LnRlYW0sIGdhbWVXYXRjaGVkOiAzfSwgZnVuY3Rpb24oZXJyLCBzdWNjZXNzKSB7XG4gICAgaWYgKGVycikgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCcqKioqKiBwb3N0IHRvIC90ZWFtcyBzdWNjZXNzZnVsID5zZXJ2ZXIuanMgLS0+ICcgKyByZXEuYm9keSk7XG4gIH0pO1xuICBUZWFtUHJlZi5maW5kKGZ1bmN0aW9uKGVyciwgdGFuaykge1xuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKiogdGFuayAqKioqKiA+bW9kZWwvY29uZmlnLmpzIC0tPicsIHRhbmspO1xuICAgIHJlcy5zZW5kKHRhbmspO1xuICB9KVxufSlcblxuYXBwLmdldCgnL3RlYW1zJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgVGVhbVByZWYuZmluZChmdW5jdGlvbihlcnIsIHRhbmspIHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICBjb25zb2xlLmxvZygnKioqKioqIHRhbmsgKioqKiogPm1vZGVsL2NvbmZpZy5qcyAtLT4nLCB0YW5rKTtcbiAgICByZXMuc2VuZCh0YW5rKTtcbiAgfSlcbn0pXG5cblxuXG4iXX0=