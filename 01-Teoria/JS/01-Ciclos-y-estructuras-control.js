/**
 * Valor referencia y romper referencia
 */

//No afecta otro lugar de memoria solo el valor
let a = 10; let b = a; 
a = 30;
console.log({a,b});

// Todos los objetos primitivos pasan por valor y todos los objetos por referencia
// let juan = { nombre: 'Juan'};
// let ana = juan;
// console.log({juan, ana});
// console.log('****************************');
// // Cambia de nombre el objeto por que todos los objetos de js pasan por refencia 
// ana.nombre = 'Ana';
// console.log({juan, ana });
// console.log('****************************');
//Funcion con problema
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona
}
let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter )
console.log({peter, tony});
//peter es el parametro, el parametro cambia a Tony por lo que cambia peter. Al invocar la funcion con tony, tony cambia a Tony
console.log('****************************');

//Operador SPREAD sirve para separar propiedades y valores de los objetos (...)
let juan = { nombre: 'Juan' };
let ana = { ...juan };
console.log({juan , ana});
ana.nombre = 'Ana';
// Parametro REST se coloca despues del parametro de una funcion y al colocar en cualquier otro lugar se llama SPREAD y rompe la referencia
console.log('****************************');
const cambiarNombre1 = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona
}
let peter1 = { nombre: 'Peter' };
let tony1 = cambiarNombre1( peter1 )
console.log({peter1, tony1});


/**
 * Arreglos
 */
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas1 = frutas.slice();
console.timeEnd('slice');


otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

//Tambien inserta en la primera variable frutas, pero si a otras frutas agregamos el metodo SPREAD se elimina


/**
 * If-else
 */

let r = 15;

if (r<10) { //undefined, null, una asignacion
    console.log('A es menor que 10');
}else {
    console.log('A es mayor que 10');
}

console.log('Fin del programa');

const hoy = new Date(); // {} o a colocar object()
let dia = hoy.getDay();//0=Domingo, 1=Lunes, 2=Martes, etc...
console.log({dia});

if (dia === 0) { //== Compara valores, === comparar valor y tipo
    console.log('Es domingo');
} else {
    console.log('No es domingo');
}

/**
 * Objetos como condicionales
*/
dia = 6;
let diaLetras = {
    0: ()=>'domingo - 0',
    1: ()=>'lunes - 1',
    2: ()=>'martes - 2',
    3: ()=>'miercoles - 3',
    4: ()=>'jueves - 4', 
    5: ()=>'viernes - 5',
    6: ()=>'sabado - 6',
}

let diaLetras1 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves',, 'viernes', 'sabado']

console.log(diaLetras[dia]() );
console.log(diaLetras1[dia] || 'Día no definido');

/**
 * Logica Booleana
 */

console.warn('Not o la negación');
console.log(true); //true
console.log(false);//false
console.log(!true);//false
console.log(!false);//true
console.log(!!false);//false
console.log(!!!!!true);//false  se puede colocar tantos como sean necesarios

const regresaFalse = () => {
    return false;
}
const regresaTrue = () => {
    return true;
}

console.warn('Booleano con funciones')
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);//true
console.log(false && false);//false
console.log(true && false);//false
console.log(false && true);//false

console.warn('Booleano con funciones')
console.log(regresaFalse() && regresaTrue()); //solo ejecuta la primera funcion si es false

console.warn('OR');
console.log(true || true);//true
console.log(false || false);//false
console.log(true || false);//true
console.log(false || true);//true

console.warn('Booleano con funciones')
console.log(regresaFalse() || regresaTrue());  
console.log('4 Condiciones: ', true || true || true || false);

/**
 * Asignaciones con operadores
 */

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const prueba = true && 'Hola Mundo' && 150;// cuando son valores verdaderos arrojara el ultimo valor, se asigna el ultimo valor a la variable
const prueba1 = false && 'Hola Mundo' && 150;
const prueba2 = 'Cadena' && 'Hola Mundo' && soyFalso && true;
const prueba3 = soyFalso || 'Ya no soy falso';
const prueba4 = soyFalso || 'Ya no soy falso X2' || true;// Ya no arroja true por que el resultado en or es el primer valor verdadero
const prueba5 = soyFalso|| regresaTrue() || 'Ya no soy falso X2' || true;

console.log({prueba, prueba1, prueba2, prueba3, prueba4, prueba5});

console.log('******************************************');
console.log('******************************************');


/**
 * Operador condicional ternario 
 */

const diaX = 1, horaActual = 10;
let horaApertura, mensaje;
/*
if (diaX === 0 || diaX ===6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Entre semana');
    horaApertura = 11;
}

if ([0,6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Entre semana');
    horaApertura = 11;
}*/

horaApertura = ( [0,6].includes(dia)) ? 9 : 11;


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura) ? `Esta abierto` : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({horaApertura, mensaje});

const elMayor = (a,b) => (a > b) ? a : b;
const tieneMembresia = (miembro)  => (miembro) ? '2 Dolares' : '10 Dolares';
console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15)
];

console.log(amigosArr);

const notas = 65;
const grado =   notas >= 95 ? 'A+':
                notas >= 90 ? 'A':
                notas >= 85 ? 'B+':
                notas >= 80 ? 'B':
                notas >= 75 ? 'C+':
                notas >= 70 ? 'C' : 'F';

console.log({notas, grado});

/**
 * Switch
 */

//Reconoce valor y tipo 

console.warn('Switch');
const day = 0;
switch (day) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('No es un día de la semana');
        break;
}

/**
 * Estructuras ciclicas
 */

/**
 * while y do While
 */

//La condición debe de ser verdadera, los valores falsos son: undefined, mull, false
console.warn('while');
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

while (carros[i]) {
    if (i===1) {
        i++;
        continue;
    }
    
    console.log(carros[i]);
    i++;
}

console.warn('do - while');
let j = 10;

do{
    console.log(carros[j]);
}while(carros[j]);

/**
 * Ciclo For
 */

console.warn('for')
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('for in')
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('for of')
for (let heroe of heroes) {
    console.log(heroe);
}
