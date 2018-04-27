import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import driversRouter from './api/drivers';
import mongoose from 'mongoose';
import {loadDrivers} from './driversData';
import {Mockgoose} from 'mockgoose';
import {loadUsers} from './userData';
import passport from './auth';
import usersRouth from "./api/users";

dotenv.config();

export const app = express(); 

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/drivers', driversRouter);
app.use(express.static('public'));
app.use('/api/users', usersRouth);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
// Connect to database
if (process.env.NODE_ENV == 'test') {
  // use mockgoose for testing
  const mockgoose=new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(()=>{
    mongoose.connect(process.env.mongoDB);
  });
} else {
  // use real deal for everything else
  mongoose.connect(process.env.mongoDB);
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});

app.use('/api/drivers', passport.authenticate('jwt', {session: false}), driversRouter);


// Populate DB with sample data
if (process.env.seedDb) {
  loadDrivers();
loadUsers();
}

