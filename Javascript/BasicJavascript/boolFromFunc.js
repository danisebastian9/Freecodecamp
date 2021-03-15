function isEqual(a,b){
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqual(10,10)) // response is "true".

// The same logic can be applied the following way and reducing space. 
function isEqualShort(a,b){
    return a === b;
}
console.log(isEqualShort(10,10)) // response is also "true".


// EXERCISE: from this: 
function isLess(a, b) {
    if (a < b) {
      return true;
    } else {
      return false;
    }
}
console.log(isLess(10, 15)); // Response is "true".
console.log(isLess(15, 10)); // Response is "false"

// TO THIS: 
function isLessShort(a, b){
    return (a < b);
}
console.log(isLessShort(10,15)) // Response is also "true" but in a shorter way. 
console.log(isLessShort(15, 10)); // Response is "false"



