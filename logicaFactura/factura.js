
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results === null ? "no se encontro nada" : decodeURIComponent(results[1].replace(/\+/g, " "));
        
        }
        
        var nombre= getParameterByName('name');//comprador
        var address= getParameterByName('dir');//direccion
        var metodoPago=getParameterByName('mp');//metodo de pago (BOOLEANO)
        var envio=getParameterByName('send');//si se realiza envio(ligado a dirección)(BOOLEANO)

        var tamañoCompra=getParameterByName('taco');//tamaño de la compra determina el tamaño del bucle?
        var tipoProduc=getParameterByName('tip');//tipo de producto (ALMACEN VERDULERIA LACTEOS etc)
        var cantidad = getParameterByName('can');//cantidad de unidades que se venden
        var idProducto= getParameterByName('ip');//el id que determina el tipo de producto que se vende
        

        var abona= getParameterByName('ab');//dinero que abona en efectivo
    
       
//modificamos el doom
//1-datos del comprador (incluye meto de pago y envio)

        if(envio==true){//la compra se envia al domicilio
            
            if(metodoPago=true){//abona por mercado pago
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Dirección: '+address+'</h4><h4>Metodo de Pago: Mercado Pago</h4>';
            }else{//abona en efectivo
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Dirección: '+address+'</h4><h4>Metodo de Pago: Efectivo</h4>';
            }
            
        }else{//la compra se retira en el LOCAL
            if(metodoPago=true){//abona por mercado pago
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Retira la compra en el local</h4><h4>Metodo de Pago: Mercado Pago</h4>';
            }else{//abona en efectivo
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Dirección: '+address+'</h4><h4>Metodo de Pago: Efectivo</h4>';
            }
        }
//dependiendo el tipo de producto utilizamos el id proporcionado y pintamos
switch(tipoProduc){
    case 0:
        document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myAlmacen[idProducto].name+'</td><td>'+myAlmacen[idProducto].precio+'</td><td>'+cantidad+'$</td><td>'+(myAlmacen[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
        break;
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
        
}

function ok(contador){
    document.getElementById("row"+contador).style.background="red";

}
//2-lista de productos comprados 
        /*declaramos funciones que ayudan a obtener: 

                                    Productos
                                    Precio Unitario
                                    Sub-total
                                    Estado//son btn que cambian el color 
                                    
        los datos que se traen del la URL
                                         tamañoCompra
lo que debo pitar directamente=>=>=>=> cantidad (la canidad de unidades vendidas)
                                         idProducto
                                         tipoProducto
        */                                          

//3-total (incluye cuanto paga y vuelto)

        
