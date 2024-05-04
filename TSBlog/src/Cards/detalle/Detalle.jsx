import PropTypes from 'prop-types';
import './Detalle.css'
import { idContext } from '../App';
import { useContext} from 'react';
import { useApi } from '../hooks/useApi';

function Detalle() { 

    const {idActual} = useContext(idContext)
    const {info} = useApi('http://127.0.0.1:3000/blogs/'+idActual, 'GET')


    return (
        info === null ? <div>Cargando...</div> :
        <div id='detalle'>
            <div id='div-imagen'>
                <img src={info.imagen} id='imagen-articulo'></img>
            </div>
            <div id='div-content'>
                <h1>{info.title}</h1>
                <p>{info.content}</p>
                <h3 id='autor'>{info.author}</h3>
            </div>
           
      
        </div>
    );
       
}


Detalle.propTypes = {
    id: PropTypes.number.isRequired
};

export default Detalle;

