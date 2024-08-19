
let temperatura, escalaInicial, escalaFinal,resultado;
const valorConsKelvin = 273.15;

// Pedimos los datos al usuario y convertimos lo que nos pase a un dato tipo flotante para convertirlo
temperatura = parseFloat(prompt("Ingrese la temperatura: "));
escalaInicial = prompt("Ingrese la escala inicial (C, F o K): ").toUpperCase();
escalaFinal = prompt("Ingrese la escala final (C, F o K): ").toUpperCase();
 
// Validamos que los datos proporcionados sean los validos para el correcto funcionamiento de nuestro programna
if (isNaN(temperatura)) {
  alert("La temperatura debe ser un número.");
} 
else if (escalaInicial !== 'C' && escalaInicial !== 'F' && escalaInicial !== 'K') {
  alert("Escala inicial no válida. Debe ser C, F o K.");
} 
else if (escalaFinal !== 'C' && escalaFinal !== 'F' && escalaFinal !== 'K') {
  alert("Escala final no válida. Debe ser C, F o K.");
} 
else {
  switch (escalaInicial) {
    case 'C':
      switch (escalaFinal) {
        case 'F':
          resultado = (9/5 * temperatura) + 32;
          break;
        case 'K':
          resultado = temperatura + valorConsKelvin;
          break;
      }
      break;
    case 'F':
      switch (escalaFinal) {
        case 'C':
          resultado = (temperatura - 32) * 5/9;
          break;
        case 'K':
          resultado = (temperatura + 459.67) * 5/9;
          break;
      }
      break;
    case 'K':
      switch (escalaFinal) {
        case 'C':
          resultado = temperatura - valorConsKelvin;
          break;
        case 'F':
          resultado = (temperatura * 9/5) - 459.67;
          break;
      }
      default:
  }

  //Mostramos por consola el resultado de la conversion
  console.log("El resultado de la conversion seleccionada es: ",(resultado));

  //Mostramos en pantalla el resultado de la conversion 
  document.write("El resultado de la conversion seleccionada es: ",(resultado));

}
