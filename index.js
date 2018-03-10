import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import postsRouter from './api/drivers';


dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/drivers', postsRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
