let a = 15;

if (a > 10) {
    console.log('La variable:', a, 'es  mayor a 10');
} else {
    console.log('La variable:', a, 'es menor');
}
console.log('FIN DEL PROGRAMA ');

/************************NUEVO EJERCISIO*************************************/

//EL new crea una nueva instancia dentro de un objeto
const hoy = new Date(); //Date te indica hora y fecha completa 
//console.log(hoy);
let dia = hoy.getDay(); //El getDay lo que hace es lo siguiente : 0: Lunes, 1: Martes, 2:Miercoles;
console.log({ dia });

if (dia === 1) {
    console.log('Hoy es LUNES');
} else if (dia === 4) {
    console.log('Hoy es JUEVES');
} else if (dia === 5) {
    console.log('Hoy es VIERNES');
} else if (dia === 6) {
    console.log('Hoy es SABADO');
} else if (dia === 0) {
    console.log('Hoy es DOMINGO');
}
/**********EXISTEN 3 TIPOS DE IF(Condicionales);*********/
//ESTE TIPO DE IF ESTA MAL PORQUE ES UNA ASIGNACIÓN
if (dia = 1) { console.log('PRIMER TIPO IF(este if no es el chido)'); }
/*ESTE TIPO DE IF SIGNIFICA QUE NO IMPORTA QUE TIPO DE VARIABLES SEAN
LO IMPORTANTE ES SU RESULTADO QUE LLEVA CADA UNA DE ELLAS*/
if (dia == 1) { console.log('SEGUNDO TIPO IF'); }
/*ESTE TIPO DE IF SI REQUIERE QUE LOS VALORES SEAN IGUALES ES DECIR: int con int, string con string */
if (dia === 1) { console.log('TERCER IF(El mas importante)') }


console.log("----------------------------------------------------");
/********************ACTIVIDAD***************************/
dia = 3;
const diaLetras = {
    // n_Semana: [0, 1, 2, 3]
    //LOS () son funciones Flechas
    0: () => 'Domingo',
    1: () => 'Lunes',
    2: () => 'Martes',
    3: () => 'Miercoles',
    4: () => 'Jueves',
    5: () => 'Viernes',
    6: () => 'Sabado'
};
//RESPUESTA QUE ESPERA
//Las () despues del dia son para imprimir las funciones declaradas
console.log(diaLetras[dia]() || 'DIa no existe');
/********************ACTIVIDAD***************************/
diaSemana = 4;

const diaLetras2 = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

console.log('Actividad Dos:', diaLetras2[diaSemana]);