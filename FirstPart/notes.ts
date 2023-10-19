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
