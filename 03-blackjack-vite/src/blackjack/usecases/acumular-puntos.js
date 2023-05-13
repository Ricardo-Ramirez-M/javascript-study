import { valorCarta } from "./valor-carta";

/**
 * Acumula los puntos de los jugadores
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 * @returns Array de puntos de jugadores y computadora
 */
 export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
