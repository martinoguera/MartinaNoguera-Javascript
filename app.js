
let edad = Number(prompt("¿Que edad tienes?"));

if(edad >= 18){
    console.log ("Podes comprar en la tienda");
} else if (edad <= 17){
    alert ("No puedes comprar en la tienda");
}

// OBJETOS 

// class Bebidas {

//     constructor(nombre, marca, precio, stock, disponible){
//         this.nombre = nombre, 
//         this.marca = marca,
//         this.precio = precio, 
//         this.stock = stock,
//         this.disponible = disponible
//     }

//     comprar(cantidad){
//         if(this.stock <= 0){
//             console.log("No hay stock de este producto");
//             this.disponible = false
//         } else {
//             this.stock = this.stock - cantidad;
//             console.log(`¡Hola, compraste un ${this.nombre}, te salio ${this.precio * cantidad}!`) 
//         }
       
//     }
// }

// const producto1 = new Bebidas("Fernet", "Branca", 650, 10, true);
// const producto2 = new Bebidas("Vodka", "Smirnoff", 685, 10, true);
// const producto3 = new Bebidas("Ron", "Bacardi", 700, 7, true);
// const producto4 = new Bebidas("Cerveza", "Corona", 184, 15, true );
// const producto5 = new Bebidas("Cerveza", "Brahma", 164, 18, true);
// const producto6 = new Bebidas("Whisky", "J&B", 1560, 3, true);
// const producto7 = new Bebidas("Campari", "Cynar", 600, 10, true);
// const producto8 = new Bebidas("Cerveza", "Heinken", 264, 20, true);
// const producto9 = new Bebidas("Jagermeister", "Jagermeister", 2400, 2, true);

// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);
// console.log(producto6);
// console.log(producto7);
// console.log(producto8);
// console.log(producto9);

// ARRAY

let productos = ["Vodka", "Ron", "Whisky","Jaggermeister", "Campari", "Corona", "Brahma", "Heineken"]

for (let i = 0; i < productos.length; i++){ 
    console.log(productos[i])
} 

let cervezas = productos.slice(5,8)
console.log(cervezas)

productos.unshift("Fernet");

productos.sort()
console.log(productos);


// DESAFIO COMPLEMENTARIO

class Producto{ 

    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

let listaProductos = [];

listaProductos.push(new Producto("Fernet", 650))
listaProductos.push(new Producto("Vodka", 685))
listaProductos.push(new Producto("Heineken", 264))
listaProductos.push(new Producto("Corona", 184))
listaProductos.push(new Producto("Ron", 700))
listaProductos.push(new Producto("Brahma", 164))
listaProductos.push(new Producto("Whisky", 1560))
listaProductos.push(new Producto("Campari", 600))
listaProductos.push(new Producto("Jaggermeister", 2400))

const comprarProductos = () => {

    let nombre = prompt("Nombre de la bebida");
    let cantidad = Number(prompt("Cantidad de productos a llevar"));

    let Producto = new Producto(nombre, cantidad)
    listaProductos.push(Producto)
}

listaProductos.sort((a,b) =>{

    if(a.nombre > b.nombre) {
        return 1
    }
    if (a.nombre < b.nombre){
        return -1
    }
    return 0
})

console.log(listaProductos);
