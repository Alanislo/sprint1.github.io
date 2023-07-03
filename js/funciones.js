function saludar(nombre){
return "Hola " + nombre;
}
console.log(saludar("Alanis"))

function multiplicar(p1,p2){
    return p1 * p2;
}
console.log(multiplicar(5,3))

function areaTriangulo(base, altura){
    return base* altura/2
}
areaTriangulo(3,5)
console.log(areaTriangulo(3,5))

function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
}
perimetroTriangulo(4,5,6)
console.log(perimetroTriangulo(4,5,6))

function calcularPrecio(precio, cantidad){
    let resultado;
    if(cantidad>=20){
        resultado = precio * 0.20
    } else if( cantidad >=10){
    resultado = precio * 0.40
    }
    return resultado
}
console.log(calcularPrecio(40, 15))

function esMayorDeEdad(edad) {
    let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
}
console.log(esMayorDeEdad(20))

function calcularImpuesto(ingresoAnual) {
    let impuesto;
    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.1;
      } else if (ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15;
      } else {
        impuesto = ingresoAnual * 0.2;
      }
    
      return impuesto;
    }
console.log(calcularImpuesto(8000))


function verificarDia(numeroDia) {
    let mensaje;
    switch (numeroDia) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        mensaje = "Es un día laboral";
        break;
      case 6:
      case 7:
        mensaje = "Es fin de semana";
        break;
      default:
        mensaje = "Día inválido";
        break;
    }
  
    return mensaje;
  }
  
  console.log(verificarDia(1));