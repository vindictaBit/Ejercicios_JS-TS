"use strict";
// index.ts: ejemplos de variables, tipos y funciones en TypeScript
// 1) Variables con tipos
let usuario = 'Victor';
const MAX_INTENTOS = 5;
let estaActivo = false;
// 2) Array y tupla
let scores = [10, 20, 30];
let tupla = ['edad', 20];
// 3) Enum para roles de usuario
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let rolActual = Role.User;
// 4) Función con tipos en parámetros y retorno
function suma(a, b) {
    return a + b;
}
// 5) Arrow function con tipo
const esPar = (n) => n % 2 === 0;
// 6) Uso de console
console.log(`Usuario: ${usuario}, Intentos máximos: ${MAX_INTENTOS}`);
console.log('Scores:', scores);
console.log('Tupla:', tupla);
console.log('Rol actual:', Role[rolActual]);
console.log('2 + 3 =', suma(2, 3));
console.log('¿4 es par? ', esPar(4));
