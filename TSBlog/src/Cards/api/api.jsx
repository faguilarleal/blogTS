
async function llamarAPI() {
    try {
        let artics = await fetch('http://127.0.0.1:3000/blogs')
        let articulos = await artics.json()
        console.log(articulos[0])
        return articulos, false
        
    }
    catch (e) {
        console.error("Error al cargar datos de la API",e)
        return null, true
    }
       
}

export default llamarAPI;