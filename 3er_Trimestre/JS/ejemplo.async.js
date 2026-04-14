function obtenerUsuarios(){

    return new Promise((resolve) => {

        setTimeout(() => {
            const usuarios = [
                {id: 1, nombre: "Jorge"},
                {id: 2, nombre: "Ana"},
                {id: 3, nombre: "Javier"},
            ]

            resolve(usuarios)
        }, 2000)
    })
}

function obtenerProductos(){

    return new Promise((resolve) => {

        setTimeout(() => {
            const listaProductos = [
                {id: 101, nombre: "PC", precio:"999"},
                {id: 102, nombre: "PC", precio:"999"},
                {id: 103, nombre: "PC", precio:"999"}
            ]
            resolve(listaProductos);
        }, 2000)
    })
}

function obtenerPedidos(){

    return new Promise((resolve) => {

        setTimeout(() => {

            const listaPedidos=[
                {id: 201, usuarioId: 1, productoId: 101},
                {id: 202, usuarioId: 2, productoId: 103},
            ]
            resolve(listaPedidos)

        }, 2000)
    })

}

async function cargarDatos() {
    
    try{

        console.log("Iniciando carga de datos");

        const usuarios = await obtenerUsuarios();
        console.log("Usuarios:", usuarios)

        const pedidos = await obtenerPedidos();
        console.log("Pedidos:", pedidos)

        const productos = await obtenerProductos();
        console.log("Productos:", productos);

        console.log("Todo cargado correctamente");

    }catch (error){
        console.error("El programa falló")
    }
}

async function cargarDatosAll(){

    try{

        const [usuarios, productos, pedidos] = await Promise.all([
            obtenerUsuarios(),
            obtenerPedidos(),
            obtenerProductos(),
        ]);
        console.log("Usuarios:", usuarios)
        console.log("Pedidos:", pedidos)
        console.log("Productos:", productos);

        console.log("Todo cargado correctamente");
    }catch(error){
        console.error("El programa falló")
    }

}

cargarDatosAll()
//cargarDatos()