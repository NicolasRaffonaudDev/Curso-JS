/* funcion para logearse */

function login(user, password){
    if(user && password.length >= 8){
        console.log("Ingreso Valido");
    } else {
        alert("Ingreso no valido, recuerde que su contraseña debe contener al menos 8 caracteres");
    }
}

let user = prompt("Ingrese su nombre de usuario");
let password = prompt("Ingrese su contraseña");
login(user, password);


/* bucle para sumar componentes comprados */

let componentes = parseInt(prompt("Ingrese la cantidad de componentes que quiere comprar para su computadora"));

for(i=0; i <= componentes; i++){
    console.log("Componentes sumados al carrito: " + i)
}

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