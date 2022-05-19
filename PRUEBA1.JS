class Catalogo{
  constructor(id, producto, precio) {
      this.id = id
      this.producto = producto
      this.precio = precio
  }
};
const listaDePrecios = [

new Catalogo (1, "Auriculares", 8000),
new Catalogo (2, "Gabinetes", 10000),
new Catalogo (3, "Discos duros", 5000),
new Catalogo (4, "Procesadores", 30000),
new Catalogo (5, "Placas graficas", 60000),
new Catalogo (6, "Teclados", 7000),
new Catalogo (7, "Placas madre", 9000),
new Catalogo (8, "Monitores", 25000),
new Catalogo (9, "Mouses", 3000),
new Catalogo (10, "Memorias RAM", 4000),
new Catalogo (11, "Cable HDMI", 400),
new Catalogo (12, "Coollers", 1000),
new Catalogo (13, "Mouse pads", 2200),
new Catalogo (14, "Antenas WIFI", 400),
new Catalogo (15, "Fuente de potencia", 5300),
new Catalogo (16, "Parlantes", 3800),
new Catalogo (17, "Pasta termica", 200),
new Catalogo (18, "Sillas gamer", 35000),
new Catalogo (19, "Micofonos", 12000),
new Catalogo (20, "Cable VGA", 250)
];

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

dibujarCarrito();
dibujarCarritoSacar();
dibujarProductos();


// pensar
  


function dibujarProductos() {
  listaDePrecios.forEach(producto => {
    
    let listaDeProductos = document.createElement("div");
    listaDeProductos.innerHTML = producto.producto + " a " + producto.precio ;
    
    let botonAgregar = document.createElement("button");
    botonAgregar.innerHTML = " + " 
    botonAgregar.addEventListener("click", function() {
      agregarCarrito(producto)
      dibujarCarrito()
    })
    listaDeProductos.append(botonAgregar);
    
    let botonQuitar = document.createElement("button");
    botonQuitar.innerHTML = " - " 
    botonQuitar.addEventListener("click", function() {
      quitarCarrito(producto);
      dibujarCarritoSacar();
      
    })
    listaDeProductos.append(botonQuitar);
    
    document.body.append(listaDeProductos);
  })
}

function precioCarrito(){
  let precioTotal = 0
  for(idProducto of carrito){
    
    let producto = listaDePrecios.find(producto => producto.id === idProducto);
    precioTotal += producto.precio
    
  }
  console.log(precioTotal);
  let mostrarCarrito = document.getElementById("precioCarrito");
  mostrarCarrito.innerText = "Precio a pagar :" + precioTotal
  document.body.append(mostrarCarrito);
}

function quitarCarrito(producto){
  carrito.pop(producto.id);
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}

function agregarCarrito(producto){
  carrito.push(producto.id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


function dibujarCarrito(){
  
  precioCarrito();
  
  let contenidoCarrito = document.getElementById("contenidoCarrito");
    
    contenidoCarrito.innerHTML = "";

for(idProducto of carrito){
    
    let producto = listaDePrecios.find(producto => producto.id === idProducto);

    let productito = document.createElement("h5");
    productito.innerHTML = producto.producto + " a " + producto.precio
    
    contenidoCarrito.append(productito);
  
}

}

function dibujarCarritoSacar(){
  
  precioCarrito();
  
  let contenidoCarrito = document.getElementById("contenidoCarrito");
    
    contenidoCarrito.innerHTML = "";

for(idProducto of carrito){
    
    let producto = listaDePrecios.find(producto => producto.id === idProducto);

    let productito = document.createElement("h5");
    productito.innerHTML = producto.producto + " a " + producto.precio
    
    contenidoCarrito.append(productito);
}
}






    