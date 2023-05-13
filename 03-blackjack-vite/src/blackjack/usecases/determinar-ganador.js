
/**
 * Determina el ganador con los puntos
 * @param {Array<Number>} puntosJugadores [jugador, ..., computadora]
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        }else if(puntosMinimos>21){
            alert('Computadora gana');
        }else if( puntosComputadora > 21 ){
            alert('Jugador gana');
        } else{
            alert('Computadora gana'); 
        }    
    }, 450);

}