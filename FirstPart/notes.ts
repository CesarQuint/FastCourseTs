//-Tiene inferenia pues verifica el set anterior

let persona = 'Cesar';
// persona = 22
//* Lo de arriba mostrara un error

//!ANY ignora el tipado

let ignore: any = 'pp';

//* No sabra las propiedades
// ignore.toUppercase()

//? Funciones

function saludar(name: string) {
  return name + '_PP';
}

//*Aqui infiere que es un Any implisito
function mejorSaludo({ name, age }: { name: string; age: number }) {
  return `Hola ${name} tienes ${age} años`;
}

//-Funciones como parametro

//!No uses Function ,ya que esto es como usar un any

// const sayHiFunction = (fn: Function) => {
//   fn('Miguel');
// };

// sayHiFunction((name: string) => {
//   console.log(name);
// });

//? Mejor ocupa el tipado de funciones
//- La estructura sera fm: (parametros de la funcion)=>{tipo de valor que esperamos retorne}

const sayHiFunction = (fn: (name: string) => string) => {
  fn('Miguel');
};

sayHiFunction((name: string) => {
  return name + 'PP';
});

//- Funciones que nunca retornan nada pero no son Void

let response = (message: string): never => {
  throw new Error('El pp');
};

//? Objetos y Type Alias

//!Tipes siempre se crean en Hero

type Hero = {
  name: string;
  age: number;
};

let hero: Hero = {
  name: 'thor',
  age: 1500,
};

interface A {
  campo1: number;
  campo2: string;
}
interface A {
  campo3: number;
}
const a: A = {
  campo1: 1,
  campo2: 'hola',
  campo3: 12,
};

//- DIFERENCIAS ENTRE TYPE Y INTERFACE
/*
type B = {
	campo1: number,
	campo2: string
}
type B = {
	campo3: number
}
ESTO DEVOLVERÁ UN ERROR: Duplicate identifier 'B'
*/

type Keys = 'firstname' | 'surname';
type DudeType = {
  [key in Keys]: string;
};
const test: DudeType = {
  firstname: 'Pedro',
  surname: 'Pablo',
};
/*
type Keys2 = "firstname" | "surname"
interface DudeInterface {
  [key in Keys2]: string
}
ERROR: A mapped type may not declare properties or methods.
*/

//!No se puede Iterrar en las INTERFACE pero ,podemos hacer los siguiente

interface Activity {
  id: string;
  title: string;
  body: string;
  json: Object;
}

const Activity = {
  id: '',
  title: '',
  body: '',
  json: {},
};

type ActivityType = typeof Activity;

const headers: Array<Object> = Object.keys(Activity).map(key => {
  return { text: key, value: key };
});

//? Optional properties

//* Tambien puedes restringir de que tipo sera esta informacion con la propiedad readonly
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero2 = {
  name: string;
  age: number;
  isActive?: boolean;
  // readonly id?: HeroId;
  id?: HeroId;
};

//! SIN encambio esto al compilar no nos veneficia ,ya que elreadonly sera de TS pero no de JS
//- La mejor opcion es Object.Freeze()

const createHero = (hero: Hero2): Hero2 => {
  const { name, age, isActive } = hero;
  return { name, age, isActive };
};

// const thor = Object.freeze(
//   createHero({ name: 'Thor', age: 22, isActive: true, id })
// );
const thor = createHero({
  name: 'Thor',
  age: 22,
  isActive: true,
  id: crypto.randomUUID(),
});

// thor.id = 'jiojwaodjasdaw';

//! Template Union Types
//-Supongamos que dentro de la creacion de nuestro objeto aqui arriba podemos establecer un tipo de string que queremos recivir algo como {string}-{string}-{string}-{string}-{string} podemos con los Template Union types

//! Union Types

let ann: string | number;
