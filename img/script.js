const contenedor = document.querySelector(".contenedor");
const btnDireccion = document.getElementById("Direction");
const btnJustify = document.getElementById("Justify");
const btnAling = document.getElementById("Align");

const direcciones = ["row", "row-reverse", "column","column-reverse"];

const justificaciones = ["flex-start", "flex-end", "center", "space-between", "space-evenly"];

const alineaciones = ["center", "stretch", "flex-start", "flex-end", "baseline"];

function getNextvalue(lista, actual){

    for(let i = 0; i<lista.length; i++){

        if(lista[i] == actual){

            if(i<lista.length -1){
            return lista[i+1];
            } else {
                return lista[0];
            }
        }
    }
}

btnDireccion.addEventListener("click", function(){

    const actual = contenedor.style.flexDirection || "row";
    const siguiente = getNextvalue(direcciones,actual);

    contenedor.style.flexDirection = siguiente;
    btnDireccion.textContent = `Direccion: ${siguiente}`;

});

btnJustify.addEventListener("click", function(){

    const actual = contenedor.style.justifyContent || "flex-start";
    const siguiente = getNextvalue(justificaciones, actual);

    contenedor.style.justifyContent = siguiente;
    btnJustify.textContent = `Justify: ${siguiente}`;
});

btnAling.addEventListener("click", function(){

    const actual = contenedor.style.alignItems || "center";
    const siguiente = getNextvalue(alineaciones, actual);

    contenedor.style.alignItems = siguiente;
    btnAling.textContent = `Align: ${siguiente}`;
});

