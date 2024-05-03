import React from 'react';
import Cards from './Card.jsx';
import Loading from './Loading.jsx';
import './Articulos.css';
import PropTypes from 'prop-types';
import { LogContext , rutaContext} from '../App.jsx';


// obtener articulos de la API y mostrarlos como lista con cards 

function Articulos() { 
    const {logi, setLog} = React.useContext(LogContext)
    const {ruta, setRuta} = React.useContext(rutaContext)

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

    function handleClick() {
        window.history.pushState({}, ruta, "/publicar")
        setRuta("/publicar")
    }
    

    return (    
        <div >
        
        {logi ? <><h1> Bienvenido a la pagina de Articulos </h1>
        <button onClick={handleClick}> Publicar </button> 
        <button onClick={() => {window.history.pushState({}, ruta, "/admin"); setRuta('/admin')} }> Admin </button>
        <button onClick={() => { setLog(false)} }> Cerrar iniciar </button>
        </>
        : <h1> Bienvenido a la pagina de Articulos, por favor inicia sesion </h1>}
        
            <div id='articulos'>
            {listadoArticulos.map(articulo => {
                    return <div key={articulo.title} className='cards'>
                    <Cards id={articulo.id} title = {articulo.title} content={articulo.content} imagen={articulo.imagen} />
                </div>
                }  
                )}  
            </div>
    </div>
    )
}


export default Articulos; 

Articulos.propTypes = {
    setRuta: PropTypes.object.isRequired,
    ruta: PropTypes.string.isRequired
}
