/* SWITCH: 
- Se utiliza para hacer diferentes acciones basadas en diferentes condiciones.
- La condicion se evalua una unica vez
- Si hay alguna coincidencia con algun valor, se ejecuta el codigo de bloque 
correspondiente
- BREAK sale del bloque switch

SINTAXIS:
switch (expresion){
    case valor_1:
        Instrucciones para valor_1;
        break;
    case valor_n:
        Instrucciones para valor_n;
        break;
    default:
        Instrucciones en caso de que no se cumpla ninguna condicion;
}
*/

//EXAMPLE

var calificacion = 0;
var mensaje = "";
switch(calificacion){
    case 0:
        mensaje = "Deficiente";
        break;
    case 1:   // Cuando las instrucciones para valor se repiten se pueden borrar 
    case 2:    
    case 3:   // y dejar la ultima instruccion de ese mismo caso para ahorrar espacio. 
        mensaje = "Insuficiente";
        break;
    case 4:
    case 5:
    case 6:
        mensaje = "Aceptable";
        break; 
    case 7:
    case 8:
        mensaje = "Sobresaliente";
        break; 
    case 9:
    case 10:
        mensaje = "Excelente";
        break; 
    default:
        mensaje = "Valor no valido para calificacion"
}
console.log(mensaje)


// Test assigning a function to give a code to each secret word


function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        console.log("alpha");
        break;
      case 2:
        console.log("beta");
        break; 
      case 3:
        console.log("gamma")
        break;
      case 4:
        console.log("delta")
        break;
    }
    return answer;
}
caseInSwitch(4); // "delta"
caseInSwitch(3); // "gamma"
caseInSwitch(2); // "beta"
caseInSwitch(1); // "Alpha"

// Example
var lowercaseLetter = "animal"
switch(lowercaseLetter){
  case "animal": 
    console.log("A");
    break;
  case "bike":
    console.log("B");
    break;
}
console.log(lowercaseLetter)


// Exercise
function caseInSwitch(val) {
    var answer = "";
    switch(val){
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;
}
console.log(caseInSwitch(1)); // "alpha"
console.log(caseInSwitch(2)); // "beta"
console.log(caseInSwitch(3)); // "gamma"
console.log(caseInSwitch(4)); // "delta"


/* default statement can be added so it's going to be executed if there's no matching "case" statement. 
switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
  ...
    default:
      defaultStatement;
      break;
}
*/ 
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff"
        break; // break can be skipped in the last case for default, but for best practice, it's better to add it. 
    }
    return answer;
}
console.log(switchOfStuff("a")); // "apple"
console.log(switchOfStuff("b")); // "bird"
console.log(switchOfStuff("c")); // "cat"
console.log(switchOfStuff("d")); // "stuff"
console.log(switchOfStuff(4));   // "stuff"


// Multiple identical options in switch statements
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}


// Exercise: 
function sequentialSizes(val) {
    var answer = "";
    switch (val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
      default:
        answer = "Not under range";
        break;
    }
    return answer;
}
console.log(sequentialSizes(1)); // "Low"
console.log(sequentialSizes(4)); // "Mid"
console.log(sequentialSizes(9)); // "High"
console.log(sequentialSizes(10));// "Not under range"


/*If you have many options to choose from, 
a switch statement can be easier to write than many chained 
if/else if statements. The following:
*/
if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
}
// can be replaced with:
switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
}


// EXERCISE. 
function chainToSwitch(val) {
var answer = "";
switch (val){
    case "bob":
        answer = "Marley";
        break;
    case 42:
        answer = "The Answer";
        break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
        break;
    default:
        answer = "There's no clue for this one"
    }
    return answer;   
}
console.log(chainToSwitch("bob"));   // "Marley"
console.log(chainToSwitch(42));      // "The Answer"
console.log(chainToSwitch(1));       // "There is no #1"
console.log(chainToSwitch(99));      // "Missed me by this much!"
console.log(chainToSwitch(7));       // "Ate Nine"
console.log(chainToSwitch("John"));  // "There's no clue for this one"
console.log(chainToSwitch(156));     // "There's no clue for this one"


//
