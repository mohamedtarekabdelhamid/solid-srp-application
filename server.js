import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


import profileRoutes from './routes/profileRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/profile', profileRoutes);

app.get(
    '/',
    (req, res) => {
        res.status(200).send('SRP server is running...')
    }
)

app.listen(PORT)