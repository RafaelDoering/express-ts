import * as express from 'express';

import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import apiRouter from './src/routers/api.router';

dotenv.config();

const db = mongoose.createConnection(
  `mongodb://${process.env.MONGO_DOCKER_URL}/${process.env.MONGO_DOCKER_DB}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

db.on(
  'error',
  () => {
    console.log('Error connecting to database.');
  },
);

db.once(
  'open',
  () => {
    console.log('Connected to database.');
  },
);

const app = express();

app.use('/api', apiRouter);

app.listen(
  process.env.PORT,
  () => console.log(`Server listening on port ${process.env.PORT}.`),
);
