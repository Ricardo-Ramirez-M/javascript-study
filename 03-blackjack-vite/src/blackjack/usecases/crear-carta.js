/**
 * Crea una las cartas en HTML
 * @param {String} carta Es un string
 * @param {Number} turno Es el número para el turno de jugador o computadora
 * @param {NodeListOf<Element>} divCartasJugadores
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}