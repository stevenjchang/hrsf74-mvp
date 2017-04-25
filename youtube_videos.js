var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var YouTubeIDSchema = new Schema({
  team: String,
  gameLinks: String,
})

exports.YouTubeID = mongoose.model('YouTubeID', YouTubeIDSchema);

YouTubeID.create({
  team: 'celtics', 
  gameLinks: [qTbZU0IUrQI, gN-TqmHx8E0, FIDrNbu0lYs]
})
YouTubeID.create({
  team: 'warriors',
  gameLinks: [Ho7r5n9Tflk, kBQnzLnh2Ac, 9OeHxYpRmAE]
})

// module.exports = {
//   videoSchema: videoSchema,
//   Video: Video
// }

