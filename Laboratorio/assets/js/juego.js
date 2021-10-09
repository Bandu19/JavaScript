//Funcion Anonima.

(() => {
  //ES DIGAMOS UN AUTOCORRECTOR
  "use strict";

  const personajes = ["Ana", "Mercy", "Mei"];
  console.log(personajes);
})();

(() => {
  "use strct";

  // Se puede ver de diferente forma.

  //  (function () {})();

  /**
   * 2C = Two of Clubs (Tréboles)
   * 2D = Two of Diamonds (Tréboles)
   * 2H = Two of Hearts (Tréboles)
   * 2S = Two of Spades (Tréboles)
   */

  let deck = []; //CREAR UN NUEVO ARREGLO
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  // let puntosJugador = 0,
  //   puntosComputadora = 0;

  let puntosJugadores = [];

  //REFERENCIAS DEL HTML

  //querySelector sirve para tomar e identificar ya sea las etiquetas o clases de los div o small etc..
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo"),
    pntJugador = document.querySelectorAll("small"),
    divCartasJugador = document.querySelector("#jugador-cartas"),
    divCartasComputadora = document.querySelector("#computadora-cartas");

  console.log(btnPedir);
  console.log(btnDetener);
  console.log(pntJugador);
  console.log(btnNuevo);
  console.log(divCartasJugador);

  console.log(divCartasComputadora);

  // Esta funcioón crea un nuevo deck.
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      // deck.push(i + 'C');
      // deck.push(i + 'H');
      // for (let j = 0; j < tipos.length; j++) {
      //     deck.push(i + tipos[j])
      // }
      for (let tipo of tipos) {
        // 2C
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
    //deck = _.shuffle(deck); //NUEVO CAMBIO EN LA VARIABLE deck
    //console.log(deck); //Otro cambio

    return _.shuffle(deck);
  };

  //ESTA FUNCION INICIALIZAR EL JUEGO
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    console.log({ puntosJugadores });
  };

  // Esta función me permite tomar una carta

  const pedirCarte = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    //const carta = deck.pop();
    // console.log(deck); // EL ORIGINAL DECK
    //LA MODIFICACIÓN DEL DECK
    // console.log(carta); //carta debe ser de la baraja
    return deck.pop();
  };
  // deck = []; // Limpiar el deck
  // pedirCarte();

  // for (let i = 0; i <= 100; i++) {
  //     pedirCarte();
  // }

  const valorCarta = (carta) => {
    //Nuevo Metodo substring
    const valor = carta.substring(0, carta.length - 1); //ESTE METODO ES MUY IMPORATANTE

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
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
  };
  const acumularPuntos = () => {};

  ////////////////////Turno de la computadora////////////////////

  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarte(); //2C
      puntosComputadora += valorCarta(carta); //2
      pntJugador[1].innerHTML = puntosComputadora; // no afecta

      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie Gana :(");
      } else if (puntosMinimos > 21) {
        alert("La computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 10);
  };

  // const valor = valorCarta(pedirCarte());
  // console.log({ valor });

  ////////////////////Eventos////////////////////
  //CALLBACK
  btnPedir.addEventListener("click", function () {
    // console.log('click');
    const carta = pedirCarte();
    puntosJugador += valorCarta(carta);
    //EL [0] HACE refecencia a los id = Jugador-cartas;
    //id = computadoras-cartas;
    pntJugador[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/4C.png" alt="carta_1">
    //Crearemos algo nuevo en la propiedad de IMG (HTML)
    const imgCarta = document.createElement("img");
    //NUEVO ELEMENTO
    imgCarta.src = `assets/cartas/${carta}.png`;
    //Con esto agarras propiedades ya sea de Boostrap o CSS3
    imgCarta.classList.add("carta");

    //BOTON DE PEDIR CARTA
    //append sirve para ingresar carta
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      alert("Lo siento mucho, perdiste");
      //IMPORTANTE
      btnPedir.disabled = true; //esta propiedad hace que desactive tu boton que estas trabajando.
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("Ganaste <3, Victoria");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
    console.log(puntosJugador);
  });

  //////////////////DETENER//////////////////

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();
    inicializarJuego();

    // deck = [];
    // deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    pntJugador[0].innerHTML = 0;
    pntJugador[1].innerHTML = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
})();
