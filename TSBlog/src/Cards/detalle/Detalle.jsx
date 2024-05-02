import PropTypes from 'prop-types';
import './Detalle.css'
import { idContext, LogContext } from '../App';
import { useContext, useEffect, useState } from 'react';

function Detalle() { 

    const {idActual} = useContext(idContext)
    const {logi} = useContext(LogContext)

    const [info, setInfo] = useState(null)

    async function getArticulo(){
        try{
            let response = await fetch('http://127.0.0.1:3000/blogs/'+idActual)
            let data = await response.json()
            console.log('la info',idActual,data[0])
            setInfo(data[0])

        }catch(e){
            console.error("Error al cargar datos de la API",e)
        }
    
    }

    useEffect(() => {
        getArticulo()
    }, [])

    function handleClick(){

    }

    return (
        info === null ? <div>Cargando...</div> :
        <div id='detalle'>
            <img src={info.imagen} id='imagen-articulo'></img>
            <h1>{info.title}</h1>
            <p>{info.content}</p>
            <h3 id='autor'>{info.author}</h3>

            {logi ? <> <div id='admin-buttons'><button onClick={handleClick}> Eliminar </button> <br></br>
            <button onClick={handleClick}> Editar </button></div> </>: <></>}
      
        </div>
    );
       
}


Detalle.propTypes = {
    id: PropTypes.number.isRequired
};

export default Detalle;

