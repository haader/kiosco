productos = '[{"name" : "azucar", "precio" : 20},{"name" : "arroz", "precio" : 70},{"name":"queso","precio":90}]';

var myProduc = JSON.parse(productos);
let total=0;

var id=0;
cont=0;
myProduc.forEach(element => {
    console.log(cont);
    document.getElementById("json").innerHTML+='<div class="child" id="'+cont+'><h3 id="pid'+cont+'">Producto: '+myProduc[cont].name+'</h3><h3 id="cid'+cont+'">Costo: '+myProduc[cont].precio+'$</h3><button " onclick="comprar('+cont+')">Comprar</button></div>';    
    
    cont++;
});
function sumar(precio){
    total+=myProduc[precio].precio;
    document.getElementById("total").innerHTML=total;
    
}

function comprar(id){
    
    sumar(id);

    document.getElementById("listacompra").innerHTML+='<tr><td>'+myProduc[id].name+'</td><td>'+myProduc[id].precio+'$</td></tr>';

    /*
    console.log("producto: "+document.getElementById("pid"+id).innerText);
    console.log("precio: "+document.getElementById("cid"+id).innerText);
    */
    
}



