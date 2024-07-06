//Ciclo While, loops: nos permiten repetir una serie de ciclos o instrucciones, una serie de veces. 
// Tipos While, For
//Los ciclos While se usan cuando No tenemos un número especifico de iteracciones, pero si sabes lo que tiene que ser cierto para continuar el proceso..
var i = 0;

while (i < 30) {//Mientras la condicion se cumpla, ejecuta
    console.log("Hola, Mundo!");//proceso
    i++//incremento
};

var miArreglo = [];
var i = 0;//siempre inicializar valor, sino no funciona!!

console.log(miArreglo);
while (i <= 10) {
    miArreglo.push(i);
    i++
}
console.log(miArreglo);

var numeros = [2,3,4,5,6,7,8,9,34,67,32];
console.log(numeros);

while (numeros.length > 4) {
    numeros.pop();
};
console.log(numeros);

console.log("8888888888888888888888888888888888888888888888888888888888888888888");
//Ciclo For: lo usamos cuando sabemos cuantas iterecciones vamos usar.
var misArreglo = [];

//(inicio, condicion, incremento)
for (let i = 0; i < 20; i += 2) {//incrmentar de a dos 2.
    misArreglo.push("Num: " + i)
    
}
console.log(misArreglo);


console.log("9999999999999999999999999999999999999999999999999999999999999");
//Ciclos "For" Numeros Impares
var miArreglos = [];
console.log(miArreglos);

for(var i = 1; i < 100; i += 2){//numeros impares con +=2
    miArreglos.push(i)//agregamos al final del arreglo con push(i) 
};
console.log(miArreglos);

//usar For, Agregar los numeros pares a un array entre 2 y 26.
var miNbuevoarray = [];
for(var i = 2; i <= 26; i += 2){
    miNbuevoarray.push(i);
};
console.log(miNbuevoarray);

console.log("0000000000000000000000000000000000000000000000000000000000");
//Cliclos For, Contar hacia Atras
for(var i = 15; i >= 10; i--){//reducir de 15 a 10 de uno en uno.
    console.log(i);
};
console.log("111111111111111111111111111111111111111111111111111111111111");
for(var i = 20; i >= 10; i-= 2){
    console.log(i);
};
console.log("0000000000000000000000000000000000000000000000000000000000000");
var miArray = [];
for(var i = 10; i > 0; i -= 2){
    miArray.push(i);
};
console.log(miArray);

console.log("1111111111111111111111111111111111111111111111111111111111111111");
//Iterar sobre un Arreglo con un ciclo For
var miArreglo2 = [4, 6, 8, 2];
var total = 0;

for(var i = 0; i < miArreglo2.length; i++){
    console.log("Iteracion " + i);
    console.log(miArreglo2[i]);
    total += miArreglo2[i];
};
console.log(total);

console.log("22222222222222222222222222222222222222222222222222222222222222222222");
var lenguages = ["Javascript", "Python", "Java", "C++"];
//convertir ese array, todo  a Mayuscula.

for(var i = 0; i < lenguages.length; i++){
    console.log(lenguages[i].toUpperCase());//a mayusculas .toUpperCase()
};
var array = ["Hola", "mundo", "nuevo", "mas", "bello"];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
};

console.log("33333333333333333333333333333333333333333333333333333333333333333");
//ciclo For dentro de una funcion
function contarNumeroPares(array){
    var total = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i]  % 2 == 0){
            total++;
        } else{
            console.log("Par no encontrado");
        }
    }
    return total;
};
console.log(contarNumeroPares([5,3,11,2,4,6,8,10,12 ]));


console.log("4444444444444444444444444444444444444444444444444444444444444444444");
//Ciclos For Anidados
var miArregloNuevo = [[1,2,3], [4,5,6], [7,8,9]];//indices 0,1,2
console.log(miArregloNuevo);

