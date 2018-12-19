$(document).ready(readyNow);

function readyNow() {
  console.log('JS Working');
  $('#addCarButton').on('click', addCar);
  appendList();
  
}

class Car{
  constructor( year, make, model ){
    this.year = year;
    this.make = make;
    this.model = model;
  } //end constructor
} // end Car class

let garage = [];

function newCar( year, make, model ){
  console.log( 'in newCar:', year, make, model );
  garage.push( new Car( year, make, model ) );
  return true;
} // end newCar

function addCar() {
  console.log('add car clicked');
  let yearIn = $('#yearIn').val();
  let makeIn = $('#makeIn').val();
  let modelIn = $ ('#modelIn').val();
  newCar (yearIn, makeIn, modelIn);
}

function appendList() {
  console.log('hitting the append function');
}