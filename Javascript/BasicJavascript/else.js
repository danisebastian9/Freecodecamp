
/* When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen.
With an else statement, an alternate block of code can be executed. */
if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
}
 
// Exercise
function testElse(val){
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    } return result;
}
console.log(testElse(6)); // 6 is more than 5, "Bigger than 5"
console.log(testElse(5)); // 5 is not more than 5, "5 or Smaller"
console.log(testElse(3)); // 3 is not more than 5, "5 or Smaller"


// Else if statement. Used when multiple conditions needs to be addressed. 
function elseIfTest(num){
    if (num > 15) {
        return "Bigger than 15";
    } else if (num < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 15"
    }
}
console.log(elseIfTest(5)); // "Between 5 and 15"
console.log(elseIfTest(20));// "Bigger than 15"
console.log(elseIfTest(4)); // "Smaller than 5"

// Exercise
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5"
    } else {
      return "Between 5 and 10";
    }
}
console.log(testElseIf(7)); //Between 5 and 10
console.log(testElseIf(0)); //Smaller than 5
console.log(testElseIf(5)); //Between 5 and 10
console.log(testElseIf(10)); //Between 5 and 10
console.log(testElseIf(12)); //Greater than 10
  

// if, if else order. The function is executed from top to bottom. 
/* Example. Both functions are provided with the same values but with
different orders. 
If it's executed the results are going to be different.
foo(0) // "Less than one"
bar(0) // "Less than two" 
*/
function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
}
console.log(foo(0)) // "less than one"
// And the second just switches the order of the statements:
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
console.log(bar(0)) // "less than two"

/* In this example it's going to first prompt "Less than 5" if the value is less then 5,
but if that statement is false, it's going to pass to the less than 10 value. 
*/
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(4)); // 4 is less than 5 and also less than 10, but as the first statement is true, the second one is not prompted. 
console.log(orderMyLogic(6)); // 6 is not less than 5, so the second statement is runned making it true for "less than 10"
console.log(orderMyLogic(11)); // None of the statements are true, not even less than 5 or less than 10. so "Greater than or equal to 10 is prompted"


// if/else statements can be chained together for complex logic.
if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
// . . .
  } else {
    statementN
}

// Exercise. 
function testSize(num) {
  if ( num < 5){
    return "Tiny";
  } else if (num < 10){
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(0)); // Tiny
console.log(testSize(4)); // Tiny
console.log(testSize(5)); // Small
console.log(testSize(8)); // Small
console.log(testSize(10));// Medium
console.log(testSize(14));// Medium
console.log(testSize(15));// Large
console.log(testSize(17));// Large
console.log(testSize(20));// Huge
console.log(testSize(25));// Huge


// 