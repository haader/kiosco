/* COMPRAR*/


/*boton eliminar todo! */

function borrarTodo(){

    if(total!=0){
        /*eliminamo los indicadores de "seleccionado" */
      
        [].forEach.call(document.querySelectorAll(".TagSeleccionado"), function(TagSeleccionado){
            TagSeleccionado.parentNode.removeChild(TagSeleccionado);
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

    //array: guarda los id de los productos (el tema es separarlo por seccion)
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


