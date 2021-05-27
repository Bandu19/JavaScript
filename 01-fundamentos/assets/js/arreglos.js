//ARR se le conoce que es un arreglo.
const arr = new Array(10);
console.log(arr);

const arrr = [];
console.log(arr);


let videoJuegos = ['Mario', 'Megaman', 'Carlos'];
console.log({ videoJuegos });
console.log(videoJuegos[2]);

let arregloCosas = [
    true,
    123,
    'Hola que hace',
    1 + 2,
    //funcion tradicional
    function() {},
    //funcion de flecha
    () => {},
    //objeto literal
    { a: 1 },
    //OTRO ARREGLO
    ['X', 'Megaman', 'Zero', 'Dr.', 'Light'],
    //OTRO ARREGLO
    [1, 2, 3, [
        'Willy',
        'Vegeta777'
    ]]

];

console.log({ arregloCosas });

//Aqui llamas un arreglo dentro de otro arreglo
console.log(arregloCosas[7][4]);
console.log(arregloCosas[8][2]);
//Aqui llamas un arreglo dentro de otro arreglo que tiene dentro de un arreglo
console.log(arregloCosas[8][3][1]);