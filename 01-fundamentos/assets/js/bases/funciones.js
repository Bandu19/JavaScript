//ES NECESARIO QUE LAS FUNCIONES SE DECLAREN AL PRINCIPIO
function saludar() {
    console.log('HOLA MUNDO');
}
/*COSAS QUE NO DEBES HACER*/

/*var saludar = 1123;*/
/*let saludar = 1123*/

//funcion ANONIMA
const saludar2 = function() {
    console.log('Hola mundo')
}

//OTRA FUNCION 
function saludar3(nombre) {
    console.log('Hola ' + nombre);
}
//REPASO
function repaso(repaso) {
    //SOLO LO PUEDES DECLARA UNA VEZ EL arguments
    console.log(arguments); //solo una vez
    console.log('Hola ' + repaso);

}
repaso('YASMIN', 19, true, 'MEXICO CYTY');

/************************* ACTIVIDAD **************************/
const saludar4 = function(nombre) {
    console.log('HOLA ' + nombre);
}

const saludar5 = (nombre) => {
    console.log('Hola ' + nombre);
    //RETORNO EXPLICITO
    return 100;
}
const retornoDeSaludar5 = saludar5('YASMIN SORIANO GUTIERREZ', 19, true, 'MEXICO CYTY');
console.log({ retornoDeSaludar5 });



/************************* FUNCIONES DE FLECHA *************************/

const saludarFlecha = () => {
    console.log('Hola Flecha');
}
saludarFlecha();

const saludarFlecha2 = (nombre) => {
    console.log('HOLA FLECHA_2 ' + nombre)
}
saludarFlecha2('YASMIN MI NIÑA');


saludar();
saludar2();
saludar3('Gustavo');
saludar4('WUAPOOOO', 40, true, 'MEXICO CYTY');



/************************* MAS EJERCISIOS ********************/

function sumar(a, b) {
    return a + b;

}
const sumar2 = (a, b) => {
        return a + b;
    }
    //PARA RETORNAR SOLO UN RETURN SIN LA NECECIDAD DE TANTO CODIGO
const sumar3 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

/************************* ACTIVIDAD ********************/

const getAleatorio2 = () => Math.random();


console.log(sumar(1, 2));
console.log(sumar2(3, 5));
console.log(sumar3(8, 8));
console.log(getAleatorio());

console.log('RESULTADO:', getAleatorio2());