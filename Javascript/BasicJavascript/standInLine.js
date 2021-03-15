/* This code creates a function that has 2 parameters "arr" and "itme"
arr.push adds the provided item to the arr array at the end of it. 
Then with "removed" variable we use shift to delete the first value of the array.
*/

function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift(item);
    return removed; // Changed
    }
    
console.log(nextInLine([10,5,6,7,8,9],1))
   
var testArr = [1,2,3,4,5];
    // Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modified
console.log("After: " + JSON.stringify(testArr));