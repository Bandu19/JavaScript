const Procedimiento = (text, clave) => {
    const opt = {
        abecedario: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        contador: "",
        l: 1,
        texto_junto: text.replace(" ", ""),
        clave_junto: clave.replace(" ", "")

    }
    let resultado = new String();
    let x1, x2, x3, valor,
        limite, incremento, incremento2;

    limite = opt.texto_junto.length / opt.clave_junto.length;

    while (opt.l <= limite) {
        opt.l++;
        opt.contador += opt.clave_junto;
    }

    x3 = opt.texto_junto.length - opt.contador.length;
    for (i = 0; i < x3; i++) {
        opt.contador += opt.clave_junto.charAt(i);

    }
    for (i = 0; i <= opt.texto_junto.length - 1; i++) {
        incremento = "" + opt.texto_junto.charAt(i);
        incremento2 = "" + opt.contador.charAt(i);
        x1 = opt.abecedario.indexOf(incremento);
        x2 = opt.abecedario.indexOf(incremento2);
        //22
        valor = (x1 + x2) % 27;
        console.log({ valor });
        //NUMERO 22
        resultado += opt.abecedario[valor];
        //resultado += abecedario.charAt(opt);
        console.log("Letra: " + resultado);

    }
    return resultado;

}

let cadena = prompt('Ingresa la cadena:');
let clave = prompt('Ingresa la clave');
console.log("La Palabra desifrada es: ", Procedimiento(cadena, clave));