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