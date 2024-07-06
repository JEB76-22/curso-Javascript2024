
//Nota: Todos los (Operadores) devueven un Booleano..(true,false)
//Operador De Igualdad ==
console.log(5 == 5); //Igualdad == devuelve boolean
console.log(5 == 5.1);
console.log("Hola" == "Hola");
console.log("Hola" == "HOla");

console.log([1,2,3] == [1,2,3]);//false (No comparar Arrays) 
console.log([1,2,3] == [6,7,8]);

//Operador de Igualdad Estricta ===
console.log(9 == 9);
console.log(9 == "9");//true

console.log(9 === "9");//false comparador estricto ===

//Practica como comparar valores.
var a = 5;
var b = 5;

console.log(a == b);
console.log(a === b);
 b = 8;
 console.log(a == b);
 console.log(a === b);
 b = "5";
 console.log(a == b);
 console.log(a === b);
 a = "Javascript";
 b = "Javascript";
 console.log(a == b);
 console.log(a === b);

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
 //Operador de Desigualdad 
 console.log(9 != 6); //true

 console.log( 9 != 9); //false

 console.log("Javascript" != "Javascript");//false

 console.log("Javascript" != "JavaScript");//true

 console.log([1,2,3] != [1,2,3]); //true   No sirve comparar arrays.

 console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
 //Operador de desigualdad estrita.
console.log(1 != "1"); //false

console.log(1 !== "1"); //true

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Operador Mayor Que
console.log(6 > 5); //true

console.log(3 > 10); //false

//Javascript cómpara las cadenas de caractertes según el Alfabeto.
console.log("B" > "A"); //true
console.log("ACB" > "ABC"); //true
console.log("AB" > "A"); //true
console.log("Mundo" > "Hola");//true
console.log("M" > "H"); //true


var a = 15;
var b = 7;
console.log(a > b);//true
console.log(b > a);//false

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Operador Mayor o Igual Que.
console.log(5 > 5);//false

console.log(5 >= 5);//true

//Operador Menor Que
console.log(10 < 20);//true
console.log(10 < 3); //false

console.log("A" < "B"); //true
console.log("ABC" < "ACB");//true

var a = 15;
var b = 7;

console.log(a < b); //false
console.log(b < a);//true


console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Operador Menor Que.
console.log(10 < 10);//false

console.log(10 <= 10);//true

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Operadores Logicos "and" &&
/*
   Tabla de verdad del operador AND 
   Para: X && Y
   |  X  |  Y  | X && Y | 
   -----------------------
   |  T  |  T  |    T   |
   |  T  |  F  |    F   |
   |  F  |  T  |    F   |
   |  F  |  F  |    F   |
    La expresión solo es verdadera cuando ambos operandos 
    son verdaderos.
*/
// Comprobemos la tabla de verdad
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var a = 8;//Compara las expresiones
//(a > 5) true && (a < 10) True = treue
console.log((a > 5) && (a < 10));//true

var x = 3;
console.log((x > 5) && (x < 10));//false

var y = 1;
console.log((y > 5) && (y == 3));//false


console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Operador Logico "or" ||
/*
   Tabla de verdad del operador OR 
   Para: X || Y
   |  X  |  Y  | X || Y | 
   -----------------------
   |  T  |  T  |    T   |
   |  T  |  F  |    T   |
   |  F  |  T  |    T   |
   |  F  |  F  |    F   |
  La expresión es verdadera si alguno de los dos operandos 
  o ambos son verdaderos.
*/

// Comprobemos la tabla de verdad
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var n = 8;//Compara las expresiones
console.log((n < 5) || (n > 15)); //false
 n = 2;
 console.log((n < 5) || (n > 15)); //true
 n = 20;
 console.log((n < 5) || (n > 15)); //true
 n = 5;
 console.log((n == 5) || (n < 15)); //true

 
 console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
 //Operador Logico "not" !
 /*
   Tabla de verdad del operador NOT 
   Para: !X
   |  X  | !X  | 
   -----------------------
   |  T  |  F  |
   |  F  |  T  |
*/

// Comprobemos la tabla de verdad
console.log(!true);//false
console.log(!false);//true

var a = 8;
// !(a > 5) !true = false
console.log(! (a > 5));//false

// !(a < 5) !false = true
console.log(!(a < 5));//true



console.log("555555555555555555555555555555555555555555555555555555555555");
//Operador Condicional Ternario  ? si  : sino

function retornarMinimo(x,y){
  //retorna x si es menor que y devuelve x sino devuelve y    
  return x < y ? x : y;
  
   // if(x < y){
   //    return x;
   // } else{
   //    return y;
   // }
};
console.log(retornarMinimo(10,20));
console.log(retornarMinimo(100,20));
console.log(retornarMinimo(20,20));


var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3);


console.log("66666666666666666666666666666666666666666666666666666666666666");
//Multpiles Operadores Condicionales Ternarios
function compararNumeros(a,b){
  return a == b ? "a y b son iguales" //si condicion
         : a > b ? "a es mayor" // si condicion
         : "b es el mayor"; //else condicion
  
   // if(a == b){
   //    return "a y b son iguales";
   // } else if(a > b ){
   //    return "a es mayor que b";
   // }else{
   //    return "b es mayor que a";
   // }
};
console.log(compararNumeros(9, 27));
console.log(compararNumeros(90, 27));
console.log(compararNumeros(28, 27));
console.log(compararNumeros(90, 270));
console.log(compararNumeros(10, 27));
console.log(compararNumeros(9, 9));