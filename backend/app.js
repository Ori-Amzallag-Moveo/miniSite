import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();
const port = 3000;

app.use(cors());

app.use('/api/leagues', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
