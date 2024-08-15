import express from 'express'
import {config} from 'dotenv'
import { connectDB } from './config/DBConnect.js';
config();

const app = express();
const PORT = process.env.PORT || 5000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running on ${PORT}`);
    })
})