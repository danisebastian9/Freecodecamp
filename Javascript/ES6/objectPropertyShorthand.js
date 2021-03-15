/*
    Write Concise Object Literal Declarations Using Object Property Shorthand
*/
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
// There's no need to add the redundancy property value, by adding it once, it's going to be added as value property too. 
const getMousePosition = (x, y) => ({ x, y });
console.log(getMousePosition)


// Creates an Object from variables: 
let marca = "volkswagen"
let color = "negro"
let tipo = "SUV"
let modelo = "Toureg"
const carro = { marca, color, tipo, modelo};
console.log(carro) // RESPONSE BELOW: 
/*
{ marca: 'volkswagen',
  color: 'negro',
  tipo: 'SUV',
  modelo: 'Toureg' }
*/


// EXERCISE: 
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,  // Automatically adds it as: name: "name"
      age,   //                           age: "age"
      gender,//                           gender: "gender"
    };
};
  
