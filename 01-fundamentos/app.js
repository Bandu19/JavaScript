//console.log('Hola Mundo');
let a = 10,
    b = 20,
    c = 10,
    d = 10,
    x = a + b;


console.log(x);
// Consola de Advertencia
console.warn(x);
// Mensaje de Error 
console.error(x);
// Mensaje de Informe
console.info(x);

console.log('a', a);
console.warn('b', b);
console.info('La suma de a+b es igual =', x);

// Otra forma de imprimir los Mensajes seria:
console.log('%c Mis variables', 'color:red; font-weight: bold')
console.log({ a });
console.log({ d });