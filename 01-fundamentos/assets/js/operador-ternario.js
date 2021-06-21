/**
 * Dias de semmana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */
// Entra a un sitio web, para consiltar si esta abierto hoy ....
const dia = 0; // 0: domingo.... 1:Lunes ...
const horaActual = 11; //10 am

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX


//if (dia === 0 || dia === 6) {
/**El metodo .include() proviene parte de los arreglos e indica
 * que dentro del metodo exista ese dia 
 */
/*
    if ([0, 6].includes(dia)) {
        console.log('Fin de semana');
        horaApertura = 9;
    } else {
        console.log('Dia de Semana');
        horaApertura = 11;
    }
*/
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
/**Dentro del parentesis es como la condicion, luego el ternario (?) significa que se cumple la condicion
 * osea entra las llaves {}.
 * luego el valor 9 significa que se guardara en la variable horaApertura.
 * luego los(:) significa los else y enseguida el 11 es el returno, en dado caso que sea else
 */

/** if (horaActual >= horaApertura) {
        mensaje = 'Esta abierto';

    } else {
        *LOS BAITRIC (``) se ocupan para concatenar y no ocacionar 
        *problemas cuando queremos concatenar. 
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
    } 
*/
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });