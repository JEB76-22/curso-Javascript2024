//Tomando decisiones en tu código — condicionales
//En cualquier lenguaje de programación, el código necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas. Por ejemplo, en un juego, si el el numero de vidas del jugador es 0, entonces se termina el juego. En una aplicación del clima, si se observa en la mañana, se despliega una gráfica del amanecer; muestra estrellas y una luna si es de noche.
if (true) {
   console.log("La condiciones Verdadera"); 
} 

var x = 5;
if (x > 2) {//Evalúa condiciones, si es verdadera se ejecuta.
    console.log("La condiciones Verdadera X");
}

var estacion = "Verano";
if (estacion == "Invierno") {
    console.log("¡Si! me encanta el Invierno");
}
console.log("despues del condiconal");

console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Clausula "Else"
if (false) {
    console.log("La condiciones Verdadera V");
} else {
    console.log("La condicion es Falsa F");
}    

 var x = 5;
 if (x < 2) {
    console.log("La condiciones Verdadera V");
 } else {
    console.log("La condición es Falsa F");    
 }
    
var estacion = "Invierno";
if (estacion == "Verano") {
    console.log("Comenzó el Verano");
} else {
    console.log("¡Quiero! que llegue el Verano");    
}



console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Clausula "else if"
function clasificarValor(valor){
    if (valor % 2 == 0) {
        console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3.");
    }
    else {
        console.log("No es divisible, entre las opciones");
    }
}
clasificarValor(12);
clasificarValor(9);
clasificarValor(5);
clasificarValor(124);
clasificarValor(936548);
clasificarValor(12458);
clasificarValor(333);
clasificarValor(25);



console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Condicionales Orden Logico
//Es Importante el orden de las condicionales, de arriba hacia abajo se ejecuta.
function clasificaValor(valor){
    if (valor < 10) {
        console.log("Menor que 10.");
    } else if(valor < 5){
        console.log("Menor que 5.");
    }else{
        console.log("Mayor o igual a 10.");
    }
}
clasificaValor(2);
clasificaValor(15);
clasificaValor(5);


console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Encadenar Sentencias "if ...else
function indiceDeMasaCorporal(imc){
    if (imc < 18.5) {
        console.log("Bajo Peso");
    } else if(imc <= 24.9){
        console.log("Peso Normal");
    } else if(imc < 29.9){
        console.log("Sobrepeso");
    } else{
        console.log("Obeso");
    }
}
indiceDeMasaCorporal(17.8);
indiceDeMasaCorporal(22.2);
indiceDeMasaCorporal(28.5);
indiceDeMasaCorporal(30);



console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Codigo de golf
/*
En el juego de golf cada hoyo tiene un par que 
representa el número promedio de golpes
que se espera que haga un golfista para introducir 
la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan 
por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes. 

Retorna la cadena correcta según esta tabla que muestra 
los golpes en orden de mayor a menor prioridad: 

Golpes             Retornar
-------------------------------
1	               "Hole-in-one!"
<= par - 2	       "Eagle"
par - 1	           "Birdie"
par	               "Par"
par + 1	           "Bogey"
par + 2	           "Double Bogey"
>= par + 3	       "Go Home!"

par y golpes siempre serán numéricos y positivos. 
*/
function puntajeDeGolf(par, golpes){
    if(golpes == 1){
        return "Hole-in-one!";
    } else if(golpes <= par - 2){
        return   "Eagle";
    } else if(golpes == par - 1 ){
        return "Birdie";
    } else if(golpes == par ){
        return  "Par";
    } else if(golpes == par + 1){
        return  "Bogey";
    } else if(golpes == par + 2){
        return "Double Bogey";
    } else if(golpes >= par + 3){
        return  "Go Home!";
    }
}
console.log(puntajeDeGolf(4, 1));
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));

