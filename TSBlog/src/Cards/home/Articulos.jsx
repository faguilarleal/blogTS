import React from 'react';
import Cards from './Card.jsx';
import Loading from './Loading.jsx';
import './Articulos.css';
import PropTypes from 'prop-types';
import { LogContext , rutaContext} from '../App.jsx';
import { useApi } from '../hooks/useApi.jsx';


// obtener articulos de la API y mostrarlos como lista con cards 

function Articulos() { 
    const {logi, setLog} = React.useContext(LogContext)
    const {ruta, setRuta} = React.useContext(rutaContext)

    const {info, loading } = useApi('http://127.0.0.1:3000/blogs', 'GET', true)
    
    // Condición para mostrar un estado vacío cuando no hay publicaciones
    if (loading) {
        return <Loading />;
    } else if (info.length === 0) {
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
        <button onClick={() => { setLog(false); localStorage.removeItem('login')}  }> Cerrar sesion </button>
        </>
        : <h1> Bienvenido a la pagina de Articulos, por favor inicia sesion </h1>}
        
            <div id='articulos'>
            {info.map(articulo => {
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
