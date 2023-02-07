// TODO: Import the parent class
const Vehicle = require('./vehicle');
class car extends vehicle{

}
const vehicle = require('./vehicle')
// TODO: Create a `Boat` class that extends the `Vehicle` class
//created a boat subclass that extends the vehicle class. 


class Boat extends Vehicle{
  constructor(id,type, crew){
  this.type= type
  this.crew= crew
  super(id,0, "shhhh")
}
useHorn(){
  console.log(this.sound)
}
crewSoundOff(){
  for(crewMember of crew)
}
const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
