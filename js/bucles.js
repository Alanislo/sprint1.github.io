//ejercicio 1 
let numero = parseInt(prompt("Ingrese un número:"));

console.log("Tabla de multiplicar del " + numero + ":");

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}

// ejercicio 2 
let suma = 0;
while (true) {
    let numero = prompt("Ingrese un número; 0 para terminar");
    if (numero === 0) {
        break;
    }
    suma += numero;
}
// ejercicio 3 
let ultimoNumero = arrayDeNumeros[arrayDeNumeros.length - 1]
console.log(`El ultimo numero ingresado fue ${ultimoNumero}`)

let numero = Number(prompt("Ingrese su numero para adivinar"))
let contador = 1
if (numero == null || numero == " ") {
    alert("No ingresaste un numero")
} else {
    while (numero != ultimoNumero && numero >= 1 && numero <= 100) {
        contador++
        if (numero > ultimoNumero) {
            alert("Es mas grande")
        } else {
            alert("Es mas chico")
        }
        numero = Number(prompt("Ingrese un numero para adivinar"))
    }
    alert(`Ganaste en ${ contador } intentos`)
}
console.log(`Lo adivinaste en ${ contador } intentos`)
// ejercicio 4 

// ejercicio 4 

let numero1 = prompt("Ingrese un número:");

let divisores = [];

for (let i = 1; i <= numero1; i++) {
    if (numero1 % i === 0) {
        divisores.push(i);
    }
}

console.log("Los divisores de " + numero1 + " son: " + divisores.join(", "));


// ejercicio 5 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + array[i]);
}
/*Dado un array de 10 números, realizar un programa que muestre por consola el doble
    de cada uno de los elementos.*/

const numeros = [12, 5, 1, 3, 17, 4, 7, 22, 33, 105]

function mostrarDobles(listaNumeros) {
    const dobles = []
    for (const numero of listaNumeros) {
        dobles.push(numero * 2)
    }
    console.log(dobles.join(' '))
}

mostrarDobles(numeros)

//ejercicio 7 
let familia = [
    {
        nombre: "Jose",
        edad: 47,
        relacion: "Padre",
        ciudad: "CABA"
    },
    {
        nombre: "María",
        edad: 32,
        relacion: "Madre",
        ciudad: "La Plata"
    },
    {
        nombre: "Pedro",
        edad: 10,
        relacion: "Hijo",
        ciudad: "La Plata"
    },
    {
        nombre: "Aldana",
        edad: 8,
        relacion: "Hija",
        ciudad: "City Bell"
    },
    {
        nombre: "Carlos",
        edad: 60,
        relacion: "Abuelo",
        ciudad: "CABA"
    }
];

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log("Hola, soy " + persona.nombre + ". Tengo " + persona.edad + " años y soy " + persona.relacion);
}

//ejercicio 9

let sumaPares = 0;
let sumaImpares = 0;


while (true) {
    let numero = prompt("Ingrese un número (0 para terminar):");

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
}

console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);

// ejercicio 11 
let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
let numMayor = nuevoArray[0]
for (let i = 1; i <= nuevoArray.length; i++) {
    if (nuevoArray[i] > numMayor) {
        numMayor = nuevoArray[i]
    }
}
console.log("El numero mas grande es: " + numMayor)
