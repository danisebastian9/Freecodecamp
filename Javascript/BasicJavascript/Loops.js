/* While Loop is going to run while the statement is true, when it becomes false, 
it's going to stop the loop. */
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray); // [0,1,2,3,4]

// PRACTICE EXERCISE: 
var myLista = [];
var cuenta = 0;
while(cuenta < 10){
    myLista.push(cuenta);
    cuenta +=1; // lo mismo a: // cuenta = cuenta + 1;  // o // cuenta++;
}
console.log(myLista); // [0,1,2,3,4,5,6,7,8,9]


// Countdown 5 > 0 While loop
var myArray = [];
var countDown = 5;
while (countDown > 0){
    myArray.push(countDown);
    countDown -= 1;
}
console.log(myArray); // [5,4,3,2,1,0]


// FOR LOOPS
/*The most common type of JavaScript loop is called a for loop 
because it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

-The INITIALIZATION statement is executed one time only before the loop starts. 
  It is typically used to define and setup your loop variable.

-The CONDITION statement is evaluated at the beginning of every loop iteration 
  and will continue as long as it evaluates to true. 
  When condition is false at the start of the iteration, the loop will stop executing. 
  This means if condition starts as false, your loop will never execute.

-The FINAL-EXPRESSION is executed at the end of each loop iteration, 
  prior to the next condition check and is usually used to increment 
  or decrement your loop counter.

- INITIALIZATION =   i = 0 
- CONDITION =        i < 5   is true. 
- FINAL-EXPRESSION = i++     increment i by 1 in each loop iteration. */
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
//ourArray will now contain [0,1,2,3,4].

//PRACTICE EXERCISE
var myLista = [];
for (var conteo = 0; conteo < 10; conteo += 1){
    myLista.push(conteo);
}
console.log(myLista); // [0,1,2,3,4,5,6,7,8,9]
// (var conteo = 0;   "Inicialization"
// conteo < 10;       "condition"
// conteo += 1)       "final-expression"


// PRACTICE: 
var nums = [];
for (var diesACero = 10; diesACero > -1; diesACero -= 1){
  nums.push(diesACero);
}
console.log(nums); // [10,9,8,7,6,5,4,3,2,1,0]


// EXERCISE: 1 to 5 array loop. 
var myArray = [];
for(var oneToFive = 1; oneToFive < 6; oneToFive +=1){
    myArray.push(oneToFive);
}
console.log(myArray) // [1,2,3,4,5]


/* ITERATE ODD NUMBERS WITH FOR LOOP
By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
*/
var ourArray = [];
for (var i = 0; i < 10; i += 2) {    // this loop is going to increment by 2 "i += 2".
  ourArray.push(i);
}
console.log(ourArray); //   [0,2,4,6,8] 

// EXERCISE: ODD NUMBERS FROM 1 to 9
var myArray = [];
for (var oddNum = 1; oddNum < 10; oddNum +=2){
    myArray.push(oddNum);
}
console.log(myArray); // [1,3,5,7,9]


/* FOR LOOP BACKWARDS COUNT
-In order to count backwards by twos, we'll need to change our 
  INITIALIZATION, CONDITION, and FINAL-EXPRESSION.

We'll start at                          i = 10 
and loop while                          i > 0. 
We'll decrement i by 2 each loop with   i -= 2.*/
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i); 
}
console.log(ourArray); // [10,8,6,4,2]
/*ourArray will now contain [10,8,6,4,2]. 


Let's change our initialization and final-expression so we can count 
backward by twos by odd numbers.

COUNT DOWNWARDS 9 - 1 ODD NUMBERS*/ 
var myArray = [];
for (var oddDown = 9; oddDown > 0; oddDown -= 2){
    myArray.push(oddDown);
}
console.log(myArray); // [ 9, 7, 5, 3, 1 ]


