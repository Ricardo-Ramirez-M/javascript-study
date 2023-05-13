# Palabras Reservadas 

- break, export, super
- case, extends, switch
- catch, finally, this
- class, for, throw
- const, function, try 
- continue, if, typeof 
- debugger, import, var 
- default, in, void
- delete, instanceof, while 
- do, new, with
- else, return, yield 
- let 

# Palabras Reservadas en un Futuro
- enum, package, public
- implements, private, public
- interface, protected, await

# Evitar Usar
- null, undefined, true
- false, hasOwnProperty, isNaN
- infinity, isFinite, NaN
- length, Math, isPrototypeOf
- prototype, valueOf, name
- Number, Object, String
- toString, prompt, alert
- conform

# Declaración de Variables
No se puede comenzar con numero 
```
let 1nombre = 123;
````````````````````

Si se puede colocar:
```
let _nombre = 123;
let _ = 123;
let $ = 123;
let nombre$ = 123;
```

# Tips
Podemos usar las siguientes formas:
```
console.log({variable})  //Indica nombre de varibale 
console.table(variable) // Muestra una tabla con los valores
```


# Objetos 
Para borrar la priopiedad de un objeto hacemos:
```
delete objeto.propiedad
```

Mostrar cada objeto como un array (propiedad, valor):
```
const entriesPares = Object.entries(objeto)
console.log(entriesPares)
```
Se puede cambiar sus propiedades aun declarando el objeto como una constante, pero no se puede cambiar el valor del objeto a otro tipo como array, numero, etc por la const


Congelar un objeto al colocar la instrucción no puede modificarse excepto las propiedades hijas, pero no lo directos 
```
Object.freeze (objeto);
```

Mostrar unicamente las propiedades que tiene el objeto:
```
const propiedades = Object.getOwnPropertyNames(objeto);
```


Mostrar unicamente los valore que tiene las propiedades el objeto:
```
const valores = Object.values(objeto);
```

# Funciones 
Al colocar dentro de una función el console.log(arguments), arroja los argumentos de la invocaión de dicha función:
```
function saludar(nombre){
console.log(arguments);
}
saludar('Fernando',40,true,'CostaRica');
```

# ProTip de funciones 
Si vamos a pasar el mismo parametro a una propiedad de un objeto se puede omitir colocar el valor de la propiedad el parametro:
```
function crearPersona(nombre,apellido){
    return {
        nombre: nombre,
        apellido: apellido 
    }
}
//Podemos hacer lo sig. y lo reconoce js:
function crearPersona(nombre,apellido){
    return {
        nombre,
        apellido 
    }
}
//Refactorizando aún más:
function crearPersona(nombre,apellido){
    return {nombre,apellido}
}
//Con función flecha
const persona = (nombre,apellido) => ({nombre,apellido})
//Los parentisis indican que retorna el valor como un objeto identificando las llaves (sin parentesis arroja undefined)
```

Con funciones flecha no puedo mandar el objeto arguments al invocar la función, arroja error, lo que necesito hacer es usar:
```
const imprimeArgumentos = (...args) => {
    console.log(args);
}
// No pueden ir mas parametros despues del operador spreed(...) porque no los detecta
// pero si colocamos un parametro antes se debe colocar independiente
const imprimeArgumentos = (edad, ...args) => {
    console.log({ edad, args});
}
```