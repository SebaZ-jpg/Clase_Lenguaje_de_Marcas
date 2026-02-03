let encuestaCerrada = false;

const contenedor = document.getElementById("contenedorOpciones");
const totalSpan = document.getElementById("total");
const ganadorSpan = document.getElementById("ganador");

const btnCerrar = document.getElementById("btnCerrar");
const btnReiniciar = document.getElementById("btnReiniciar");

const modal = document.getElementById("modal");
const modalTexto = document.getElementById("modalTexto");
const btnCerrarModal = document.getElementById("btnCerrarModal");

// =======================
// Cargar XML
// =======================
async function cargarXML() {
  try {
    const res = await fetch("practica.xml");
    const texto = await res.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(texto, "text/xml");

    const opciones = xmlDoc.getElementsByTagName("opcion");

    contenedor.innerHTML = "";
    encuestaCerrada = false;

    // Reactivar por si estaba cerrada
    document.querySelector(".app").classList.remove("cerrada");

    for (let opcion of opciones) {
      const nombre = opcion.textContent.trim();
      crearElementoOpcion(nombre);
    }

    // Actualizar total y ganador al inicio
    actualizarInfoDataset();
  } catch (error) {
    contenedor.innerHTML = "<p>Error cargando el XML</p>";
    console.error(error);
  }
}

// =======================
// Crear opción en pantalla
// =======================
function crearElementoOpcion(nombre) {
  const div = document.createElement("div");
  div.className = "opcion";

  // Guardamos datos en dataset
  div.dataset.nombre = nombre;
  div.dataset.votos = "0";

  div.innerHTML = `
    <span class="nombre">${nombre}</span>
    <button class="btn-votar">Votar</button>
    <span class="contador">0</span>
  `;

  // Listener del botón votar (PISTA)
  const boton = div.querySelector(".btn-votar");
  boton.addEventListener("click", function (evento) {
    if (encuestaCerrada) return;

    const elemento = evento.target.parentElement; // div.opcion
    let contador = Number(elemento.dataset.votos);

    contador++;
    elemento.dataset.votos = contador;

    // Actualiza texto contador individual
    const textoContador = elemento.querySelector(".contador");
    textoContador.innerText = contador;

    // Actualiza total + ganador
    actualizarInfoDataset();
  });

  contenedor.appendChild(div);
}

// =======================
// Total + ganador (leyendo dataset)
// =======================
function actualizarInfoDataset() {
  const opciones = document.querySelectorAll(".opcion");

  let total = 0;
  let max = -1;
  let ganador = "---";

  opciones.forEach((op) => {
    const nombre = op.dataset.nombre;
    const votos = Number(op.dataset.votos);

    total += votos;

    if (votos > max) {
      max = votos;
      ganador = nombre;
    }
  });

  // Si nadie ha votado
  if (max === 0) ganador = "---";

  totalSpan.textContent = total;
  ganadorSpan.textContent = ganador;
}

// =======================
// Cerrar encuesta
// =======================
btnCerrar.addEventListener("click", () => {
  encuestaCerrada = true;
  

  // Bloquear toda la app
  document.querySelector(".app").classList.add("cerrada");

  // Mostrar modal con ganador
  const ganador = ganadorSpan.textContent;
  modalTexto.textContent = `Ganador: ${ganador}`;
  modal.classList.add("show");
});

// =======================
// Cerrar modal
// =======================
btnCerrarModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// =======================
// Reiniciar encuesta
// =======================
btnReiniciar.addEventListener("click", () => {
  encuestaCerrada = false;

  // Desbloquear app
  document.querySelector(".app").classList.remove("cerrada");

  // Poner todos los votos a 0
  document.querySelectorAll(".opcion").forEach((op) => {
    op.dataset.votos = "0";
    op.querySelector(".contador").innerText = "0";
  });

  actualizarInfoDataset();
});

// =======================
// Cargar al iniciar
// =======================
cargarXML();
