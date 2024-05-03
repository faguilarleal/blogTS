import PropTypes from 'prop-types';
import './Card.css';
import { idContext, rutaContext } from '../App.jsx';
import { useContext } from 'react';



function Cards(props) { 

    const {idActual,setIdActual} = useContext(idContext)
    const {setRuta, ruta}   = useContext(rutaContext)

    const handleClick = () => {
        setIdActual(props.id)
        console.log('ESTE ES EL ID '+props.id+idActual)
        window.history.pushState({}, ruta, "/detalle")
        setRuta("/detalle")
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
    id: PropTypes.number.isRequired
};

export default Cards;
