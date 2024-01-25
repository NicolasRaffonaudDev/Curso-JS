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

