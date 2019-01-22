$(document).ready(readyNow);

function readyNow() {
    console.log('Client is working');
    //activate add button
    $('#newTaskButton').on('click', addTask);

    //call the GET request function
    getTasks();
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
        //append tasks to dom
        //make sure to empty first so no repeats
        $('tbody').empty();
        for (let todos of response) {
            let newRow = $(`
            <tr class= "seeTask">
                <td>${todos.category}</td>
                <td>${todos.task}</td>
                <td>${todos.notes}</td>
                <td>${todos.complete}</td> </tr>`);
                newRow.data('id', todos.id);
                $('tbody').append(newRow);
        }; //end appending loop
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
        getTasks();
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
