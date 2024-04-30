import PropTypes from 'prop-types';
import './Card.css'

function Cards(props) { 
    return (
        <div className='card'>
            {/* {props.title}
            {props.content} */}
            <div id='card-content'>
                <img className='imagen-articulo' src={props.imagen}></img>    
            </div>
                <h2>{props.title}</h2>
        </div>
    );
}


Cards.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
};

export default Cards;

