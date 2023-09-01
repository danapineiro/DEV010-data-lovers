
export const randomCard = (cards) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return randomIndex;
};
//esta funcion toma como argumento cards que es el array de objetos que representan cartas.
//el math.random genera un numero aleatorio decimal entre 0 inclusive y 1 exclusivo.
//Se multiplica este numero por la longitud del arreglo cards usando cards.length.
//el math.floor se usa para redondear ese numero decimal hacia abajo del entero más cercano.
//con esto obtenemos un indice valido
//return devuelve la carta aleatoria calculado

export const filterByType = (cards,arcano) => {
  const arcanoSelected = cards.filter((obj) => obj.type === arcano);
  return arcanoSelected;
};
//la funcion fbt toma dos argumentos cards y arcanos. cards el array de objetos y arcanos una valor para filtrar las cartas por tipos
//el metodo filter se usa en el arreglo de cards para crear un nuevo arreglo
//que continen solo los objetos cuyo atributo es type sea igual a la variable arcano
//con estos pasos devuelve un nuevo arreglo arcano select que contiene solo las cartas que tiene el mismo tipo que el valor pasado en la variable arcano.

export const filterBySuit = (cards,tipo) => {
  const tiposSelected = cards.filter((obj) => obj.suit === tipo);
  return tiposSelected;
};
//la funcion fbs toma dos argumentos cards y tipo. un arreglo de objetos que representan cartas y tipo una variable para filtar las cartas por su tipo.
//usamos filter en el arreglo cards para crear un nuevo arreglo
//que contiene solo los objetos del atributo suit y que este sea igual a la varibale tipo.
//finalmente se devuelve un arreglo tiposelected que contiene solo clas cartas que tiene el mismo tipo en este caso suit que le valor pasado en a variable tipo






