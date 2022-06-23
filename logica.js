
/*VARIABLES!!! */
let booleanCarrrito=false;
let booleanListaCompra=false;

let total=0;/*sumatoria de todos los precios*/ 
let contador=0;/*cantidad de veces que aparece el producto en la lista */

/*unidades del producto*/
let subtotal=0; /*contador * precioUnitario */

let contadorCarrito=0;
let numero="1155179365";
let whatsapp="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
let texto="";
let array=[];
let saltolinea="+%0A+"; /*se agrega al texto por whatsapp */

let booleanTerminarCompra=false;




function sumar(id){
    total+=myProduc[id].precio;
    document.getElementById("total").innerHTML=total;

    document.getElementById("carritoTotal").innerText=total+"$";

    

}

function restar(id){ 

            total-=myProduc[id].precio;
            document.getElementById("total").innerHTML=total;

            document.getElementById("carritoTotal").innerText=total+"$";
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
    buyanimate(id);

    document.getElementById("carritoCont").innerHTML=contadorCarrito;

    let uni=myProduc[id].unidades;


    if(uni==0){
        myProduc[id].unidades++;
        /*CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" */
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+id+'"><td>'+myProduc[id].name+'</td><td>'+myProduc[id].precio+'$</td><td id="unidades'+id+'">'+myProduc[id].unidades+'</td><td id="subtotal'+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+id+'"><td>'+myProduc[id].name+'</td><td>'+myProduc[id].precio+'$</td><td id="unidades'+id+'">'+myProduc[id].unidades+'</td><td id="subtotal'+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
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
        /*eliminamo los indicadores de "seleccionado" */
      
        [].forEach.call(document.querySelectorAll(".buyanimate"), function(buyanimate){
            buyanimate.parentNode.removeChild(buyanimate);
        });

        contadorCarrito=0;
        document.getElementById("carritoCont").innerHTML=contadorCarrito;
        document.getElementById("carritoTotal").innerText=total+"$";
    

        document.getElementById("listacompra").remove();
        document.getElementById("datosContacto").remove();

        document.getElementById("tabla").innerHTML+='<tbody id="listacompra"></tbody>';
        document.getElementById("totalid").innerHTML+='<div id="datosContacto"></div>';
        booleanTerminarCompra=false;

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

        document.getElementById("carritoTotal").innerText=total+"$";
    
       /* btnTerminarCompra.setAttribute('onClick',"compranull()");*/

    }else{
        alert("El carrito ya está vacio!");
    }

}



/*ULTIMA SECCION */
function TerminarComprar(){

    if(total!==0){

        switch(booleanTerminarCompra){

            case true:

                break;                
            case false:

                document.getElementById("datosContacto").innerHTML+='<input class="input" id="direccion" placeholder="Dirección de entrega"></input>';
                document.getElementById("datosContacto").innerHTML+='<input class="input" id="entrecalle" placeholder="Entre calles"></input>';
                document.getElementById("datosContacto").innerHTML+='<textArea class="input" id="detalles" placeholder="Descripción del lugar de entrega (Color de pared, Color de rejas ect)"></textArea>';
                document.getElementById("datosContacto").innerHTML+='<button id="btnregistrarDatos"onclick="enviarPedidos()" >Registrar Datos</button>';
        
                booleanTerminarCompra=true;

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

/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 


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
/*HOVER EN containerPanel */
                        let padre=document.getElementById("containerPanel");
                        let child2=document.getElementById("containerLista");

                        function entra(){

                            padre.style="transform: translateX(0rem);"
                            padre.style.opacity=1;
                            child2.style.opacity=1;
                            child2.style.visibility="visible";
                            child2.style.marginLeft="0.2rem";

                            booleanCarrrito=true;
                            
                        }

                        function sale()
                        {
                            
                            padre.style="transform: translateX(90%);"
                            child2.style.opacity=0.5;
                            child2.style.marginLeft="0.5rem";
                            booleanCarrrito=false;
                        }
                        /*
                        child2.addEventListener("mouseout",sale);
                        */
                        



                        function clickCarrito()
                        {
                            switch(booleanCarrrito){
                                
                                case false:
                                            entra();

                                
                                    break;
                                
                                case true:
                                             sale();

                 
                                    break;
                            }
                            
                        }

                       

function buyanimate(id){

    try{
        document.getElementById("buyanimate"+id).remove();
    }catch{

    }
    document.getElementById(id).innerHTML+='<span class="buyanimate" id="buyanimate'+id+'">Seleccionado</span>';
    
};

/*

let saltolinea="+%0A+";

https://api.whatsapp.com/send/?phone=5491164688926&text= 

(COPIAR AL HERRAMIETAS DEV)
https://forfrontend.tips/eliminar-elementos-de-un-array-en-javascript

(hacer un pull por consola)
git pull --tags origin gh-pages  






git branch -m master gh-pages
git fetch origin
git branch -u origin/gh-pages gh-pages
git remote set-head origin -a
*/


