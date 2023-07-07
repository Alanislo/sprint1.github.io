// ejercicio 1 
/*function numeroMayor(p1, p2) {
    if (p1 > p2) {
        console.log("El primer numero es mayor que el segundo")
    }
}
numeroMayor(7, 3)

//ejercicio 2
function igualesDiferentes(numero1, numero2) {
    if (numero1 !== numero2) {
        console.log("Los numeros son diferentes")
    }
    else {
        console.log("Los numeros son iguales")
    }
}
igualesDiferentes(3, 5)

//ejercicio 3
function esMasGrande(p1, p2) {
    if (p1 == p2) {
        console.log("son iguales");
    }
    if (p1 > p2) {
        console.log("El numero mayor es:" + p1);
    } else {
        console.log("El numero mayor es:" + p2);
    }
}
esMasGrande(5, 9)

//ejercicio 4
function encontrarElMasChico(num1, num2, num3) {

    let menor;

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    }
    else {
        menor = num3;
    }
    return menor;
}

encontrarElMasChico(2, 3, 2);

// ejercicio 5 

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    peso: 80,
    altura: 165,
}

let persona2 = {
    nombre: "Carlitos",
    apellido: "Suare",
    edad: 27,
    peso: 64,
    altura: 175,
}

function mayorEdad(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        console.log(persona1.nombre + " es mayor de edad");
    }
    else {
        console.log(persona2.nombre + " es mayor de edad");
    }
}

function masAlto(persona1, persona2) {
    if (persona1.altura > persona2.altura) {
        console.log(persona1.nombre + " es más alto"); //console.log(´${persona1.nombre} es mas alto´)
    } else {
        console.log(persona2.nombre + " es más alto");
    }
}
function masPesado(persona1, persona2) {
    if (persona1.peso > persona2.peso) {
        console.log(persona1.nombre + " es más pesado");
    } else {
        console.log(persona2.nombre + " es más pesado");
    }
}
//ejercicio 6 
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let altura = prompt("Ingrese su altura");
let vision = prompt("Ingrese numero de vision")

function edadMinima(edad) {
    if (edadMinima >= 18) {
        console.log("Cumples con la edad necesesaria");
    } else {
        console.log("No cumples con la edad minima");
    }
}
function alturaMinima(altura) {
    if (alturaMinima >= 150) {
        console.log("Cumples con la altura necesaria");
    } else {
        console.log("No cumples con la altura minima");
    }
}
function visionNecesaria(vision) {
    if (vision >= 8) {
        console.log("Cumples con la vision necesaria");
    } else {
        console.log("No cumples con la vision necesaria");
    }
}*/

// ejercicio 7

let nombreCliente = prompt("Ingrese su nombre")
let pase = prompt("Pase vip o normal?")
let entrada = prompt("Posee entrada?")

function comproba(nombreCliente,pase,entrada) {
    if ((nombreCliente === "Alanis" || pase === "vip")) {
        console.log("Bienvenido al cliente")
    } else if (entrada === "Si") {

        let deseaUtilizarla = prompt("Desea utilizar su entrada (Si o No)?")

        if (deseaUtilizarla == "Si") {
            console.log("Bienvenido/a")
        }
        else {
            console.log("No ha utilizado su entrada")
        }
    } else {
        let deseaComprar = prompt("¿Desea comprar una entrada? (si o no):");

        if (deseaComprar === "Si") {
            let dineroDisponible = prompt("Ingrese la cantidad de dinero disponible:");

            if (dineroDisponible >= 1000) {
                console.log("¡Venta exitosa! Bienvenido/a, puede ingresar.");
            } else {
                console.log("Lo siento, no tiene suficiente dinero para comprar una entrada.");
            }
        } else {
            console.log("Gracias, ¡hasta luego!");
        }
    }
}
/*
let nombre = prompt("Ingrese su nombre")
function paseSeguro(nombre) {
    if (nombre !== "Alanis") {
        let pase = prompt("Ingrese su pase")
        if (pase !== "vip") {
            let entrada = prompt("Tiene su entrada")
            if (entrada === "Si") {
                let cantidad = Number(prompt("Ingrese su dinero disponible"))
                if (cantidad < 1000) {
                    alert("No posee saldo suficiente")
                }
                else {
                    alert("Adelante")
                }
            } else {
                alert("Gracias, ¡hasta luego!")
            }
        } else {
            alert("Puede pasar porque es vip")
        }
    } else {
        alert("Puede pasar porque se llama Alanis")
    }
}
paseSeguro(nombre)
*/
// ejercicio 8

