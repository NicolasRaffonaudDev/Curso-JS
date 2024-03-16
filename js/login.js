// PRACTICO EL LOGIN

document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    let usuario = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(usuario === 'nicolas' && password === 'atlantida'){
        localStorage.setItem('logeoCorrecto', true);

        window.location.href = 'sesion.html';
    }else {
        document.getElementById('messageLogin').innerText = 'Datos Incorrectos';
    }
})

// COMPROBACION

window.addEventListener('load', function(){
    if(localStorage.getItem('logeoCorrecto')){
        this.window.location.href = 'sesion.html';
    }
})


/* funcion para logearse */

/* let confirmacion
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

login(); */