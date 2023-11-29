import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err)
})

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})