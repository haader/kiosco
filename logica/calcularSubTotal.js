//LISTA sub-total
function CalcularSubTotal([id]){
    let precio=[id].precio;
    let calsubtotal=precio*([id].unidades);
/*PROBLEMA>>>>*/        document.getElementById("subtotal"+id).innerHTML=calsubtotal+"$";//PROBLEMAS CON EL ID!!!
    
}