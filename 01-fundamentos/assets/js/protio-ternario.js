const elNumeroMayor = (a, b) => (a > b) ? a : b;
const tieneMembresioa = (miembro) => (miembro) ? 'Dos dolares' : 'Diez Dolares';
console.log(elNumeroMayor(20, 15));
console.log(tieneMembresioa(true));


const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    prueba = amigo ? 'Thor' : 'LOKI',
    //funcion anonima autoindicada
    //(() => 'Nick Fury')()
    elNumeroMayor(10, 15)
];

console.log(amigosArr);
console.log(amigosArr[amigosArr.length - 1]);


const notas = 100; // A+ A B+
const grado = (notas >= 95) ? 'A+' :
    //else if
    (notas >= 90) ? 'A' :
    (notas >= 85) ? 'B+' :
    (notas >= 75) ? 'C' : 'F';

console.log({ notas, grado });