function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = [
                { id: 1, nombre: 'Sebas' },
                { id: 2, nombre: 'Maria' },
                { id: 3, nombre: 'Juan' },
            ]
            resolve(usuario);
        })
    })
}

function obtenerProductos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const listaProductos = [
                { id: 101, nombre: 'Laptop', precio:"500" },
                { id: 102, nombre: 'Smartphone', precio:"300" },
                { id: 103, nombre: 'Tablet', precio:"200" },
            ]
            resolve(listaProductos);
        }, 2000);
    })
}

console.log("Iniciando carga de datos...")
Promise.all([obtenerUsuario(), obtenerProductos(), obtenerPedidos()])
    .then(([usuarios, productos, pedidos]) => {
        console.log("Se han cargado todos los datos:");
        console.log("Usuarios:", usuarios.length);
        console.log("Productos:", productos.length);
        console.log("Pedidos:", pedidos.length);
    })
    .catch((error) => {
        console.log("Algo falló", error.message);

    })
    .finally(() => {
        console.log("Ejecución finalizada");
    })