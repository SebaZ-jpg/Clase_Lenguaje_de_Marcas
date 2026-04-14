function obtenerClima(ciudad) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (ciudad === 'Madrid') {
            resolve({
                ciudad: 'Madrid',
                temperatura: '18°C',
                estado: 'Soleado'
            })
            } else {
                reject(new Error(`Ciudad ${ciudad} no encontrada`))
            }
        },2000)
    })
}

obtenerClima('Madrid')
    .then((datos) => {
        console.log(`En ${datos.ciudad} hace ${datos.temperatura} y está ${datos.estado}`);
        })
        .catch((error) => {
            console.error('Error:', error.message);
        })
        .finally(() => {
            console.log('Consulta de clima finalizada');
        })