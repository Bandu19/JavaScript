const Procedimiento = (text, clave) => {

    var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var resultado = new String();
    let x1, x2,
        opt, x3, c = "",
        limite, incremento, incremento2, contador = "",
        final = "";

    let texto_junto = text.replace(" ", "");
    let clave_junto = clave.replace(" ", "");
    //OPERACION
    limite = texto_junto.length / clave_junto.length;

    for (i = 0; i < limite; i++) {
        contador += clave_junto.charAt(i);

    }
    x3 = texto_junto.length - contador.length;
    for (i = 0; i < x3; i++) {
        contador += clave_junto.charAt(i);

    }
    for (i = 0; i <= texto_junto.length - 1; i++) {
        incremento = "" + texto_junto.charAt(i);
        incremento2 = "" + contador.charAt(i);
        x1 = abecedario.indexOf(incremento);
        x2 = abecedario.indexOf(incremento2);
        opt = (x1 + x2) % 27;
        console.log({ opt });
        //NUMERO 22
        resultado = (x1 + x2) % 27;
        resultado += final.charAt(resultado);
        console.log("Letra: " + final);

    }
    return resultado;

}

console.log(Procedimiento('la piña', 'lata'));