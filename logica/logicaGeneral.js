/* COMPRAR*/


/*boton eliminar todo! */

function borrarTodo(){

    
    if(total!=0){
        /*eliminamo los indicadores de "seleccionado" */
      
        [].forEach.call(document.querySelectorAll("TagSeleccionado"), function(TagSeleccionado){
            TagSeleccionado.parentNode.removeChild(TagSeleccionado);
        });

        contadorCarrito=0;
        document.getElementById("carritoCont").innerHTML=contadorCarrito;
        document.getElementById("carritoTotal").innerText=total+"$";
    

        document.getElementById("listacompra").remove();
        
        document.getElementById("tabla").innerHTML+='<tbody id="listacompra"></tbody>';
        booleanTerminarCompra=false;

        //vaciamos array de lista
        Factura0=[];
        Factura1=[];
        Factura2=[];
        Factura3=[];
        Factura4=[];
        Factura5=[];
        Factura6=[];
        array2=[];
   
        myAlmacen.forEach((element, index)=>{
            myAlmacen[index].unidades=0;
        })
        myVerduleria.forEach((element, index)=>{
            myVerduleria[index].unidades=0;
        })
        myLimpieza.forEach((element, index)=>{
            myLimpieza[index].unidades=0;
        })
        myLacteos.forEach((element, index)=>{
            myLacteos[index].unidades=0;
        })
        myBebidas.forEach((element, index)=>{
            myBebidas[index].unidades=0;
        })
        myCarniceria.forEach((element, index)=>{
            myCarniceria[index].unidades=0;
        })
        myOtros.forEach((element, index)=>{
            myOtros[index].unidades=0;
        })
       

        contadorP=0;//colocamos el contador de TIPO DE PRODUCTOS en cero
        
    
        total=0;
        document.getElementById("total").innerHTML=total;

        document.getElementById("carritoTotal").innerText=total+"$";
    
       /* btnTerminarCompra.setAttribute('onClick',"compranull()");*/
       //limpiamos los metdos de pagos y el vuelto
        vuelto=0;
        metodoPago="indefinido";//No establecido
        if(booleanEstado==true){
        document.getElementById("inmp").checked =false;
        document.getElementById("incash").checked =false;
        }

        

        //limpiamos los datosDireccion
        
        booleanPanelDatosDomicilio=false;

        //opacidad del btn CONTINUAR
        document.getElementById("btnContinuar").style.opacity="0.3";

        reseteardiv();//reseteamos los div "metodo de pago, div abono, entrega y direccion"
        document.getElementById("inputnameUsuario").value="";
        booleanEstado=false;
    }else{
        alert("El carrito ya está vacio!");
    }

}
//funcion que resetea los div de las compras
function reseteardiv(){
    document.getElementById("metodoPago").innerHTML="<h4>Metodo de Pago</h4>";
    document.getElementById("divabono").innerHTML="";
    document.getElementById("metodoEntrega").innerHTML="<h4>Metodos de Entrega</h4>";
    document.getElementById("datosDireccion").innerHTML="";
}

//funcion escuchador INPUT de nameComprador
function validarNameComprador(){
if(booleanEstado==false){

    if(document.getElementById("inputnameUsuario").value!==""){
        
        document.getElementById("metodoPago").innerHTML="<h3>Metodo de Pago</h3>";
        document.getElementById("metodoPago").innerHTML+='<input id="incash" name="metodo_pago" type="radio" value="Efectivo" onclick="PagoCash()">';
        document.getElementById("metodoPago").innerHTML+='<text onclick="PagoCash()">Efectivo</text>';

        document.getElementById("metodoPago").innerHTML+='<input id="inmp" name="metodo_pago" type="radio" value="Mercado Pago" onclick="PagoMP()">';
        document.getElementById("metodoPago").innerHTML+='<text onclick="PagoMP()">Mercado Pago</text>';

        booleanEstado=true;
    }

}else if(document.getElementById("inputnameUsuario").value==""){
            reseteardiv();
        booleanEstado=false;
    }
    
}
    


/*funcion de radio button */

