
//Escriba un programa con una función con el identificador saludar que, cuando se llame, imprima por consola "¡Hola, bienvenido!".

function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();


//Escriba un programa con una función con el identificador saludarPersona  que reciba un parámetro “nombre”

function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona("Andrés")

//Escribe una función con el identificador esMayorDeEdad que reciba una edad y retorne true si la persona es mayor de edad,
// o false si es menor, y guarde el valor retornado en una variable. 

function esMayorDeEdad(edad) {
    if ( edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const resultado = esMayorDeEdad(20);
console.log(resultado);



// Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.

const esMayorDeEdadFlecha = (edad)  => {
    if ( edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const resultado1 = esMayorDeEdadFlecha(20);
console.log(resultado1);



