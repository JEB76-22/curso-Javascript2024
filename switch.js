//Sentencias Switch
function clasificarValor(valor){
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "Alpha";
            break;
        case 2:
            respuesta = "Beta";
            break
        case 3:
            respuesta = "Gama";
            break
        case 4:
            respuesta = "Delta";
            break
    }
    return respuesta;
}
console.log(clasificarValor(4));
console.log(clasificarValor(3));
console.log(clasificarValor(2));
console.log(clasificarValor(1));
console.log(clasificarValor(5));



console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
var producto = "Hamburguesa";
producto = "Helado";
producto = "Pizza";
switch(producto){
    case "Pizza":
        console.log("La pizza cuesta $10.55");
        break;
    case "Hamburguesa":
        console.log("La hamburguesa cuesta $6.78");
        break
    case "Helado":
        console.log("El helado cuesta $2.8");
        break    
}




console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
//Sentencias Switch: Opcion Predeterminada
 function seleccionarIdioma(valor){
    var idioma;
    switch(valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;

        default:
            idioma = "Ingles";
            break;        
    }   
    return idioma;
 }
 console.log(seleccionarIdioma(66));
 console.log(seleccionarIdioma(3));
 console.log(seleccionarIdioma(2));
 console.log(seleccionarIdioma(1));  




 console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
 //Sentencias Switch: Multiples Casos
 function clasificarVolumen(valor){
    var volumen;
    switch (valor) {
        case 1:
            volumen = "Volumen Bajo";
            break;
        case 2:
        case 3:        
            volumen = "Volumen Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Volumen Alto";
            break;  
        default:
            volumen = "Volumen Incorrecto, por favor ingresa de 1 al 6";
            break;            
    }
    return volumen;
 }
console.log(clasificarVolumen(6)); 
console.log(clasificarVolumen(4)); 
console.log(clasificarVolumen(3)); 
console.log(clasificarVolumen(1)); 
console.log(clasificarVolumen(2)); 
console.log(clasificarVolumen(5)); 
console.log(clasificarVolumen(66));



console.log("11111111111111111111111111111111111111111111111111111111111");
//Remplazar "if ... else" por "switch"
function seleccionarIdiomas(valor){
    var idioma;

    switch(valor){
        case 1: {
        idioma = "Español";
        break;
    }   case 2: {
        idioma = "Frances";
        break;
    }   case 3:{
        idioma = "Italiano";
        break;
    } default:{
        idioma = "Ingles"
        break
    }
    } 
    return idioma;
}
console.log(seleccionarIdiomas(1));
console.log(seleccionarIdiomas(2));
console.log(seleccionarIdiomas(3));
console.log(seleccionarIdiomas(4)); 



console.log("2222222222222222222222222222222222222222222222222222222222222222222");


