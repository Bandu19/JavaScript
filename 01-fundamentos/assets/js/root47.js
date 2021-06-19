function ROTn(text, map) {
    // Generic ROT-n algorithm for keycodes in MAP.

    var R = new String();
    var i, j, c, len = map.length
    if (R !== "ñ") {
        for (i = 0; i < text.length; i++) {
            c = text.charAt(i)
            if (c == "ñ") {
                alert("ERROR NO PUEDES UTILIZAR UNA Ñ NO ENTRA")
            } else if (c !== "ñ") {
                j = map.indexOf(c)
                if (j >= 0) {
                    c = map.charAt((j + len / 2) % len)
                }
                R += c
            }


        }
        return R;
    }


}

function ROT47(text) { //Hola
    var R = new String()
    R = ROTn(text, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")
    return R;


}
console.log(ROT47('Niño'));