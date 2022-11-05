import { config } from 'dotenv';
import express from 'express';
import routes from './routes';

config();
const app = express();
const port = process.env.PORT || 3000;
routes(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
