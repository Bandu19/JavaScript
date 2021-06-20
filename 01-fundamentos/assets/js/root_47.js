const Procedimiento = (text, map) => {
    var $resul = new String();
    var $i, $j, $c, $len = map.length;
    for ($i = 0; $i < text.length; $i++) {
        $c = text.charAt($i);
        if ($c == "ñ") {
            alert("Se ha detectado una letra Ñ por lo tanto se mostrara como un Rectangulo relleno ©");
            $c = ['©'];
            $j = $c.indexOf($c);
            if ($j >= 0) {
                $c = $c.charAt($j + 0);
            }
            $resul += $c;

        } else if ($c !== "ñ") {
            $j = map.indexOf($c)
            if ($j >= 0) {
                $c = map.charAt(($j + $len / 2) % $len)
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

console.log(ROT47('La piña tiene mandarina pero piña'))