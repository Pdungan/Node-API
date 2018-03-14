const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const RacesSchema = new Schema({
  body: {type: String, required:true},
  });

 const DriverSchema = new Schema({
     title: {type: String, required:true},
     link:  {type: String, optional:true},
     username:  {type: String, required:true},
     comments: [CommentSchema],

export default mongoose.model('posts', PostSchema);