// ITERATE THROUGH ARRAY CONTENTS
/*Remember that arrays have zero-based indexing, 
which means the last index of the array is length - 1. 
Our condition for this loop is i < arr.length, 
which stops the loop when i is equal to length. 
In this case the last iteration is i === 4 i.e. 
when i becomes equal to arr.length and outputs 6 to the console.
*/
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// PRACTICE 
var carros = ["Ferrari", "Porsche", "Land Rover", "Brilliance", "Toyota"];
for(var listAutos = 0; listAutos < carros.length; listAutos += 1){
    console.log(carros[listAutos]);
}
/* Ferrari
   Porsche
   Land Rover
   Brilliance
   Toyota     */


// EXERCISE: SUM ARRAYS WITH FOR. 
var myArr = [ 2, 3, 4, 5, 6];
var total = 0
for (var myTotal = 0; myTotal < myArr.length; myTotal +=1){
    total += myArr[myTotal]; // Here the array myArr values are summed using var total. Explanation below
    console.log(total) // Total 20
}
/*Code Explanation
-Inititialization: i gets a value of 0 and its used as a counter.
Condition: the subsequent code is executed as long as i is lower than the length of myArr (which is 5; five numbers but arrays are zero based).
Final-expression: i is incremented by 1.
Statement: The function adds myArr[i]'s value to total until the condition isn’t met like so:
total + myArr[0] -> 0 + 2 = 2 
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14 
total + myArr[4] -> 14 + 6 = 20 
*/


// NESTING FOR LOOPS
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
/* This outputs each sub-element in arr one at a time. 
Note that for the inner loop, we are checking the .length of arr[i], 
since arr[i] is itself an array. 
1
2
3
4
5
6
           */



// EXERCISE / This code loops inside the sub arrays and multiply all the values
var arr = [
  [1,2], [3,4], [5,6,7]
];
var multiplier = 1
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    multiplier = multiplier * arr[i][j];
  }
}
console.log(multiplier); // 720 


//CORRECTED EXERCISE.
function multiplyAll(arr){
  var multiplier = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      multiplier = multiplier * arr[i][j];   // multiplier *= arr[i][j];   Also works
    }
  }
  return multiplier;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));       // 5040
console.log(multiplyAll([[1],[2],[3]]));               // 6 
console.log(multiplyAll([[5,1],[0.2,4,0.5],[3,9]]));   //54



// MI EJERCICIO 2
function multiplicarListas(listas){
  var multiplicador = 1;
  for(var listaUno = 0; listaUno < listas.length; listaUno += 1){
    for(var listaDos = 0; listaDos < listas[listaUno].length; listaDos += 1){
      multiplicador *= listas[listaUno][listaDos];
    }
  }
  return multiplicador;
}
console.log(multiplicarListas([[1,2],[3,4],[5,6,7]])); // 5040
console.log(multiplicarListas([[1],[2],[3]]));     // 6 
console.log(multiplicarListas([[5,1],[0.2,4,0.5],[3,9]])); //54


// ITERATE WITH DO...WHILE LOOPS
/* With the Do...while loop the code is runned at least one time and then the loop is validated. 
If the loop is false then it's just runned once, the opposite to the other 
loops in which if the loop confition is false, the loop is never executed. */
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray) // [0,1,2,3,4] like the other loops the result is the same if the first attempt is true. 

//In a regular While: 
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(OurArray) // [] Empty array, as the code starts as false, it's never runned. 

// Now with DO WHILE: 
var ourArray = [];
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray) // [5] Even that it starts being false, the code is runned once and the value is added. 


//EXERCISE
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i += 1;
} while (i < 5);
console.log(myArray)


// RECURSION: A function calling itself until the goal is achieved instead of using loops
// This function with recursion multiplies array values.
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

// And it's the same as the following Loop
function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
      product *= arr[i];
  }
  return product;
}


