//1
// a- Variable edad con numero entero 

let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else  {
    console.log("Es menor de edad");
}

// b- Variable de numero es par o impar

let numero = 8; 
if (numero % 2 === 0) {
    console.log("El Número es Par");
} else {
    console.log("El Número es impar");
}

// c- Variable nota

let nota = 10;
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}   


//2
// Programa que imprima numeros del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Programa que imprima los números del 10 al 1 en orden descendente
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Bucle for que recorre 20 números y utiliza un condicional 
// para identificar si cada número es par o impar mediante el módulo.

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El Número es par");
    } else {
        console.log("El Número es impar");
    }   

}


//Modificacion del punto anterior, agregando el número que imprime por consola

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El Número ${i} es par`);
    } else {
        console.log(`El Número ${i} es impar`);
    }   

}
