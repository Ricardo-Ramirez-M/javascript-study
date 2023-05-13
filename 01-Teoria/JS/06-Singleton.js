/**
 * Singletons es una instancia unica de la clase
 */

class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre =''){
        //if ?

        if (!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Balck Panther');
console.log(`Nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia3 es: ${instancia3.nombre}`);