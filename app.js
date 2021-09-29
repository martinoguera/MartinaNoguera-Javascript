
let nombreAlumno = prompt ("Cual es tu nombre");

nombreAlumno = nombreAlumno.toLowerCase()

console.log (`¡Hola ${nombreAlumno}, este es tu promedio!`);

let num1 = Number(prompt("Ingrese tu nota parcial"));
let num2 = Number(prompt("Ingrese tu nota parcial recuperatorio"));

let num3 = calcular(num1, num2);
let num4 = calcular(num1, num2);

 let promedio1 = promedio(num3);
 let promedio2 = promedio(num4);

 console.log(promedio1, promedio2);

function promedio (a) {

    let promedio = a/2;
    return promedio;
}


function calcular (a, b) {

    let resultado = a+b;
    return resultado;
}











