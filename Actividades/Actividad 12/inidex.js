
// 1- Arreglos

// a)

const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Ingrese el número"));

    if (numero % 2 !== 0) {
        numeros.push(numero);
    }
}

console.log(numeros);