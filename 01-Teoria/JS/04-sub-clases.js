/**
 * Extends
 */

class Persona{
  
    static _conteo = 0; 
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
        console.log(this.nombre);//undefined
        console.log('Metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre='sin nombre', codigo='', frase=''){ 
        if (!nombre) throw Error('No existe nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase ;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase( );
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quiensoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quiensoy();
        console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`);
    }   


}

// const spiderman = new Persona('Peter Parker', 'Spider', 'Clave1');
// console.log(spiderman);

/**
 * Para herededar clases utilizamos extends y no reescribir todo para ello extendemos de la ya creada
 */

// class Heroe {
//     nombre;
//     codigo;
//     frase;
//     clan;
// }
 
class Heroe extends Persona{
    clan = 'sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase); // apunta a la clase padre Persona y debe de llamarse primero que inicializar todo lo nuevo
        this.clan = 'Los Avengers';
    }

    //si queremos llamar a un metodo nuevo llamado igual pero tambien al que existe en la clase padre se hace:
    quiensoy(){
        console.log(`Soy ${this.nombre} y soy del clan ${this.clan}`);
        super.quiensoy();
    }


}

const spiderman = new Heroe('Peter Parker', 'Avenger1', 'El derecho ajeno es la paz');
console.log(spiderman);
spiderman.quiensoy();

/**
 * si colocamos un constructor vacio a la nueva clase Heroe arroja error de que el construtor debe de llamarse a la clase padre que es Persona, para solucionarlo se agrega el super o se dja sin constructor
 */