
const nombrePersona1 = "martina"
const nombrePersona2 = "melina"
const nombrePersona3 = "victoria"

let nombreDinamico = prompt("¿Cual es tu nombre?")

nombreDinamico = nombreDinamico.toLowerCase()


if(nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3) {
    console.log(`¡Hola ${nombreDinamico}, bienvenida al Bar!`)

    let reserva = Number(prompt("¿Cual es tu numero de reserva?"))

    if(reserva < 3) {
        console.log ("Correcto, tenes tu mesa en el piso 1")
    } else if (reserva > 4){
        console.log("Correcto, tenes tu mesa en el piso 2")
    } else if (reserva == 4){
        console.log("No tenemos ese numero de reserva")
    } else {
     console.log("Espera que te buscamos una mesa")
    }

 } else{ 
        console.log(`No podes ingresar ${nombreDinamico}, no te tengo en la lista!`)
}










