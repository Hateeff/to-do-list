const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//method-override middleware
const methodOverride = require('method-override');
app.use(methodOverride('_method',{methods: ['POST','GET']}));
 
const router = require('./routes/tasks');

 // set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ToDo');

app.use('/', router);

//start server
app.listen(3000, () =>console.log('express started!'));