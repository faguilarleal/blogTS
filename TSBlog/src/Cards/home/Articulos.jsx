import React from 'react';
import Cards from './Card.jsx';
import Loading from './Loading.jsx';
import './Articulos.css';


// obtener articulos de la API y mostrarlos como lista con cards 

function Articulos() { 
    const [listadoArticulos, setListado] = React.useState([])

    const [loading, setLoading] = React.useState(true); // Estado para indicar si se está cargando

    async function llamarAPI() {
        try {
            let artics = await fetch('http://127.0.0.1:3000/blogs')
            let articulos = await artics.json()
            console.log(articulos[0])
            setListado(articulos) // Actualiza el estado de listadoArticulos con los datos obtenidos
            setLoading(false) // cambia el estado de loading a false
        }
        catch (e) {
            console.error("Error al cargar datos de la API",e)
            setLoading(false) // cambia el estado de loading a false
        }
           
    }


    React.useEffect(() => {
        llamarAPI()
    }, [])

    // Condición para mostrar un estado vacío cuando no hay publicaciones
    if (loading) {
        return <Loading />;
    } else if (listadoArticulos.length === 0) {
        return <div><img src='https://media.tenor.com/TlEiCCBTkNUAAAAi/alice-waiting.gif'></img>No hay publicaciones</div>; // Muestra un mensaje de estado vacío
    }


    return (    
        <div >
        <h1>Listado de Artículos</h1>
            <div id='articulos'>
            {listadoArticulos.map(articulo => {
                    return <div key={articulo.title} className='cards'>
                    <Cards title = {articulo.title} content={articulo.content} imagen={articulo.imagen}/>
                </div>
                }  
                )}  
            </div>
    </div>
    )
}


export default Articulos; 