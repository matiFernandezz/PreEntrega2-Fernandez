

//Defino un Array de Productos 
const productos = [
    {id:1, nombre:"AMD Ryzen 5 5600", componente:"Procesador", precio:201530},
    {id:2, nombre:"Intel Core i7 12700F", componente:"Procesador", precio:432999},
    {id:3, nombre:"Adata DDR4",componente:"Memoria RAM", precio:44550},
    {id:4, nombre:"GeiL DDR4",componente:"Memoria RAM", precio: 41500},
    {id:5, nombre:"SSD Kingston", componente:"Disco Solido", precio:30500},
    {id:6, nombre:"Aerocool", componente:"Fuente", precio:72900},
    {id:7, nombre:"Kolink Inspire", componente:"Gabinete", precio:57950},
    {id:8, nombre:"Samsung 27",componente:"Monitor", precio:219900},
]
//Defino la clase Carrito 
class Carrito {
    constructor(){
        this.productos = [];
        this.descuento = 10;
        this.minDescuento = 3;
        this.total = 0;
    }
    
    agregarProducto(id){
        let producto = productos.find (prod => prod.id===id);
        
        if (producto){
            this.productos.push(producto);
            console.log("Agregaste el Producto #"+id+" al Carrito");
        }else{
            console.log("No se encontro el producto con #"+id+"!");
        }
    }
  
    calcularTotalProductos(){
        return this.productos.length;
    }
    aplicarDescuento(){
        if(this.calcularTotalProductos()>= this.minDescuento){
            return Math.round((this.calcularTotalPagar()*this.descuento)/100);
        }else{
            return 0;
        }
    }
    calcularTotalPagar(){
        return this.productos.reduce((acumulador,item)=> acumulador += item.precio,0);
    }
    listarCarrrito(){
        let salida = "";
    
        this.productos.forEach(item=> {
            salida += item.id + " - "+item.nombre + " - "+ "Componente: "+item.componente+ " - $"+item.precio + "\n"
        })
        return salida;
    }


}
function listarProductos(){
    let salida = "";

    productos.forEach(item=> {
        salida += item.id + " - "+item.nombre + " - "+ "Componente: "+item.componente+ " - $"+item.precio + "\n"
    })
    return salida;
}
//Login
//Usuario ejemplo 
//Fijo un usuario único a modo de ejemplo 
let nombreUsuario = "tutorCoderhouse";
let contraseñaUsuario = "1234";
let ingreso = false;

//Ingreso
let usuario = prompt("Ingresa tu nombre de usuario");
if (usuario == nombreUsuario){
    for(let i=2; i>=0; i--){
        let contraseña = prompt("Ingresa tu contraseña. Tenes "+ (i+1)+" intentos.");
        if (contraseña == contraseñaUsuario){
            alert("Ingreso Exitoso")
            ingreso = true;
            break
        }else{
            alert("Error. Te quedan "+i+" intentos.")
        }
    }
}else{
    alert("Error, usuario no registrado.")
}

//Ejecuto mi programa
const carrito = new Carrito();
if(ingreso) {
    let opcionSeleccionada = 8;
while(opcionSeleccionada !=0){
    
    opcionSeleccionada = parseInt(prompt("Seleccione el producto que desea agregar al Carrito:"+"\n"+ "Seleccione 0 si desea salir\n\n"+listarProductos()));
    if(opcionSeleccionada == 0){
        break;
    }
    carrito.agregarProducto(opcionSeleccionada);
}


let detalle = "Detalle: \n\n" + carrito.listarCarrrito();
let salidaSubTotal = "Subtotal: $"+ carrito.calcularTotalPagar();
let descuento = "Descuento: $" +carrito.aplicarDescuento();
let montoFinal = "Total: $" +Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento()); 

alert(detalle + "\n"+ "--------------------------------------------------------------------"+"\n"+salidaSubTotal+ "\n" + descuento + "\n" + montoFinal + "\n"+ "Muchas gracias por su compra!!");
}