// MAP is used when we have an array and we want an array with something different but with the same length. 

// EXAMPLE: 
const numeros = [1, 2, 3, 4, 5];

// Multiplicar x2
const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados); // [2, 4, 6, 8, 10] Each value was multiplied by 2. 

// Parejas: 
const parejas = numeros.map(x => [x, x]);
console.log(parejas);  // [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]  The original array was updated to a pair of arrays for each value. 


// OBJECT
const mascotas = [
    { nombre: "Pelusa", edad: 12, tipo: "Gato"},
    { nombre: "Puchini", edad: 12, tipo: "Perro"},
    { nombre: "Pulga", edad: 10, tipo: "Perro"},
    { nombre: "chanchito", edad: 8, tipo: "Perro"}
]
// Edad promedio: 
const edades = mascotas.map(x => x.edad)
console.log(edades) // [12, 12, 10, 8]
const suma = edades.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(suma) //  42
const promedio = suma / edades.length;
console.log(promedio) // 10.5  Es el promedio de edad. 
