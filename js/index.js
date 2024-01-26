/* bucle para logearse */
/* let confirmacion
do{
    let user = prompt("Ingrese su nombre de usuario");
    let password = prompt("Ingrese su contraseña");
    if(user && password.length >= 8){
        console.log("Ingreso Valido");
    } else {
        confirmacion = "no";
        alert("Ingreso no valido, recuerde que su contraseña debe contener al menos 8 caracteres");
    }  
}while(confirmacion === "no");  */

/* funcion para logearse */

let confirmacion
function login(){
    do{
        let user = prompt("Ingrese su nombre de usuario");
        let password = prompt("Ingrese su contraseña");
        if(user && password.length >= 8){
            confirmacion = "si";
            console.log("Ingreso Valido");
        } else {
            confirmacion = "no";
            alert("Ingreso no valido, recuerde que su contraseña debe contener al menos 8 caracteres");
        }
    }while(confirmacion === "no");
}

login();

/* bucle para sumar componentes comprados */

let componentes = parseInt(prompt("Ingrese la cantidad de componentes que quiere comprar para su computadora"));

for(i=1; i <= componentes; i++){
    console.log("Componentes sumados al carrito: " + i)
}

/* funcion para comprar componentes */

function compra(producto, cantidad){
    if(producto === "cpu"){
        precio = 150000;
        precioTotal = precio * cantidad;
        console.log("Usted debe pagar: $" + precioTotal);
    } else if(producto === "motherboard"){
        precio = 99000;
        precioTotal = precio * cantidad;
        console.log("Usted debe pagar: $" + precioTotal);
    } else if(producto === "gpu"){
        precio = 249000;
        precioTotal = precio * cantidad;
        console.log("Usted debe pagar: $" + precioTotal);
    } else {
        console.log("Usted eligio el producto incorrecto");
    }
}

let producto = prompt("Elija un producto (CPU, Motherboard, GPU)").toLowerCase();
let cantidad = parseInt(prompt("Ingrese la cantidad que quiere comprar"));
compra(producto, cantidad)