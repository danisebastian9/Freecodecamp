// Conditional (Ternary) Operator.
/* The conditional operator, also called the ternary operator, 
    can be used as a one line if-else expression. 
condition ? expression-if-true : expression-if-false;
    The following function uses an if-else statement to check a condition: */
function findGreater(a, b) {
    if(a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
// This can be re-written using the conditional operator:
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

// Example
function EncuentraMenor(a, b){
    return a < b ? "a es menor" : "b es menor";
} 
console.log(EncuentraMenor(5,4));

// EXERCISE: 
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(2, 2)); // Equal


// Multiple Conditional TERNARY Operators
// Regular if else if condition.
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

// The above function can be re-written using multiple conditional operators:
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"  
        : (a > b) ? "a is greater" 
        : "b is greater";
}

/* It is considered best practice to format multiple conditional operators 
    such that each condition is on a separate line, as shown above. 
    Using multiple conditional operators without proper indentation may make your code hard to read. 
    For example:
*/
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

// EXERCISE 
function checkSign(num) {
    return num > 1 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-5)); // Negative
console.log(checkSign(0));  // Zero
console.log(checkSign(5));  // Positive 


// Countdown 
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}