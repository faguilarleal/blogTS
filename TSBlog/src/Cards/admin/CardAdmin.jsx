import PropTypes from 'prop-types';
import './CardA.css';
import { useContext, useEffect, useState } from 'react';
import { idContext, rutaContext } from '../App.jsx';
import { useApi } from '../hooks/useApi.jsx';

function CardAdmin(props) { 


    const {idActual,  setIdActual } = useContext(idContext)
    const { ruta, setRuta}   = useContext(rutaContext)
    const [eliminar, setElimianr ]  = useState(false)


   

    const editArticle = () =>{
        setIdActual(props.id)
        console.log(idActual)
        console.log('ESTEeeeee ES EL ID '+props.id+idActual)

        setRuta("/editar")
        window.history.pushState({}, ruta, "/editar")
    }

    useEffect(() => {
        if(eliminar){
            setElimianr(false)
        }
     
    }, [eliminar])

    useApi('http://uwu-guate.site:3611/blogs/'+props.id, 'DELETE', eliminar, {id: props.id})


    const deleteArticle = () =>{
        setElimianr(true)
        alert('Articulo eliminado '+props.id)
    }

    

   
    return (
        <div className='card-admin'>
            <div id='card-contentAdmin' >
                <img className='imagen-admin' src={props.imagen} alt={props.title} />   
            </div>
            <div className='info-admin'>
                <h2 className='text-admin'>{props.title}</h2>
                <p className='text-admin'>{props.author}</p>
            </div>
            <div className='botones-admin'>
                <button className='btn' id='btne' onClick={editArticle}>Editar</button>
                <button className='btn' id='btnel' onClick={deleteArticle}>Eliminar</button>
            </div>
        </div>
    );
}

CardAdmin.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    imagen: PropTypes.string,
    id: PropTypes.number.isRequired
};

export default CardAdmin;
