// ================================
// CATÁLOGO DE LIBROS
// ================================

const libros = [
{
titulo: "El Principito",
autor: "Antoine de Saint-Exupéry",
precio: 8500,
imagen: "https://covers.openlibrary.org/b/isbn/9789878000110-L.jpg"
},
{
titulo: "1984",
autor: "George Orwell",
precio: 9500,
imagen: "https://covers.openlibrary.org/b/isbn/9788499890944-L.jpg"
},
{
titulo: "Cien años de soledad",
autor: "Gabriel García Márquez",
precio: 12000,
imagen: "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg"
},
{
titulo: "Don Quijote de la Mancha",
autor: "Miguel de Cervantes",
precio: 11000,
imagen: "https://covers.openlibrary.org/b/isbn/9788420412146-L.jpg"
}
];

// ================================
// CARRITO
// ================================

let carrito = [];

// ================================
// MOSTRAR LIBROS
// ================================

const contenedorLibros = document.getElementById("libros");

function mostrarLibros() {

```
contenedorLibros.innerHTML = "";

libros.forEach((libro, indice) => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("libro");

    tarjeta.innerHTML = `

        <img src="${libro.imagen}" alt="${libro.titulo}">

        <h3>${libro.titulo}</h3>

        <p>${libro.autor}</p>

        <strong>
            $${libro.precio.toLocaleString("es-AR")}
        </strong>

        <button onclick="agregarAlCarrito(${indice})">
            Agregar al carrito
        </button>

    `;

    contenedorLibros.appendChild(tarjeta);
});
```

}

// ================================
// AGREGAR AL CARRITO
// ================================

function agregarAlCarrito(indice) {

```
const libroExistente = carrito.find(
    libro => libro.titulo === libros[indice].titulo
);

if (libroExistente) {

    libroExistente.cantidad++;

} else {

    carrito.push({
        ...libros[indice],
        cantidad: 1
    });

}

mostrarCarrito();
```

}

// ================================
// MOSTRAR CARRITO
// ================================

function mostrarCarrito() {

```
const contenidoCarrito =
    document.getElementById("contenidoCarrito");

const carritoVacio =
    document.getElementById("carritoVacio");

const contador =
    document.getElementById("contadorCarrito");

const totalCarrito =
    document.getElementById("totalCarrito");


// Cantidad total de libros

const cantidadTotal = carrito.reduce(
    (total, libro) => total + libro.cantidad,
    0
);

contador.textContent = cantidadTotal;


// Si está vacío

if (carrito.length === 0) {

    contenidoCarrito.innerHTML = `
        <p id="carritoVacio">
            Tu carrito está vacío.
        </p>
    `;

    totalCarrito.textContent = "0";

    return;
}


// Mostrar productos

contenidoCarrito.innerHTML = "";


carrito.forEach((libro, indice) => {

    const producto = document.createElement("div");

    producto.classList.add("producto-carrito");

    producto.innerHTML = `

        <div>

            <h3>${libro.titulo}</h3>

            <p>
                $${libro.precio.toLocaleString("es-AR")}
            </p>

        </div>


        <div class="controles">

            <button onclick="disminuirCantidad(${indice})">
                −
            </button>

            <span>
                ${libro.cantidad}
            </span>

            <button onclick="aumentarCantidad(${indice})">
                +
            </button>

            <button onclick="eliminarDelCarrito(${indice})">
                🗑️
            </button>

        </div>

    `;

    contenidoCarrito.appendChild(producto);

});


// Calcular total

const total = carrito.reduce(
    (suma, libro) =>
        suma + libro.precio * libro.cantidad,
    0
);

totalCarrito.textContent =
    total.toLocaleString("es-AR");
```

}

// ================================
// AUMENTAR CANTIDAD
// ================================

function aumentarCantidad(indice) {

```
carrito[indice].cantidad++;

mostrarCarrito();
```

}

// ================================
// DISMINUIR CANTIDAD
// ================================

function disminuirCantidad(indice) {

```
carrito[indice].cantidad--;

if (carrito[indice].cantidad <= 0) {

    carrito.splice(indice, 1);

}

mostrarCarrito();
```

}

// ================================
// ELIMINAR PRODUCTO
// ================================

function eliminarDelCarrito(indice) {

```
carrito.splice(indice, 1);

mostrarCarrito();
```

}

// ================================
// BOTÓN VER LIBROS
// ================================

const botonVerLibros =
document.getElementById("botonVerLibros");

botonVerLibros.addEventListener("click", function() {

```
document.getElementById("catalogo").scrollIntoView({
    behavior: "smooth"
});
```

});

// ================================
// FINALIZAR COMPRA
// ================================

const botonComprar =
document.getElementById("botonComprar");

botonComprar.addEventListener("click", function() {

```
if (carrito.length === 0) {

    alert("Tu carrito está vacío.");

    return;
}

alert(
    "¡Gracias por tu compra! Esta función será conectada al sistema de pago."
);
```

});

// ================================
// INICIAR
// ================================

mostrarLibros();

mostrarCarrito();
