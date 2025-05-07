// Definición de la clase base
class Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    hablar(): void {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  // Clase derivada
  class Perro extends Animal {
    raza: string;
  
    constructor(nombre: string, raza: string) {
      super(nombre);
      this.raza = raza;
    }
  
    hablar(): void {
      console.log(`${this.nombre} ladra. Es un ${this.raza}.`);
    }
  }
  
  // Prueba
  const perro = new Perro("Coquito", "Golden Retriever");
  perro.hablar(); // Coquito ladra. Es un Golden Retriever.

// Definir el tipo para los autos
type Auto = {
    marca: string;
    modelo: string;
    year: number;
    precio: number;
    puertas: number;
    color: string;
    transmision: string;
  };
  
  const autos: Auto[] = [
    {marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
  ];
  
  // 1) .forEach
  console.log('--- .forEach ---');
  autos.forEach(auto => console.log(auto));
  
  // 2) .map
  console.log('--- .map (marcas) ---');
  const marcas: string[] = autos.map(auto => auto.marca);
  console.log(marcas);
  
  // 3) .filter
  console.log('--- .filter (rojo) ---');
  const autosRojos: Auto[] = autos.filter(auto => auto.color === 'Rojo');
  console.log(autosRojos);
  
  // 4) .find
  console.log('--- .find (primer BMW) ---');
  const primerBMW: Auto | undefined = autos.find(auto => auto.marca === 'BMW');
  console.log(primerBMW);
  
  // 5) .reduce
  console.log('--- .reduce (total inventario) ---');
  const totalInventario: number = autos.reduce((total, auto) => total + auto.precio, 0);
  console.log('Total inventario: $' + totalInventario);
  
  // 6) .some
  console.log('--- .some (existe Ferrari) ---');
  const existeFerrari: boolean = autos.some(auto => auto.marca === 'Ferrari');
  console.log('¿Hay Ferrari? ' + existeFerrari);
  
  // 7) .repeat
  console.log('--- .repeat ---');
  if (autosRojos.length > 0) {
    console.log('¡Hay autos rojos disponibles!\n'.repeat(3));
  }
  
  // 8) .sort
  console.log('--- .sort (precio ascendente) ---');
  const autosOrdenadosPorPrecio: Auto[] = [...autos].sort((a, b) => a.precio - b.precio);
  console.log(autosOrdenadosPorPrecio);
  
  // 9) .reverse: autos ordenados de más caro a más barato
  console.log('--- .reverse (precio descendente) ---');
  const autosPrecioDescendente: Auto[] = [...autos].sort((a, b) => a.precio - b.precio).reverse();
  console.log(autosPrecioDescendente);
  
  console.log('--- .reverse (marcas invertidas) ---');
  const marcasInvertidas: string[] = [...marcas].reverse();
  console.log(marcasInvertidas);

// — Promise + async/await —
// Simula una búsqueda asincrónica de un auto por marca
function buscarAutoPorMarca(marca: string): Promise<Auto> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const encontrado = autos.find(a => a.marca === marca);
        if (encontrado) resolve(encontrado);
        else reject(`No se encontró ningún auto de marca ${marca}`);
      }, 1000);
    });
  }
  
  async function mostrarAutoPorMarca(marca: string): Promise<void> {
    try {
      const auto = await buscarAutoPorMarca(marca);
      console.log(`Auto encontrado: ${auto.marca} ${auto.modelo} ($${auto.precio})`);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }
  
  // Llamadas de prueba
  mostrarAutoPorMarca('Audi');
  mostrarAutoPorMarca('Ferrari');