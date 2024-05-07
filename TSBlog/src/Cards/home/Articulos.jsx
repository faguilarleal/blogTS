import React, { useEffect } from 'react';
import Cards from './Card.jsx';
import Loading from '../Loading/Loading.jsx';
import './Articulos.css';
import { LogContext , rutaContext} from '../App.jsx';
import { useApi } from '../hooks/useApi.jsx';


// obtener articulos de la API y mostrarlos como lista con cards 

function Articulos() { 
    const {logi} = React.useContext(LogContext)
    const {ruta, setRuta} = React.useContext(rutaContext)
    const [loading, setLoading] = React.useState(true)

    const {info } = useApi('http://uwu-guate.site:3611/blogs', 'GET', true)
    
    console.log('loadinggggg ',loading)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [info])

    // Condición para mostrar un estado vacío cuando no hay publicaciones
    if (loading) {
        return <Loading />;
    } else if (info.length === 0) {
        return <div id='no-publi'>
            <img src='https://media.tenor.com/TlEiCCBTkNUAAAAi/alice-waiting.gif'></img>
            <h1>Lo sentimos, no hay publicaciones disponibles</h1>
            </div>; // Muestra un mensaje de estado vacío
    } else{
        return (    
            <div >
            
            {logi ? <><h1> Bienvenido a la pagina de Articulos </h1>
            <button onClick={() => {window.history.pushState({}, ruta, "/admin"); setRuta('/admin')} }> Regresar </button>
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

}


export default Articulos; 


