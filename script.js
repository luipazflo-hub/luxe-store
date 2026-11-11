
// CONTADOR DE PRODUCTOS
let cantidadProductos = 0;

// ELEMENTOS HTML
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

// FUNCIÓN PARA MOSTRAR MENSAJES
function mostrarMensaje(texto) {

    mensaje.textContent = texto;

    mensaje.classList.add("mostrar");

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 2500);

}

// AGREGAR PRODUCTOS A LA BOLSA
function agregar(nombre, precio) {

    cantidadProductos++;

    contador.textContent = cantidadProductos;

    mostrarMensaje(nombre + " agregado a tu bolsa.");

}

// FILTRAR PRODUCTOS
function filtrar(categoria, boton) {

    const productos = document.querySelectorAll(".producto");
    const filtros = document.querySelectorAll(".filtro");

    productos.forEach(producto => {

        if (
            categoria === "todos" ||
            producto.dataset.categoria === categoria
        ) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

    filtros.forEach(filtro => {
        filtro.classList.remove("activo");
    });

    const botonSeleccionado = boton ||
        document.querySelector(`.filtro[onclick="filtrar('${categoria}', this)"]`);

    if (botonSeleccionado) {
        botonSeleccionado.classList.add("activo");
    }

}

// BOTÓN DE LA BOLSA
document.getElementById("carrito").addEventListener("click", () => {

    if (cantidadProductos === 0) {

        mostrarMensaje("Tu bolsa está vacía.");

    } else {

        mostrarMensaje("Tienes " + cantidadProductos + " producto(s) en tu bolsa.");

    }

});

// MENÚ RESPONSIVE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("abierto");

    menuBtn.textContent =
        menu.classList.contains("abierto") ? "×" : "☰";

});

// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
document.querySelectorAll("#menu a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("abierto");
        menuBtn.textContent = "☰";

    });

});

// BOTÓN FLOTANTE DE INFORMACIÓN
const abrirInfo = document.getElementById("abrirInfo");
const cerrarInfo = document.getElementById("cerrarInfo");
const modal = document.getElementById("modal");

abrirInfo.addEventListener("click", () => {

    modal.classList.add("mostrar");

});

cerrarInfo.addEventListener("click", () => {

    modal.classList.remove("mostrar");

});

// CERRAR VENTANA AL HACER CLIC FUERA
modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("mostrar");

    }

});

// CERRAR VENTANA CON ESCAPE
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        modal.classList.remove("mostrar");

    }

});