function PagoMP(){

    nameComprador=document.getElementById("inputnameUsuario").value;
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;
    if(nameComprador!=""&total!=0){

        metodoPago="mp";
        document.getElementById("divabono").innerHTML='';
        document.getElementById("metodoEntrega").innerHTML='<h4>Metodos de Entrega</h4>';
        document.getElementById("inmp").checked =true;
        document.getElementById("incash").checked =false;
        booleanTerminarCompra=false;

        //colorear el boton "CONTINUAR"
        document.getElementById("btnContinuar").style.opacity="1";

    }else if(total==0){
        alert("No agregaste productos al carrito!");
    }else if(nameComprador==""){
        alert("falta que coloques tu nombre!");
    }
        
}

function PagoCash(){//input "abono"
    
    nameComprador=document.getElementById("inputnameUsuario").value;
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;
    if((nameComprador!="")&&(total!=0)){
        
        metodoPago="cash";
    document.getElementById("divabono").innerHTML='<text>Pago con: </text ><input class="abono" id="abono" onkeyup="abono()" type="number" value=0> </input><text> Vuelto :</text><input class="abono" disabled id="Mivuelto" value="'+vuelto+'$"></input>'
    document.getElementById("inmp").checked =false;
    document.getElementById("incash").checked =true;
    document.getElementById("metodoEntrega").innerHTML='<h4>Metodos de Entrega</h4>';
    booleanTerminarCompra=false;


        abono();
    

    }else if(total==0){
        alert("No agregaste productos al carrito!");
    }else if(nameComprador==""){
        alert("falta que coloques tu nombre!");
    }

}

function abono(){
    vuelto=document.getElementById("abono").value-total;
    document.getElementById("Mivuelto").value=vuelto+"$";
    if(vuelto>=0){
        document.getElementById("btnContinuar").style.opacity="1";
    }else{
        document.getElementById("btnContinuar").style.opacity="0.3";
    }
}



/*ULTIMA SECCION */
function Continuar(){

    nameComprador=document.getElementById("inputnameUsuario").value;//nombre del usuario
  

    if((total!==0)&(nameComprador!=="")&(metodoPago!=="indefinido")){

        if(metodoPago=="mp"){
            pintarContinuar();
        }else if((metodoPago=="cash")&(vuelto<=0)){

            alert("ingrese un valor valido para pagar");

        }else if((metodoPago=="cash")&(vuelto>=0)){
            pintarContinuar();
        }
        
        //colocamos la logica si elige MERCADO PAGO O EFECTIVO???

    }else if(total==0){
        alert("El carrito esta vacio!");
    }else if(nameComprador === ""){
        alert("Debe ingresar su nombre");
    }else if(metodoPago=="indefinido"){
        alert("No se eligio un metodo de pago");
    }else{
        alert("otro problema");
    }
    
}



function pintarContinuar(){
    switch(booleanTerminarCompra){

        case true:

            enviosContinuar();
                
            break;                
        case false:
            
            if(envios=true){

                document.getElementById("metodoEntrega").innerHTML='<h3>Metodos de Entrega</h3>'
                document.getElementById("metodoEntrega").innerHTML+='<div class="circuloCasa" id="idcirculoCasa" onclick="detalleEnvio()"><text class="texto">recibir en mi domicilio</text></div>';
                document.getElementById("metodoEntrega").innerHTML+='<div class="circuloLocal" id="idcirculoLocal" onclick="iralLocal()"><text class="texto">retirar en el local</text></div>';
                
                document.getElementById("btnContinuar").style.opacity="0.3";
            }else{
               //ACA COLOCAMOS SI envio=false
            }
            
           /* document.getElementById("metodoEntrega").innerHTML+='<button id="btnregistrarDatos"onclick="enviarPedidos()" >Registrar Datos</button>';*/
    
            booleanTerminarCompra=true;

            break;
    }
}

