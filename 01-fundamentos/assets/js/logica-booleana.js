const regresarTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresarFalse = () => {
        console.log('Regresa false');
        return false;
    }
    /* NOT */
console.warn('Not o la negacion');
console.log(true); // TRUE
/*NUEVO*/
console.log(!true); // FALSE
console.log(!false); // TRUE
console.log(!regresarTrue());
console.log('------------------------');
/* AND */
console.warn('And');
console.log(true && true); // TRUE
console.log(true && false); // FALSE
console.log(true && !false); // TRUE
console.log('------------------------');
console.log(false && true); // FALSE
console.log('------------------------');
/***************** ACTIVIDAD *************************/
//SI EN LA CONDICIÓN DETECTA UN FALSE AL INICIO lo demas lo ignora e imprime el primer valor encontrado.
console.log(regresarFalse() && regresarTrue()); // FALSE
console.log(regresarTrue() && regresarFalse()); // FALSE (linea 20 ejemplo)
console.log('--------------------------');
//EJECUTAR DE OTRA MANERA
regresarTrue() && regresarFalse();
console.log('--------------------------');
regresarFalse() && regresarTrue();
console.log('----------&&----------------');
console.log('4 condiciones', true && true && true && false); // FALSE
console.log('4 condiciones', true && true && true && !false); // TRUE
/***************** ACTIVIDAD *************************/
/* OR */
console.warn('OR');
// CONQUE ESTE SEA VERDADERO Y EL OTRO SEA FALSO = VERDADERO
console.log(true || false); // TRUE
console.log(false || true); // TRUE
console.log(true || true); // TRUE
// CONQUE SEA DIFERENTE 
console.log(false || false); // FALSE


//SI EN LA CONDICIÓN DETECTA UN TRUE AL INICIO lo demas lo ignora e imprime el primer valor encontrado.
console.log(regresarTrue() || regresarFalse());
console.log('4 condiciones', true || true || true || false); // TRUE

/***************** ACTIVIDAD *************************/

console.warn('ASIGNACIONES CON OPERADORES');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo'; // Hola Mundo
//-----------BOOLEANO and STRING and NUMBER
const a1_1 = true && 'Hola Mundo' && 150; // 150
const a1_2 = false && 'Hola Mundo' && 150; // false

const a2 = 'Hola' && 'Mundo'; // Mundo
const a2_1 = 'Hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
console.log('--------------EJEMPLO CON 5 CONDICIONES------------');
const a5 = soyFalso || soyUndefined || regresarTrue() || 'Ya no soy falso' || true;
console.log('----------------------------------------------');


console.log({ a1, a1_1, a1_2, a2, a2_1, a3, a4, a5 });
console.log('----------------------------------------------');

if (true || true || true || false) { // true
    console.log('Hacer algo')
} else {
    console.log('Hacer otra cosa')
}
console.log('----------------------------------------------');

if (regresarFalse() && regresarTrue() && (true || false || true)) {
    console.log('Hacer algo2')
} else {
    console.log('Hacer otra cosa2')
}