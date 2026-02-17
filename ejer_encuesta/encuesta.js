let totalVotos = 0;

const imagenesDeportes = {
    "Fútbol": "futbol.jpg",
    "Baloncesto": "baloncesto.jpg",
    "Tenis": "tenis.jpg",
    "Natación": "natacion.jpg",
    "Ciclismo": "ciclismo.jpg"
};

fetch("encuesta.xml")
    .then(res => res.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        const opciones = xml.getElementsByTagName("opcion");
        const contenedor = document.getElementById("contenedor");

        for (let opcion of opciones) {
            const div = document.createElement("div");
            div.classList.add("encuesta");
            div.dataset.votos = "0";

            const nombreDeporte = opcion.textContent;
            const imagen = imagenesDeportes[nombreDeporte];

            div.innerHTML = `
                <img src="${imagen}" alt="${nombreDeporte}" class="encuesta-imagen">
                <h3>${nombreDeporte}</h3>
                <p>Votos: <span class="votos">0</span></p>
                <button>Votar</button>
            `;

            contenedor.appendChild(div);
        }

    });


document.getElementById("cerrar").addEventListener("click", () => {

    // Bloquear la encuesta
    document.querySelectorAll(".encuesta").forEach(e => {
        e.classList.add("encuesta-cerrada");
    });

    let max = 0;
    let ganadora = null;

    const opciones = document.querySelectorAll(".encuesta");

    opciones.forEach(opcion => {
        const votos = Number(opcion.dataset.votos);

        if (votos > max) {
            max = votos;
            ganadora = opcion;
        }
    });

    let mensaje = "No hay votos aún.";

    if (ganadora && max > 0) {
        const nombre = ganadora.querySelector("h3").innerText;
        mensaje = `🏆 El deporte ganador es ${nombre}`;
    }

    document.getElementById("modal-texto").innerText = mensaje;
    document.getElementById("modal").style.display = "block";
});


document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("reiniciar").addEventListener("click", () => {

   
    totalVotos = 0;
    document.getElementById("total").innerText = "0";
    document.getElementById("ganador").innerText = "Ninguno";


    document.querySelectorAll(".encuesta").forEach(e => {
        e.dataset.votos = "0";
        e.dataset.ganador = "false";
        e.querySelector(".votos").innerText = "0";
        e.classList.remove("encuesta-cerrada");
    });

   
    document.getElementById("modal").style.display = "none";
});


document.getElementById("contenedor").addEventListener("click", function (evento) {

    if (evento.target.tagName !== "BUTTON") return;

    const elemento = evento.target.parentElement;

    let contador = Number(elemento.dataset.votos);
    contador++;

    elemento.dataset.votos = contador;

    const texto = elemento.querySelector(".votos");
    texto.innerText = `${contador}`;

    totalVotos++;
    document.getElementById("total").innerText = totalVotos;

    let max = 0;
    let ganadora = null;

    const candidatos = document.querySelectorAll(".encuesta");

    candidatos.forEach(elemento => {
        const n = Number(elemento.dataset.votos);

        patata.dataset.ganador = "false";

        if (n > max) {
            max = n;
            ganadora = elemento;
        }
    });

    if (ganadora && max > 0) {
        ganadora.dataset.ganador = "true";
        document.getElementById("ganador").innerText =
            ganadora.querySelector("h3").innerText;
    }
});
