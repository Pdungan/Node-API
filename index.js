import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import driversRouter from './api/drivers';
import mongoose from 'mongoose';
import {loadDrivers} from './driversData';


dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/drivers', driversRouter);
app.use(express.static('public'));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

// Connect to database
mongoose.connect(process.env.mongoDB);


// Populate DB with sample data
if (process.env.seedDb) {
  loadDrivers();
}

