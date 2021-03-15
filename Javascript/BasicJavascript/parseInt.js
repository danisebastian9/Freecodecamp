
// PARSEINT
// The parseInt function convers a string to an integer "007" to 7. 
var a = parseInt("007"); // 7

// Exercise 
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56")); // 56
console.log(convertToInteger("77")); // 77
console.log(convertToInteger("JamesBond")); // NaN, Not a Number


// parseInt with radix. 
/*The function call looks like: 
 It takes a second argument for the radix, 
 which specifies the base of the number in the string. 
 The radix can be an integer between 2 and 36.
*/
parseInt(string, radix);
//And here's an example:
var a = parseInt("11", 2);
/*The radix variable says that "11" is in the binary system, 
    or base 2. This example converts the string "11" to an integer 3.

RADIX 
- 2 binary
- 10 decimal
- 16 hexadecimal
*/
function convertToInteger(str, rdx) {
    return parseInt(str, rdx);
}
console.log(convertToInteger("10011", 2));          // 19 with rdx binary
console.log(convertToInteger("111001", 2));         // 57 with rdx binary
console.log(convertToInteger("JamesBond", 2));      // Nan


// EXAMPLE 2
function convertToInteger(str,) {
    return parseInt(str, 2);
}
console.log(convertToInteger("10011"));           // 19
console.log(convertToInteger("111001"));          // 57 
console.log(convertToInteger("JamesBond"));       // NaN

