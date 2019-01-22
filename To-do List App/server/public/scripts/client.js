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
    }).then(function (response) {
        console.log('GET request response', response);
        //call function to append tasks to the dom        
    }); // end ajax GET
}; // end getTasks


//ajax POST - to add a task to the server as well
function addTask() {
    console.log('in addTask');
    const objectToSend = {
        category: $(`#categoryIn`).val(),
        task: $(`#taskIn`).val(),
        notes: $(`#notesIn`).val(),
        complete: $(`#completeIn`).val()
    } //end object to send
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: objectToSend
    }).then(function (response) {
        console.log('in POST back from server', response);
        //call function to empty inputs
        emptyInputs();
        //call appending function
    }).catch(function (err) {
        console.log('error in POST', response);
    }); // end ajax POST
}; // end addTask

//function to empty input fields
function emptyInputs() {
        $(`#categoryIn`).val(''),
        $(`#taskIn`).val(''),
        $(`#notesIn`).val(''),
        $(`#completeIn`).val('')
}; //end empty inputs

// function to append all tasks to dom
