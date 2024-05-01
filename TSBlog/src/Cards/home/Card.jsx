import PropTypes from 'prop-types';
import './Card.css';

function Cards(props) { 

    const handleClick = () => {
        alert('Has hecho click en ' + props.id);
        props.setRuta("home")
            //cambiar la ruta a /home
            window.history.pushState({}, props.ruta, "/home")
            // alert("holaaa")
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
