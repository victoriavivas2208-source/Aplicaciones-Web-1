function calcularCuadrado(numero) {
    return numero * numero;
}

const resultado = calcularCuadrado(6);
console.log(resultado);

//mayor a 100

function esMayorA100(numero) {
    if (numero > 100) {
        return true;
    } else {
        return false;
    }
}

const resultado1 = esMayorA100(150);
console.log(resultado1);

//promedio

function calcularPromedio(numero1, numero2) {

    const promedio = (numero1 + numero2) / 2;
    return promedio;
}

const resultado2 = calcularPromedio(8, 6);
console.log(resultado2);


// menor

function esMenorDeEdad(edad) {
    if (edad < 18) {
        return true;
    } else {
        return false;
    }
}

const resultado3 = esMenorDeEdad(16);
console.log(resultado3);



function calcularResto(numero1, numero2) {
    const resto = numero1 % numero2;
    return resto;
}

const resultado4 = calcularResto(17, 5);
console.log(resultado4);



function calcularPrecioFinal(precio, envio) {
    const precioFinal = precio + envio;
    return precioFinal;
}

const resultado5 = calcularPrecioFinal(15000, 2500);
console.log(resultado5);


function calcularArea(ancho, alto) {
    const area = ancho * alto;
    return area;
}

const resultado6 = calcularArea(5, 3);
console.log(resultado6);


function sumar(num1, num2) {
    return num1 + num2;
}

const resultado7 = sumar(7, 5);
console.log(resultado7);



function calcularDoble(numero) {
    const resultado = numero * 2;
    return resultado;
}

const resultado8 = calcularDoble(9);
console.log(resultado8);



const calcularTriple = (numero) => {
    const resultado = numero * 3;
    return resultado;
}

const resultado9 = calcularTriple(5);
console.log(resultado9);




const calcularCuadrado = (numero) => {
    const resultado = numero * numero;
    return resultado;
}

const resultado10 = calcularCuadrado(6);
console.log(resultado10);
