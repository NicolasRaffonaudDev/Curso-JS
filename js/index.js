/* bucle para sumar componentes comprados */

let componentes = 1; //parseInt(prompt("Ingrese la cantidad de componentes que quiere comprar para su computadora"));

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

let producto = 0; //prompt("Elija un producto (CPU, Motherboard, GPU)").toLowerCase();
let cantidad = 0; //parseInt(prompt("Ingrese la cantidad que quiere comprar"));
compra(producto, cantidad) 

/* SEGUNDA PRE-ENTREGA */


/* AGREGANDO OBJETOS */

function ComponentesPc(lista, motherboard, cpu, gpu, ram, disco, fuente, gabinete, stock){
    /* this.informe = function(){console.log("Hola, soy la PC MASTER RAZE y tengo estos componentes: ")}; */
    this.lista = lista;
    this.motherboard = motherboard;
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.disco = disco;
    this.fuente = fuente;
    this.gabinete = gabinete;
    this.stock = stock;
}

const PC_UNO = new ComponentesPc(1, "Asus-Prime", "Ryzen-5-5600", "AMD-RX-560", "Corsair2x16", "SSD512GB", "Seasonic", "Corsair", true)
const PC_DOS = new ComponentesPc(2, "Asus-Prime", "Intel-I5", "1060TI", "Corsair2x8", "SSD256GB", "Seasonic", "Corsair", true)
const PC_TRES = new ComponentesPc(3, "Asus-Prime", "Ryzen-3-3600", "AMD-RX-5500", "Corsair2x8", "SSD256GB", "Seasonic", "Corsair", false)
const PC_CUATRO = new ComponentesPc(4, "Asus-Prime", "Intel-I7", "RTX-2080", "Corsair2x16", "SSD512GB", "Seasonic", "Corsair", false)
const PC_CINCO = new ComponentesPc(5, "Asus-Prime", "Ryzen-7-7800x", "RX-6600", "Corsair2x16", "SSD512GB", "Seasonic", "Corsair", false)
const PC_SEIS = new ComponentesPc(6, "Asus-Prime", "Intel-I9", "RTX-3090","Corsair2x32", "SSD1B", "Seasonic", "Corsair", true)
const PC_SIETE = new ComponentesPc(7, "Asus-Prime", "Ryzen-9-9700x", "AMD-RX-7900", "Corsair2x32", "SSD1TB", "Seasonic", "Corsair", true)

function compraPc(numero){
    switch(numero){
        case 1:
            return PC_UNO;
            break;
        case 2:
            return PC_DOS;
            break;
        case 3:
            return PC_TRES;
            break;
        case 4:
            return PC_CUATRO;
            break;
        case 5:
            return PC_CINCO;
            break;
        case 6:
            return PC_SEIS;
            break;
        case 7:
            return PC_SIETE;
            break;
    }
}

// POP UP PARA PREGUNTAR Y MOSTRAR CANTIDAD DE COMPONENTES

/* let numero = parseFloat(prompt("Ingrese el numero de PC que le interesa y le mostraremos sus componentes"));
compraPc(numero);
console.log("Felicitaciones, la computadora que usted eligio trae los siguientes componentes: ");
console.log(compraPc(numero));
 */

const PC = [
    {
        id: 1,
        stock: true
    },
    {
        id: 2,
        stock: false
    },
    {
        id: 3,
        stock: false
    },
    {
        id: 4,
        stock: true
    },
    {
        id: 5,
        stock: true
    },
    {
        id: 6,
        stock: false
    },
    {
        id: 7,
        stock: true
    }
];

const PC_STOCK = PC.filter(item => item.stock);
console.log("En stock = ", PC_STOCK)

//TERCERA PRE-ENTREGA 
//TRABAJO SOBRE TIENDA.HTML

const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    alert('Se esta ejecutando el evento')
})

const cambiarColor = document.getElementById("cambiarColor");

cambiarColor.addEventListener('click', function(){
    document.body.style.background = 'none';
})

const btnNodo = document.getElementById("btnNodo");

btnNodo.addEventListener('click', function(){
    alert('se esta ejecuntando el evento a traves del nodo')
})

let menuBoton = document.getElementById("menuBoton");
let menu = document.getElementById("menu");

menuBoton.addEventListener('click', function(){
    menu.style.display = (menu.style.display === 'block')? 'none' : 'block';
})

function jsEnHTML(){
    alert("Se esta ejecutando por HTML");
}

// FORMULARIO 

let nombreInput = document.getElementById("nombre");
let emailInput = document.getElementById("email");
let mensajeInput = document.getElementById("mensaje");
let emailError = document.getElementById("emailError");

emailInput.addEventListener('input', function(){
    if(!this.validity.valid){
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none'
    }
})

let formDeRegistro = document.getElementById("formDeRegistro");

formDeRegistro.addEventListener("submit", function(event){
    if(!nombreInput.validity.valid || !emailInput.validity.valid || !mensajeInput.validity.valid){
        if(!nombreInput.validity.valid){
            alert("Hay un error al ingresar su nombre");
        }
        if(!emailInput.validity.valid){
            emailError.style.display = "block";
            alert("Hay un error al ingresar su Email");
        }
        if(!mensajeInput.validity.valid){
            alert("Escribanos todo lo que necesite, gracias");
        }
        event.preventDefault();
    } else{
        alert("Gracias por dejarnos tu mensaje, te contactamos a la brevedad");
    }
}); 


