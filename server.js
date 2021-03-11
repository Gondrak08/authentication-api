const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const data = require("./data.json");

const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    () => console.log('connected to db!'))
    
    
//Middleware
app.use(express.json());    
app.use('/api/user', authRoute);
    


app.listen(3000, function () {
    console.log('Server is running')
});

