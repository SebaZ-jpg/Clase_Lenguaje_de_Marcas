async function crearUusario(){

    try{
        const nuevoUsuario = {
            name: "Jorge Perez",
            email: "jorge@gmail.com",
            username: "jgarcia",
        }

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/users", params);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const usuarioCreado = await response.json();
        console.log("Usuario creado: ", usuarioCreado);
        console.log("Nombre: ", usuarioCreado.name);

        return usuarioCreado;

    } catch(error) {
        console.error("Error: ", error);
        return null;
    }
}

crearUusario();