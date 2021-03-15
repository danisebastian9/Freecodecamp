//  Function will return a true value
function welcomeToBooleans(){
    return true
    //return false  also valid
}


// If statement, when prompted to true the function is executed and the return is true, 
//but if false, the function is not executed. 
function test (myCondition) {
    if (myCondition) {
       return "It was true";
    }
    return "It was false";
  }
  console.log(test(true));  // returns "It was true"
  console.log(test(false)); // returns "It was false"



// True or false with IF example. 
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false"
}
console.log(trueOrFalse(true))
console.log(trueOrFalse(false))


/* "==" equality operator returns a boolean true or false by comparing 2 values. 
"true" is returned when the value is equal and "false" when not */
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
1   ==  true // true
0   == false // true

function equalityTest(myVal) {
    if (myVal == 10) {
       return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest(10)) // if (x) value is 10 the result is "Equal", if any other the value is "Not Equal"


// It's able to compare different data types "numbers" - "strings"
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual("12"));  // Response is "Equal" even with comparing number with string


/* Strict equality operator "===" doesn't compare between different data types 
number 1 - string "1" not equal. */
3 ===  3   // true
3 === '3'  // false


function testStrict(val) {
    if (val === 7 ) { // Change this line
      return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("7")); //Response is "Not Equal" as strict comparison will not convert different data types.

// Test
function myCar(brand) {
    if (brand === "Brilliance") {
        return "Correct my Car is Brilliance";
    }
    return "Incorrect my car is not " + brand;
}
console.log(myCar("Brilliance")); 


// you can determine the type of a variable or value with "typeof"
typeof 3 // Returns "number"
typeof "3" // Returns "String"
console.log(typeof 4) // Returns "number"


//Equality == vs strict equality operatros ===
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed


//Strict equality operator exercise. 
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10")); // Not equal for the strick equality operator. 


//Comparison with the Inequality operator "!=" 
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
0 != true   // true


// != also compares different data type numbers and strings
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual("99")); // "false" response as "99" is Equal to 99.
console.log(testNotEqual(10)); // "true" response as 10 is not equal to 99.


// Strict inequality operator "!==" Data types are not converted
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true

// Exercise
function testStrictNotEqual(val) {
    if (val !== 17) {  // Value not equal to 17
      return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(17)); // false, 17 is "Equal" to 17
console.log(testStrictNotEqual("17")); // true, "17" string is not "Not Equal" to 17
console.log(testStrictNotEqual(12)); // true, 12 is "Not Equal" to 17


/* Greater than operator ">" 
If the number to the left is greater than the value to the right returns true, otherwise false */
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false

//Example
function testGreaterThan(val) {
    if (val > 100) {  // if value greater than 100 return "Over 100"
      return "Over 100";
    }
  
    if (val > 10) {  //if value greater than 10 return "Over 10"
      return "Over 10";
    }
  
    return "10 or Under"; // If not greater than 10 or 100 return "10 or under"
}
console.log(testGreaterThan(10)); // false, "10 or under"
console.log(testGreaterThan(20)); // true, "Over 10"
console.log(testGreaterThan(150));// true, "Over 100"


/* ">=" Greater than or equal
If the number to the left is greater or equal than the value to the right returns true, 
otherwise false */
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false


// Exercise
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Value greater or equal to 20
      return "20 or Over";
    }
  
    if (val >= 10) {  // Value greater or equal to 10
      return "10 or Over";
    }
  
    return "Less than 10"; //Value not greater or equal to 10
}
console.log(testGreaterOrEqual(10)); // true, "10 or Over"
console.log(testGreaterOrEqual(9)); // False, "Less than 10"
console.log(testGreaterOrEqual(20)); // true, "20 or Over"


/* Less than operator "<".
 If the number to the left is less than the number to the right, it returns true. 
 Otherwise, it returns false.
*/
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false


//Example
function testLessThan(val) {
  if (val < 25) {  // if value is less than 25, True  
    return "Under 25";
  }

  if (val < 55) {  // if value is less than 55, True
    return "Under 55";
  }

  return "55 or Over"; // Otherwise, false
}

console.log(testLessThan(10)); // 10 is less than 25. "Under 25" true.
console.log(testLessThan(40)); // 40 is less than 55. "Under 55" true. 
console.log(testLessThan(60)); // 55 is not less than 55 or 25. "55 or Over" false. 


/* "<=" Less than or equal to operator. 
If the number to the left is less or equal than the value to the right returns true, 
otherwise false */
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false

//Exercise. 
function testLessOrEqual(val) {
  if (val <= 12) {  // If value is less or equal 12, true.
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // If value is less or equal 24, true. 
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24"; // Otherwise value is more than 24, false. 
}

console.log(testLessOrEqual(10)); // 10 is less than 12, true "Smaller than or Equal to 12"
console.log(testLessOrEqual(12)); // 12 is equal than 12, true "Smaller than or Equal to 12"
console.log(testLessOrEqual(13)); // 13 is less than 24, true "Smaller than or Equal to 24"
console.log(testLessOrEqual(24)); // 24 is equal to 24, true "Smaller than or Equal to 24"
console.log(testLessOrEqual(50)); // 50 is more than or equal 24, false "More than 24"


/* "&&" logical AND operator are used to test more than 1 requirements.
The same effect could be achieved by nesting an if statement inside another if:*/
function testLogicalAndOperator(num){
  if (num > 5) {
    if (num < 10) {
      return "Yes num is more than five and less than 10"
    }
  }
  return "No, num not more than 5 and less than 10"
}
// Is the same using the logical and operator as:
function usingLogicalAndOperator(num){
  if (num > 5 && num < 10) { // num is more than 5 and at the same time num is less than 10.
    return "Yes, num is more 5 five and less than 10"
  }
  return "No, num is no more than 5 and less than 10"
}
console.log(usingLogicalAndOperator(6))

//Exercise

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) { /* If Value is less than or equal 50 and at the same time 
    Value is more than or equal 25*/
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(30)); // Yes, true.
console.log(testLogicalAnd(24)); // No, false. 
console.log(testLogicalAnd(50)); // Yes, true.
console.log(testLogicalAnd(51)); // No, false. 

/* "||" Logical OR Operator, used to test more than 1 requirement. 
returns true if either of the operands is true. Otherwise, it returns false.
This one cheks different variable, one or the other are going to return true. 
*/
function withoutLogOrOperator(num){
    if (num > 10) {
      return "No";
    }
    if (num < 5) {
      return "No";
  }
  return "Yes";
}
// will return "Yes" only if num is between 5 and 10 (5 and 10 included).
// The same can be written with Logical OR Operator "||" this way:  
function logOrOperator(num){
  if (num > 10 || num < 5) { // if number is more than 10 or if number is less than 5 will return no. 
    return "No";
  }
  return "Yes";
}
console.log(logOrOperator(5))

// Exercise
function testLogicalOr(val) {
  if (val < 10 || val > 20) { /* If value is is less than 10 or value is more than 20, 
    true will be returned, meaning that the value is outside that range*/
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(15)); // false, "Inside". 15 is not less than 10 or more than 20.
console.log(testLogicalOr(9)); // true, "Outside". 9 is less than 10 or more than 20. 
console.log(testLogicalOr(21)); // true, "Outside". 21 is more than 20 or less than 9. 
console.log(testLogicalOr(15)); // false, "Inside". 15 is not less than 10 or more than 20.

