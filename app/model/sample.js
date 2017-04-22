var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);




Tank.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  
  console.log('********* saved **********  >model/sample.js');
})