// FILTER creates an array of the same or less lenght from the original array. 
// Values are immutable, a new copy of the checked array is generated. 

//EXERCISE: Filtrar numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numerosFiltrados = numeros.filter(x => x < 5); // filtrar numeros menores a 5
console.log(numerosFiltrados); // [1, 2, 3, 4]
const numerosFiltrados = numeros.filter(x => x > 5 && x < 7); // filtrar numeros mayores a 5 y numeros menores a 7.
console.log(numerosFiltrados) // [6]


// OBJECT
const mascotas = [
    { nombre: "Pelusa", edad: 12, tipo: "Gato"},
    { nombre: "Puchini", edad: 12, tipo: "Perro"},
    { nombre: "Pulga", edad: 10, tipo: "Perro"},
    { nombre: "chanchito", edad: 8, tipo: "Perro"}
]
const perros = mascotas.filter(x => x.tipo == "Perro");
console.log(perros) // devuelve las lineas donde el tipo es perro. 
/*
    { nombre: "Puchini", edad: 12, tipo: "Perro"},
    { nombre: "Pulga", edad: 10, tipo: "Perro"},
    { nombre: "chanchito", edad: 8, tipo: "Perro"}
*/

const gatos = mascotas.filter(x => x.tipo == "Gato");
console.log(gatos); //  { nombre: "Pelusa", edad: 12, tipo: "Gato"}