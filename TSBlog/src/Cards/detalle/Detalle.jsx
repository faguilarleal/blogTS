import PropTypes from 'prop-types';
import './Detalle.css'
import React from 'react'
import Loading from '../../Loading/Loading.jsx'


function Detalle(props) { 
    const [listadoArticulos, setListado] = React.useState([])

    const [loading, setLoading] = React.useState(true); // Estado para indicar si se está cargando

    async function llamarAPI() {
        try {
            let artics = await fetch('http://127.0.0.1:3000/blogs/${props.id}')
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
        <div id='detalle'>
            {/* {props.title}
            {props.content} */}
            {/* <div id='detalle-content'>
                <img className='imagen-articulo' src={props.imagen}></img>    
            </div>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <p>{props.author}</p> */}
            <img src='https://people.com/thmb/YJOM6cLX1KKtVU3hZdKb4TP7MVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(859x435:861x437)/taylor-swift-saddle-bag-tout-2000-d46308993a2e406ca2c4e68f3e6b71f3.jpg' id='imagen-articulo'></img>
            <h1>Taylor Swift</h1>
            <p>Texto</p>
            <h3 id='autor'>Autor</h3>
        </div>
    );
}


Detalle.propTypes = {
    id: PropTypes.number.isRequired
};

export default Detalle;

