import PropTypes from 'prop-types';
import { idContext } from '../App.jsx';
import { useContext } from 'react';
import './CardA.css';

function CardAdmin(props) { 

    const {idActual,setIdActual} = useContext(idContext)

    async function deleteArticle(id) {
        const response = await fetch('http://127.0.0.1:3000/blogs/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)

    }

    const handleClick = () => {
        setIdActual(props.id)
        console.log('ESTE ES EL ID '+props.id)
        window.history.pushState({}, props.ruta, "/detalle")
        props.setRuta("/detalle")
    };

    return (
        <div className='card-admin'>
            <div id='card-contentAdmin'  onClick={handleClick}>
                <img className='imagen-admin' src={props.imagen} alt={props.title} />   
            </div>
            <div className='info-admin'>
                <h2 className='text-admin'>{props.title}</h2>
                <p className='text-admin'>{props.author}</p>
            </div>
            <div className='botones-admin'>
                <button className='btn' id='btne'>Editar</button>
                <button className='btn' id='btnel'>Eliminar</button>
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