//CARRITO DE COMPRAS PARA NUESTRO PROYECTO

const PRODUCTOS = [
    {id:1, nombre:"ryzen-3-3200g", precio:99000,},
    {id:2, nombre:"ryzen-5-3600", precio:149000},
    {id:3, nombre:"intelCore-i5-10400F", precio:136900},
    {id:4, nombre:"intelCore-i7-12700F", precio:381900},
    {id:5, nombre:"ryzen-7-7700", precio:379000},
    {id:6, nombre:"ryzen-7-7700x", precio:425000}
]

const ELEMENTOS_CARRITO = [];
const CONTENEDOR_PRODUCTOS = document.getElementById('productos-tienda');
const CONTENEDOR_ELEMENTOS_CARRITO = document.getElementById('elementos-carrito');
const TOTAL_SPAN = document.getElementById('totalCompra');

function renderProducto(){
    PRODUCTOS.forEach(producto =>{
        const DIV = document.createElement('div');
        DIV.classList.add('producto');
        DIV.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button class="boton__compra-carrito" data-id="${producto.id}">agregar al carrito</button>      
        `;
        CONTENEDOR_PRODUCTOS.appendChild(DIV);
    })
}

//AGREGAR PRODUCTOS AL CARRITO

function sumarCarrito(idProducto){
    const ITEM_EXISTENTE = ELEMENTOS_CARRITO.find(item => item.id === idProducto);
    if(ITEM_EXISTENTE){
        ITEM_EXISTENTE.cantidad++;
    } else{
        const PRODUCTO = PRODUCTOS.find(p => p.id === idProducto);
        if(PRODUCTO){
            ELEMENTOS_CARRITO.push({...PRODUCTO, cantidad:1})
        }
    } 
    renderCarrito();
}

// FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO

function eliminarDelCarrito(idProducto){
    const INDICE = ELEMENTOS_CARRITO.findIndex(item => item.id === idProducto);
    if(INDICE !== -1){
        ELEMENTOS_CARRITO.splice(INDICE, 1);
        renderCarrito();
    }
}

function renderCarrito(){
    CONTENEDOR_ELEMENTOS_CARRITO.innerHTML = '';
    let precioTotal = 0;
    ELEMENTOS_CARRITO.forEach(item =>{
        const LI = document.createElement('li');
        LI.textContent = `${item.nombre} x ${item.cantidad} - $${item.precio * item.cantidad}`
        const BTN_ELIMINAR = document.createElement('button');
        BTN_ELIMINAR.textContent = 'Eliminar';
        BTN_ELIMINAR.addEventListener('click', ()=>eliminarDelCarrito(item.id));
        LI.appendChild(BTN_ELIMINAR);
        CONTENEDOR_ELEMENTOS_CARRITO.appendChild(LI);
        precioTotal =+ item.precio * item.cantidad;
    })
    TOTAL_SPAN.textContent = precioTotal;
}

function realizarCompra(){
    alert(`Compra Finalizada ${TOTAL_SPAN.textContent}`);
    ELEMENTOS_CARRITO.length = 0
    renderCarrito()
}

document.getElementById('confirmar-compra').addEventListener('click', realizarCompra);

CONTENEDOR_PRODUCTOS.addEventListener('click', function(evento){
    if(evento.target.classList.contains('boton__compra-carrito')){
        const ID_PRODUCTO = parseInt(evento.target.getAttribute('data-id'));
        sumarCarrito(ID_PRODUCTO);
    }
})

renderProducto()

// CARRITO FINALIZA

//APLICANDO localStorage y sessionStorage

localStorage.setItem("nombre", "nicolas");
localStorage.setItem("edad", 28);
localStorage.setItem("condicion", false);

let nicolas = localStorage.getItem("edad");
console.log(nicolas);

// MODO OSCURO

const modo = document.getElementById('modo');

modo.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "claro");
    }
})

const CAJA_MODO = localStorage.getItem("modo");

if(CAJA_MODO === "dark"){
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

// APLICANDO JSON STRINGIFY

const PRODUCTOS_JSON = JSON.stringify(PRODUCTOS);

/* localStorage.setItem("productos", PRODUCTOS); */

localStorage.setItem("productos", PRODUCTOS_JSON);

const EJEMPLO = localStorage.getItem("productos");
console.log(EJEMPLO);

// APLICO PARSE

const EJEMPLO_PASADO = JSON.parse(EJEMPLO);
console.log(EJEMPLO_PASADO);

// PRACTICO EL LOGIN

const LOGEANDO = document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    let usuario = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(usuario === 'nicolas' && password === 'atlantida'){
        localStorage.setItem('logeoCorrecto', true);

        window.location.href = 'login.html';
    }else {
        document.getElementById('messageLogin').innerText = 'Datos Incorrectos';
    }
})

// COMPROBACION

window.addEventListener('load', function(){
    if(localStorage.getItem('logeoCorrecto')){
        this.window.location.href = 'login.html';
    }
})