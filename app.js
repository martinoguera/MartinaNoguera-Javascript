
// let edad = Number(prompt("¿Que edad tienes?"));

// if(edad >= 18){
//     console.log ("Podes comprar en la tienda");
// } else if (edad <= 17){
//     alert ("No puedes comprar en la tienda");
// }


// class Productos {

//     constructor({
//         bebida,
//         cantidad,
//         precio, 
//         subtotal
//     }){
//         this.bebida = bebida;
//         this.cantidad = cantidad;
//         this.precio = precio;
//         this.subtotal = subtotal
//     }
// }

// let listaBebidas = [];


// const crearCarrito = () => {

//     const bebidas = new Productos({
//         bebida : document.getElementById("bebida"),
//         cantidad : document.getElementById("cantidad").value,
//         precio : document.getElementById("precio").value,
//         subtotal : document.getElementById("subtotal").value,
//     })

//     console.log(bebidas)

//     return bebidas
// }

// const agregarBebida = (lista) => {
//     lista.push(crearCarrito)
//     return lista
// }


// const guardarEnBaseDeDatos = () =>{

//    listaBebidas = verificarStorage()
//     localStorage.setItem("listaBebidas", JSON.stringify(listaBebidas))
// }

// const verificarStorage = () =>{

// let dato;

//     if(localStorage.getItem("listaBebidas") != null){
//         dato = agregarBebida(JSON.parse(localStorage.getItem("listaBebidas")))
//          return dato
//     }else{
//         agregarBebida(listaBebidas)
//         dato = listaBebidas
//         return dato
//     }
// }

// document.getElementById("btn").addEventListener("click", (e) => { e.preventDefault()
//     crearCarrito()
//     guardarEnBaseDeDatos()

// })

// imprimirDatos()

// JQUERY

// $(() =>{
//     console.log(`El dom esta listo `)
// })


// window.addEventListener("load",  ()=>{
//     console.log(`Todos los elementos estan cargados`);
// }); 


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

/* 
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

// AJAX

let articulos = [];
$.ajax({
  url: "./datos.js",
  dataType: "json",
  success: (response) => {
    cargarDatos(response, articulos);
  },
});
var pedido = new Pedido();
$("#cantidad").keypress(soloNumeros);
$("#validar-edad").keypress(soloNumeros);

$("#pedidos").on("click", function () {
  let posicion = $("#customer").offset().top;
  $("html, body").animate({ scrollTop: posicion }, 2000);
});


/// carrito

const url = "./datos.js"
console.log(url)

$.get(url, (respuesta, estado) =>{
    if(estado == "success"){
        console.log(respuesta)

        respuesta.forEach(element => {

        });
    }
}) */
/* 
<div class="bottles col-sm col-md-6 col-xl-3">
<img src="./imagenes/fernet.PNG" alt="" height="300px" width="300px">
<div class="descripcion">
  <div class="nombreProducto">Fernet Branca 750cc</div>
  <div class="precio">$500</div>
  <button class="shop" onclick="seleccionarProducto">AGREGAR</button>
</div>
</div>
 */

class Producto {
  constructor({
      id,
      nombre,
      precio,
      destacado,
      imagen
  }) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.destacado = destacado;
      this.imagen = imagen;
  }
}

const productos = [];

const mostrarProductos = (place, array) => {
  place.innerHTML = '';
  array.forEach(element => {
      place.innerHTML += `
  <div class="bottles col-sm col-md-6 col-xl-3">
      <img src="${element.imagen}" alt="" height="300px" width="300px">
      <div class="descripcion">
        <div class="nombreProducto">${element.nombre}</div>
        <div class="precio">$${element.precio}</div>
        <button class="shop" onclick="seleccionarProducto">AGREGAR</button>
      </div>
  </div>

`;
  });
}

const completarOptions = (place, array) => {
  const fragment = document.createDocumentFragment();
  array.forEach(element => {
      const option = document.createElement('option');
      option.setAttribute('value', element.id);
      option.textContent = element.nombre;
      fragment.appendChild(option);
  });
  place.appendChild(fragment);
}

const mostrarProducto = () => {
  //Capturo los input
  const precioInput = document.getElementById('precio');
  const subtotal = document.getElementById('subtotal');
  const bebida = document.getElementById('bebida');
  const bebidaElegida = parseInt(bebida.options[bebida.selectedIndex].value);
  const cantidad = parseInt(document.getElementById('cantidad').value);

  //Busco el producto elegido y devuelvo el precio
  const precio = productos.find(producto => producto.id == bebidaElegida).precio;

  //Completo los input con los valores actualizados
  precioInput.value = precio;
  subtotal.value = precio * cantidad;
}


//Pido los datos de datos.json, los adapto a la clase Producto y los muestro por pantalla. Además hago el primer cálculo de la página en la sección de subtotal.
$.get('./datos.json', (respuesta, estado) => {
  if (estado == "success") {
      //Ajusto los productos que llegan del archivo .json a la clase Producto
      respuesta.forEach(producto => {
          productos.push(new Producto({
              id: producto.id,
              nombre: producto.nombre,
              precio: producto.precio,
              destacado: producto.destacado,
              imagen: producto.imagen,
          }));
      });
      //capturo el contenedor donde imprimir los productos
      const bottles = document.getElementById('bottles');
      //Ejecuto la función para mostrar los productos en el contenedor bottles
      mostrarProductos(bottles, productos);
      //Completa los options de SUBTOTAL
      completarOptions(bebida, productos);
      //Muestra  el cálculo del primer producto
      mostrarProducto();
  }
})


//Evento para escuchar los cambios en el formulario y mostrar el precio por unidad y el subtotal  
document.getElementById('formulario').addEventListener('change', () => {
  mostrarProducto()
});