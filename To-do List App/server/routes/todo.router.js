//requires/constants
const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = express.Router();
const pg = require('pg');

//DB/SQL CONNECTION
const Pool = pg.Pool;
const pool = new Pool({
    database: 'todo-list',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}); //end connection

//check the connection
pool.on('connect', () => {
    console.log('successfully connected to DB');
}); //end successful connection
pool.on('error', (error) => {
    console.log('error connecting to DB', error);
}); //end error

//GET request for all task info


//POST request for new task info


//DELETE

//PUT