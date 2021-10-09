const Procedimiento2 = (text, abecedario, clave) => {
    var resul = new String();
    var i, j, c, clave, orden,
        len = abecedario.length; //27
    for (i = 0; i < clave; i++) {
        orden = prompt('Ingresa el orden del cifrado');
        console.log("Letra:" + orden);

    }

}

const transposicion = (text, clave) => {
    var resul = new String();
    resul = Procedimiento2(text, "abcdefghijklmnñopqrstuvwxyz", clave);
    return resul;
};
/*
let cadena = prompt('Ingresa la cadena'); // EL nombre
let numero = prompt('Ingresa el numero'); // Numero
*/
console.log('La Clave es: ', transposicion("Hola Mundo", 4));