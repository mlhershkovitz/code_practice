//module practice

//export module
const Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

//retrieve info from module, would be on the server
//was on server when practicing online
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
};

console.log(displayAirplane());

//export module
const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
  return this.myAirplane;
    }//end anonymous function
};//end object

//server
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());


//export default practice
let Airplane = {};

Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;

