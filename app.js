
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

imprimirDatos()

