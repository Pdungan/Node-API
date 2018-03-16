
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RacesSchema = new Schema({
  race: {type: String, required:true},
  finish:{type: Number,min: 1, max: 43,required: true},
  });

 const DriverSchema = new Schema({
     dname: {type: String, required:true},
     team:  {type: String, optional:true},
     aka:  {type: String, required:true},
     carNumber:  {type: Number,  min: 1,max: 100,required: true},
     race: [RacesSchema],
 });
  

DriverSchema.path('team').validate(function (team) {
    if(team === "Ford"||team === "Toyota" ||team === "Chevrolet"){
        return true;
    }
    return false;

});

export default mongoose.model('drivers', DriverSchema);


