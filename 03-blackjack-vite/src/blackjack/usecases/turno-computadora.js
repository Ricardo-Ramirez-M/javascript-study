import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosJugadores, deck=[], puntosHTML, divCartasJugadores ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora= acumularPuntos( carta, puntosJugadores.length -1, puntosJugadores, puntosHTML);
        crearCarta( carta, puntosJugadores.length -1, divCartasJugadores);

    }while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
    determinarGanador(puntosJugadores);
}