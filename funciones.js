//Funciones: son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

function mostrarMensaje(){
  console.log("¡Hola, Mundo!");  
}
mostrarMensaje()
mostrarMensaje()
mostrarMensaje()
mostrarMensaje()
mostrarMensaje()
mostrarMensaje()

//Argumentos
function sumar(a, b){
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(10, 98);
sumar(225, 336);
sumar(1225, 4336);

var x = 6;
var y = 5; //variables como argumentos
sumar(x , y);

function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Estoy", "aprendiendo ", "a programar JS");
concatenarTresCadenas("Estoy", "aprendiendo ", "a programar con Estefania");
concatenarTresCadenas("Estoy", "aprendiendo ", "a programar en FreeCodeCamp");

//Retornar un valor
function sumar(a, b){
  return a + b;              //return Retornar o Devolver  un valor.
}
console.log(sumar(10,30)); 


//Undefined
function sumar2(a,b){
  console.log(a + b);
}
console.log(sumar2(5, 3));//8 undefined
//Es importante saber que las funciones siempre retornan un valor Undefined, sino esta definido el return. 

//Asignar un valor retornado
function sumar3(a, b){
  return a + b;
}
var resultado = sumar3(100,300);  //asignamos el valor a un a variable.
console.log(resultado);

function crearCadenaConMeta(lenguaje){
  return "Mi meta es aprender " + lenguaje;
}
var miMeta = crearCadenaConMeta("Javascript");
console.log(miMeta);

//Permanece en la fila.
/* En informática una cola (queue) es una estructura de datos abstracta 
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden 
añadir al final de la cola y los elementos previos se retiran del principio de la cola. 

Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) 
como argumentos. Agrega el número al final del arreglo y luego elimina el primer 
elemento del arreglo. La función proximoEnLaFila debe retornar el elemento 
que fue removido.
*/
function proximoEnLaFila(arreglo, elemento){
  arreglo.push(elemento); //Agregar al afinal del arreglo.
  return arreglo.shift(); //remover el primer elemento.
  
}
var miArreglo = [1,2,3,4,5];
console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));



console.log("3333333333333333333333333333333333333333333333333333333333333333333");
//Patron de retorno Anticipado
function miFunction(){
  console.log("Hola");
  return "Mundo";      //cuando retornamos un valor, la funcion se detiene completamente, no sigue.
  console.log("Adios");
}
console.log(miFunction());

console.log("444444444444444444444444444444444444444444444444444444444444444444444444");

function calcularRaizCuadrada(num){
  if(num < 0){
    return undefined;//Patron de retorno anticipado, lo usamos para evitar valores inesperados..
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-2));
console.log(calcularRaizCuadrada(9));
console.log(calcularRaizCuadrada(4));
console.log(calcularRaizCuadrada(4568));


console.log("444444444444444444444444444444444444444444444444444444444444444444444444");
//Conteo de Cartas
/* 
En el juego de casino Blackjack el jugador puede sacarle 
ventaja a la casa llevando un registro del número relativo
de cartas altas y bajas que quedan en la baraja. 

Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el 
jugador. Se le asigna un valor a cada carta de acuerdo a 
la siguiente tabla. 

- Cuando el conteo es positivo, el jugador debería apostar alto. 
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'


Nuestra meta es definir una función para contar cartas. 

La función debe tomar un parámetro carta que puede ser 
un número o una cadena de caracteres y luego aumentar 
o reducir el valor de la variable global conteo 
de acuerdo al valor de la carta (observa la tabla). 

La función debe retornar una cadena de caracteres con el 
conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo. 

El conteo actual y la decisión del jugador 
("Apostar" o "Esperar") deben estar separados por un espacio.
*/
var conteo = 0;
function contarCartas(carta) {
  var decisión;
  switch(carta){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++
      break;
    case 10:
    case 'J':   
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;    
  }
  if(conteo > 0){
    decisión = "Apostar";
  } else {
    decisión = "Esperar";
  }
  return conteo + " " + decisión;
}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
console.log(contarCartas("J"));
console.log(contarCartas("Q"));
console.log(contarCartas(8));



console.log("11111111111111111111111111111111111111111111111111111111111111111111");
//funciones Flecha

// const fecha = function(){                        de esto
//   return new Date();
// };

const fecha = () => new Date();          //         a esto
//eliminamos la palabra function.
//eliminamos la llave {}.
//eliminamos return
//agregamos => flecha



console.log("2222222222222222222222222222222222222222222222222222222222222222222222222222222");
//Funciones Flecha con Parametros

const sumarTres  = (x) => x + 3;

console.log(sumarTres(3));
console.log(sumarTres(6));


const concatenarArrays = (array1, array2) => array1.concat(array2);

console.log(concatenarArrays([1,2,3], [4,5,6]));

//Si la function original tiene más de una linea, mantenemos las llaves..
const sumar6 = (a, b) => {
  let num = 6 ;
  return a + b + num;
};

console.log(sumar6(1,1));


console.log("222222222222222222222222222222222222222222222222222222222222222222222");
//Valores por defecto para Parámetros, aplica para todo tipo de funciones.
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(100)); //valor por defecto sumado
console.log(incrementar(100, 5));//valor agregado y sumado.



console.log("333333333333333333333333333333333333333333333333333333333333333333333333333");
//Plantillas Literales
/*
Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/
var a = 6;
console.log(`El valor de a es: ${a}`);

var nombre = "Javier";
var edad = 48;
console.log(`Mi nombre es "${nombre}" y mi edad es "${edad}"`);

var miArreglo = [1,2,3,4,5,6,7,8,9];

console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);

var persona = {
  nombre : "Edu Flores",
  edad : 84
};
const SALUDO = `¡Hola! mi nombre es ${persona.nombre} y tengo ${persona.edad} años`;
console.log(SALUDO);





