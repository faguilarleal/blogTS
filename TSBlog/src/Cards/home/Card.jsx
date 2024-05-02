import PropTypes from 'prop-types';
import './Card.css';
import { idContext } from '../App.jsx';
import { useContext } from 'react';

function Cards(props) { 

    const {setIdActual} = useContext(idContext)

    const handleClick = () => {
        setIdActual(props.id)
        console.log('ESTE ES EL ID '+props.id)
        window.history.pushState({}, props.ruta, "/detalle")
        props.setRuta("/detalle")
    };

    return (
        <div className='card'>
            <div id='card-content'  onClick={handleClick}>
                <img className='imagen-articulo' src={props.imagen} alt={props.title} />   
            </div>
            <h2>{props.title}</h2>
        </div>
    );
}

Cards.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    imagen: PropTypes.string,
    setRuta: PropTypes.func.isRequired, // Cambiado de `object` a `func`
    ruta: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Cards;
