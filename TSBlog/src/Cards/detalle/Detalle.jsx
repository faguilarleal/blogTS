import PropTypes from 'prop-types';
import './Detalle.css'


function Detalle() { 


    return (
        <div id='detalle'>
            
            <img src='https://people.com/thmb/YJOM6cLX1KKtVU3hZdKb4TP7MVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(859x435:861x437)/taylor-swift-saddle-bag-tout-2000-d46308993a2e406ca2c4e68f3e6b71f3.jpg' id='imagen-articulo'></img>
            <h1>Taylor Swift</h1>
            <p>Texto</p>
            <h3 id='autor'>Autor</h3>
        </div>
    );
}


Detalle.propTypes = {
    id: PropTypes.number.isRequired
};

export default Detalle;