for (var i = 0; i < miArregloNuevo.length; i++) {//recorre el arreglo, de acuerdo a sus Indices 0,1,2
    var arregloAnidado = miArregloNuevo[i];//Arreglo

    for(var j = 0; j < arregloAnidado.length; j++){//para iterar un arreglo anidado, usamos For anidado.
        console.log(arregloAnidado[j]);//Elemento

    }
    };


    console.log("5555555555555555555555555555555555555555555555555555555555");
    //Ciclos Do_while  Hacer mientras
    //La diferencia con ciclo while, siempre se va ejecutar siempre una vez. 
    var x;
    x = 16;
     do {
        console.log(x);
        x++

    }while (x < 10);



    console.log("666666666666666666666666666666666666666666666666666666666666666666");
    //Busqueda de perfil
    var contactos = [
        {
          "nombre": "Nora",
          "apellido": "Nav",
          "numero": "0543236543",
          "gustos": ["Pizza", "Programación"]
        },
        {
          "nombre": "Harry",
          "apellido": "Potter",
          "numero": "0994372684",
          "gustos": ["Hogwarts", "Magia"]
        },
        {
          "nombre": "Sherlock",
          "apellido": "Holmes",
          "numero": "0487345643",
          "gustos": ["Casos interesantes", "Violín"]
        }
      ];
    //   console.log(contactos[0]);
    function buscarPerfil(nombre, propiedad){
        for(var i = 0; i < contactos.length; i++){

            if(contactos[i].nombre === nombre){//si contactos[i].nombre === es igual al parametro ingresado.
                return contactos[i][propiedad] || "La propiedad no existe."
            }//retornamos contactos[i]con la propiedad OHH || la propiedad no existe
        }
        return "El contacto no esta en la lista. ";
    };
console.log(buscarPerfil("Sherlock", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Nora", "numero"));
console.log(buscarPerfil("Nora", "direccion"));
console.log(buscarPerfil("Nadie", "apellido"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Harry", "numero"));
console.log(buscarPerfil("Harry", "gustos"));


console.log("77777777777777777777777777777777777777777777777777777777777777777777777777");
//Numero Aleatorios  Math = matematicas     .random(aleatorio) entre 0 y 1, pero no llega al 1.
function generarFreccionAleatoria(){
    return Math.random();
};

console.log(generarFreccionAleatoria());
console.log(generarFreccionAleatoria());
console.log(generarFreccionAleatoria());
console.log(generarFreccionAleatoria());


console.log("8888888888888888888888888888888888888888888888888888888888888888888888888");
//Numeros enteros Aleatorios     .floor(numero entero mayor)

var numeroAleatorioEntre0y19 = Math.floor(Math.random() *20);

console.log(numeroAleatorioEntre0y19);



console.log("999999999999999999999999999999999999999999999999999999999999999999999999");
function generarEnteroAleatorio(limiteSuperiorRango){
    //generar entero aleatorio entre 0 y limiteSuperiorRango (sin incluirlo).
    return Math.floor(Math.random() * limiteSuperiorRango)
};


for (let i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(20));      
};

// console.log(generarEnteroAleatorio(30));
// console.log(generarEnteroAleatorio(40));
// console.log(generarEnteroAleatorio(15));
// console.log(generarEnteroAleatorio(100));
// console.log(generarEnteroAleatorio(20));
// console.log(generarEnteroAleatorio(10)); 

console.log("11111111111111111111111111111111111111111111111111111111111111111111111");
//Numeros Enteros Aleatorios en un Rango
function rangoAletorio( limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior +1)) + limiteInferior;
};

for (let i = 0; i < 20; i++) {
    console.log(rangoAletorio(1, 20));    
    
}


// console.log(rangoAletorio(10, 20));
// console.log(rangoAletorio(10, 20));
// console.log(rangoAletorio(10, 20));
// console.log(rangoAletorio(10, 20));



console.log("33333333333333333333333333333333333333333333333333333333333333333333333333");
//funcion PaserInt() Convertir String a Numeros enteros
console.log(parseInt("5"));
console.log(parseInt("-47"));
console.log(parseInt("0"));
console.log(parseInt("6.7"));
console.log(parseInt(6.7));
console.log(parseInt("ABC"));// NaN (No es un numero valido)



var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);



console.log("4444444444444444444444444444444444444444444444444444444444444444444444");
//Funcion parseInt() con una base.
console.log(parseInt("110111", 2));//de binario a decimal , la base
console.log(parseInt(110111, 2));
console.log(parseInt("3E0A", 16));//de haxadecimal a decimal, la base