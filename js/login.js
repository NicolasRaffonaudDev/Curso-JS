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