//requires/constants
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const todoRouter = require('./routes/todo.router');

//connect apps being used
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/todo', todoRouter);

//start listening for requests on a specific port
app.listen( PORT, function(){
    console.log('listening on PORT', PORT); 
});//end listener