//Tipos de datos:
//undefined, null, string, symbol, number, object.

//Las Variables son contenedores en los que puedes almacenar valores. Primero debes declarar la variable con la palabra clave var (menos recomendado) o let, seguida del nombre que le quieras dar.


var miVaribale = "Freecodecamp";
console.log(miVaribale);

miVaribale = "Hola Mundo!"
console.log(miVaribale);

var miNombre = "Javier";
console.log(miNombre);


//Operador de asignacion.
//Se puede reasignar su valor.
var a = 2;
var b;
console.log(a);//tiene valor
console.log(b);//undefined

//operador de asignacion (=)igual
b = 10;
console.log(b);

//Asignar al valor de un variable a otra variable.
var a = 5;
var b = a;

console.log(a);
console.log(b);

var c = 10;
var d;
d = c;

console.log(c);
console.log(d);

//Inicializar Variables
var x = 10; //inicializar
var miIdioma = "Español";  //usamos camelCase para declarar variables..

//Variables no inicializadas
var e;
var f;

console.log(e);
console.log(f);

//Mayusculas - Minusculas
//Javascritp es Case-sensitive, sencible a may y min (no son iguales)..
// var miVaribale = 5;
// console.log(MIVARIABLE);//MIVARIABLE is not defined
// console.log(MiVariable);//MiVariable is not defined
// console.log(mivaribale);//mivaribale is not defined

//Incrementar el valor de una variable
var librosComprados = 105;
console.log(librosComprados);
//opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);
//opcion 2
librosComprados++;
console.log(librosComprados);

//Reducir el valor de una variable
var numeroDeEstudiantes = 256;
console.log(numeroDeEstudiantes);

numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);

numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);

//Ambito Global: en todo el programa
var miVaribaleGlobal = "Global";

console.log(miVaribaleGlobal);

function miFuncion(){
    console.log(miVaribaleGlobal);
}
miFuncion();

console.log(miVaribaleGlobal);

//Ambito Local: dentro de una function donde fueron declaradas
function miFunction(){
    var miVariableLocal = "Local";
    console.log(miVariableLocal);
}
miFunction();
// console.log(miVariableLocal);

//Ambito Global vs Ambito local
var miNombre2 = "Sofi";

function mostrarNombre(){
    var miNombre2 = "Gero";
    console.log(miNombre2);
}
mostrarNombre();
console.log(miNombre2);




console.log("666666666666666666666666666666666666666666666666666666666666666666666");
//Var vs Let
var campista = "James";
var campista = "David";

let empleado = "James";
// let empleado = "David"    no se puede volver a declarar;
empleado = "David";//se puede reasignar


console.log(empleado);
console.log(campista);

console.log("777777777777777777777777777777777777777777777777777777777777777777777777777");
//Ambito de var y let diferencia
//var tiene ambito gloval, se pude usar en todo el programa.
//let tiene ambito local, se puede usar en ambito donde fue creada.
var miVaribaleGlovAL = 4;
console.log(miVaribaleGlovAL);


function miFunction(){
    console.log(miVaribaleGlovAL);//su alcance es global, dentro o fuera funciona.
    var miVariableLocal = 8;
    console.log(miVariableLocal);//su alcance se limita por el bloque que la define.
};

miFunction();
console.log(miVaribaleGlovAL);
// console.log(miVariableLocal);   error

console.log("8888888888888888888888888888888888888888888888888888888888888888");

for (var i = 0; i < 4; i++) {
    console.log(i);
    
};
console.log("Variable:" + i);

for(let j = 0; j < 4; j++){
    console.log(j);
}
// console.log(j); //error no esta definida

var mostrarColor = true;

if(mostrarColor){
    let color = "verde";
    console.log(color);
};
// console.log(color);


console.log("9999999999999999999999999999999999999999999999999999999999");
//Const Constante No se puede modifiacar o resignar su valor.
const miConstante = 35;
console.log(miConstante);

// miConstante = 15; //solo se puede leer, No se puede resignar.

// const miConst;//requiere inicializacion Error
miConst = 235;


function calcularElAreaDeUnCirculo(radio){
    const PI = 3.14;

    if(radio < 0){
        return undefined;
    } else{
        return PI * (radio ** 2);
    }
};
console.log(calcularElAreaDeUnCirculo(10));



console.log("000000000000000000000000000000000000000000000000000000000000000");
//Mutar Arreglo Declarado Con const
const Mi_Arreglo = [1,2,3,4];
console.log(Mi_Arreglo);
//se puede cambiar el valor del arreglo
Mi_Arreglo[0] = 5;
Mi_Arreglo[1] = 6;
Mi_Arreglo[2] = 7;

console.log(Mi_Arreglo);


console.log("11111111111111111111111111111111111111111111111111111111111111111");
//CRear un Objeto Inmutable
let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};
Object.freeze(colores)// objeto freezado
console.log(colores);

colores.negro = "#fff200";
delete colores.verde;//no se puede eliminar esta freezado
console.log(colores);//no se puede resignar esta freezado.






