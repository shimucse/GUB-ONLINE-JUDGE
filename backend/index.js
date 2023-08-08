const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const os = require('os');
const mongodb = require('mongodb');



mongoose.connect('mongodb://localhost/GubOJ',
{
  useNewUrlParser: true,
  
},console.log("sucessfully connected to db")
);


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/codeSubmit',require('./routes/codeSubmit'));

app.use('/problemAdd', require('./routes/problemAdd'));
app.use('/RegistraionAndLogin', require('./routes/RegistraionAndLogin'));
app.use('/contestProblem', require('.//routes/contestProblem'))

app.listen(5000,()=>{
    console.log("listening on port 5000")
})

