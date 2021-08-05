/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spades (Tréboles)
 */
let deck = []; //CREAR UN NUEVO ARREGLO
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS DEL HTML
const btnPedir = document.querySelector('#btnPedir');
console.log(btnPedir);

const pntJugador = document.querySelectorAll('small');
console.log(pntJugador);


// Esta funcioón crea un nuevo deck.
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        // deck.push(i + 'C');
        // deck.push(i + 'H');
        // for (let j = 0; j < tipos.length; j++) {
        //     deck.push(i + tipos[j])
        // }
        for (let tipo of tipos) { // 2C
            deck.push(i + tipo);
        }
    }
    //CONCATENAN LOS DOS FOR
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }

    }
    //console.log(deck); //PRIMER FOR
    //METODO .shuffle
    deck = _.shuffle(deck); //NUEVO CAMBIO EN LA VARIABLE deck
    console.log(deck); //Otro cambio

    return deck;

}
crearDeck();

// Esta función me permite tomar una carta

const pedirCarte = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        const carta = deck.pop();
        // console.log(deck); // EL ORIGINAL DECK
        //LA MODIFICACIÓN DEL DECK
        // console.log(carta); //carta debe ser de la baraja
        return carta;
    }
    // deck = []; // Limpiar el deck
    // pedirCarte();

// for (let i = 0; i <= 100; i++) {
//     pedirCarte();
// }

const valorCarta = (carta) => {
    //Nuevo Metodo substring
    const valor = carta.substring(0, carta.length - 1); //ESTE METODO ES MUY IMPORATANTE

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
    // let puntos = 0;
    // console.log({ valor });
    // 2 = 2 10 = 10, 3 = 3

    //is not a number
    // if (isNaN(valor)) {
    //     // console.log('No es un numero');
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     console.log('Es un numero');
    //     puntos = valor * 1; //Manera que puedes convertir String a Int
    // }
    // console.log(puntos);

}

// const valor = valorCarta(pedirCarte());
// console.log({ valor });


////////////////////Eventos////////////////////
//CALLBACK
btnPedir.addEventListener('click', function() {
    // console.log('click');
    const carta = pedirCarte();

    puntosJugador += valorCarta(carta);
    //EL [0] HACE refecencia a los id = Jugador-cartas;
    //id = computadoras-cartas;
    pntJugador[0].innerText = puntosJugador;
    console.log(puntosJugador);
});