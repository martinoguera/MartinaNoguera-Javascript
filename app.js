
/// Calculadora

solicitarNumero()

function solicitarNumero (){
    let num1 = Number(prompt("Ingrese un numero"));
    let num2 = Number(prompt("Ingrese un segundo numero"));
    let operador = prompt("Ingresa la operacion que desea realizar");

    calcular(num1, num2, operador);

}

function calcular (a, b, c){

    let res;

    switch(c){
        case "+" : res= a+b;
        break;
        case "-" : res= a-b;
        break;
        case "*" : res= a*b;
        break;
        case "/" : res= a/b;
        break;
        default : res= "La operacion que desea realizar no es correcta.";
        break;
    }

    resultado(res);
}

function resultado (a) {

    console.log(a);
    alert(a);
}







