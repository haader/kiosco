
        function sumarTotal([id]){//pasamos un objeto
            total+=[id].precio;
            console.log("total sumar="+total);
            document.getElementById("total").innerHTML=total;//pintamos el valor del total
            document.getElementById("carritoTotal").innerText=total+"$";//pintamos el valor del total del carrito
        }

        function restarTotal([id]){//pasamos un objeto
            total-=[id].precio;
            console.log("total resta="+total);
            document.getElementById("total").innerHTML=total;//pintamos el valor del total
            document.getElementById("carritoTotal").innerText=total+"$";//pintamos el valor del total del carrito
        }