// ES6 provides a new syntax to create objects, using the class keyword.

//In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//The class syntax simply replaces the constructor function creation:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus) // { targetPlanet: 'Jupiter' }


// EXERCISE: Creates an object with property name and value "carrot"
class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

