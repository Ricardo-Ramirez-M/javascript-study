
const miModulo =(() => {
    'use strict'

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S']; 
    const especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador     = 0,
    //     puntosComputadora = 0;

    // Referencias HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo'),
          puntosHTML = document.querySelectorAll('small');
    
    let puntosJugadores = [];
    
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    // Funcion de incio de juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( element => element.innerText = 0 );
        divCartasJugadores.forEach( element => element.innerHTML = '' );
        

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    }
        
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo)
            }
        }
        return _.shuffle(deck);
    }
   
    // Esta función permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }


    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length -1);
        return ( isNaN( valor ) )   ?
                ( valor === 'A' )   ? 11 : 10
                : valor * 1;
        // return (!isNaN(valor)) ? valor : valor === 'A' ? 11 : 10;  Función mia 
    }

    // Turno 0 = primer jugador y el último la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }



    const crearCarta = ( carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }



    // Turno computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora= acumularPuntos( carta, puntosJugadores.length -1 );
            crearCarta( carta, puntosJugadores.length -1);

        }while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        
        determinarGanador();
    }


    const determinarGanador = () => {

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
        }, 200);

    }


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );
       
        crearCarta( carta, 0);

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
            
        } else if (puntosJugador === 21){

            console.warn('21, GENIAL!!!')
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
            
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );
        
    });

    btnNuevo.addEventListener('click', () => {
        
        inicializarJuego();
       
    });

    return{
        inicializarJuego: inicializarJuego
    };
        
})();


