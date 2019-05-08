const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').configure();
app.use(helmet());
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI,(err,res) => {
    if(err){
        console.log("Error",err);
    }
    console.log(`mongodb is connected to ${MONGODB_URI}`)
});

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`app is listening to port ${PORT}`);
})