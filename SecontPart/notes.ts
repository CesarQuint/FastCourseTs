//- Enums

//* Al definir enums hay dos formas y estas lo que generaran al transpilarse a js es algo asi

enum EJ1 {
  option1,
  option2,
  option3,
}

//* Al tener un codigo como el superior al momento de transpilar obtendremos un arreglo con valores asi  option1 == "0"
//! Si agregaramos la palabra const al enum este estaria definido por default y es menos codigo al transpilar

const enum EJ2 {
  option1,
  option2,
  option3,
}

//? Y tambien puedes agregar valores con sus propias etiquetas de la siguiente forma
const enum EJ3 {
  option1 = 'Id o etiqueta asignada con valor 1',
  option2 = 'Id o etiqueta asignada con valor 2',
  option3 = 'Id o etiqueta asignada con valor 3',
}

//* Asersiones de tipo

//Nosotros tratamos de obtener un objeto canvas y lo que tendriamos que agregar es  as HTMLCanvasElement; al final de la decalracion de nuestro elemento ,pero ya que el valor puede ser null ,se romperia el codigo generado
const canvas = document.getElementById('canvas');

//Lo que podemos hacer es tener una validacion para que  verifiquemos que obtengamos el valor deseado

if (canvas !== null && canvas instanceof HTMLCanvasElement) {
  //!De esta forma obtenemos objetos los cuales contienen las funciones que deseamos y comprende que ademas de que no sea null  sea un objeto del tipo canvas html
  const ctx = canvas.getContext('2d');
}
