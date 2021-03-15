/* 
JavaScript has a Math.random() function that generates 
a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). 
Thus Math.random() can return a 0 but never quite return a 1

Note
Like Storing Values with the Equal Operator, 
all function calls will be resolved before the return executes, 
so we can return the value of the Math.random() function.
*/

function randomFraction() {
    return Math.random(randomFraction);
}
console.log(randomFraction()) // Random decimal number, in this case 0.10991471180683687



// RANDOM WHOLE NUMBERS 
/*
It's great that we can generate random decimal numbers, 
but it's even more useful if we use it to generate random whole numbers.

- Use Math.random() to generate a random decimal.
- Multiply that random decimal by 20.
- Use another function, Math.floor() to round the number down to its nearest whole number.

Remember that Math.random() can never quite return a 1 and, 
    because we're rounding down, it's impossible to actually get 20. 
    This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:
*/
function randomWhole() {
    return Math.floor(Math.random() * 20);
}
console.log(randomWhole()); // Returns a whole number from 0 to 19
/*
We are calling Math.random(), multiplying the result by 20, then passing the 
value to Math.floor() function to round the value down to the nearest whole number.
*/
function randomWholeNum() {
    return Math.floor(Math.random() * 10 );
}
console.log(randomWholeNum()); // Returns a whole number from 0 to 9


// RANDOM WHOLE NUMBERS WITHIN A RANGE
/*
To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
*/
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(30, 40)); // Random number between 30 and 40. 

// PRACTICE: 

Math.floor(Math.random() * (20 - 10 + 1)) + 10; // returns a number between 10 and 20 


// EXERCISE: 
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(30, 40)); // Random number from 30 to 40.
console.log(randomRange(5, 10)); // Random number from 5 to 10


