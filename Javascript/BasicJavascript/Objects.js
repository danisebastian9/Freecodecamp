/* Objects are similar to arrays, 
except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.
*/
var cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
/*In this example, 
all the properties are stored as strings, 
such as - "name", "legs", and "tails". However, 
you can also use numbers as properties. 
You can even omit the quotes for single-word string properties, as follows: */
var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
/*However, if your object has any non-string properties, 
JavaScript will automatically typecast them as strings. */ 


//  EXAMPLE: 
var myDog = {
        "name": "Hamlet",
        "legs": 4,
        "tails": 1,
        "friends": ["Daniel", "Andres", "Lucy"]
};
console.log(myDog);


/* There are two ways to access the properties of an object: 
dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property
you're trying to access ahead of time. */ 
var myObj = {
prop1: "val1",
prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

//EXAMPLE

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;      // "ballcap"
var shirtValue = testObj.shirt;    // "jersey"
var shoesValue = testObj.shoes;    // "cleats"

console.log(hatValue);
console.log(shirtValue);
console.log(shoesValue);


/* Bracket notation "[]" 
Is used when object property is provided with spaces within the name. 
It also can be used for properties without space */ 
var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
//Note that property names with spaces in them must be in quotes (single or double).


// EXERCISE:
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var principleValue = testObj["my side"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);     // "hamburguer"
console.log(drinkValue);      // "water"
console.log(principleValue);  // "veggies"


/* Another use of bracket notation on objects is 
to access a property which is stored as the value of a variable */
var dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
}; 
var myDog = "Hunter";
var myBreed = dogs[myDog]; // Here the property value is accessed and retained in the variable
console.log(myBreed); // Output is: "Doberman"

/* Another way you can use this concept is when the property's name 
is collected dynamically during the program execution, as follows: */
var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
/* Note that we do not use quotes around the variable name 
when using it to access the property because we are using 
the value of the variable, not the name. */

var myTestObj = {
    propName: "John",
    propLast: "Mitchell",
    propAge: 20
  
};
function propPrefix(str) {
    var getName = "prop"; // This one locates the first part of the property and takes it: "prop"Name
    return getName + str; 
}
var myProperty = propPrefix("Name"); //This one, takes the rest part of the property: prop"Name" and mix it to take out the "propName" value. 
var myPropertyLast = propPrefix("Last");
var myPropertyAge = propPrefix("Age");
  
console.log(myTestObj[myProperty]);      // "John"
console.log(myTestObj[myPropertyLast]);  // "Mitchell"
console.log(myTestObj[myPropertyAge]);   // 20


// EXAMPLE:
var menuRest = {
    "MenEntrada": "Arroz",
    "MenPrincipio": "Pollo",
    "MenEnsalada": "Tomate",
    "MenBebida": "Gaseosa"
}
function menuPrefix(str){
    var getMenuPrefix = "Men";
    return getMenuPrefix + str;
}
var fullPropEnt = menuPrefix("Entrada"); 
var fullPropPrin = menuPrefix("Principio");
var fullPropEns = menuPrefix("Ensalada");
var fullPropBeb = menuPrefix("Bebida");

console.log(menuRest[fullPropEnt]);
console.log(menuRest[fullPropPrin]);
console.log(menuRest[fullPropEns]);
console.log(menuRest[fullPropBeb]);


// EXERCISE:
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;      
var player = testObj[playerNumber];  

console.log(player); // Output = "Montana"


// UPDATING OBJECT PROPERTIES. 
// They can be updated as any other variable the following way. 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
/* Lets change the dog name to "Happy Camper", 
it can be updated any of the following ways: */
ourDog.name = "Happy Camper"; 
ourDog["name"] = "Happy Camper";
console.log(ourDog.name); // Now the result is "Happy Camper"


// EXERCISE: 
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "eyes": "brown",
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
console.log(myDog.name); // Name is updated to "Happy Coder"

myDog.eyes = "Green";
console.log(myDog.eyes) // Eyes is updated to "Green"

myDog.friends += [," Daniel"];
console.log(myDog.friends); // "Daniel" is added to the friends list
console.log(myDog);

myDog.friends = ["Family"];
console.log(myDog.friends); // "Family" will replace the friends list
console.log(myDog)


