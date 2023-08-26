import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes/router';
import fileUpload from 'express-fileupload';
const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(fileUpload());

app.use((error: Error, _: Request, res: Response) => {
    res.status(500).send(error);
})

app.use('/api/', router);

export default app;