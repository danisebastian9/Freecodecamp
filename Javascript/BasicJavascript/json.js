// JavaScript Object Notation. JSON 

var alice = {
    "age": 17,
    "hometown": "New York City, NY",
    "birthday": "01/29/01"
}
console.log(alice.age);         // 17
console.log(alice.hometown);    // "New York City, NY"

var students = [
    {
        "name": "alice",
        "age": alice.age,
        "hometown": alice.hometown,
        "birthday": alice.birthday
    },
    {
        "name": "andrew", 
        "age": 18,
        "hometown": "Yonkers, NY",
        "birthday": "11/05/01"
    }
]
console.log(students[0].hometown); // "New York City, NY"
console.log(students[1].name);     // "andrew"

// Nested json. // key value pairs with objects inside them 
var studentsNested = {
    "alice": {
        "age": alice.age,
        "hometown": alice.hometown,
        "birthday": alice.birthday
    },
    "andrew": {
        "age": 18,
        "hometown": "Yonkers, NY",
        "birthday": "11/05/01"
    }
}
console.log(studentsNested.alice.age); // 17
console.log(studentsNested.andrew.age) // 18


// convert to JSON
var person = {
    name: "Brad",
    age: 35
}
person = JSON.stringify(person);
console.log(person) // the output will be JSON format. 
// conversion to Javascript Object. 
person = JSON.parse(person);
console.log(person) // Output is going to be JavaScript Object format.


// Accessing other values
var people = {
    name: "Brad",
    age: 35,
    address: {
        street: "5 Main St",
        city: "Boston"
    },
    children: ["Brianna", "Nicholas"]
}
console.log(people.address.street); // "5 Main St"
console.log(people.children[0]);    // "Brianna"

