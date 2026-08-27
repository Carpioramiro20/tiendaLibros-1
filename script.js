alert("JavaScript está funcionando");
const libros = [

    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        precio: 15000,
        imagen: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg"
    },

    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        precio: 18000,
        imagen: "https://covers.openlibrary.org/b/isbn/9788491050291-L.jpg"
    },

    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        precio: 20000,
        imagen: "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg"
    }

];


const contenedor = document.getElementById("libros");


libros.forEach(libro => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("libro");

    tarjeta.innerHTML = `

        <img
            src="${libro.imagen}"
            alt="${libro.titulo}"
        >

        <div class="libro-info">

            <h3>
                ${libro.titulo}
            </h3>

            <p class="autor">
                ${libro.autor}
            </p>

            <p class="precio">
                $${libro.precio}
            </p>

            <button class="btn-comprar">
                Comprar
            </button>

        </div>

    `;

    contenedor.appendChild(tarjeta);

});