// Adding properties to existing Objects
//Here's how we would add a "bark" property to ourDog:
ourDog.bark = "bow-wow";
//or
ourDog["bark"] = "bow-wow";
//Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".
// EXAMPLE: 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}; 
ourDog.bark = "bow-wow"; // adds "bark" to the properties list and "bow-wow" to the property value.


// Exercise: 
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof" // adds properti bark and property value "Woof"
console.log(myDog)  // prints the entire object including the added property
console.log(myDog.bark) // Prints the new added value "Woof"


// DELETE properties from Objects. 
// delete ourDog.bark;  This way the property is deleted from the object. 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
delete ourDog.bark;
/*After the last line shown above, ourDog looks like:
{
"name": "Camper",
"legs": 4,
"tails": 1,
"friends": ["everything!"]
}
*/ 


// EXERCISE:
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails; // Deletes the "tails" property and its value
console.log(myDog); // Prompts the Object without the deleted line. 


/* OBJECTS FOR LOOKUPS. 
Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values 
rather than a switch statement or an if/else chain. 
This is most useful when you know that your input data is limited to a certain range.*/
var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    //...
    24:"C",
    25:"B",
    26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2; // value variable was assigned to the object property (2)
console.log(alpha[value]); // "Y"


// EXERCISE: 
// Setup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver", 
      echo: "Easy",
      foxtrot: "Frank"
    }
    result = lookup[val]; /* Here the object is called with bracket notation as the property
                           "val" is unknown it can't be called wiht (.)dot notation 
                           and lookup[val] Object is assigned to the result variable.*/
    return result;
}
console.log(phoneticLookup("alpha")); // "Adams"
console.log(phoneticLookup("bravo")); // "Boston"
console.log(phoneticLookup("charlie")); // "Chicago"
console.log(phoneticLookup("delta")); // "Denver"
console.log(phoneticLookup("echo"));  // "Easy"
console.log(phoneticLookup("foxtrot")); // "Frank"
  

// .hasOwnProperty(propname) Helps check if the property exists or not within the Object.
var myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

// Exercise.
/* This code will check if the property exist through the Object, if exist, the property value
Is prompted but if not, then "Not Found" is prompted*/
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    city: "Seattle"
}
function checkObj(checkProp) {
if (myObj.hasOwnProperty(checkProp) == true ){
    return myObj[checkProp];  // the object property needs to be called by square brackets.
} else {
    return checkProp = "Not Found";
}
}
console.log(checkObj("gift"));       // "pony"
console.log(checkObj("pet"));        // "kitten"
console.log(checkObj("house"));      // "Not Found"
console.log(checkObj("city"));       // "Seattle"
console.log(checkObj("district"));   // "Not Found"


/* COMPLEX OBJECTS
Strings, numbers, booleans, arrays, functions, and objects.
*/
var ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
];
/*This is an array which contains one object inside. The object has various pieces of 
metadata about an album. It also has a nested "formats" array. 
If you want to add more album records, you can do this by adding records to the top level array. 
Objects hold data in a property, which has a key-value format. 
In the example above, "artist": "Daft Punk" is a property that has a key of "artist" 
and a value of "Daft Punk". JavaScript Object Notation or JSON is a related data 
interchange format used to store data.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
Note
You will need to place a comma after every object in the array, 
unless it is the last object in the array. */ 


//EXERCISE: 
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Bon Jovi",
      "title": "Someday I'll be Saturday night",
      "release_year": 1994,
      "formats": [
        "CD",
        "Blueray",
        "Cassette"
      ],
      "gold": true
    }
];
console.log(myMusic[1]) // wil print the second album array for the BonJovi song. 


/* NESTED OBJECTS:
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
*/
var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

// EXERCISE: 
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; 
console.log(gloveBoxContents); //  Output: "maps"


// ACCESSING NESTED ARRAYS:
/* Objects can contain both nested objects and nested arrays. 
Similar to accessing nested objects, Array bracket notation 
can be chained to access nested arrays. */
var ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"


// EXERCISE: 
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
var secondTree = myPlants[1].list[1]; //second tree was assigned. 
console.log(secondTree); // "pine"


// 
