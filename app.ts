import * as express from 'express';

import * as dotenv from 'dotenv';

import apiRouter from './src/routers/api.router';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.listen(
  process.env.PORT,
  () => console.log(`Server listening on port ${process.env.PORT}.`),
);
