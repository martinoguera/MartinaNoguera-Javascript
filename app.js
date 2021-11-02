
// let edad = Number(prompt("¿Que edad tienes?"));

// if(edad >= 18){
//     console.log ("Podes comprar en la tienda");
// } else if (edad <= 17){
//     alert ("No puedes comprar en la tienda");
// }


class Productos {

    constructor({
        bebida,
        cantidad,
        precio, 
        subtotal
    }){
        this.bebida = bebida;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subtotal = subtotal
    }
}

let listaBebidas = [];


const crearCarrito = () => {

    const bebidas = new Productos({
        bebida : document.getElementById("bebida"),
        cantidad : document.getElementById("cantidad").value,
        precio : document.getElementById("precio").value,
        subtotal : document.getElementById("subtotal").value,
    })

    console.log(bebidas)

    return bebidas
}

const agregarBebida = (lista) => {
    lista.push(crearCarrito)
    return lista
}
  

const guardarEnBaseDeDatos = () =>{

   listaBebidas = verificarStorage()
    localStorage.setItem("listaBebidas", JSON.stringify(listaBebidas))
}

const verificarStorage = () =>{

let dato;

    if(localStorage.getItem("listaBebidas") != null){
        dato = agregarBebida(JSON.parse(localStorage.getItem("listaBebidas")))
         return dato
    }else{
        agregarBebida(listaBebidas)
        dato = listaBebidas
        return dato
    }
}

document.getElementById("btn").addEventListener("click", (e) => { e.preventDefault()
    crearCarrito()
    guardarEnBaseDeDatos()

})

// imprimirDatos()

// JQUERY

$(() =>{
    console.log(`El dom esta listo `)
})


window.addEventListener("load",  ()=>{
    console.log(`Todos los elementos estan cargados`);
}); 


// const productos = [{ id: 1,  nombre: "Gin", precio: 500 },
// {  id: 2,  nombre: "fernet", precio: 550 },
// {  id: 3,  nombre: "vodka"  , precio: 600},
// {  id: 4,  nombre: "ron" , precio: 550},
// {  id: 5,  nombre: "brahma"  , precio: 180},
// {  id: 6,  nombre: "corona"  , precio: 200},];

// for (const producto of productos) {
//     $("#btn").append(`<div><h3> ID: ${producto.id}</h3>
//     <p>  Producto: ${producto.nombre}</p>
//     <b> $ ${producto.precio}</b></div>`);
// }


// onclick

function myFunction() {
    document.getElementById("btn1").innerHTML;
    console.log("¡Has agregado un producto a tu compra!");
}

// JQUERY animaciones

$("#btn").on("click", () =>{
    $(".table").hide()
})

$("#btn").on("click", () =>{
    $(".table").show()
})


/// Efecto en titulo h1
$("h1").css("backgorund", "yellow")
    .slideUp(2000)
    .slideDown(2000)
    .delay(1000)
    .slideUp(1000)
    .slideDown(1000);
