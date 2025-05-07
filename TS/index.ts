// index.ts: ejemplos de variables, tipos y funciones en TypeScript

// 1) Variables con tipos
let usuario: string = 'Victor';
const MAX_INTENTOS: number = 5;
let estaActivo: boolean = false;

// 2) Array y tupla
let scores: number[] = [10, 20, 30];
let tupla: [string, number] = ['edad', 20];

// 3) Enum para roles de usuario
enum Role { Admin, User, Guest }
let rolActual: Role = Role.User;

// 4) Función con tipos en parámetros y retorno
function suma(a: number, b: number): number {
  return a + b;
}

// 5) Arrow function con tipo
const esPar = (n: number): boolean => n % 2 === 0;

// 6) Uso de console
console.log(`Usuario: ${usuario}, Intentos máximos: ${MAX_INTENTOS}`);
console.log('Scores:', scores);
console.log('Tupla:', tupla);
console.log('Rol actual:', Role[rolActual]);
console.log('2 + 3 =', suma(2, 3));
console.log('¿4 es par? ', esPar(4));
