import PropTypes from 'prop-types';
import './CardA.css';
import { useContext } from 'react';
import { idContext, rutaContext } from '../App.jsx';

function CardAdmin(props) { 


    const {idActual,  setIdActual } = useContext(idContext)
    const { ruta, setRuta}   = useContext(rutaContext)

   

    const editArticle = () =>{
        setIdActual(props.id)
        console.log(idActual)
        console.log('ESTEeeeee ES EL ID '+props.id+idActual)

        setRuta("/editar")
        window.history.pushState({}, ruta, "/editar")
    }

    
    async function deleteArticleAPI(id) {
        const response = await fetch('http://127.0.0.1:3000/blogs/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)

    }

    const deleteArticle = () =>{
        deleteArticleAPI(props.id)
        alert('Articulo eliminado '+props.id)
        window.location.reload();
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
    setRuta: PropTypes.func.isRequired, // Cambiado de `object` a `func`
    ruta: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default CardAdmin;
