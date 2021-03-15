// Multiple values in one variable with arrays
var sandwich = ["peanut butter", "jelly", "bread"];
var myArray = ["Andrea", 2, "Carlos"];

// Multidimensional-array, arrays inside one array. 
var multi = [["Bulls", 23], ["White Sox", 45]]
var myArray = [["Josh", 25, "Porsche"],["Sebas", 26, "Ferrari"]];

// Accessing Arrays data with bracket notation [0]
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60

var myArray = [50,60,70];
var myData = myArray[0]; // equals 50

// Modify array data with bracket notation [0], arrays are mutable and can be replaced. 
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]

var myArray = [18,64,99];
myArray[0] = 45; // equals [45,40,30]

var newArray = [24,33,443,24,13]
newArray[3] = "carro";

// Access multidimensional arrays with bracket notation [0]
var arr = [
    [1,2,3],             //0
    [4,5,6],             //1
    [7,8,9],             //2
    [[10,11,12], 13, 14] //3    
  ];
  arr[3];                // equals [[10,11,12], 13, 14]
  arr[3][0];             // equals [10,11,12]
  arr[3][0][1];          // equals 11

// Ejercicio practico selector arrays dentro de arrays
var mulArray = [
    ["carro","casa","beca"],
    [1,3,5,32],
    ["perro",24,"gato",[54,"pato","ganso"]] // el segundo array en linea seria en este caso [3] porque seria el 4to array de afuera hacia adentro.
];
var resultPr = mulArray[0][1]; //equals "casa"
var resultSn = mulArray[1][2]; //equals "1"
var resultTr = mulArray[2][3][2]; //equals "ganso"

console.log(resultPr)
console.log(resultSn)
console.log(resultTr)

//Exercise
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData)

// Push data to arrays with .push() function
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var arr2 = ["car", "bike", "train"];
arr2.push(["plane","boat","truck"]);
console.log(arr2)
// arr2 equals [ 'car', 'bike', 'train', [ 'plane', 'boat', 'truck' ] ]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])
console.log(myArray)
// myArray equals [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]


// Pull the last array value with ".pop()" 
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

var examArray = [25, 24, 65, "Bar"];
var oneLess = examArray.pop();
console.log(oneLess); // Returns "Bar"
console.log(examArray); // Returns [25, 24, 65]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); // Returns ["cart", 2]
console.log(myArray); //Returns [["John", 23]]


// Pull the first array value with ".shift()"
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

var remArray = ["Car", "Boat", "Suv", "Bike"];
var arrayRemoved = remArray.shift();
console.log(arrayRemoved) // Returns "Car"

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray) // Returns ["John", 23]


// Add elements to the beggining of the Array with ".unshift"
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // array now equals [["dog", 3]]
myArray.unshift(["Paul", 35]); // array now equals [["Paul", 35], ["dog",3]]



