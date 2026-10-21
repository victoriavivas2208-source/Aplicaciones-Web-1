// 1) 
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
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const resultado = esMayorDeEdad(20);
console.log(resultado);


// 2)
// Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.

const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const resultado1 = esMayorDeEdadFlecha(20);
console.log(resultado1);



// Escriba un programa con una función flecha que reciba dos parámetros
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`);
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`);
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`);
    }
}

for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}

// 3) 

// A Y B)

const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 === "number" && typeof numero2 === "number") {
        callback(numero1, numero2);
    } else {
        console.log("Debe ingresar solo números.");
    }
}

const suma = (numero1, numero2) => {
    const resultado1 = numero1 + numero2;
    console.log(`El resultado de la suma es ${resultado1}`);
}

const resta = (numero1, numero2) => {
    const resultado2 = numero1 - numero2;
    console.log(`El resultado de la resta es ${resultado2}`);
}

operacion(10, 5, suma);
operacion(10, 5, resta);