let numeroIncognita = 5;

function comprobarNumeroIncognita(numeroIncognita) {
    let numeroIngresado = prompt("Adivine el numero");
    if (numeroIngresado == numeroIncognita) {
        console.log("Adivinaste");
    } else {
        let numeroIngresado2 = prompt("Intente nuevamente")
        if (numeroIngresado2 == numeroIncognita) {
            console.log("Adivinaste");
        } else {
            let numeroIngresado3 = prompt("Ultimo intento")
            if (numeroIngresado3 == numeroIncognita) {
                console.log("Adivinaste")
            } else {
                console.log("No has adivinado")
            }
        }
    }
}

/*
//Ejercicio 9
let edad = prompt("Ingresa tu edad")
let resultado = edadMayor(edad)
function edadMayor(edad) {
    if (edad > 100) {
        console.log("Estas seguro de que esa es tu edad?");
    } else if (edad <= 12) {
        console.log("Eres un infante");
    } else if (edad <= 18) {
        console.log("Eres un adolescente");
    } else if (edad <= 45) {
        console.log("Eres un adulto");
    } else {
        console.log("Eres un anciano");
    }
}
console.log(resultado);

//Ejercicio 10

function jugar(jugador1, jugador2) {
    const opcionesValidas = ["PIEDRA", "PAPEL", "TIJERAS"];
    if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
        console.log("Uno hizo trampa");
    } else if (jugador1 === jugador2) {
        console.log("Empate");
      } else if (
        (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
      ) {
        console.log("Jugador 1 ha ganado!"); ;
      } else {
        console.log("Jugador 2 ha ganado!"); ;
      }
    }
    let jugador1 = prompt("Jugador 1, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");
    let jugador2 = prompt("Jugador 2, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):");
    
    let resultadoGame = jugar(jugador1(), jugador2());
    console.log(resultadoGame);

//ejercicio 11

    switch (color) {
      case 'Blanco':
      case 'Negro':
        console.log("Falta de color")
        break;
      case 'Verde':
        console.log("El color de la naturaleza");
        break;
      case 'Azul':
        console.log("El color del agua");
        break;
      case 'Amarillo':
        console.log("El color del sol");
        break;
      case 'Rojo':
        console.log("El color del fuego");
        break;
      case 'Marron':
        console.log("El color de la tierra");
        break;
      default:
        console.log("Excelente eleccion, no lo teniamos pensado");
        break;
    }
// ejercicio 12
*/
function calcularOperacion(valor) {
   
    let valor1 = parseFloat(prompt("Ingrese el primer valor:"));
    let valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");
  
    let resultado;
    let mensaje;
  
    switch (operacion) {
      case "suma":
        resultado = valor1 + valor2;
        mensaje = "El resultado de la suma es: " + resultado;
        break;
      case "resta":
        resultado = valor1 - valor2;
        mensaje = "El resultado de la resta es: " + resultado;
        break;
      case "multiplicación":
        resultado = valor1 * valor2;
        mensaje = "El resultado de la multiplicación es: " + resultado;
        break;
      case "división":
        if (valor2 !== 0) {
          resultado = valor1 / valor2;
          mensaje = "El resultado de la división es: " + resultado;
        } else {
          mensaje = "ERROR: No se puede dividir entre cero (0).";
        }
        break;
      default:
        mensaje = "Operación no válida.";
    }

    alert(mensaje);
  }
  
  calcularOperacion();

  // ejercicio 13
  unction ingresarDatosDNI() {
    let numero = prompt("Ingrese el número de DNI:");
    let nombre = prompt("Ingrese su nombre:");
    let afpellido = prompt("Ingrese su apellido:");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");
  
    console.log("Número de DNI: " + numero);
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Fecha de nacimiento: " + fechaNacimiento);
  
    let confirmacion = prompt("¿Los datos ingresados son correctos?");
  
    if (confirmacion) {
      let dni = {
        numero: numero,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
      }
      console.log("Registro exitoso. Los datos ingresados son:");
      console.table(dni);
    } else {
      console.log("Vuelva a intentarlo en 1 mes.");
    }
  }
  
  ingresarDatosDNI();
