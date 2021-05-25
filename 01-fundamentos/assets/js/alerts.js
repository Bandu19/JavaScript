//Esta accion bloquea antes de empezar.
alert('Hola mundo Yasmin');

//Esta accion hace que te pregunte y mandes un cierto valor tipo String, 
//el otro valor Sin nombre significa agregarle un strign extra.
prompt('¿Cual es tu nombre?', 'Sin nombre');

//OTRA ACCIÓN CON prompt es de esta forma:

let nombre = prompt('¿Dime tu nombre?');
console.log(nombre);

let nombre2 = prompt('¿Cual es su apellido?');
console.log(nombre2);
console.log('***' + nombre2 + '***');

confirm('Esta seguro de borra esto?');

//Para las constantes de vez en cuando se utiliza Confirm

const seleccion = confirm('Estas seguro de eliminar esto?');
console.log(seleccion);


/*COMANDO COMPATIBLE CON NODE*/
//console.log(global);