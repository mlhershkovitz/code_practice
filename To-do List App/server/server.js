//requires
const express = require('express');
const bodyParser = require('body-parser');

//globals
const app = express();
// need new port


//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//start server
app.listen( PORT, function(){
    console.log('server is up on PORT'); 
});