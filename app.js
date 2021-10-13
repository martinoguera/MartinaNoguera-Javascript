
// let edad = Number(prompt("¿Que edad tienes?"));

// if(edad >= 18){
//     console.log ("Podes comprar en la tienda");
// } else if (edad <= 17){
//     alert ("No puedes comprar en la tienda");
// }

// class Producto{ 

//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// let listaProductos = [];

// listaProductos.push(new Producto("Fernet", 650))
// listaProductos.push(new Producto("Vodka", 685))
// listaProductos.push(new Producto("Heineken", 264))
// listaProductos.push(new Producto("Corona", 184))
// listaProductos.push(new Producto("Ron", 700))
// listaProductos.push(new Producto("Brahma", 164))
// listaProductos.push(new Producto("Whisky", 1560))
// listaProductos.push(new Producto("Campari", 600))
// listaProductos.push(new Producto("Jaggermeister", 2400))

// const comprarProductos = () => {

//     let nombre = prompt("Nombre de la bebida");
//     let precio = Number(prompt("Precio del producto"));

//     let Producto = new Producto(nombre, precio)
//     listaProductos.push(Producto)
// }

// listaProductos.sort((a,b) =>{

//     if(a.nombre > b.nombre) {
//         return 1
//     }
//     if (a.nombre < b.nombre){
//         return -1
//     }
//     return 0
// })

// console.log(listaProductos);

// listaProductos.forEach(obj =>{
//     console.log(obj.precio);
// })

// let search = prompt("que queres buscar?")
// let buscadoUnico = listaProductos.find(obj => obj.nombre == search)
// console.log(buscadoUnico)


// DOM

class p {
    constructor(bebida, cantidad, precio, subtotal){
        this.bebida = bebida;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subtotal = subtotal;
    }
}

const guardarDatos = () => {

const producto = new p({

    bebida : document.getElementById("bebida").value, 
    cantidad : document.getElementById("cantidad").value,
    precio : document.getElementById("precio").value,
    subtotal : document.getElementById("subtotal").value,

})
    console.log(document.getElementById("bebida").value)
    console.log(document.getElementById("cantidad").value)
    console.log(document.getElementById("precio").value)
    console.log(document.getElementById("subtotal").value)

    return producto
}

document.getElementById("btn").addEventListener("click", () => {
    guardarDatos()
})