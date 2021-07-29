/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spades (Tréboles)
 */
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        // deck.push(i + 'C');
        // deck.push(i + 'H');
        // for (let j = 0; j < tipos.length; j++) {
        //     deck.push(i + tipos[j])
        // }
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }

    }
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;

}

crearDeck();