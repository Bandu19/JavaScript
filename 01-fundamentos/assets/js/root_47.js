const Procedimiento = (text, map) => {
    var $resul = new String();
    var $i, $j, $c, $len = map.length; //94
    for ($i = 0; $i < text.length; $i++) {
        $c = text.charAt($i); //n
        if ($c === "ñ") {
            alert("Se ha detectado una letra Ñ por lo tanto se mostrara como un Rectangulo relleno í");
            $c = ['▓'];
            $j = $c.indexOf($c);
            if ($j >= 0) {
                $c = $c.charAt($j + 0);
            }
            $resul += $c;

        } else if ($c !== "ñ") {
            $j = map.indexOf($c)
            if ($j >= 0) {
                $c = map.charAt(($j + $len / 2) % $len);
                //cono = map.charAt(())
            }
            $resul += $c;
        }


    }
    return $resul;
}

const ROT47 = (text) => {
    var $resul = new String();
    $resul = Procedimiento(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~");
    return $resul;
}

let cadena = prompt('Ingresa la cadena'); //niño
console.log('La Encriptado es:', ROT47(cadena));


console.log('------------DESENCRIPTAR-----------');
const Procedimiento2 = (text, map) => {
    var $resul = new String();
    var $i, $j, $c, $len = map.length;
    for ($i = 0; $i < text.length; $i++) {
        $c = text.charAt($i);
        if ($c === "▓") {
            alert("Se ha detectado una letra Ñ por lo tanto se mostrara como un Rectangulo relleno í");
            $c = ['ñ'];
            $j = $c.indexOf($c);
            if ($j >= 0) {
                $c = $c.charAt($j + 0);
            }
            $resul += $c;

        } else if ($c !== "ñ") {
            $j = map.indexOf($c)
            if ($j >= 0) {
                $c = map.charAt(($j + $len / 2) % $len);
                //cono = map.charAt(())
            }
            $resul += $c;
        }


    }
    return $resul;
}

const ROT48 = (text) => {
    var $resul = new String();
    $resul = Procedimiento2(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~");
    return $resul;
}

let consola = ROT47(cadena);
console.log('EL METODO DESINCRIPTADO ES:', ROT48(consola));