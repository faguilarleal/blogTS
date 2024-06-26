import './Detalle.css'
import { idContext } from '../App';
import { useContext } from 'react';
import { useApi } from '../hooks/useApi';

function Detalle() { 

    const {idActual} = useContext(idContext)
    const {info} = useApi('http://uwu-guate.site:3611/blogs/'+idActual, 'GET', true)


    return (
        info === null ? <div>Cargando...</div> :
        <div id='detalle'>
            <div>
            <div id='div-imagen'>
                <img src={info[0].imagen} id='imagen-articulo'></img>
            </div>
            <div id='div-content'>
                <h1>{info[0].title}</h1>
                <p>{info[0].content}</p>
                <h3 id='autor'>{info[0].author}</h3>
            </div>
            </div>
            
           
            
        </div>
    );
       
}


export default Detalle;

