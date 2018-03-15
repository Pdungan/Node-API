
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RacesSchema = new Schema({
  race: {type: String, required:true},
  });

 const DriverSchema = new Schema({
     dname: {type: String, required:true},
     team:  {type: String, optional:true},
     aka:  {type: String, required:true},
     nascarPoints:  {type: String, required:true},
     carNumber:  {type: String, required:true},
     race: [RacesSchema],
 });

export default mongoose.model('drivers', DriverSchema);


