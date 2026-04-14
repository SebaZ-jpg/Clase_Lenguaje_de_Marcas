function obtenerUsuario(id, callback) {

    console.log(`Obteniendo usuario ${id}...`);

    setTimeout(() => {
        const usuario = {
            id: id,
            nombre: 'Sebas',
            apellido: 'Acero',
        };
        callback(usuario);
    },3000);

}

obtenerUsuario(1, (usuario) => {
    console.log('usuario obtenido:', usuario)
})

console.log("Esperando usuario...")