function crearPersona(nombre, apellido) {
    //EJEMPLO DE OBJETO LITERAL
    return {
        nombre,
        apellido
    }
}

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

/**************SEGUNDO EJEMPLO****************************************** */
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
const persona2 = crearPersona2('Oscar', 'Acuña')
console.log(persona2);



function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Oscar', 'Saludo');

/************************* ACTIVIDAD ********************/
//Hay varias Formas
/*
    const imprimeArgumentos2 = (arguments) => {
        console.log(arguments)

    }

    //POSTERIORMENTE ESTE IMPRIME TODOS LOS VALORES
    const imprimeArgumentos2 = (...arguments) => {
        console.log(arguments)

    }
*/
//Por si queremos ocupar otro otro Parametro despues del argumento

const imprimeArgumentos2 = (nombre, ...arguments) => {
    //console.log({ nombre, arguments });
    return arguments;
};


//MANERAS DE IMPRIMIR POR MEDIO DE CONSOLA
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(19, false, true, 'Yasmin', 'Saludo');
console.log({ casado, vivo, nombre, saludo });

//IMPRIMIR SOLO EL APELLIDO

/* Aqui principalmente si queremos sustituir el valor para no afectar a la funcion*/
const { apellido: nuevoApellido } = crearPersona2('Fernando', 'Herrera');
console.log({ nuevoApellido });

/* EJMPLO SIGUIENTE */
const personaje = {
    nombre: 'Tony Stark', //1
    codeName: 'Iroman', //2
    vivo: false, //3
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']

};


const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
    console.log('--------------------------------------------------')
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });


}

imprimePropiedades(personaje);