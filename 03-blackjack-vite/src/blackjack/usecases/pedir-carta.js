
/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Es un array de strings
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