function enviosContinuar(){
    switch(booleanPanelDatosDomicilio){
        
        case true:
                //alert("tomamos las variables que se ingresen y las enviamos");
                console.log("booleanPanelDatosDomicilio="+booleanPanelDatosDomicilio);
                guardarDatosEnvio();
                
                //guardarDatos();

         //guardarDatosEnvio() tiene incluido GUARDAR DATOS() dentro IMPORTANTE!!!
            break;
        case false:
                //alert("No se envia a la casa, lo pasa a buscar");
                console.log("booleanPanelDatosDomicilio="+booleanPanelDatosDomicilio);
                guardarDatos();
            break;
    }
}

//funciones que suceden botones circulares ELEGIR ENVIO
function iralLocal(){
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;//hace referencia al panel de datos nada mas
    booleanEnvios=true;//declaro que NO hay datos de domicilio
    //pintamos el btn de color permanente
    document.getElementById("idcirculoLocal").className+=" activo";
    document.getElementById("idcirculoCasa").className="circuloCasa";
    document.getElementById("btnContinuar").style.opacity="1";
    //creamosun btn para terminar pedido

}

function detalleEnvio(){
    
    if(booleanPanelDatosDomicilio==false){
    
        document.getElementById("idcirculoCasa").className+=" activo";
        document.getElementById("idcirculoLocal").className="circuloLocal";
        document.getElementById("btnContinuar").style.opacity="1";

    document.getElementById("datosDireccion").innerHTML+='<h3>Datos de Entrega</h3>';
    document.getElementById("datosDireccion").innerHTML+='<input class="input" id="direccion" placeholder="Dirección de entrega" value="calle falsa 123"></input>';
    document.getElementById("datosDireccion").innerHTML+='<input class="input" id="entrecalles" placeholder="Entre calles" value="ruta 210"></input>';
    document.getElementById("datosDireccion").innerHTML+='<textArea class="input" id="detalles" placeholder="Descripción del lugar de entrega (Color de pared, Color de rejas ect)" >ss</textArea>';
    document.getElementById("datosDireccion").innerHTML+='<hr>';

           booleanEnvios=true;//declaro que hay datos de domicilio
           booleanPanelDatosDomicilio=true;
    }else{

        
    }
}

//terminamos el pedido
//terminamos el pedido
//terminamos el pedido



/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 


function guardarDatos(){   /* GUARDA LOS DATO DE LAS DIFERENTES VARIABLES Y LOS COLOCA EN UNA URL */
  
//DATOS FACTURA
StringDatosFacturas="";//vaciamos el string por las dudas

    //obtenemos el CONTADOR (cantidad de TIPOS de productos comprados )
    StringDatosFacturas="?taco="+contadorP;
    
    //obtenemos  nombre la dirección metodo de pago
    StringDatosFacturas+="&nam="+nameComprador;

    //HAY ENVIO A DOMICILIO??
    if((envios==true)&(booleanEnvios==true)){
        StringDatosFacturas+="&send="+true;
        StringDatosFacturas+="&dir="+address;

    }else{
        StringDatosFacturas+="&send="+false;
    }
    if(metodoPago=="mp"){
        StringDatosFacturas+="&mp=true";
    }else if(metodoPago=="cash"){
        StringDatosFacturas+="&mp=false";
    }
      
    //VAMOS A RECORRER LAS FACTURAS y agregamos los valores a StringDatosFacturas
        
    recorrerFacturas(); //tenemos a StringDatosFacturas (SUPER CARGADOS)
    
    //obtenemos el tipo de prod, la cantidad y el id
    //debemos usar un forech?

//DATOS WHATSAPP
    
    let stringProductos="";
    let stringTotal=saltolinea+"*Total:* *"+total+"*$";

    //Factura: guarda los id de los productos (el tema es separarlo por seccion)
    //recorrerFacturasWhatsapp();

    linkFactura+=StringDatosFacturas;
    linkFacturaGitHub+=StringDatosFacturas;

    whatsapp+=linkFactura;
    //whatsapp+=saltolinea+saltolinea+stringProductos;
    whatsapp+=stringTotal;//String total tiene el salto de linea
    document.getElementById("totalid").innerHTML+='<a class="btnenviarPedido" href="'+whatsapp+'" target="_blank">Enviar Pedido LOCAL</a>';

    whatsapp+=linkFacturaGitHub;
    document.getElementById("totalid").innerHTML+='<a class="btnenviarPedido" href="'+whatsapp+'" target="_blank">Enviar Pedido GIT HUB</a>';
}

