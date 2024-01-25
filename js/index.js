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