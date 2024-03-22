const URL = "http://jsonplaceholder.typicode.com/users";

const APP = document.getElementById("app")

fetch(URL)
    .then(response => response.json())
    .then((datos) =>{
        console.log(datos);
        mostrarUsuarios(datos);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso finalizado"));

function mostrarUsuarios(datos){
    datos.forEach(usuarios => {
        const DIV = document.createElement("div");
        DIV.innerText = `${usuarios.name}`;
        APP.appendChild(DIV)
    })
}

// PROMESAS

class usuario {
    constructor (user, password) {
        this.user = user;
        this.password = password;
    }
}

const USUARIO_UNO = new usuario("Marcos", 1234);
const USUARIO_DOS = new usuario("Lucas", 2222);
const USUARIO_TRES = new usuario("Nicolas", 8888);
const USUARIO_CUATRO = new usuario("Jacqueline", 1277);
const USUARIO_CINCO = new usuario("Juan", 2024);

const USUARIOS = [USUARIO_UNO, USUARIO_DOS, USUARIO_TRES, USUARIO_CUATRO, USUARIO_CINCO];

const solicitarUsuarios = (estado) =>{
    return new Promise((resuelto, rechazado) =>{
        if(estado === true){
            resuelto (USUARIOS);
        } else {
            rechazado("No se te permite ingresar");
        }
    }) 
}

/* solicitarUsuarios(true)
    .then(resuelto){
        console.log(resuelto);
    }

    solicitarUsuarios(false){
        .catch(error){
            console.log(rechazado)
        }
    }
 */

const CANTIDAD_USUARIOS = 65;
const CANTIDAD_USUARIOS_REGISTRADOS = new Promise((resolve, reject)=>{
    if(CANTIDAD_USUARIOS > 10){
        resolve("Tenemos suficientes usuarios registrados");
    } else{
        reject("No tenemos los suficientes usuarios registrados");
    }
})

CANTIDAD_USUARIOS_REGISTRADOS.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("El conteo ya se ha realizado con exito, numero de usuarios registrados es: " + CANTIDAD_USUARIOS);
})

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
