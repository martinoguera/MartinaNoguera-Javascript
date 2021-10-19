
// let edad = Number(prompt("¿Que edad tienes?"));

// if(edad >= 18){
//     console.log ("Podes comprar en la tienda");
// } else if (edad <= 17){
//     alert ("No puedes comprar en la tienda");
// }


// DOM

// class p {
//     constructor(bebida, cantidad, precio, subtotal){
//         this.bebida = bebida;
//         this.cantidad = cantidad;
//         this.precio = precio;
//         this.subtotal = subtotal;
//     }
// }

// const guardarDatos = () => {

// const producto = new p({

//     bebida : document.getElementById("bebida").value, 
//     cantidad : document.getElementById("cantidad").value,
//     precio : document.getElementById("precio").value,
//     subtotal : document.getElementById("subtotal").value,

// })
//     console.log(document.getElementById("bebida").value)
//     console.log(document.getElementById("cantidad").value)
//     console.log(document.getElementById("precio").value)
//     console.log(document.getElementById("subtotal").value)

//     return producto
// }

// document.getElementById("btn").addEventListener("click", () => {
//     guardarDatos()
// })

// EVENTOS

const boton = document.getElementById("btn")
console.log(boton)

document.getElementById("btn").addEventListener("mouseup", () => {
    console.log("Cantidad de veces que clikeaste para comprar")
})

const input = document.getElementById("btn")

boton.addEventListener("click", (e) => {
    e.preventDeFault()

    console.log(input.value)
})