/**
 * Problema de clases antes para navegadores antiguos
 */

const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad} `); // para acceder a las propiedades de los objetos y estar dentro del mismo scope se utiliza la palabra "this"
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad} `); // para acceder a las propiedades de los objetos y estar dentro del mismo scope se utiliza la palabra "this"
    }
}


fer.imprimir();

//Es muy repetitivo crear muchos ojetos 

// las instacias se crean de la sig manera con letra mayuscula al inicio en una funcion:

function Cliente (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad} `);
    }
}

const maria = new Cliente('Maria', 18);
const meli = new Cliente('Melissa', 35);

maria.imprimir();
meli.imprimir();

console.warn('Clases en JS');
// Debe existir documentacion para saber que a la funcion se debe colocar palabra new e instanciar para identificar de una funcion comun



/**
 * Clases básicas en JS
 * Propiedades y metodos estaticos
 * Propiedades de la clase 
 * constructor
 * set y gets
 * metodos
 * privado
 */


class Persona{
    // Propiedades, gets y metodos estaticos
    //Propiedades y metodos estaticos permite obtener valores sin instanciar la clase persona

    /**
     * Las propiedades estaticas permiten saber cuantas instancias de mi clase han inicializado
     */

    static _conteo = 0; //Aparece en el prototype
    
    /** */
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
        console.log(this.nombre);//undefined
        console.log('Metodo estatico');
    }

    // 'use strict'; Viene por defecto
    //inicializar propiedades de clase, si existen en el constructor no es necesario ponerlo ahi
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre, codigo, frase){ //El constructor siempre retorna lo que esta el objeto y no undefined por no colocar return
        if (!nombre) throw Error('No existe nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase ;

        Persona._conteo++;
    }

    // set establece un valor. Solo recibe un argumento 
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase( );
    }

    // get recupera un valor de una propiedad
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //Metodos en clases
    quiensoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log('******* mi frase ***********');
        this.quiensoy();
        console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`);
    }   


}
//instancia
const spiderman = new Persona('Peter Parker', 'Spider', 'Clave1');

const ironman = new Persona('Tony Stark', 'Ironman', 'ClaveMaestra');
// console.log(ironman);
//Ejecutar metodo
spiderman.quiensoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'Pay de a tia May';
//podemos modificar desde afuera auqnue no es muy recomendado y tambien agregar propiedades 
// spiderman.setComidaFavorita = 'Otra comida';
// spiderman.nemesis = 'Duende Verde';

console.log(spiderman);

console.log('Conteo estatico: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();