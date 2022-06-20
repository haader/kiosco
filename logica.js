productos = '[{"name" : "leche", "precio" : 75, "unidades":0},{"name" : "batata", "precio" : 150, "unidades":0},{"name" : "papas", "precio" : 200, "unidades":0},{"name" : "azucar", "precio" : 20, "unidades":0},{"name" : "arroz", "precio" : 70,"unidades":0},{"name":"queso","precio":90,"unidades":0}]';

/*VARIABLES!!! */

var myProduc = JSON.parse(productos);
let total=0;/*sumatoria de todos los precios*/ 
let contador=0;/*cantidad de veces que aparece en la lista */
/*unidades del producto*/
let subtotal=0; /*contador * precioUnitario */
cont=0;
let contadorCarrito=0;
let numero="1155179365";
let whatsapp="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";
let texto="";
let array=[];
let saltolinea="+%0A+";

let booleanTermonarCopra=false;

var id=0;
/*dom: creo la lista de productos */
myProduc.forEach(element => {
    document.getElementById("json").innerHTML+='<div class="child" id="'+cont+'"><h3 id="pid'+cont+'">'+myProduc[cont].name+'</h3><h3 id="cid'+cont+'">Costo: '+myProduc[cont].precio+'$</h3><button " onclick="comprar('+cont+')">Comprar</button></div>';    
    
    cont++;
});


function sumar(id){
    total+=myProduc[id].precio;
    document.getElementById("total").innerHTML=total;

    

}

function restar(id){ 

            total-=myProduc[id].precio;
            document.getElementById("total").innerHTML=total;
}

                                            function sumarSubTotal(id){
                                                let precio=myProduc[id].precio;
                                                let calsubtotal=precio*(myProduc[id].unidades);
                                                document.getElementById("subtotal"+id).innerHTML=calsubtotal+"$";
                                                
                                            }

function NOcomprar(id){/*boton eliminar compra */

    contadorCarrito--;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;


    let uni=myProduc[id].unidades;


    if(uni==1){
        myProduc[id].unidades=0;
        document.getElementById("tablerow"+id).remove();
        let array2=array.filter((item) => item !== id);
        console.log(array2);
        array=[];
        array2.forEach(element=>{
            array.push(element);
        })
        console.log(array);

        

    }else if(uni>1){
        myProduc[id].unidades--;
        document.getElementById("unidades"+id).innerHTML=myProduc[id].unidades;
        sumarSubTotal(id);    
    }
    restar(id);

}
/* COMPRAR*/

function comprar(id){/*es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) */
    contadorCarrito++;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;

    let uni=myProduc[id].unidades;


    if(uni==0){
        myProduc[id].unidades++;
        document.getElementById("listacompra").innerHTML+='<tr id="tablerow'+id+'"><td>'+myProduc[id].name+'</td><td>'+myProduc[id].precio+'$</td><td id="unidades'+id+'">'+myProduc[id].unidades+'</td><td id="subtotal'+id+'">'+subtotal+'$</td><td><button class="btnEliminar" onclick="NOcomprar('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar('+id+')">agregar</button></td></tr>';
        sumarSubTotal(id);
        array.push(id);
        console.log(array);

    }else{
        myProduc[id].unidades++;
        document.getElementById("unidades"+id).innerHTML=myProduc[id].unidades;
        sumarSubTotal(id);
        
    }
    
    sumar(id);
 
}

/*boton eliminar todo! */

function borrarTodo(){

    if(total!=0){

        contadorCarrito=0;
        document.getElementById("carritoCont").innerHTML=contadorCarrito;
    

        document.getElementById("listacompra").remove();
        document.getElementById("datosContacto").remove();

        document.getElementById("tabla").innerHTML+='<tbody id="listacompra"></tbody>';
        document.getElementById("totalid").innerHTML+='<div id="datosContacto"></div>';
        booleanTermonarCopra=false;

        array=[];
        array2=[];
        let i=0;
    
        myProduc.forEach(element=>{
            myProduc[i].unidades=0;
            i++;
        })
        i=0;
    
        total=0;
        document.getElementById("total").innerHTML=total;
    
       /* btnTerminarCompra.setAttribute('onClick',"compranull()");*/

    }else{
        alert("El carrito ya está vacio!");
    }

}



/*ULTIMA SECCION */
function TerminarComprar(){

    if(total!==0){

        switch(booleanTermonarCopra){

            case true:

                break;                
            case false:

                document.getElementById("datosContacto").innerHTML+='<input class="input" id="direccion" placeholder="Dirección de entrega"></input>';
                document.getElementById("datosContacto").innerHTML+='<input class="input" id="entrecalle" placeholder="Entre calles"></input>';
                document.getElementById("datosContacto").innerHTML+='<textArea class="input" id="detalles" placeholder="Descripción del lugar de entrega (Color de pared, Color de rejas ect)"></textArea>';
                document.getElementById("datosContacto").innerHTML+='<button id="btnregistrarDatos"onclick="enviarPedidos()" >Registrar Datos</button>';
        
                booleanTermonarCopra=true;

                break;
        }

       
    }else{
        alert("El carrito esta vacio!");
    }
    
    
}

function enviarPedidos(){  /*TIENE INCORPORADA LA FUNCTION "guardarDatos" */

    let address=document.getElementById("direccion").value;/* direccion */
    let between_streets=document.getElementById("entrecalle").value; /* entre calle */
    let description=document.getElementById("detalles").value; /* descripcion */
    

                if(address==""||between_streets==""||description==""){

                    alert("por favor ingrese los dato solicitados");

                }else{
                    
                    guardarDatos();

                }
    
}

function guardarDatos(){   /* GUARDA LOS DATO DE LAS DIFERENTES VARIABLES Y LOS COLOCA EN UNA URL */


    let stringProductos="";
    let stringTotal=saltolinea+"*Total:* *"+total+"*$";

    array.forEach(element=>{

        stringProductos+="-"+myProduc[element].unidades+" *"+myProduc[element].name+"* "+saltolinea;
        
    })

    whatsapp+="Compraste:"+saltolinea+saltolinea+stringProductos;
    whatsapp+=stringTotal;
    document.getElementById("datosContacto").innerHTML+='<a class="btnenviarPedido" href="'+whatsapp+'" target="_blank">Enviar Pedido</a>';

}

/*

let saltolinea="+%0A+";

https://api.whatsapp.com/send/?phone=5491164688926&text= 

(COPIAR AL HERRAMIETAS DEV)
https://forfrontend.tips/eliminar-elementos-de-un-array-en-javascript

(hacer un pull por consola)
git pull --tags origin gh-pages  

*/


