//Cadenas de caracteres
var nombre = "Javier..--++}}{{";
var segundoNombre = 'Eduardo';

var miCadena = "soy un cadena de caracteres con \"comillas\"";//escapamos las comillas con barra invertida\
console.log(miCadena);

//Cadenas de caracteres con comillas simples.
var miMeta;
miMeta = "Aprender a programar con 'Freecodecamp'";
miMeta = 'Aprender a programar con "Freecodecamp"';
console.log(miMeta);//se puede combinar comillas dentro diferentes comillas

/*
Secuencias de escape
Código | Resultado
------------------  
\'      Comilla Simple
\"      Comilla Doble
\\      Barra invertida
\n      Línea Nueva
\r      Retorno de Carro
\t      Tabulación
\b      Retroceso
\f      Salto de Página
... 
 */
console.log("Estoy aprendiendo 'Javascript'");
console.log("Estoy aprendiendo \\Javascript");
console.log("Estoy aprendiendo : \nJavascript");

//Concatenar cadenas de caracteres(operador +)
var miNombreCompleto = "Javier " + "Berchtold";
console.log(miNombreCompleto);

//Construir cadenas con variables
var verbo = "programar";
var mensaje  = "Estoy aprendiendo a " + verbo + " con freeCodeCamp";
console.log(mensaje);

//Agregar variables a cadenas de caracteres
var mensajeCompleto = "Estoy aprendiendo a programar";
var parteFinal = " con freeCodeCamp";

console.log(mensajeCompleto);

mensajeCompleto += parteFinal;

console.log(mensajeCompleto);

//Longitud de una cadena de caracteres
var miLetra;
miLetra = "¡Estoy aprendiendo a programa!@$%&";

console.log(miLetra.length);//length (longitud)

//Nocion de corchetes primer caracter
var lenguajeDeProgramacion = "Javascript";

/*
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);

//Inmutabilidad de cadena de caracteres
var miFrase = "Jola, Mundo";
console.log(miFrase);
miFrase[0] = "H";
console.log(miFrase);
miFrase = "Hola, mundo";
console.log(miFrase);

//Notacion de Corchetes enesimo caracter
var miLenguaje = "Javascript";
/*
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/
console.log(miLenguaje[0]);
console.log(miLenguaje[3]);
console.log(miLenguaje[7]);
console.log(miLenguaje[9]);
console.log(miLenguaje[10]);

//Notacion de corchetes ultimo caracter
var miCadenas;
/*
El último índice siempre es longitud - 1 porque comenzamos 
a contar desde 0.

miCadena.length para "JavaScript" es 10.
El último índice es 9.

Cadena:  J  a  v  a  S  c  r  i  p  t 
Índices: 0  1  2  3  4  5  6  7  8  9    
*/
miCadenas = "Javascript";
miCadenas = "Payton"
console.log(miCadenas[miCadenas.length -1]);


//Notacion de corchetes de derecha a izquierda.
var miFavorita;
var n;

/*
El penúltimo índice es longitud - 2 porque comenzamos 
a contar desde 0.

miCadena.length es 10 para esta cadena de caracteres.
El penúltimo índice es 8.

Cadena:  J  a  v  a  S  c  r  i  p  t 
Índices: 0  1  2  3  4  5  6  7  8  9    
*/
miFavorita = "Javascript";
n = 4;
console.log(miFavorita[miFavorita.length - 1]);
console.log(miFavorita[miFavorita.length - 2]);
console.log(miFavorita[miFavorita.length - n]);

/*
Palabras en blanco
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Palabras en Blanco.
*/
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

/* Concatena las cadenas y crea una nueva cadena que muestre un mensaje. 
Puedes cambiar los valores de las variables.

Por ejemplo: El perro negro corrió rápidamente a la tienda.
             La bicicleta pequeña voló a tienda lentamente.
*/
var palabrasEnBlanco = "El " + miSustantivo + " volo " + miAdverbio + "a su cucha!!";
palabrasEnBlanco = "El " + miAdjetivo  +" "+ miVerbo +" "+ miAdverbio + " al almacen.";
palabrasEnBlanco = "La bicicleta  volo " + miAdverbio + " al mar " + miAdjetivo;

console.log(palabrasEnBlanco);