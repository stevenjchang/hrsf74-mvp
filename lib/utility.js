var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({ name: 'string', size: 'string' });
var Tank2 = mongoose.model('Tank2', schema);
var getTank = function(req,res) {
  Tank2.create({ size: 'small' }, function (err, small) {
    if (err) console.log('error');
    
    console.log('********* saved **********  >model/sample.js --->', small);
  });

  Tank2.find(function(err, tank) {
    if (err) console.log('error');
    console.log('****** tank ***** >model/config.js -->', tank);
    res.send(tank);
  })
}

module.exports.getTank = getTank;