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
// MOSTRAR LIBROS
// ================================

const contenedorLibros = document.getElementById("libros");

function mostrarLibros() {

    contenedorLibros.innerHTML = "";

    libros.forEach((libro, indice) => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("libro");

        tarjeta.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">

            <h3>${libro.titulo}</h3>

            <p>${libro.autor}</p>

            <strong>$${libro.precio.toLocaleString("es-AR")}</strong>

            <button onclick="agregarAlCarrito(${indice})">
                Agregar al carrito
            </button>
        `;

        contenedorLibros.appendChild(tarjeta);
    });
}


// ================================
// CARRITO
// ================================

let carrito = [];

function agregarAlCarrito(indice) {

    carrito.push(libros[indice]);

    alert(
        `"${libros[indice].titulo}" fue agregado al carrito.`
    );

    console.log("Carrito:", carrito);
}


// ================================
// BOTÓN VER LIBROS
// ================================

const botonVerLibros = document.querySelector(".hero button");

botonVerLibros.addEventListener("click", function() {

    document.querySelector(".catalogo").scrollIntoView({
        behavior: "smooth"
    });

});


// ================================
// INICIAR PÁGINA
// ================================

mostrarLibros();
