import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import carRouter from './routes/car.router';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);

app.use(errorMiddleware);

export default app;
