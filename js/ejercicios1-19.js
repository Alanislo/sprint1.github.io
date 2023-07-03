let miNombre ="Alanis"

let miApellido ="Lobato"

let miEdad = 19

let miMascota =" Michi"

let edadMascota = 5


console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)


let nombreCompleto =`${miNombre} ${miApellido}`
console.log(nombreCompleto)


let textoPresentacion = `${miNombre}  ${miApellido}
${miEdad}${miMascota} ${edadMascota}`
console.log(textoPresentacion)


let sumaNumeros = miEdad + edadMascota
console.log(sumaNumeros)
let restaNumeros = miEdad - edadMascota
console.log(restaNumeros)
let productoEdades = miEdad * edadMascota
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)
let potenciaEdades = miEdad ** edadMascota
console.log(potenciaEdades)


let alumno = {
    nombre: "Taylor",
    edad: 19,
    estudiante: true,
    curso: "JavaScript",
    colorFav: "Azul",
}
console.table(alumno)


console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.estudiante)
console.log(alumno.curso)
console.log(alumno.colorFav)


let mascota = {
    nombre: "Mishi",
    edad: 2,
    color: "Blanco y gris",
    tipo: "Gato",
    peso: "6kg"
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.tipo)
console.log(mascota.peso)


let frutas = ["Banana", "Kiwi", "Manzana", "Mandarina", "Durazno"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])


let textoAleatorio = ["Kiwi", 4 , "Hija"]
console.log(textoAleatorio)


let numeros = [1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])


let familia = ["Padre", "Madre", "Abuela","Hijo", "Hija"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])


let mensajeUsuario = prompt("Ingrese su edad")
let soyMayorEdad = mensajeUsuario
console.log ("Soy mayor de edad"+ " " + mensajeUsuario)

let mensajeUsuario = prompt("Ingrese su edad")
let soyMayorEdad = mensajeUsuario
console.log(soyMayorEdad >=18)
console.log("Soy mayor edad " + soyMayorEdad)


let edadCompañero = prompt("Ingrese edad de compañero")
console.log("Edad compañero " + edadCompañero)

let edadesIguales = soyMayorEdad == edadCompañero
console.log("Mi edad es igual " + edadesIguales)

let soyMayor = soyMayorEdad >= edadCompañero
console.log("Mi edad es mayor " + soyMayor)

let soyMenor = soyMayorEdad <= edadCompañero
console.log("Mi edad es menor" + soyMenor)

let edadPersona = prompt("Ingrese edad")
console.log(edadPersona >= 18)
let alturaPersona = prompt("Ingrese su altura")
console.log(alturaPersona >= 1.20)
console.log("Puede subir a la atraccion " +" "+edadPersona +" "+ alturaPersona)

let paseLimitado = prompt("Ingrese su saldo")
console.log(paseLimitado>=300)
console.log("Tiene pase limitado " + paseLimitado)

let paseNormal = prompt("Ingrese su saldo")
console.log(paseNormal>=600)
console.log("Tiene pase Normal " + paseNormal)

let paseVip = prompt("Ingrese su saldo")
console.log(paseVip>=1000)
console.log("Tiene pase Vip "+ paseVip)


