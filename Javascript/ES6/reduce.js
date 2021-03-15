// Allow to run reducer functions: with 2 arguments;
/* - first argument a value that's acumulated.
   - second argument, the element that's iterating 
   It's going to return the value of the acumulated argument. 
*/ 
const reducer = (acumulador, valorActual) => nuevoAcumulador
//EXAMPLE
const reducido = [1,2].reduce((acumulador, elemento) => acumulador + elemento, 0) // cero es el punto de inicio para el acumulador.
console.log(reducido); // equals: 3
/*
    acumulador(0) + elemento(1) = 1
        acumulador(1) + elemento(2) =3
            acumulador es ahora 3. 
*/

// EXAMPLE2
const numeros = [1,2,3,4,5,6];
const resultado = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(resultado); // 21 
/*
    acumulador(0) + elemento(1) = 1
        acumulador(1) + elemento(2) = 3
            acumulador(3) + elemento(3) = 6
                acumulador(6) + elemento(4) = 10
                    acumulador(10) + elemento(5) = 15
                        acumulador(15) + elemento(6) = 21
                            acumulador = 21 
*/


//EXAMPLE3:
const mascotas = [
    { nombre: "Pelusa", edad: 12, tipo: "Gato"},
    { nombre: "Puchini", edad: 12, tipo: "Perro"},
    { nombre: "Pulga", edad: 10, tipo: "Perro"},
    { nombre: "chanchito", edad: 8, tipo: "Perro"}
]
const indexed = mascotas.reduce((acumulador, elemento) => ({
    ...acumulador,
    [elemento.nombre]: elemento,
}) ,{});   // acumulador inicial es un objeto {}
console.log(indexed); // Object indexed by names
console.log(indexed["Pelusa"]); // Return the entire "Pelusa" information. 


//EXAMPLE4: 
const anidado = [1, [2, 3], 4, [5]]
// FInal goal: [1, 2, 3, 4, 5]
const plano = anidado.reduce((acumulador, elemento) => acumulador.concat(elemento), []);
console.log[plano] // [1, 2, 3, 4, 5]
/*
    acumulador[] - elemento 1 = [1]
        acumulador[1] - elemento 2, 3 = [1, 2, 3]
            acumulador[1, 2, 3] - elemento 4 = [1, 2, 3, 4]
                acumulador[1, 2, 3, 4] - elemento 5 = [1, 2, 3, 4, 5]
                acumulador = [1, 2, 3, 4, 5]
*/

