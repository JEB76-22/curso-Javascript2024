//Crear Objetos
//JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

var miPerro = {//los objetos inician como una variable, entre corchetes{}
    "nombre": "Gino",//tiene propiedades LLave : Valor.
    "edad":   5,//separados por coma,
    "peso":   6,
    "raza":  "beagle"
};


//Acceder a Propiedades: Notacion de Punto
var miMascota = {
    "nombre": "Roky lee",
    "edad" :  8,
    "peso" :  35,
    "raza" :  "Ovejero Aleman"
};
console.log(miMascota.nombre);
console.log(miMascota.edad);
console.log(miMascota.peso);
console.log(miMascota.raza);

console.log("55555555555555555555555555555555555555555555555555555555555555555555555");
//Acceder a Prpiedades: Notacion de Corchetes
var miCuaderno = {
    "color":   "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas":  100
};
console.log(miCuaderno.color);
console.log(miCuaderno["numero de hojas"]);
console.log(miCuaderno["numero de hojas"]);
console.log(miCuaderno["categoria"]); 




console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//Acceder a Propiedades Objetos usando Variables.
var resultado = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};

var posicion = 4;
posicion = 3;
posicion = 2;
console.log(resultado[posicion]);
console.log(resultado[1]);

console.log("6666666666666666666666666666666666666666666666666666666666666666");
//Actualizar Propiedades de un Objeto
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuadderno"]
};

console.log(mochila.color);
mochila.color = "verde";
console.log(mochila.color);

//Agregar Contenido al final
console.log(mochila.contenido);

mochila.contenido.push("lapiz");

console.log(mochila.contenido);

//Agregar Contenido al principio
mochila.contenido.unshift("goma");
console.log(mochila.contenido);

//Reasignar valor completamente
mochila.contenido = ["botella gaseosa ", "cartuchera", "hojas"];
console.log(mochila.contenido );
//usando corchetes
mochila["contenido"] = ["vacio"];
console.log(mochila);



//Agregar nuevas propiedades al objeto
var curso = {
    "titulo": "Aprende Javascript desde Cero",
    "idioma": "Español",
    "duracion": 30 
};
curso.vistas = 34500;
console.log(curso);
//Usando corchetes
curso["lenguaje"] = "Javascript";
console.log(curso);


//Eliminar propiedades de un objeto,  Delete
var tienda = {
    "nombre": "MiTiendaFavorita",
    "ubicacion": "godoy cruz, mendoza",
    "precios": ["pantalon", 250 ,"vestido" , 300]
};
console.log(tienda);
delete tienda.nombre;
console.log(tienda);

delete tienda.precios;
console.log(tienda);


//Objetos para busuqeda
// Inicialmente es una sentencia switch
// y vamos a reemplazarla con un objeto.
function buscarElementoQuimico(simbolo) {
  
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S":  "Azufre",
        "Cl":  "Cloro",
        "He":  "Helio",
        "B":   "Boro",
        "Li":  "Litio"
    }
    return simbolosQuimicos[simbolo];
  }

 console.log(buscarElementoQuimico("He"));
 console.log(buscarElementoQuimico("Al"));
 console.log(buscarElementoQuimico("Cl")); 
 console.log(buscarElementoQuimico("S")); 
 console.log(buscarElementoQuimico("B")); 
 console.log(buscarElementoQuimico("Li")); 


console.log("//////////////////////////////////////////////////////////////////////////");
 //Verificar Propiedades
 var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
 }
console.log(miCuaderno.hasOwnProperty("color")); 
                //.tiene esta propiedad()
console.log(miCuaderno.hasOwnProperty("origen"));       

function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad " + obj[propiedad];
    } else{
        return "El objeto no tiene esta propidad";
    }
}
console.log(verificarPropiedad(miCuaderno,"precio"));
console.log(verificarPropiedad(curso, "titulo"));
console.log(verificarPropiedad(tienda, "ubicacion"));
console.log(verificarPropiedad(curso, "vistas"));
console.log(verificarPropiedad(miCuaderno, "goma"));



console.log("/////////////////////////////////////////////////////////////////////////");
//Objtos mas Complejos
var ordenesDePizzas = [
    {
      "tipo": "margarita",
      "tamaño": "individual",
      "precio": 5.67,
      "toppings": [
          "extra queso",
          "champiñones",
          "piña"
      ],
      "paraLlevar": true
    },
    {
      "tipo": "cuatro quesos",
      "tamaño": "familiar",
      "precio": 18.34,
      "toppings": [
          "extra queso",
          "pimentón"
      ],
      "paraLlevar": false
    },
    {
      "tipo": "napolitana",
       "tamaño": "individual",
       "precio": 6.78,
       "Toppings": [],
       "paraLLevar": true 
    }
  ];
  console.log(ordenesDePizzas[0]);
  console.log(ordenesDePizzas[1]);
  console.log(ordenesDePizzas[0].tipo);
  console.log(ordenesDePizzas[0]["tamaño"]);
  console.log(ordenesDePizzas[1].toppings);
  console.log(ordenesDePizzas);
  console.log(ordenesDePizzas[2].tipo);
  console.log(ordenesDePizzas[2].precio);


  console.log("777777777777777777777777777777777777777777777777777777777777777777");
  //Objetos Anidados
  var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
      "masa": {
        "harina": "100 grs",
        "sal": "1 cucharadita",
        "agua": "1 taza"
      },
      "cobertura": {
        "azucar": "120 grs",
        "chocolate": "4 cucharadas",
        "mantequilla": "200 grs"
      }
    }
  };
  console.log(miReceta.descripcion);
  console.log(miReceta.costo);
  console.log(miReceta.ingredientes.masa.sal);
  console.log(miReceta.ingredientes.masa.agua);
  console.log(miReceta.ingredientes.masa.harina);
  console.log(miReceta.ingredientes.masa["agua"]);
  console.log(miReceta.ingredientes.masa["harina"]);
  console.log(miReceta.ingredientes.masa["sal"]);

  console.log(miReceta.ingredientes.cobertura.azucar);
  console.log(miReceta.ingredientes.cobertura.chocolate);
  console.log(miReceta.ingredientes.cobertura.mantequilla);
  console.log(miReceta.ingredientes.cobertura["azucar"]);
  console.log(miReceta.ingredientes.cobertura["chocolate"]);
  console.log(miReceta.ingredientes.cobertura["mantequilla"]);
  //la notacion de corchetes sirve pára asignar su valor a una varible.
  console.log(miReceta["ingredientes"]["cobertura"]["chocolate"]);
  //la notacion de corchetes la podemos usar en cualquier punto.
   

  //Javascript Object Notation    JSON


  console.log("6666666666666666666666666666666666666666666666666666666666666666666666666666666");
