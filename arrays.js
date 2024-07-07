//Arrays: son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.

var miArreglo = ["javier", 24, null, 25.3, undefined];
console.log(miArreglo);

var estudiantes = ["Pablo","Gero", "sofi", "Rosa"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas);

//Arreglos Anidados
var listaDeEstudiantes = [["Gero", 97],["Sofi", 78]];
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisa", 5.67, "S134"],["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
console.log(listaDeProductos);

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(datos);

//Acceder a los elementos de un arreglo
var miArreglo = [10,20,30];

/*
Arreglo:  [10, 20, 30]
Índices:    0   1   2
*/
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
console.log(miArreglo[3]);

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);


//Modificar Elementos de un arreglo
var miArreglo2 = [10,20,30];
console.log(miArreglo2);

miArreglo2[0] = 40; // el arreglo en su indice = asignamos nuevo valor
miArreglo2[1] = "hola";
miArreglo2[2] = [1,2,3];

console.log(miArreglo2);

//Acceder a Arreglos Multidimensionales
var miArreglo3 = [[1,2,3], [4,5,6], [7,8,9]];

/*
Arreglo:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/
console.log(miArreglo3[0]);
console.log(miArreglo3[2][1]);
console.log(miArreglo3[0][2]);
console.log(miArreglo3[2][0]);
console.log(miArreglo3[1][1]);
console.log(miArreglo3[1][2]);


//Array Method

//.Push() Agregar elementos al final  un arreglo
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

//Unshift() Agregar al principio del Areglo
var meses2 = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio"];
meses2.unshift("Diciembre");
console.log(meses2);



//.Pop() Remover el último elemento del array, también podemos asignar a una variable.
var estacion;
var estaciones2 = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones2.pop();
console.log(estaciones2);
console.log(estacion);

//.Shift() Remover el primer elemento del arreglo
var meses = ["Enero", "Febrero", "Marzo", "Abril"];
meses.shift();
console.log(meses);

//Lista de Compras
var listaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]];
//Cereal
console.log("Voy a comprar " + listaDeCompras[0][1] + " unidades de " + listaDeCompras[0][0]);

//Leche
console.log("Voy a comprar " + listaDeCompras[1][1] + " unidades de " + listaDeCompras[1][0]);

//Galletas
console.log("Voy a comprar " + listaDeCompras[2][1] + " unidades de " + listaDeCompras[2][0]);

//Pan
console.log("Voy a comprar " + listaDeCompras[3][1] + " unidades de " + listaDeCompras[3][0]);

//Refresco
console.log("Voy a comprar " + listaDeCompras[4][1] + " unidades de " + listaDeCompras[4][0]);

//Pollo
console.log("Voy a comprar " + listaDeCompras[5][1] + " unidades de " + listaDeCompras[5][0]);



console.log("88888888888888888888888888888888888888888888888888888888888888888");
//Arreglos Anidados
var misPlantas = [
    {
      tipo: "flores",
      lista: [
        "rosas",
        "tulipanes",
        "dientes de león"
      ]
    },
    {
      tipo: "árboles",
      lista: [
        "abeto",
        "pino",
        "abedul"
      ]
    }
  ];
  var primeraFlor = misPlantas[0]["lista"][0];
  console.log(primeraFlor);
  var segundaFlor = misPlantas[0].lista[1];
  console.log(segundaFlor);
  var terceraFlor = misPlantas[0].lista[2];
  console.log(terceraFlor);

  console.log("333333333333333333333333333333333333333333333333333333333333333333333");
  var primerArbol = misPlantas[1].lista[0];
  console.log(primerArbol);
  var segundoArbol = misPlantas[1]["lista"][1];
  console.log(segundoArbol);
  var tercerArbol = misPlantas[1]["lista"][2];
  console.log(tercerArbol);


  console.log("44444444444444444444444444444444444444444444444444444444444444444");
  //Coleccion de Discos
  /*
Tenemos un objeto que representa parte de una colección 
de álbumes musicales. 

Cada álbum tiene un número de identificación único (id) 
asociado a otras propiedades. 

No todos los álbumes tienen la información completa.
*/
var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
};
// console.log(coleccionDeDiscos[7853].canciones);
/* 
Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas 
para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad 
del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero 
el álbum no tiene una propiedad llamada "canciones", crea un arreglo 
vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y 
"valor" no es una cadena vacía, agrega "valor" al final del arreglo 
de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a 
"canciones", asigna el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/
function actualizarDiscos(discos, id, propiedad, valor){
  if(valor === ""){
    delete discos[id][propiedad];
  } else if(propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
};
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");//undefined si es una cadena vacia elimina.
console.log(coleccionDeDiscos[7853].tituloDelAlbum);


console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");//asigna un arreglo vacio y agrega valor
console.log(coleccionDeDiscos[5439].canciones);


console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);
console.log(coleccionDeDiscos[5439]);
console.log(coleccionDeDiscos[7853]);




console.log("333333333333333333333333333333333333333333333333333333333333333333");
//Operador Rest, convierte todos los argumentos, en elementos de un nuevo arreglo.

function miFunction (...argumentos){
  console.log(argumentos);
}
miFunction(9122,3,5,8,9,99,null,undefined, 0.25,0,0,0,0,"hola",true,false)


console.log("4444444444444444444444444444444444444444444444444444444444444444444444")

const sumar32 = (...argumentos)=> {
  return argumentos.reduce((a, b) => a + b, 0);
} 

console.log(sumar32(10,20,445,88,99));


console.log("555555555555555555555555555555555555555555555555555555555555555555555555555555");
//Operador Spread: Toma un arreglo y lo descompone, en sus elementos individuales, para asignarlos como parametros en una llamada a la  function.

const numeros = [10,20,30];

function sumarElementosDeUnArray (x,y,z){
  return x + y + z;
}
console.log(sumarElementosDeUnArray(...numeros));


console.log("66666666666666666666666666666666666666666666666666666666666666666666666666666666666666");
//Sintaxis de Desectructuracion: de Arreglos
var a;
var b;
var c;

[a,b,,,c] = [1,2,3,4,5,6];//saltamos lugares agregando coma ,,,

console.log(a);
console.log(b);
console.log(c);
console.log([a,b,c]);

//Podemos usar la sintaxis de desectructuracion para cambiar sus valores..
var d = 10;
var c = 40;
console.log(d,c);

[c, d] = [d , c];//invertimos valores, con desectructuring..

console.log(d,c);


console.log("77777777777777777777777777777777777777777777777777777777777777777777777777777777777");
//Sintaxis de Desectructuracion con el operador Rest
var a;
var b;
var arr;
[a,b, ...arr] = [1,2,3,4,5,6,7];         //Usamos el op. rest, para reasignar un arreglo.

console.log(a);
console.log(b);
console.log(arr);


const arregloInicial = [1,2,3,4,5,6,7,8];

function removerTresPrimerosElemntos(arreglo){
  const[ , , , ...nuevoArreglo ] = arreglo;
  return nuevoArreglo
};

const arregloFinal = removerTresPrimerosElemntos(arregloInicial);
console.log(arregloFinal);


console.log(arregloFinal);
