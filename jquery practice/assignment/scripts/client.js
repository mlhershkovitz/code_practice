$(document).ready(readyNow);

function readyNow() {
  console.log('JS Working');
  $('#addCarButton').on('click', addCar);

}

class Car {
  constructor(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
  } //end constructor
} // end Car class

let garage = [];
let maxCars = 2;

function newCar(year, make, model) {
  console.log('in newCar:', year, make, model);
  garage.push(new Car(year, make, model));
  return true;
}; // end newCar

function addCar() {
  if (garage.length < maxCars) {
    console.log('add car clicked');
    let yearIn = $('#yearIn').val();
    let makeIn = $('#makeIn').val();
    let modelIn = $('#modelIn').val();
    newCar(yearIn, makeIn, modelIn);
    $('#carList').append(`<li>${yearIn}, ${makeIn}, ${modelIn}</li>`)
  } else {
    console.log('Garage is full');
    return false;
  }
  $('#yearIn').val('');
  $('#makeIn').val('');
  $('#modelIn').val('');
};

// function garageFull(addCar) {
//   if (garage.length < maxCars) {
//     addCar();
//     return true;
//   }
//   else {
//     console.log('Garage is full');
//     return false;
//   }
// };