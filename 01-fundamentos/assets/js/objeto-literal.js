//Los objetos literales son como palabras dentro de un diccionario

/*LAS PROPIEDADES DENTRO DEL PERSONAJE
 EL ORDEN EN QUE SE IMPRIME ES DE MANERA ALFABETICA */
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
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

personaje.casado = true;

// CREAR UN ARREGLO DENTRO DE UNA PROPIEDAD que tiene valores

const entriesPares = Object.entries(personaje)
console.log(entriesPares);