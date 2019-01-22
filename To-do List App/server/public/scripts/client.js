$(document).ready(readyNow);

function readyNow() {
    console.log('Client is working');
//activate add button
    $('#newTaskButton').on('click', addTask);

//call the GET request function

// call function that empties inputs
}; // end readyNow

//ajax GET request to server for tasks
function getTasks() {
    console.log('in getTasks for ajax GET request');
    $.ajax({
        method: 'GET',
        url: '/todo'
    }).then (function (response) {
        console.log('GET request response', response);
        //call function to append tasks to the dom        
    });// end ajax GET
}; // end getTasks

