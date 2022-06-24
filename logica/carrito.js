//function carrito contador 

//sumar carrito
function sumarCarrito(){
    contadorCarrito++;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
}

//restar carrito
function restarCarrito(){
    contadorCarrito--;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
}