function saludar(nombre, callback) {
    console.log("Bienvenido");
    
    setTimeout(() => {
        callback(`Hola, ${nombre}!`)
    },4000)
}

saludar("Sebas", (mensaje) => {
    console.log(mensaje);
})