/*Basic JavaScript: Profile Lookup

We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

- The function should check if name is an actual contact's firstName and 
    the given property (prop) is a property of that contact.
    If both are true, then return the "value" of that property.

- If name does not correspond to any contacts then return "No such contact".

- If prop does not correspond to any valid properties 
    of a contact found to match name then return "No such property".
*/
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
for(var count = 0; count < contacts.length; count += 1){
    if (contacts[count].firstName === name){
        if (contacts[count].hasOwnProperty(prop)){
            return contacts[count][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}
console.log(lookUpProfile("Kristian", "lastName")); // Vos
console.log(lookUpProfile("Sherlock", "likes")); // ["Intriguing cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number")); // "No such contact"
console.log(lookUpProfile("Bob", "potato")); // "No such contact"
console.log(lookUpProfile("Akira", "address")); // "No such property"


/*
Code Explanation
-  The for loop runs, starting at the first object in the contacts list.
-  If the firstName parameter passed into the function matches
     the value of the "firstName" key in the first object, the if statement passes.
-  Then, we use .hasOwnProperty() method (checks if there’s a given property 
     and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
    *If the second if statement fails, No such property is returned.
-  If the first if statement fails, the for loop continues on to the next object in the contacts list.
-  If the firstName parameter isn’t matched by the final contacts object, 
     the for loop exits and No such contact is returned.


Example Run

lookUpProfile("Akira","likes"); runs.
"Akira" is matched to the "firstName" key in the first object, so the if statement returns true.
"likes" is found within the first object, so the second if statement returns true.
The value of "likes" is returned - "Pizza", "Coding", "Brownie Points".
*/