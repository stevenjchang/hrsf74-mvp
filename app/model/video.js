const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var videoSchema = new Schema({
  team: String,
  name: String,
  games: Number
})

var Video = mongoose.model('Video', videoSchema);

module.exports = {
  videoSchema: videoSchema,
  Video: Video
}