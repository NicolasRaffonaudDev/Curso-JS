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

/* bucle para sumar componentes comprados */

/* let componentes = parseInt(prompt("Ingrese la cantidad de componentes que quiere comprar para su computadora"));

for(i=1; i <= componentes; i++){
    console.log("Componentes sumados al carrito: " + i)
} */

/* funcion para comprar componentes */

/* function compra(producto, cantidad){
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
compra(producto, cantidad) */

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

/* console.log(PC_UNO);
console.log(PC_DOS);
console.log(PC_TRES);
console.log(PC_CUATRO);
console.log(PC_CINCO);
console.log(PC_SEIS);
console.log(PC_SIETE); */

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

let numero = parseFloat(prompt("Ingrese el numero de PC que le interesa y le mostraremos sus componentes"));
compraPc(numero);
console.log("Felicitaciones, la computadora que usted eligio trae los siguientes componentes: ");
console.log(compraPc(numero));


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