function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                const usuario = {
                    id: id,
                    nombre: 'Sebas',
                    apellido: 'Acero',
                };
                resolve(usuario);
            } else {
                reject(new Error(`Usuario con id ${id} no encontrado`));
            }
        }, 2000);
    })
}


function obtenerPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuarioId === 1) {
                const ListaPedidos = [
                    {id: 101, usuarioId:1, total:100},
                    {id: 102, usuarioId:1, total:250}
                ]               
                resolve(ListaPedidos);
            } else {
                reject(new Error(`No hay pedidos para el usuario ${usuarioId}`));
            }
        }, 2000);
    })
}


function obtenerDetalles(pedidosId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(pedidosId === 101){
                const detalles = {
                    pedidosId: 101,
                    productoId: "Pc-01",
                    cantidad: 1,
                    descripcion: "pc gamina de alta gama"
                }
                resolve(detalles)
            } else {
                reject(new Error(`No hay detalles para el pedido ${pedidosId}`));
            }

        }, 2000);
    })
}

// ENCADENAMIENTO

obtenerUsuario(1)
    .then((usuario) => {
        console.log("Usuario:", usuario.nombre);
        return obtenerPedidos(usuario.id);
    })
    .then((pedidos) => {
        console.log("Pedidos", pedidos.length);
        return obtenerDetalles(pedidos[0].id);
    })
    .then((detalles) => {
        console.log("Producto: ", detalles.productoId)
    })
    .catch((error) => {
        console.error("El programa falló", error.message);
    })
    .finally(() => {
        console.log("Proceso finalizado");
    })
