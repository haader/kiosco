
/*VARIABLES!!! */
let booleanCarrrito=false;
let booleanListaCompra=false;

let total=0;/*sumatoria de todos los precios*/ 
let contador=0;/*cantidad de veces que aparece el producto en la lista */

/*unidades del producto*/
let subtotal=0; /*contador * precioUnitario */

//carrito
let contadorCarrito=0;//el valor del carrito

//Compralista
let Factura=[];

//whatsapp
let numero="1155179365";
let whatsapp="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
let texto="";
let saltolinea="+%0A+"; /*se agrega al texto por whatsapp */

let booleanTerminarCompra=false;
let seccion=0;