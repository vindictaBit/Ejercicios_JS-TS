// script.js

// 1) Variables: let y const
let nombre = 'Victor';        // 'let' permite reasignar más adelante
const PI = 3.1416;          // 'const' es inmutable

// 2) Tipos básicos (JavaScript es dinámico, aquí solo conceptualizamos)
//    - 'edad' será un número
//    - 'activo' será un booleano
let edad = 28;
let activo = true;

// 3) Función clásica
function saludar(n) {
  // concatena cadenas para devolver un saludo
  return '¡Hola, ' + n + '!';
}

// 4) Arrow function
const cuadrado = x => x * x;  
// versión reducida de:
// const cuadrado = function(x) { return x * x; }

// 5) Mostramos en consola
console.log( saludar(nombre) );  
console.log('PI:', PI, 'cuadrado de 5 =', cuadrado(5));

// 6) También lo ponemos en la página
//    Busca el elemento con id="output" y escribe dentro el resultado
document.getElementById('output').textContent =
  saludar(nombre) +
  ' La función cuadrado(5) da ' +
  cuadrado(5);
