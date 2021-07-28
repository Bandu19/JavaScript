const Procedimiento = (text, map, map2) => {
    var $resul = new String();
    var $i, $j, $c, posicion, busqueda, fila1, $len = map.length; //27

    for ($i = 0; $i < text.length; $i++) {
        $c = text.charAt($i); //h

        //DEVUELVE UN NUMERO
        posicion = map.indexOf($c);

        if (posicion <= 13) {
            alert(`La posición del numero: ${posicion} es menor que 13`);
            $j = posicion + posicion - posicion; //VALOR 14
            //$j = $c.indexOf($c);
            fila1 = "" + map2.charAt($j);
            $resul += fila1;

        } else if (posicion >= 14) {
            alert(`La posición del numero es: ${posicion} es mayor que 14`);
            $j = posicion + posicion - posicion;
            fila1 = "" + map2.charAt($j);
            $resul += fila1;
        }

    }
    return $resul;
}

const ROT47 = (text) => {
    var $resul = new String();
    $resul = Procedimiento(text, "abcdefghijklmnñopqrstuvwxyz ", 'zyxwvutsrqpoñnmlkjihgfedcba ');
    return $resul;
}
const Procedimiento2 = (text, map, map2) => {
    let $resul = new String();
    let $i, $j, $c, posicion, fila1; //27

    for ($i = 0; $i < text.length; $i++) {
        $c = text.charAt($i); //h
        posicion = map2.indexOf($c);

        if (posicion % 2 == 0) {
            alert(`La posición del numero es par: ${posicion}`);
            $j = posicion + posicion - posicion; //VALOR 14
            //$j = $c.indexOf($c);
            fila1 = "" + map.charAt($j);
            $resul += fila1;

        } else {
            alert(`La posición del numero es impar: ${posicion}`);
            $j = posicion + posicion - posicion;;
            fila1 = "" + map.charAt($j);
            $resul += fila1;
        }

    }
    return $resul;
}
const ROT48 = (text) => {
    var $resul = new String();
    $resul = Procedimiento2(text, "abcdefghijklmnñopqrstuvwxyz ", 'zyxwvutsrqpoñnmlkjihgfedcba ');
    return $resul;
}

let cadena = prompt('Ingresa la cadena'); //niño
console.log('La Encriptado es:', ROT47(cadena));

let cadena2 = ROT47(cadena);
console.log('EL desencriptado es:', ROT48(cadena2))