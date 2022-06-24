function EliminarProducto([id]){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=[id].unidades;//unidades 

    if(uni==1){
        [id].unidades=0;
/*PROBLEMA>>>>*/  document.getElementById("tablerow"+id).remove();//eliminamos el ROW de la "lista compra"
        
        let array2=Factura.filter((item) => item !== id);
        console.log(array2);

        array2.forEach(element=>{
            Factura.push(element);
        })
        console.log(array);

    }else if(uni>1){
        [id].unidades--;
        document.getElementById("unidades"+id).innerHTML=[id].unidades;
        sumarSubTotal(id);    
    }
    restar(id);

}