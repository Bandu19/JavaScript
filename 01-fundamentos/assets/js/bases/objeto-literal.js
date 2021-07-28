//Los objetos literales son como palabras dentro de un diccionario

/*LAS PROPIEDADES DENTRO DEL PERSONAJE
 EL ORDEN EN QUE SE IMPRIME ES DE MANERA ALFABETICA */
const personaje = {
    nombre: 'Tony Stark', //1
    codeName: 'Iroman', //2
    vivo: false, //3
    edad: 40,
    cordenadas: {
        lat: 34.034,
        lng: -100.30,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    dirreccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, Calificación',
    },
    'ultimapelicula': 'WARZONE'

};
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Latitud', personaje.cordenadas['lat']);
console.log('LNG: ', personaje.cordenadas['lng'])
    //TAREA
console.log('No. Trajes:', personaje.trajes.length); //COMPLETADO
//EXTRA
console.log('Traje N.3:', personaje.trajes.indexOf("Hulkbuster"))
    //ULTIMO TRAJE
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);
//ENTENDIBLE 
const x = 'vivo';
console.log('Vivo:', personaje[x])
    //
console.log('Ultima Pelicula:', personaje['ultimapelicula'])

// MAS DETALLES
//PARA ELIMINAR VARIABLE
delete personaje.edad;
console.log(personaje);

//AGREGAR MAS DE UNA VARIABLE A UN OBJETO
personaje.casado = true;

// CREAR UN ARREGLO DENTRO DE UNA OBJETO que tiene valores
const entriesPares = Object.entries(personaje)
console.log('Total de valores del array:', entriesPares.length)
console.log(entriesPares);


//HACER UN BLOQUEO CON EL METODO freeze
Object.freeze(personaje);
personaje.dinero = 1000000;
console.log(personaje);

//ACTIVIDAD
personaje.cordenadas.lat = 10.10101;
console.log("-------------------------------");
console.log(personaje)

//ACTIVIDAD
console.log("-------------2------------------");
Object.freeze(personaje.dirreccion)
personaje.dirreccion.ubicacion = 'MODIFICACIÓN',
    console.log(personaje);


/*LO HACE ESE METODO ES CREAR TU ARRAY DE UNA FORMA 
BONITA*/
console.log("-------------------------------");
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({ propiedades });
console.log("-------------------------------");
const valores = Object.values(personaje);
console.log(valores);