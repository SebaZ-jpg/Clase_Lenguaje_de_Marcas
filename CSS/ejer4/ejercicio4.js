const btnFiltrar = document.getElementById("filtrar");
const btnFav = document.getElementById("favoritos");
const select = document.getElementById("categoria");
const contenedorProducto = document.getElementById("productos");
const contador = document.getElementById("contador");

let totalFavoritos = 0;
let mostrarFavs = false;

fetch("ejercicio4.xml")
    .then((response) => response.text())
    .then((data) =>{

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");
        const productos = xml.getElementsByTagName("producto");

        for(let producto of productos){
            const nombre = producto.getElementsByTagName("nombre")[0].textContent;
            const categoria = producto.getElementsByTagName("categoria")[0].textContent;

            contenedorProducto.innerHTML +=`

            <div data-product
                data-category="${categoria}"
                data-fav="false">

                    <p>${nombre}</p>
                    <button class="fav">Añadir a favoritos</button>

                    </div>
                    `;
        }
        favoritos()
    });

function favoritos(){

    const favoritos = document.querySelectorAll(".fav");

    favoritos.forEach((boton) => {

        boton.addEventListener("click", marcarFavorito)
    });
}

function marcarFavorito(evento){
    const producto = evento.target.parentElement;

    if(producto.dataset.fav === "true"){
        producto.dataset.fav = "false";
        totalFavoritos--;
        evento.target.textcontent = "Añadir favoritos";

    } else {
        producto.dataset.fav = "true";
        totalFavoritos++;
        evento.target.textContent = "Quitar de favoritos"
    }

    actualizarContador();
}

function actualizarContador(){
    contador.innerText=`Favoritos: ${totalFavoritos}`
}

function filtrarProductos(){
    const categoria = select.value;
    const productos = document.querySelectorAll("div[data-product]");

    productos.forEach((producto) => {

        if(categoria === "Todos" || producto.dataset.category === categoria){
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });
}

function verFavoritos(){
    const productos = document.querySelectorAll("div[data-product]");

    mostrarFavs = !mostrarFavs;

    productos.forEach((producto) => {

        if(mostrarFavs){
            if(producto.dataset.fav === "true"){
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        } else {
            producto.style.display = "block";
        }
    });

    if(mostrarFavs){
        btnFav.textContent = "Ver todos";
    } else {
        btnFav = "Ver favoritos";
    }
}

btnFiltrar.addEventListener("click", filtrarProductos);
btnFav.addEventListener("click", verFavoritos);