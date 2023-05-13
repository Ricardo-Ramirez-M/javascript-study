import _ from 'underscore';
import { acumularPuntos, crearCarta, pedirCarta, turnoComputadora, crearDeck } from './usecases/index.js';

const miModulo =(() => {
  'use strict'

/**
 * Valores de inicio de cartas inglesas
 */
  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S']; 
  const especiales = ['A', 'J', 'Q', 'K'];

/**
 * Referencias de HTML botones
 */
  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevo');
        
  
/**
 * Referencias de HTML a cartas
 */
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML         = document.querySelectorAll('small');
  
/**
 * Inicializacion de puntos de jugadores y computadora
 */
    let puntosJugadores = [];  

    const inicializarJuego = ( numJugadores=2 ) => {
        deck = crearDeck(tipos, especiales);
    
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    
        puntosHTML.forEach( element => element.innerText = 0 );
        divCartasJugadores.forEach( element => element.innerHTML = '' );
      
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }
      
  // Eventos
  /**
   * Botón de Pedir Carta
   */
  btnPedir.addEventListener('click', () => {
    console.log(deck);
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML );
     
      crearCarta( carta, 0, divCartasJugadores);

      if (puntosJugador > 21) {
          console.warn('Perdiste');
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores );
          
      } else if (puntosJugador === 21){
          console.warn('21, GENIAL!!!')
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, puntosJugadores, deck, puntosHTML, divCartasJugadores );
      }
  });


  /**
   * Botón de dejar de pedir Carta
   */
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores[0], puntosJugadores, deck, puntosHTML, divCartasJugadores); 
  });

  /**
   * Botón de Nuevo Juego
   */
  btnNuevo.addEventListener('click', () => {
    puntosJugadores =[];
      inicializarJuego()
  });

  return{
      inicializarJuego: inicializarJuego
  };
      
})();


