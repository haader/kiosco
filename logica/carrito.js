//function carrito contador 

//sumar carrito
function sumarCarrito(){
    contadorCarrito++;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
    OpacityBtnBorrar();
  
}

//restar carrito
function restarCarrito(){
    contadorCarrito--;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
    OpacityBtnBorrar();
}

function OpacityBtnBorrar(){
      //funcion global que determina la opacity del btn "borrar todo" 

if(contadorCarrito==0){
    document.getElementById("btnborrarTodo").style.opacity="0.3";
}else{
    document.getElementById("btnborrarTodo").style.opacity="1";
}
}