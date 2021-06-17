var cadena = ["Hola mundo"];
var str = "";
var cadenna = cadena.length;
var sum = 0;
for (var i = 0; i < cadena.length; i++) {
    var character = cadena.charAt;
    var ascii = character;
    if (ascii < 80) {
        ascii = ascii + 47;
    } else {
        ascii = ascii - 47;
    }
    arr[i] = ascii;
}
for (var i = 0; i < cadena.length(); i++) {
    var xban = Character.toString(i);
    if (xban.equals("O")) {
        str = str + " ";
    } else {
        str = str + Character.toString(i);
    }
}