//Sintaxis de Desectructuración: Nos permite asignar la propíedades de un objeto, a variables, que podemos usar.

const usuario = {
  "nombre": "Gero 4578",
  "edad": 20
};
//agregamos las propiedades del objeto a variables
const nom  = usuario.nombre;
const ed = usuario.edad;
//nuevo metodo desectructurin
const {nombre, edad} = usuario;


console.log(nombre,edad); 
console.log(nom, ed);

var coordenadas = {
  a: 4,
  b: 6,
  c: 12
};

const {a, b, c} = coordenadas;

console.log(a);
console.log(b);
console.log(c);


console.log("77777777777777777777777777777777777777777777777777777777777777777777777777777");
//Sintaxis de Desectructuracion Objetos Anidados.
const clientes = {
  SofiBer: {
    años : 17,                                         //objeto anidado
    correo: "sofiLaMasLinda@gmail.com"
  }
};

const {SofiBer: {años: añosDelCliente, correo: correoDelCliente}} = clientes; //del objeto anidado,extraemos años y correo.

console.log(añosDelCliente);
console.log(correoDelCliente);


const PRONOSTICO_LOCAL = {
  "ayer": {
    minima: 6,
    maxima: 15 
  },
  "hoy": {
    minima: 1,
    maxima: 17
  },
  "mañana":{
    minima: 0,
    maxima: 20
  }
};
// console.log(PRONOSTICO_LOCAL);

// const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
// const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

const {mañana: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);

const {ayer: {minima: minimaAyer, maxima: maximaAyer}} = PRONOSTICO_LOCAL;
console.log("min-Ayer " + minimaAyer, "max-Ayer " + maximaAyer);//Desectructuring de objetos anidados..






console.log("888888888888888888888888888888888888888888888888888888888888888888888888888888888888");
//Sintaxis de Desectructuracion: Pasar Objeto como Argumento.
var nuevoPerfilCliente = {
  "nombres": "Javi Berchtold",
  "años": 48,
  "nacionalidad": "Argentino",
  "ubicacion": "Mendoza"
};
// console.log(nuevoPerfilCliente);
const actualizarPerfil = ({nombres, años, nacionalidad, ubicacion}) => {
  console.log(nombres);
  console.log(años);
  console.log(nacionalidad);
  console.log(ubicacion);

};
actualizarPerfil(nuevoPerfilCliente);


const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85

}; // console.log(estadisticas);
const laMedia = ({max, min}) => (max + min) / 2.0;
console.log(laMedia(estadisticas));


console.log("9999999999999999999999999999999999999999999999999999999999999999999999999");
//Crear Objetos de forma Concisa

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("javier", 48, "español"));
console.log(crearPersona("Sofia", 17, "ingles"));




console.log("00000000000000000000000000000000000000000000000000000000000000000000000000000");
//Metodos: funcionas asociadas a objetos
const persona = {
  nombre : "Eduardo",
  presentarse(){
    return `¡Hola! mi Nombre es ${this.nombre}`;//This. busca solo dentro del objeto o funcion.
  }
}
console.log(persona.presentarse());//para llamar la funcion sintaxis de punto.




console.log("1111111111111111111111111111111111111111111111111111111111111111111111111");
//Definir una Clase: es algo parececido a un plano de un edificio, que nos permite crear muchos iguales..

class TransbordadorEspacial {
  constructor(planeta){
    this.planeta = planeta;
  }
};

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo);


class Mascota {
  constructor(nombre, raza){
    this.nombre = nombre;
    this.raza = raza
  }
};

var miMascota = new Mascota("Roky Lee", "Ovejero Aleman");
console.log(miMascota.nombre, miMascota.raza);

var suMascota = new Mascota("Negrita", "Callejera");
console.log(suMascota.nombre, suMascota.raza);



console.log("222222222222222222222222222222222222222222222222222222222222222222222222222");
//Getters y Setters
class Libro {
  constructor(autor){
    this._autor = autor//propídad privada _autor
  }
 
  get autor(){  //Get: Obtener el valor de una propiedad privada.
    return this._autor
  }
  set autor(nuevoAutor){  //Set: Actulizar valor de una propidad privada.
    this._autor = nuevoAutor;
  }
};

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "La Hormigua";
console.log(libro.autor);