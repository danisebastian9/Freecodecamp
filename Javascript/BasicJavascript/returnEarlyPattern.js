/* When a return statement is reached, 
the execution of the current function stops and control returns to the calling location.*/ 
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye") // this code is never reached as return exists the function. 
}
console.log(myFun()); //Output is "Hello" "World".


/* EXERCISE
- undefined = means the variable was not assigned with a value - 
    Javascript automatically assigns undefined meaning it's empty.
- null = means the variable is empty but with a purpose and assigned by
    the developer
*/
function abTest(a, b) {
    if (a < 0 || b < 0){
      return; // nothing was assigned to the response, it should be "undefined"
    } else {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
}
console.log(abTest(2,2)); // 8
console.log(abTest(-2,2));// undefined 
console.log(abTest(2,-2));// undefined
console.log(abTest(2,8)); // 18
console.log(abTest(3,3)); // 12
console.log(abTest(0,0)); // 0

