/*
    Template literals allow you to create multi-line strings and to use string 
    interpolation features to create strings.
*/
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.


// EXERCISE: 
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
"use strict";
const failureItems = [];
for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
}
return failureItems;
}
const failuresList = makeList(result.failure);


// SOLUTION2: 
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
"use strict";
const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
return failureItems;
}
const failuresList = makeList(result.failure);


// EXPLAINED WAY: 
const resultado = {
    aceptados: ["max-length", "no-amd", "prefer-arrow-functions"],
    fallados: ["no-var", "var-on-top", "linebreak"],
    saltados: ["no-extra-semi", "no-dup-keys"]
};
function crearLista(lista) {
    "use strict";
    const rechazados = lista.map(objeto => `<li class="text-warning">${objeto}</li>`);
    return rechazados;
}
const listaDeFallos = crearLista(resultado.fallados)
console.log(listaDeFallos) 
/*
    [ '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>' ]
*/


