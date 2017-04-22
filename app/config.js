var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost:27017/test');
// var connection = mongoose.createConnection('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(data) {
  console.log('*******************************************',data);
});

module.export = db;