// PRACTICE
function multiplicador(lista, numero){
  if(numero <= 0){
    return 1;
  } else {
    return multiplicador(lista, numero - 1) * lista[numero - 1];
  }
}
console.log(multiplicador([2,2,3,4,5],3)); // 30   The list is multiplied 3 times 2*2*3.
console.log(multiplicador([5,2,3,4,5],5)); // 600  The list is multiplied 5 times  5*2*3*4*5
console.log(multiplicador([2,2,3,4],3)); // 12 list is multiplied 3 times 2*2*3


/* SYNTAX EXAMPLE

function processDoll(doll){
  // BASE CASE
  if(found the piece of chocolate){
    return "yum yum"
  } else if( there are no more dolls){
    return "No chocolate here"
  } else {
    processDoll(the smaller doll)
  }
}
FACTORIAL EXAMPLE*/ 
function factorial(number){
  if(number == 1 || number == 0){
    return 1;
  } else {
    return number * factorial(number - 1); // number * number and less one number from itself(number)
  }
}
console.log(factorial(3)); /*   6   = 3*2*1
 3 * factorial(3-1)"2"
  2 * factorial(2-1)"1" ENDS with 1.
*/ 
console.log(factorial(4)); /* 24  = 4*3*2*1
  4 * factorial(4-1)"3"
    3 * factorial(3-1)"2"
      2 * factorial(2-1)"1"  ENDS 1
*/
console.log(factorial(6)); /* 720 = 6*5*4*3*2*1
  6 * factorial(6-1)"5"
    5 * factorial(5-1)"4"
      4 * factorial(4-1)"3"
        3 * factorial(3-1)"2"
          2 * factorial(2-1)"1"  ENDS 1
*/


// EXERCISE: 
function sum(arr, n) {
  if (n <= 0){
    return 0;
  } else {
    return sum(arr, n -1) + arr[n -1];
  }
}
console.log(sum([1],0));        // 0
console.log(sum([2,3,4],1));    // 2   2+0
console.log(sum([2,3,4,5],3));  // 9   2+3+4


// RECURSION to create a countdown: 

/* Say you want to write a recursive function that returns an array containing 
  the numbers 1 through n. This function will need to accept an argument, n, representing the final number. 
  Then it will need to call itself with progressively smaller values of n until it reaches 1.
  You could write the function as follows: */
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
/*  At first, this seems counterintuitive since the value of n decreases, 
  but the values in the final array are increasing. This happens because the push happens last, 
  after the recursive call has returned. At the point where n is pushed into the array, 
  countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/

// RECURSION COUNTDOWN. 
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);  // Unsift creates a countdown adding the same 1 to n array, 
    return countArray;        // but adding the values at the beginning of the array
  }
}
console.log(countdown(10)); // [10,9,8,7,6,5,4,3,2,1]

// RECURSION RANGE: 
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0){
    return [startNum]; // the last value is added as the loop is not adding it when it ends. 
  } else {
    var countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum)
    return countArray; 
  }
};
console.log(rangeOfNumbers(20, 25)) // [20, 21, 22, 23, 24, 25]


// RECURSION EXAMPLE
// for loop: 
function countDown(n){
  for (let i = n ; i > 0; i += 1) {
    console.log(i);
  }
  console.log("Hooray"); 
}
// RECURSION conversion: 
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray");
    return; 
  }
  console.log(n)
  countDownRecursive(n - 1)
}


// RECURSIVE CHILDREN OBJECT EXERCISE:
/* This recursive exercise will look for any children inside the "tree" Object and print it out. 
*/

function printChildrenRecursive(t) {
  if (t.children.length === 0) {  // Salvavidas, si no hay valores children que imprimir "return"
    return
  }
  t.children.foreach(child => {
    console.log(child.name)
    printChildrenRecursive(child)
  })
}


const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: []
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: []
        },
        {
          name: "Sophia",
          children: []
        }
      ]
    }
  ]
}
console.log(printChildrenRecursive(tree));
/* 
  Jim
  Zoe
  Kyle
  Sophia
*/


