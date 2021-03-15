// Functions will be called with the functionName() And all the data inside that function will be printed or executed.
function functionName() {
    console.log("Hello World");
  }
functionName()

//Test
  function reusableFunction() {
    console.log("Hi World");
}
reusableFunction()

//Test2
function myNewFunction() {
    console.log("This is my new function that will print out the present message");
}
myNewFunction()


// Passing values to functions with arguments 
function testFun(param1, param2) {
    console.log(param1, param2);
  }
testFun("Hello","World"); // Response is "Hello World" Because when the function is called, it's going to take the param1 and param2 assigned values

//Sum 2 arguments with a function
function functionWithArgs(num1,num2){
    console.log(num1 + num2);
}
functionWithArgs(7,9); // Output is "16". The (7)"num1" + (9)"num2" assigned arguments

//multiply 2 arguments with a function
function multiplyArgs(mult1,mult2){
    console.log(mult1 * mult2);
}
multiplyArgs(5,10) // Response is 50



// Global scope and functions. Variable inside function without "var" is a global variable.
//Global variable - can be accessed from any part of the code.

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



// Local Scope and functions. 
// Local variable - created inside a function and can be just accesed from its function or a connected function.

function myTest() {
    var loc = "foo";
    console.log(loc); // "foo" will be executed as it's prompted from inside the function.
  }
  myTest(); // logs "foo"
  console.log(loc); // loc is not defined

// Local response working inside the function but external failing for calling a local variable from the outside.
function myLocalScope() {
    var myVar = "test";
    console.log('inside myLocalScope', myVar); 
  }
myLocalScope(); // "Inside myLocalScope test" valid response
console.log('outside myLocalScope', myVar); // ReferenceError: myVar is not defined. For calling the variable from the outside. 



// Local variable will replace global variable value. 
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
// The response for myFun is now "Head"

// replacing global variable value with the local one. 
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater"
  return outerWear;
}
console.log(myOutfit()); // var outerWear is now replaced with "sweater"


// Return pass values into a function
function plusThree(num) {
    return num + 3;
  }
  var answer = plusThree(5); // 8
console.log(answer)

//Return values. 
function Greet(name){
    return "Hello, my name is" + name;
}
console.log(Greet("Daniel"))

//Exercise Return. 
function autosLujo(marca){
    return "Para mi la mejor marca es " + marca + ".";
}
console.log(autosLujo("Ferrari"))


//Times five return exercise
function timesFive(num){
    return num * 5;
}
var result = timesFive(5);
console.log(result)

// Undefined value returned from a function
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

// Exercise

var sum = 0;

function addThree() {
  sum = sum + 3;
}
//addThree(); // Here the response is 3 if the function is called, if not is 0. 
console.log(sum) // Here the "sum" is 0 because the function is not called yet

function addFive(){
  sum = sum + 5;
}
console.log(addThree()); //Calling the function will return "undefined"
console.log(addFive());  //Calling the function will return "undefined"
console.log(sum); // With the "sum" after both functions are called, both values are summed and the response is 8


// Assignment with a Returned Value. This means we can take the function response and assign it to a variable. 
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7); // function "processArg" with argument (7) was assigned with the variable  processed. So the returned variable was assigned to the variable. 
console.log(processed);

//Example of returned value assigned to the variable. 
var ourSum = 0;

function sum(num1,num2){
  return num1 + num2;
}
ourSum = sum(5,12); // ourSum is now 17
console.log(ourSum)
