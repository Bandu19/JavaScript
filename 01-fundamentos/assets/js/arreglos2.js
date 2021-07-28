let juegos = ['HALO', 'WARZONE', 'MARIO kART', 'Chrono', 'Metroid'];
//.lenth es un metodo que cuenta el total de variables o letras.
console.log('Largo:', juegos.length);
console.log(juegos);

let primero = juegos[2 - 2]; //HALO

let ultimo = juegos[juegos.length - 1] //Metroid

console.log(primero, ultimo);
console.log({ primero, ultimo });

//forEach es un metodo
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//AGREGAR UN NUEVO VALOR EN TU ARREGLO
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

//AGREGAR UN NUEVO VALOR EN TU ARREGLO DESDE EL INICIO

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });


//ELIMINAR EL ULTIMO VALOR DE TU ARREGLO EN EL FINAL 

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


//ELIMINAR A TU MANERA

let pos = 1;
console.log(juegos);
// ELIMINAREMOS HALO y depues dos
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });


//BUSCAR DENTRO DE TU ARREGLO 
let metroidIndex = juegos.indexOf('Metroid'); // CaSeSentisive

console.log({ metroidIndex })