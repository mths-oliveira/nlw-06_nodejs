import 'reflect-metadata';
import './database';

import cors from 'cors';
import { config } from 'dotenv';
import express, { json } from 'express';

import TagsRoute from './routes/TagsRoute';
import UsersRoute from './routes/UsersRoute';
import ComplimentsRoute from './routes/ComplimentsRoute';

config();

const app = express();

app.use(cors());
app.use(json());

app.use(TagsRoute);
app.use(UsersRoute);
app.use(ComplimentsRoute);

app.listen(3333);
