// PETICION PARA QUE ME DEVUELVA LOS PRODUCTOS DE UN USUARIO pasandole el id

async function obtenerPubliPorUsuario(userId) {
    try {
        const params = new URLSearchParams({id: userId});
        const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const publicaciones = await response.json();
        console.log(publicaciones);

        return publicaciones;

    } catch(error) {
        console.error('Error: ', error);
        return null;
    }

}
    
//obtenerPubliPorUsuario(1);
//peticion PUT

async function reemplazar(id, post) {
    const params = new URLSearchParams({id});

    const body = {
        methodÇ: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
    }

    const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

    const response = await fetch(url, body);
    if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const resultado = await response.json();
    console.log("Producto reemplazado: ", resultado);
    return resultado;

}

const post = {
    tittle: 'Manolo',
    body: 'sgfsgfhldhfg',
    id: 1,
}

reemplazar(1, post);