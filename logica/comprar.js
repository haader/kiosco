//ALMACEN 0
function comprar0(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myAlmacen[id].unidades;//no problem
    
    
    if(uni==0){
        myAlmacen[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myAlmacen[id].name+'</td><td>'+myAlmacen[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myAlmacen[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar0('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar0('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myAlmacen[id].name+'</td><td>'+myAlmacen[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myAlmacen[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar0('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar0('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal0(id);
        Factura0.push(id);
        
    

    }else{
        myAlmacen[id].unidades++;
        document.getElementById("unidades0"+id).innerHTML=myAlmacen[id].unidades;
        sumarSubTotal0(id);
        
    }
    
   sumarTotal0(id);
    
    }

//Verduleria 1
    function comprar1(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
        //el problema:el btn agregar tiene un id!
        
        
        let uni=myVerduleria[id].unidades;//no problem
        
        
        if(uni==0){
            myVerduleria[id].unidades++;
    
            //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
                //comprobamos el estado de BOOLEANLISTACOMPRA 
                //esto es para ir cambiando los colores de las row
            if(booleanListaCompra==false){
                document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myVerduleria[id].name+'</td><td>'+myVerduleria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myVerduleria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar1('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar1('+id+')">Agregar</button></td></tr>';
                booleanListaCompra=true;
            }else{
                document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myVerduleria[id].name+'</td><td>'+myVerduleria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myVerduleria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar1('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar1('+id+')">Agregar</button></td></tr>';
                booleanListaCompra=false;
            }
            
            sumarSubTotal1(id);
            Factura1.push(id);
            
        
    
        }else{
            myVerduleria[id].unidades++;
            document.getElementById("unidades1"+id).innerHTML=myVerduleria[id].unidades;
            sumarSubTotal1(id);
            
        }
        
       sumarTotal1(id);
        
        }
    
//Limpieza 2
function comprar2(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myLimpieza[id].unidades;//no problem
    
    
    if(uni==0){
        myLimpieza[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLimpieza[id].name+'</td><td>'+myLimpieza[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLimpieza[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar2('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar2('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLimpieza[id].name+'</td><td>'+myLimpieza[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLimpieza[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar2('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar2('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal2(id);
        Factura2.push(id);
        
    

    }else{
        myLimpieza[id].unidades++;
        document.getElementById("unidades2"+id).innerHTML=myLimpieza[id].unidades;
        sumarSubTotal2(id);
        
    }
    
   sumarTotal2(id);
    
    }

//LACTEOS 3
function comprar3(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myLacteos[id].unidades;//no problem
    
    
    if(uni==0){
        myLacteos[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLacteos[id].name+'</td><td>'+myLacteos[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLacteos[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar3('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar3('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLacteos[id].name+'</td><td>'+myLacteos[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLacteos[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar3('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar3('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal3(id);
        Factura3.push(id);
        
    

    }else{
        myLacteos[id].unidades++;
        document.getElementById("unidades3"+id).innerHTML=myLacteos[id].unidades;
        sumarSubTotal3(id);
        
    }
    
   sumarTotal3(id);
    
    }
    
//BEBIDAS 4
function comprar4(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myBebidas[id].unidades;//no problem
    
    
    if(uni==0){
        myBebidas[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myBebidas[id].name+'</td><td>'+myBebidas[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myBebidas[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar4('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar4('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myBebidas[id].name+'</td><td>'+myBebidas[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myBebidas[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar4('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar4('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal4(id);
        Factura4.push(id);
        
    

    }else{
        myBebidas[id].unidades++;
        document.getElementById("unidades4"+id).innerHTML=myBebidas[id].unidades;
        sumarSubTotal4(id);
        
    }
    
   sumarTotal4(id);
    
    }

//CARNICERIA 5
function comprar5(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myCarniceria[id].unidades;//no problem
    
    
    if(uni==0){
        myCarniceria[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myCarniceria[id].name+'</td><td>'+myCarniceria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myCarniceria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar5('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar5('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myCarniceria[id].name+'</td><td>'+myCarniceria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myCarniceria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar5('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar5('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal5(id);
        Factura5.push(id);
        
    

    }else{
        myCarniceria[id].unidades++;
        document.getElementById("unidades5"+id).innerHTML=myCarniceria[id].unidades;
        sumarSubTotal5(id);
        
    }
    
   sumarTotal5(id);
    
    }

//OTROS 6
function comprar6(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myOtros[id].unidades;//no problem
    
    
    if(uni==0){
        myOtros[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myOtros[id].name+'</td><td>'+myOtros[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myOtros[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar6('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar6('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myOtros[id].name+'</td><td>'+myOtros[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myOtros[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="NOcomprar6('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar6('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        sumarSubTotal6(id);
        Factura6.push(id);
        
    

    }else{
        myOtros[id].unidades++;
        document.getElementById("unidades6"+id).innerHTML=myOtros[id].unidades;
        sumarSubTotal6(id);
        
    }
    
   sumarTotal6(id);
    
    }


//FIN