function guardarDatosEnvio(){  /*TIENE INCORPORADA LA FUNCTION "guardarDatos" */
// verifica que haya valores en los input 
address=document.getElementById("direccion").value;/* direccion */
between_streets=document.getElementById("entrecalles").value; /* entre calle */
description=document.getElementById("detalles").value; /* descripcion */
   
    

                if(address==""||between_streets==""||description==""){

                    alert("Para que podamos entregarle su compra en su domicilio necesitamos que complete los datos requeridos");

                }else{
                    
                    //concatenamos los valores de los input a la URL

                    guardarDatos();

                }
    
}

function recorrerFacturasWhatsapp(){
    Factura0.forEach((index)=>{

        stringProductos+="-"+myAlmacen[Factura0[index]].unidades+" *"+myAlmacen[Factura0[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura0);
    Factura1.forEach((index)=>{

        stringProductos+="-"+myVerduleria[Factura1[index]].unidades+" *"+myVerduleria[Factura1[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura1);
    Factura2.forEach((index)=>{

        stringProductos+="-"+myLimpieza[Factura2[index]].unidades+" *"+myLimpieza[Factura2[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura2);
    Factura3.forEach((index)=>{

        stringProductos+="-"+myLacteos[Factura3[index]].unidades+" *"+myLacteos[Factura3[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura3);
    Factura4.forEach((index)=>{

        stringProductos+="-"+myBebidas[Factura4[index]].unidades+" *"+myBebidas[Factura4[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura4);
    Factura5.forEach((index)=>{

        stringProductos+="-"+myCarniceria[Factura5[index]].unidades+" *"+myCarniceria[Factura5[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura5);
    Factura6.forEach((index)=>{

        stringProductos+="-"+myOtros[Factura6[index]].unidades+" *"+myOtros[Factura6[index]].name+"* "+saltolinea;
        
    })
    console.table(Factura6);



}


function recorrerFacturas(){

    Factura0.forEach((index)=>{
        StringDatosFacturas+="&---clp=0";
        StringDatosFacturas+="&can="+myAlmacen[Factura0[index]].unidades;
        StringDatosFacturas+="&id="+Factura0[index];
    })

    Factura1.forEach((index)=>{
        StringDatosFacturas+="&---clp=1";
        StringDatosFacturas+="&can="+myVerduleria[Factura1[index]].unidades;
        StringDatosFacturas+="&id="+Factura1[index];
    })

    Factura2.forEach((index)=>{
        StringDatosFacturas+="&---clp=2";
        StringDatosFacturas+="&can="+myLimpieza[Factura2[index]].unidades;
        StringDatosFacturas+="&id="+Factura2[index];
    })

    Factura3.forEach((index)=>{
        StringDatosFacturas+="&---clp=3";
        StringDatosFacturas+="&can="+myLacteos[Factura3[index]].unidades;
        StringDatosFacturas+="&id="+Factura3[index];
    })

    Factura4.forEach((index)=>{
        StringDatosFacturas+="&---clp=4";
        StringDatosFacturas+="&can="+myBebidas[Factura4[index]].unidades;
        StringDatosFacturas+="&id="+Factura4[index];
    })

    Factura5.forEach((index)=>{
        StringDatosFacturas+="&---clp=5";
        StringDatosFacturas+="&can="+myCarniceria[Factura5[index]].unidades;
        StringDatosFacturas+="&id="+Factura5[index];
    })

    Factura6.forEach((index)=>{
        StringDatosFacturas+="&---clp=6";
        StringDatosFacturas+="&can="+myOtros[Factura6[index]].unidades;
        StringDatosFacturas+="&id="+Factura6[index];
    })
}


/*HOVER EN containerPanel */
/*HOVER EN containerPanel */
/*HOVER EN containerPanel */
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


