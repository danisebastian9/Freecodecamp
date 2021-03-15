/* Global Scope and functions. Variable inside function without "var" is a global variable.
 Global variable - can be accessed from any part of the code.
 Local variable - created inside a function and can be just accesed from its function or a connected function.*/

 function fun1() {
    oopsGlobal = 5; // Without "var" the variable inside the function becomes a global Variable
  }
  var myGlobal = 10; // myGlobal variable is assigned with "var" outside the function confirming it as a Global variable.
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }




// Example Global Variable.
var variableGlobal = "This is Global";          // Global variable. 
function myFunction(){
    console.log(variableGlobal);                // Internal function accessing external global variable
 
    variableGlobal = "This is Global modified"  // Internal variable editing external global variable
    console.log(variableGlobal);
}
myFunction(); // console.log(variableGlobal)
console.log(variableGlobal); // The global variable created outside the function CAN be called inside the function and outside it. 




// Example local variable. 
var variableGlobal = "This is Global"; 
var myFunction = function(){             // Is equal: function myFunction()
    var variableLocal = "This is local"; // Local Variable
    console.log(variableLocal); // Valid calling the variable from inside. 
}
//console.log(variableLocal);  The local variable created inside the function, CANT be called from outside the function
myFunction(); // console.log(variableLocal)




// Example global variable inside function without "var"
var variableGlobal = "This is Global"; 
function myFunction(){
    noVarGlobal = "This is a global variable for not having 'var' inside the function";
}
console.log(noVarGlobal); // The variable inside the function without "var" becomes global and can be called from outside the function. 
myFunction(); // console.log(noVarGlobal)


// Javascript scope will execute from inside to outside.
var variableGlobal = "This is Global"; 
function myFunction(){
    var localVar = "This is local";
    
    function localFunc(){
        var localVar = "This is local variable inside local function"
        console.log(localVar) // Will look for "localVar" inside "localFunc" if not availabel it'll look outside.
    }
    localFunc();
}
myFunction();

// Javascript scope will execute from inside to outside and not viceversa.
var variableGlobal = "This is Global"; 
function myFunction(){
    var localVar = "This is local";
    
    function localFunc(){
        console.log(localVar) // As there's no match through the inside function it's going to look for the outside variable. 
    }
    localFunc();
}
myFunction();


// Protect code so third parties are unable to access what's inside, but what's inside is able to access third parties. 
//(function(){Code goes here}())

(function(){
    var variableGlobal = "This is Global"; 
    function myFunction(){
        var localVar = "This is local";
    
        function localFunc(){
            console.log(localVar) // As there's no match through the inside function it's going to look for the outside variable. 
        }
        localFunc();
    }
    myFunction();
}())



// Testing global and local variables. 

var outsideVar = "This is the outside variable"
function testFunction(){
    var insideVar = "This is the inside local variable"
    console.log(insideVar)
    var outsideVar = "This is the new outside variable from inside"
    console.log(outsideVar)
}
testFunction()

//Test local variable replacing. 
var numberVar = 23

function newNumber(){
    var numberVar = 45
    console.log(nnumberVar)
}
newNumber()

//Return values. 
function Greet(name){
    return "Hello, my name is" + name;
}
console.log(Greet("Daniel"))

//Another example long way:
function sumSquares(a,b){
    /*var squareA = a*a;
    var squareB = b*b;
    var summedSquares = squareA + squareB;
    return sumSquares;*/
    return (a*a) + (b*b); //mismo resultado se ahorra codigo. 
}
console.log(sumSquares(12,2))


//Exercise Undefined functions. 

var carro = " ";
function unCarro(){
  carro += "Ferrari "; // variable global por no llamar a var y asi mismo se puede llamar desde afuera de la funcion
}
unCarro()

function dosCarros(){
  carro = carro + "Porsche ";
}
dosCarros()

console.log(unCarro())
console.log(dosCarros())
console.log(carro)

