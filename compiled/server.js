'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (data) {
  console.log('*******************************************', data);
});

// var bodyParser = require('body-parser');
var schema = new Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

app.get('/', function (req, res) {
  Tank.create({ size: 'small' }, function (err, small) {
    if (err) console.log('error');

    console.log('********* saved **********  >model/sample.js --->', small);
  });

  Tank.find(function (err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var teamsSchema = new Schema({
  user: String,
  team: String,
  gameWatched: Number
});
var TeamPref = mongoose.model('TeamPref', teamsSchema);
// app.get('/teams',function(req, res) {

// }) 
app.get('/teams', function (req, res) {
  TeamPref.create({ user: 'steve', team: 'okc', gameWatched: 3 }, function (err, success) {
    if (err) console.log('error');
    res.send('***** post to /teams successful >server.js -->');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiY29ubmVjdCIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJkYXRhIiwibG9nIiwic2NoZW1hIiwibmFtZSIsInNpemUiLCJUYW5rIiwibW9kZWwiLCJnZXQiLCJyZXEiLCJyZXMiLCJjcmVhdGUiLCJlcnIiLCJzbWFsbCIsImZpbmQiLCJ0YW5rIiwic2VuZCIsImxpc3RlbiIsInRlYW1zU2NoZW1hIiwidXNlciIsIlN0cmluZyIsInRlYW0iLCJnYW1lV2F0Y2hlZCIsIk51bWJlciIsIlRlYW1QcmVmIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLE1BQU1GLFNBQVY7QUFDQSxJQUFJRyxXQUFXRixRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQUlHLFNBQVNELFNBQVNDLE1BQXRCO0FBQ0FELFNBQVNFLE9BQVQsQ0FBaUIsZ0NBQWpCO0FBQ0EsSUFBSUMsS0FBS0gsU0FBU0ksVUFBbEI7QUFDQUQsR0FBR0UsRUFBSCxDQUFNLE9BQU4sRUFBZUMsUUFBUUMsS0FBUixDQUFjQyxJQUFkLENBQW1CRixPQUFuQixFQUE0QixtQkFBNUIsQ0FBZjtBQUNBSCxHQUFHTSxJQUFILENBQVEsTUFBUixFQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0JKLFVBQVFLLEdBQVIsQ0FBWSw2Q0FBWixFQUEwREQsSUFBMUQ7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSUUsU0FBUyxJQUFJWCxNQUFKLENBQVcsRUFBRVksTUFBTSxRQUFSLEVBQWtCQyxNQUFNLFFBQXhCLEVBQVgsQ0FBYjtBQUNBLElBQUlDLE9BQU9mLFNBQVNnQixLQUFULENBQWUsTUFBZixFQUF1QkosTUFBdkIsQ0FBWDs7QUFFQWIsSUFBSWtCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBU0MsR0FBVCxFQUFhQyxHQUFiLEVBQWtCO0FBQzdCSixPQUFLSyxNQUFMLENBQVksRUFBRU4sTUFBTSxPQUFSLEVBQVosRUFBK0IsVUFBVU8sR0FBVixFQUFlQyxLQUFmLEVBQXNCO0FBQ25ELFFBQUlELEdBQUosRUFBU2YsUUFBUUssR0FBUixDQUFZLE9BQVo7O0FBRVRMLFlBQVFLLEdBQVIsQ0FBWSxtREFBWixFQUFpRVcsS0FBakU7QUFDRCxHQUpEOztBQU1BUCxPQUFLUSxJQUFMLENBQVUsVUFBU0YsR0FBVCxFQUFjRyxJQUFkLEVBQW9CO0FBQzVCLFFBQUlILEdBQUosRUFBU2YsUUFBUUssR0FBUixDQUFZLE9BQVo7QUFDVEwsWUFBUUssR0FBUixDQUFZLHdDQUFaLEVBQXNEYSxJQUF0RDtBQUNBTCxRQUFJTSxJQUFKLENBQVNELElBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FaRDtBQWFBekIsSUFBSTJCLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDMUJwQixVQUFRSyxHQUFSLENBQVkscUNBQVo7QUFDRCxDQUZEOztBQUlBLElBQUlnQixjQUFjLElBQUkxQixNQUFKLENBQVc7QUFDM0IyQixRQUFNQyxNQURxQjtBQUUzQkMsUUFBTUQsTUFGcUI7QUFHM0JFLGVBQWFDO0FBSGMsQ0FBWCxDQUFsQjtBQUtBLElBQUlDLFdBQVdqQyxTQUFTZ0IsS0FBVCxDQUFlLFVBQWYsRUFBMkJXLFdBQTNCLENBQWY7QUFDQTs7QUFFQTtBQUNBNUIsSUFBSWtCLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNuQ2MsV0FBU2IsTUFBVCxDQUFnQixFQUFDUSxNQUFNLE9BQVAsRUFBZ0JFLE1BQU0sS0FBdEIsRUFBNkJDLGFBQWEsQ0FBMUMsRUFBaEIsRUFBOEQsVUFBU1YsR0FBVCxFQUFjYSxPQUFkLEVBQXVCO0FBQ25GLFFBQUliLEdBQUosRUFBVWYsUUFBUUssR0FBUixDQUFZLE9BQVo7QUFDVlEsUUFBSU0sSUFBSixDQUFTLGdEQUFUO0FBQ0QsR0FIRDtBQUlELENBTEQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnKTtcbnZhciBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionLGRhdGEpO1xufSk7XG5cbi8vIHZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBzY2hlbWEgPSBuZXcgU2NoZW1hKHsgbmFtZTogJ3N0cmluZycsIHNpemU6ICdzdHJpbmcnIH0pO1xudmFyIFRhbmsgPSBtb25nb29zZS5tb2RlbCgnVGFuaycsIHNjaGVtYSk7XG5cbmFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEscmVzKSB7XG4gIFRhbmsuY3JlYXRlKHsgc2l6ZTogJ3NtYWxsJyB9LCBmdW5jdGlvbiAoZXJyLCBzbWFsbCkge1xuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKiogc2F2ZWQgKioqKioqKioqKiAgPm1vZGVsL3NhbXBsZS5qcyAtLS0+Jywgc21hbGwpO1xuICB9KTtcblxuICBUYW5rLmZpbmQoZnVuY3Rpb24oZXJyLCB0YW5rKSB7XG4gICAgaWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgY29uc29sZS5sb2coJyoqKioqKiB0YW5rICoqKioqID5tb2RlbC9jb25maWcuanMgLS0+JywgdGFuayk7XG4gICAgcmVzLnNlbmQodGFuayk7XG4gIH0pXG59KVxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAhJyk7XG59KVxuXG52YXIgdGVhbXNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdXNlcjogU3RyaW5nLFxuICB0ZWFtOiBTdHJpbmcsXG4gIGdhbWVXYXRjaGVkOiBOdW1iZXJcbn0pXG52YXIgVGVhbVByZWYgPSBtb25nb29zZS5tb2RlbCgnVGVhbVByZWYnLCB0ZWFtc1NjaGVtYSk7XG4vLyBhcHAuZ2V0KCcvdGVhbXMnLGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG5cbi8vIH0pIFxuYXBwLmdldCgnL3RlYW1zJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgVGVhbVByZWYuY3JlYXRlKHt1c2VyOiAnc3RldmUnLCB0ZWFtOiAnb2tjJywgZ2FtZVdhdGNoZWQ6IDN9LCBmdW5jdGlvbihlcnIsIHN1Y2Nlc3MpIHtcbiAgICBpZiAoZXJyKSAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgcmVzLnNlbmQoJyoqKioqIHBvc3QgdG8gL3RlYW1zIHN1Y2Nlc3NmdWwgPnNlcnZlci5qcyAtLT4nKTtcbiAgfSlcbn0pXG5cblxuXG4iXX0=